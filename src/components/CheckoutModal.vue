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
          <div class="title-price-container" @click="openModal(item)">
            <h4>{{ item.title }}</h4>
            <p>${{ item.price }}</p>
          </div>
          <div class="desc-image-container">
            <div class="button-container">
              <button class="subtract-cart-btn" @click="changeOrderAmount(item.amount-1, item)">
                <v-icon class="fa-solid fa-minus"></v-icon>
              </button>
              <input v-model.number="item.amount" v-on:change="inCartAmount(item)" type="number" />
              <button class="add-cart-btn" @click="changeOrderAmount(item.amount+1, item)">
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
        </base-card>
      </section>
    </template>
    <section class="total-container">
      <p>Total: $0.00</p>
      <p>Sub-Total: $0.00</p>
    </section>
  </base-modal>
</template>

<script>
import BaseModal from './UI/BaseModal.vue';
import BaseCard from './UI/BaseCard.vue';
export default {
  components: {
    BaseModal,
    BaseCard,
  },
  computed: {
    inCart() {
      return this.$store.getters.checkoutItems;
    },
  },
  methods: {
    closeModel() {
      this.$emit('close-checkout')
    },
    // This is god awful code that needs to be refactored in the future...
    changeOrderAmount(amount, item) {
      const amountChecked = this.inCartAmount(item);
      if (amountChecked <= 99 && amountChecked >= 0) {
        console.log(amountChecked, 'wat');
        this.$store.dispatch('changeCartAmount', { 
          item: item, amount: amount < 0 ? 0 
          : amount > 99 ? 99 : amount 
        });
        this.inCartAmount(item);
      } else if (amountChecked >= 100) {
        this.$store.dispatch('changeCartAmount', { item: this.itemDetails, amount: 99 });
      } else if (amountChecked <= -1) {
        this.$store.dispatch('changeCartAmount', { item: this.itemDetails, amount: 0 });
      }
    },
    inCartAmount(item) {
      let amount = this.$store.getters.checkoutItems.find(foodItem => foodItem.id === item.id).amount;
      console.log(amount);
      if (amount >= 1) {
        item.amount = amount;
        return item.amount;
      } else {
        return item.amount = 0;
      }
    }
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
.item-container {
  height: 20rem;
  overflow-y: scroll;
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
</style>