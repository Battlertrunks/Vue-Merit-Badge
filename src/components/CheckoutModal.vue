<template>
  <base-modal>
    <template v-slot:header>
      <header>
        <div>
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
      <base-card>
        <div class="title-price-container" @click="openModal(item)">
          <h4>{{ item.title }}</h4>
          <p>${{ item.price }}</p>
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
            :src="item.image"
            max-width="120"
            min-height="100"
          ></v-img>
        </div>
      </base-card>
    </template>
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
};
</script>
