<template>
  <base-modal>
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
      <base-card :card-color="'#fff'" class="pa-4">
        <div class="title-price-container" @click="openModal(item)">
          <h4>{{ inCart[0].title }}</h4>
          <p>${{ inCart[0].price }}</p>
        </div>
        <div class="desc-image-container">
          <div class="button-container">
            <button class="subtract-cart-btn" @click="subtractOrder">
              <v-icon class="fa-solid fa-minus"></v-icon>
            </button>
            <input v-model="checkedOutAmount" />
            <button class="add-cart-btn" @click="addOrder">
              <v-icon class="fa-solid fa-cart-plus"></v-icon>
            </button>
          </div>
          <v-img
            class="item-img"
            :src="inCart[0].image"
            max-width="100"
            min-height="75"
          ></v-img>
        </div>
      </base-card>
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
  data() {
    return {
      checkedOutAmount: 0
    }
  },
  computed: {
    inCart() {
      return this.$store.state.foodInCart;
    },
  },
  methods: {
    addOrder() {},
    subtractOrder() {},
    closeModel() {
      this.$emit('close-checkout')
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
.total-container {
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  margin: -2rem;
  margin-top: 2rem;
  padding: 0 1rem;
  border-bottom-left-radius: .334rem;
  border-bottom-right-radius: .334rem;
}
</style>