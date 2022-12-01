<template>
  <v-card class="mx-auto" overflow-hidden width="100vw">
    <v-app-bar class="header-container" color="#FAF6F0" prominent height="60">
      <div>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img
          src="https://www.abovethetreeline.com/wp-content/uploads/ZingermansWebsitelogo.png"
          max-width="100"
          contain
        ></v-img>
        <v-icon
          class="fa-solid fa-cart-shopping cart-icon"
          color="#222"
        ></v-icon>
      </div>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.header-container div {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cart-icon {
  padding: 0 20px;
}
</style>
