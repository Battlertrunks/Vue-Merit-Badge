import Vuex from 'vuex';
import Vue from 'vue';
import dummyData from '@/data/dummyData.js';

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
      amount: 3
    },
  ],
};

export default new Vuex.Store({
  state,
  getters: {
    ...inCartGetters,
  },
  mutations: {
    UPDATE_CART(state, payload) {
      state.foodInCart = payload;
    },
  },
  actions: {
    changeCartAmount(context, payload) {
      const cart = context.state.foodInCart;
      // cart.indexOf(item => {console.log(item.id) === console.log(payload.item.id));
      if (0 > cart.findIndex(item => item.id === payload.item.id)) {
        cart.push({
          ...dummyData.find(foodItem => foodItem.id === payload.item.id),
          amount: 1
        })
      }
      const updatedCart = cart.map(foodItem => {
        if (foodItem.id === payload.item.id) {
          return {
            ...foodItem,
            amount: payload.amount
          };
        }
        return foodItem;
      });
      context.commit('UPDATE_CART', updatedCart)
    }
  }
});

