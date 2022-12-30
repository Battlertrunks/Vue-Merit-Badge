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
        <v-img
          width="55vw"
          class="mx-auto item-img"
          :src="itemDetails.image"
          alt="food image."
        ></v-img>
        <p>{{ itemDetails.description }}</p>
        <div class="bottom-content">
          <span>${{ itemDetails.price }}</span>
          <div class="button-container">
            <button class="subtract-cart-btn" @click="changeOrderAmount(cartAmount-1)">
              <v-icon class="fa-solid fa-minus"></v-icon>
            </button>
            <input v-model.number="cartAmount" v-on:mouseleave="inCartAmount" type="number" />
            <button class="add-cart-btn" @click="changeOrderAmount(cartAmount+1)">
              <v-icon class="fa-solid fa-cart-plus"></v-icon>
            </button>
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
  font-size: 18px;
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
  padding: 0.442rem 0.654rem;
}
.button-container i {
  font-size: 1.325rem;
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
</style>
