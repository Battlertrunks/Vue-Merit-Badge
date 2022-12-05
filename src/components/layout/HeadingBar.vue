<template>
  <div>
    <v-card class="mx-auto" overflow-hidden width="100vw">
      <v-app-bar class="header-container" color="#FAF6F0" prominent height="60">
        <div>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
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
    <v-navigation-drawer v-model="drawer" absolute left temporary>
      <h2>What's on the Menu?</h2>
      <ul class="pop-items">
        <li>
          <p>Popular Choices</p>
        </li>
      </ul>
      <h3>Appitizers</h3>
      <ul>
        <li>
          <p>Soups</p>
        </li>
        <li>
          <p>Deli Slides</p>
        </li>
        <li>
          <p>Jewish Sides</p>
        </li>
      </ul>
      <h3>Sandwiches</h3>
      <ul>
        <li>
          <p>Corned Beef</p>
        </li>
        <li>
          <p>Pastrami</p>
        </li>
        <li>
          <p>Beef</p>
        </li>
        <li>
          <p>Turkey</p>
        </li>
        <li>
          <p>Chicken</p>
        </li>
        <li>
          <p>Pork</p>
        </li>
        <li>
          <p>Fish</p>
        </li>
      </ul>
      <h3>Other Options</h3>
      <ul>
        <li>
          <p>Kids Menu</p>
        </li>
        <li>
          <p>Desserts</p>
        </li>
      </ul>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
h2,
h3,
p {
  font-family: 'intra', sans-serif;
}
.header-container div {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cart-icon {
  padding: 0 20px;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.pop-items {
  margin-top: 1rem;
}
.v-navigation-drawer h2 {
  font-size: 1.115rem;
  font-family: 'intra', sans-serif;
  padding: 0 1rem;
}
.v-navigation-drawer h3 {
  font-size: 0.875rem;
  text-decoration: underline;
  padding: 0 1rem;
}
ul p {
  font-size: 0.765rem;
  font-weight: 500;
  margin: 0;
  padding: 0.555rem 1.665rem;
}
</style>
