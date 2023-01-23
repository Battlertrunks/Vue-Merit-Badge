<template>
  <v-card class="card" :color="cardColor">
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    cardColor: {
      default: '#FAF6F0',
      type: String
    }
  }
}
</script>