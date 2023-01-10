<template>
  <base-modal checkout="checkout">
    <template v-slot:header>
      <header>
        <div class="header-container">
          <h3>Your Items</h3>
          <v-icon
            class="fa-solid fa-xmark"
            color="#FF8A8A"
            fab
            text
            medium
            @click="closeModel"
          ></v-icon>
        </div>
        <p>Checkout Order Details</p>
      </header>
    </template>
    <template>
      <section class="item-container">
        <base-card :card-color="'#fff'" class="pa-4 my-2" v-for="item in inCart" :key="item.id">
          <checkout-card :item="item"></checkout-card>
        </base-card> 
      </section>
    </template>
    <section class="checkout-container">
      <div class="checkout-btn-container">
        <v-btn class="v-btnss" color="#4fb370">Checkout</v-btn>
        <v-btn color="#f29c1c" @click="closeModel">Back</v-btn>
      </div>
      <section class="total-container">
        <p class="total-text">Total: ${{ totalCost }}</p>
        <p>Sub-Total: $0.00</p>
      </section>
    </section>
  </base-modal>
</template>

<script>
import BaseModal from './UI/BaseModal.vue';
import BaseCard from './UI/BaseCard.vue';
import CheckoutCard from './CheckoutCard.vue';
export default {
  components: {
    BaseModal,
    BaseCard,
    CheckoutCard
  },
  computed: {
    inCart() {
      return this.$store.getters.checkoutItems;
    },
    totalCost() {
      const cart = this.$store.getters.checkoutItems;
      if (cart.length) {
          return cart.reduce((acc, cur) => acc + (cur.price * cur.amount), 0).toFixed(2);
      } else {
          return '0.00';
      }
    }
  },
  methods: {
    closeModel() {
      this.$emit('close-checkout')
    },
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
}
.item-card {
  background-color: #fff;
}
.checkout-btn-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 75%;
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translatex(-50%);
}
.checkout-btn-container button {
  width: 6.223rem;
  min-width: 5rem;
  font-weight: bold;
}
.total-container {
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 1rem;
  border-bottom-left-radius: .334rem;
  border-bottom-right-radius: .334rem;
}

@media only screen and (min-width: 700px) {
  .content-container {
    display: flex;
    flex-direction: row;
  }
  .title-price-container {
    flex: 1;
  }
  .desc-image-container {
    flex: 1;
  }
  .item-container {
  height: 30rem;
  overflow-y: auto;
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