<template>
  <v-container>
    <ul>
      <li v-for="cat in foodItems" :key="cat.id" :id="cat.id">
        <h4 class="mx-auto category">{{ upperCaseWords(cat.name) }}</h4>
        <ul class="food-items-container">
          <li v-for="item in cat.food" :key="item.id" class="card-container" @click="openModal(item)">
            <base-card class="pa-5">
              <div class="title-price-container">
                <h4>{{ item.title }}</h4>
                <p>${{ item.price.toFixed(2) }}</p>
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
    upperCaseWords(title) {
      return title.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
    }
  },
  mounted() {
    this.foodItems = dummyData;
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

.card-container {
  cursor: pointer;
  width: 100%;
  margin: 1.5rem auto;
}

.card-container:hover {
  transition: .085s outline ease-out;
  outline: 3px #f29c1c solid;
  border-radius: 2px;
}

.type {
  text-align: center;
}

.category {
  text-align: center;
  padding-top: 5rem;
  display: block;
  font-size: 1.445rem;
}

.title-price-container, .desc-image-container {
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

@media only screen and (min-width: 700px) {
  .food-items-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .card-container {
    width: 90%;
  }
}

@media only screen and (min-width: 1300px) {
  .card-container {
    max-width: 35rem;
  }
}
</style>
