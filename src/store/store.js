import Vuex from 'vuex';
import Vue from 'vue';

// import inCartState from './modules/inCart/state.js';
import inCartGetters from './modules/inCart/getters.js';

Vue.use(Vuex);

const state = {
  foodInCart: [
    {
      id: 'f1',
      title: "#2 Zingerman' Reuben",
      price: 18.99,
      image:
        'https://d3h3ny262c73zf.cloudfront.net/Zingerman%27s%20Delicatessen/1554405616743.png',
    },
  ],
};

export default new Vuex.Store({
  state,
  getters: {
    ...inCartGetters,
  },
});
