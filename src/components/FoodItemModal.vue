<template>
  <transition name="modal-anim">
    <base-modal>
      <template v-slot:header>
        <header class="mb-7 modal-heading">
          <h3>{{ itemDetails.title }}</h3>
          <v-icon
            class="fa-solid fa-xmark"
            color="#FF8A8A"
            @click="closeModel"
          ></v-icon>
        </header>
      </template>
      <template>
        <v-img
          width="55vw"
          class="mx-auto item-img"
          :src="itemDetails.image"
          alt="food image."
        ></v-img>
        <p>{{ itemDetails.description }}</p>
      </template>
    </base-modal>
  </transition>
</template>

<script>
import BaseModal from './UI/BaseModal.vue';

export default {
  components: {
    BaseModal,
  },
  props: {
    itemDetails: {
      required: true,
    },
  },
  methods: {
    closeModel() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style scoped>
.modal-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
</style>
