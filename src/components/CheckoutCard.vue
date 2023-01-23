<template>
    <div class="content-container">
        <div class="title-price-container">
            <h4>{{ item.title }}</h4>
            <p>${{ item.price.toFixed(2) }}</p>
            <p class="desc-text">{{ item.description }}</p>
        </div>
        <div class="desc-image-container">
            <div class="button-container">
            <button class="subtract-cart-btn" @click="changeOrderAmount(cartAmount-1, item)">
                <v-icon class="fa-solid fa-minus"></v-icon>
            </button>
            <input v-model.number="cartAmount" v-on:mouseleave="inCartAmount()" type="number" />
            <button class="add-cart-btn" @click="changeOrderAmount(cartAmount+1, item)">
                <v-icon class="fa-solid fa-cart-plus"></v-icon>
            </button>
            </div>
            <v-img
            class="item-img"
            :src="item.image"
            max-width="100"
            min-height="75"
            ></v-img>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            required: true
        }
    },
    data() {
        return {
            cartAmount: this.$store.getters.checkoutItems.find(foodItem => foodItem.id === this.item.id).amount
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
        // This is god awful code that needs to be refactored in the future...
        changeOrderAmount(amount) {
            const amountChecked = this.inCartAmount();

            if (amountChecked <= 99 && amountChecked >= 0) {
                this.$store.dispatch('changeCartAmount', { 
                item: this.item, amount: amount < 0 ? 0 
                : amount > 99 ? 99 : amount 
                });

                if (this.inCartAmount() === 0) {
                this.$store.dispatch('removeFromCart', this.item);
                }

            } else if (amountChecked >= 100) {
                this.$store.dispatch('changeCartAmount', { item: this.item, amount: 99 });
            } else if (amountChecked <= -1) {
                this.$store.dispatch('changeCartAmount', { item: this.item, amount: 0 });
            }
        },
        inCartAmount() {
            let curItem = this.$store.getters.checkoutItems.find(foodItem => foodItem.id === this.item.id);
            if (curItem.amount >= 1) {
                this.cartAmount = curItem.amount;
                return this.cartAmount;
            } else {
                return this.cartAmount = 0;
            }
        }
    }
}
</script>

<style scoped>
.desc-text {
  display: none;
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
  align-items: center;
  flex-wrap: wrap;
  margin-right: 1rem;
}

.button-container button {
  padding: 0.442rem 0.654rem;
}
.button-container i {
  font-size: 1.112rem;
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
.title-price-container {
  color: #222;
}
.title-price-container p {
  margin: 0;
}
.desc-image-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  /* margin-right: .882rem;
  margin-bottom: .882rem; */
}
.title-price-container {
  margin-right: 1.112rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.item-container {
  height: 20.552rem;
  overflow-y: auto;
}
@media only screen and (min-width: 700px) {
  .desc-text {
    display: contents;
  }
  .content-container {
    display: flex;
    flex-direction: row;
    min-height: 7rem;
  }
  .title-price-container {
    flex: 1;
  }
  .desc-image-container {
    flex: 1;
  }

  .checkout-container {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    height: 5rem;
    right: 0;
    left: 0;
  }
  .checkout-btn-container {
    position: relative;
    left: 95%;
    bottom: 0;
    top: 25%;
    justify-content: flex-start;
    transform: translateX(-100%)
  }
  .checkout-btn-container button {
    margin-left: 2rem;
  }
  .total-container {
    background-color: transparent;
    /* position: relative; */
    display: block;
    right: auto;
  }
  .total-text {
    font-size: 1.222rem;
    font-weight: 700;
    margin: 0;
  }
}

@media only screen and (min-width: 1300px) {
  .title-price-container {
    flex: 1.5;
  }
}
</style>