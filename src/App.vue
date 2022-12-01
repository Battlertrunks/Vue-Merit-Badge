<template>
  <v-app>
    <heading-bar></heading-bar>
    <v-main>
      <food-list-container></food-list-container>
    </v-main>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
import HeadingBar from './components/layout/HeadingBar.vue';
import FoodListContainer from './components/FoodListContainer.vue';
import FooterBar from './components/layout/FooterBar.vue';

export default {
  name: 'App',
  components: {
    HeadingBar,
    FoodListContainer,
    FooterBar,
  },
};
</script>
