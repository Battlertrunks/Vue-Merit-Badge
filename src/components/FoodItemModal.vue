<template>
  <transition name="modal-anim">
    <base-modal>
      <template v-slot:header>
        <h3>{{ itemDetails.title }}</h3>
      </template>
      <template>
        <v-img
          width="70vw"
          class="mx-auto"
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
};
</script>
