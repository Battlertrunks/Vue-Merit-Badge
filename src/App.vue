<template>
  <v-app>
    <heading-bar></heading-bar>
    <v-main>
      <food-list-container></food-list-container>
    </v-main>
  </v-app>
</template>

<script>
import HeadingBar from './components/layout/HeadingBar.vue';
import FoodListContainer from './components/FoodListContainer.vue';

export default {
  name: 'App',
  components: {
    HeadingBar,
    FoodListContainer,
  },
};
</script>
