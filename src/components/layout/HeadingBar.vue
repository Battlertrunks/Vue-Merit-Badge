<template>
  <div class="container-header">
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
            @click="openCheckout"
            v-ripple="false"
          ></v-icon>
        </div>
      </v-app-bar>
    </v-card>
    <v-navigation-drawer class="drawer" v-model="drawer" absolute left temporary>
      <v-icon
        :class="`fa-regular fa-circle-left close-icon ${
          drawer ? 'move-close-icon' : ''
        }`"
        @click="drawer = false"
      ></v-icon>
      <section class="select-container">
        <div>
          <v-select
            :items="locations"
            label="Select Location"
            dense
            single-line
            hint="422 Detroit St, Ann Arbor..."
            persistent-hint
          ></v-select>
        </div>
        <div class="hour-service-container">
          <h4>Hours of Service</h4>
          <p>Thu 10:30am - 6:45pm (ET)</p>
        </div>
      </section>
      <div class="list-items">
        <h2>What's on the Menu?</h2>
        <ul class="pop-items">
          <li>
            <a src="">Popular Choices</a>
          </li>
        </ul>
        <h3>Appitizers</h3>
        <ul>
          <li>
            <a href="#1" @click="drawer = false">Soups</a>
          </li>
          <li>
            <a href="#2" @click="drawer = false">Deli Sides</a>
          </li>
          <li>
            <a href="#3" @click="drawer = false">Jewish Sides</a>
          </li>
        </ul>
        <h3>Sandwiches</h3>
        <ul>
          <li>
            <a href="#4" @click="drawer = false">Corned Beef</a>
          </li>
          <li>
            <a href="#5" @click="drawer = false">Pastrami</a>
          </li>
          <li>
            <a href="#6" @click="drawer = false">Beef</a>
          </li>
          <li>
            <a href="#7" @click="drawer = false">Turkey</a>
          </li>
          <li>
            <a href="#8" @click="drawer = false">Chicken</a>
          </li>
          <li>
            <a href="#9" @click="drawer = false">Pork</a>
          </li>
          <li>
            <a href="#10" @click="drawer = false">Fish</a>
          </li>
        </ul>
        <h3>Other Options</h3>
        <ul>
          <li>
            <a href="#11" @click="drawer = false">Kids Menu</a>
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      locations: ['Detroit', 'Ann Arbor'],
    };
  },
  methods: {
    openCheckout() {
      this.$emit('open-checkout');
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped lang="scss">
.container-header {
  position: fixed;
  z-index: 1;
}
h2,
h3,
h4,
p {
  font-family: 'intra', sans-serif;
}
a{
  text-decoration: none;
}
h4 {
  font-size: 0.652rem;
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
.close-icon {
  position: relative;
  left: 70%;
  top: 0.665rem;
  color: #222;
  transition: 0.35s left ease-out;
}
.move-close-icon {
  left: 85%;
}
.v-select {
  width: 75%;
  max-width: 12rem;
  font-size: 1rem;
  margin-top: 0;
}
::v-deep .v-select .v-label {
  font-size: 10px;
}
::v-deep .v-select .v-messages__message {
  font-size: 0.482rem;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.select-container {
  display: flex;
  align-items: flex-start;
  margin: 0.552rem;
  padding: 0.325rem;
}
.select-container h3 {
  text-decoration: none;
  font-weight: bold;
  font-size: 0.782rem;
}
.hour-service-container {
  text-align: right;
  width: 65%;
  margin: 0.5rem 0;
}
.select-container p {
  font-size: 0.482rem;
  margin: 0;
}
.v-navigation-drawer {
  position: fixed;
}
.v-navigation-drawer h2 {
  font-size: 1.115rem;
  font-family: 'intra', sans-serif;
  padding: 0 1rem;
}
.v-navigation-drawer .list-items h3 {
  font-size: 0.875rem;
  text-decoration: underline;
  padding: 0 1rem;
}
li {
  margin: 0.245rem 0.445rem;
}
.v-application a {
  display: inline-block;
  padding: 0.333rem 0.442rem;
  width: 100%;
  font-size: 0.772rem;
  border-radius: 0.225rem;
  color: #222;
}
.v-application a:hover {
  transition: 0.25s padding ease-out;
  padding-left: 0.825rem;
}
a:hover {
  transition: 1s background-color ease;
  background-color: #FAF6F0;
}
</style>
