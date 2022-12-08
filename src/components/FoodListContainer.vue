<template>
  <v-container>
    <h3 class="mx-auto mt-5 mb-2">Popualar Choices</h3>
    <ul>
      <li v-for="item in foodItems" :key="item.id">
        <base-card class="pa-5">
          <div class="title-price-container" @click="openModal(item)">
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
    <food-item-modal
      v-if="showModal"
      :item-details="modalItem"
      @close-modal="closingModal()"
    ></food-item-modal>
  </v-container>
</template>

<script>
import dummyData from '@/data/dummyData';
import BaseCard from './UI/BaseCard.vue';
import FoodItemModal from './FoodItemModal.vue';

export default {
  data() {
    return {
      foodItems: null,
      showModal: false,
      modalItem: null,
    };
  },
  components: {
    BaseCard,
    FoodItemModal,
  },
  methods: {
    openModal(foodItem) {
      this.modalItem = foodItem;
      this.showModal = true;
    },
    closingModal() {
      this.showModal = false;
      this.modalItem = null;
    },
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

.item-img {
  border-radius: 0.336rem;
}
</style>
