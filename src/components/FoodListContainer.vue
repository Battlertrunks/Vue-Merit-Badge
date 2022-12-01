<template>
  <v-container>
    <h3 class="mx-auto mt-5 mb-2">Popualar Choices</h3>
    <ul>
      <li v-for="item in foodItems" :key="item.id">
        <base-card class="pa-5">
          <div class="title-price-container">
            <h4>{{ item.title }}</h4>
            <p>${{ item.price }}</p>
          </div>
          <div class="desc-image-container">
            <p>{{ item.description }}</p>
            <v-img
              class="item-img"
              :src="item.image"
              max-width="120"
              min-height="100"
            ></v-img>
          </div>
        </base-card>
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

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 1.225rem 0;
}

div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.desc-image-container {
  flex-wrap: nowrap;
  align-items: center;
}

.desc-image-container p {
  width: 100%;
  margin-right: 1.112rem;
  font-size: 12px;
}

.item-img {
  border-radius: 0.336rem;
}
</style>
