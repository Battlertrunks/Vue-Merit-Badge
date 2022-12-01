<template>
  <v-container>
    <ul>
      <li v-for="item in foodItems" :key="item.id">
        <base-card>{{ item }}</base-card>
      </li>
    </ul>
  </v-container>
</template>

<script>
import dummyData from '@/data/dummyData';
import BaseCard from './UI/BaseCard.vue';

export default {
  data() {
    return {
      foodItems: null,
    };
  },
  components: {
    BaseCard,
  },
  mounted() {
    this.foodItems = [...dummyData];
  },
};
</script>
