<template>
  <v-app>
    <heading-bar v-on:open-checkout="openCheckout"></heading-bar>
    <v-main>
      <food-list-container></food-list-container>
      <checkout-modal v-if="checkoutVisible" @close-checkout="closeCheckout"></checkout-modal>
    </v-main>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
import HeadingBar from './components/layout/HeadingBar.vue';
import FoodListContainer from './components/FoodListContainer.vue';
import FooterBar from './components/layout/FooterBar.vue';
import CheckoutModal from './components/CheckoutModal.vue';

export default {
  name: 'App',
  components: {
    HeadingBar,
    FoodListContainer,
    FooterBar,
    CheckoutModal,
  },
  data() {
    return {
      checkoutVisible: false,
    };
  },
  methods: {
    openCheckout() {
      this.checkoutVisible = true;
    },
    closeCheckout() {
      this.checkoutVisible = false;
    }
  },
};
</script>

<style>
/* Sets heading typeface */
h1,
h2,
h3,
h4 {
  font-family: 'Karma', serif;
}
/* Sets body typeface */
p,
span,
a {
  font-family: 'Gafata', sans-serif;
  font-size: 14px;
  line-height: 1.112rem;
  padding: 0;
  margin: 0;
  color: #222;
}
.v-icon::after {
  opacity: 0 !important;
}
.v-ripple__container {
  opacity: 0 !important;
}
</style>
