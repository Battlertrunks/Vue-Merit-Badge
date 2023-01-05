<template>
  <transition name="modal-anim">
    <base-modal>
      <template v-slot:header>
        <header class="mb-7 modal-heading">
          <h3>{{ itemDetails.title }}</h3>
          <v-icon
            class="fa-solid fa-xmark"
            color="#FF8A8A"
            fab
            text
            medium
            @click="closeModel"
          ></v-icon>
        </header>
      </template>
      <template>
        <div class="body-container">
          <v-img
            width="55vw"
            max-width="25rem"
            max-height="20rem"
            class="mx-auto item-img"
            :src="itemDetails.image"
            alt="food image."
          ></v-img>
          <div class="info-container">
            <p class="description">{{ itemDetails.description }}</p>
            <div class="bottom-content">
              <span>Price: ${{ itemDetails.price }}</span>
              <div class="button-container">
                <button class="subtract-cart-btn" @click="changeOrderAmount(cartAmount-1)">
                  <v-icon class="fa-solid fa-minus icon"></v-icon>
                  <p class="mobile-view">Subtract</p>
                  <p class="desktop-view">Subtract from Cart</p>
                </button>
                <input v-model.number="cartAmount" v-on:mouseleave="inCartAmount" type="number" />
                <button class="add-cart-btn" @click="changeOrderAmount(cartAmount+1)">
                  <v-icon class="fa-solid fa-cart-plus icon"></v-icon>
                  <p class="mobile-view">Add</p>
                  <p class="desktop-view">Add to Cart</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </base-modal>
  </transition>
</template>

<script>
import BaseModal from './UI/BaseModal.vue';

export default {
  components: {
    BaseModal,
  },
  props: {
    itemDetails: {
      required: true,
    },
  },
  data() {
    return {
      cartAmount: this.existInCart()
    }
  },
  watch: {
    cartAmount(newAmount, oldAmount) {
      if (newAmount !== oldAmount+1 && newAmount !== oldAmount-1 && (newAmount === 0 || newAmount)) {
        this.changeOrderAmount(parseInt(newAmount));
      }
    }
  },
  methods: {
    existInCart() {
      const item = this.$store.getters.checkoutItems.find(foodItem => foodItem.id === this.itemDetails.id);
      if (item) {
        return item.amount;
      } else {
        return 0;
      }
    },
    closeModel() {
      this.$emit('close-modal');
    },
    // This is god awful code that needs to be refactored in the future...
    changeOrderAmount(amount) {
      const amountChecked = this.inCartAmount();
      if (amountChecked <= 99 && amountChecked >= 0) {
        this.$store.dispatch('changeCartAmount', { 
          item: this.itemDetails, amount: amount < 0 ? 0 
          : amount > 99 ? 99 : amount 
        });

        if (this.inCartAmount() === 0) {
          console.log('runs')
          this.$store.dispatch('removeFromCart', this.itemDetails);
        }
        
      } else if (amountChecked >= 100) {
        this.$store.dispatch('changeCartAmount', { item: this.itemDetails, amount: 99 });
      } else if (amountChecked <= -1) {
        this.$store.dispatch('changeCartAmount', { item: this.itemDetails, amount: 0 });
      }
    },
    inCartAmount() {
      let amount = this.existInCart();
      if (amount >= 1) {
        this.cartAmount = amount;
        return this.cartAmount;
      } else {
        return this.cartAmount = 0;
      }
    }
  },
};
</script>

<style scoped>
.modal-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
span {
  font-size: 1rem;
}
.bottom-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.button-container button {
  width: 3.332rem;
  height: 2.662rem;
  padding: .552rem 0;
  font-size: .552rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button-container .icon {
  font-size: 1.125rem;
}
.subtract-cart-btn {
  background-color: #f29c1c;
}
.add-cart-btn {
  background-color: #4fb370;
}
.button-container button:first-child {
  border-top-left-radius: 0.332rem;
  border-bottom-left-radius: 0.332rem;
}
.button-container button:last-child {
  border-top-right-radius: 0.332rem;
  border-bottom-right-radius: 0.332rem;
}
.button-container input {
  padding: 0.442rem 0;
  margin: 0;
  width: 2.25rem;
  text-align: center;
  font-family: 'Gafata', sans-serif;
}
.button-container input:focus {
  outline: none;
}
.button-container button p{
  margin: 0;
  color: #fff;
  font-size: .552rem;
}
.desktop-view {
  display: none;
}

.info-container p {
  margin: 2rem 0;
}


@media only screen and (min-width: 700px) {
  .modal-heading h3 {
    font-size: 1.625rem;
  }
  .body-container {
    height: 40rem;
    display: flex;
    justify-content: space-around;
  }
  .body-container p, .body-container input {
    font-size: 1.125rem;
    margin: 0 2rem;
  }
  .description {
    line-height: 1.772rem;
  }
  .body-container span {
    font-size: 1.3rem;
    margin-right: 3.332rem;
  }
  .info-container {
    background-color: #fff;
    padding: 1rem;
  }
  .description {
    padding-bottom: 1.882rem;
  }
  .bottom-content {
    justify-content: center;
  }
  .bottom-content button {
    padding: 1.552rem 1.1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 8rem;
  }
  .bottom-content input {
    margin: 0 .552rem;
    font-size: 1.3rem;
  }
  .bottom-content button p {
    font-size: 1rem;
    font-weight: 700;
    margin-left: .332rem;
  }

}
@media only screen and (min-width: 1200px) {
  .mobile-view {
    display: none;
  }
  .desktop-view {
    display: block;
  }
  .bottom-content button {
    width: 11.552rem;
  }
  .bottom-content button p {
    margin-left: .552rem;
  }
}
</style>
