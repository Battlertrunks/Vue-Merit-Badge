<template>
  <v-app>
    <HeadingBar></HeadingBar>

    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import HeadingBar from './components/layout/HeadingBar.vue';
export default {
  name: 'App',
  components: {
    HeadingBar
  }
};
</script>
