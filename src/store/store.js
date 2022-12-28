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
      amount: 3
    },
    {
      id: 'f2',
      title: "#3 Zingerman' Reuben",
      price: 12.23,
      image:
        'https://d3h3ny262c73zf.cloudfront.net/Zingerman%27s%20Delicatessen/1554405616743.png',
      amount: 2
    },
    {
      id: 'f3',
      title: "#3 Zingerman' Reuben",
      price: 23.99,
      image:
        'https://d3h3ny262c73zf.cloudfront.net/Zingerman%27s%20Delicatessen/1554405616743.png',
      amount: 1
    }
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
    }
  },
  actions: {
    addToCart(context, payload) {
      const cart = context.state.foodInCart;
      const updatedCart = manageCart(cart, payload, 'add');
      context.commit('UPDATE_CART', updatedCart);
    },
    subtractFromCart(context, payload) {
      const cart = context.state.foodInCart;
      const updatedCart = manageCart(cart, payload, 'minus');
      context.commit('UPDATE_CART', updatedCart);
    }
  }
});

const manageCart = (cart, payload, calc) => {
  return cart.map(foodItem => {
    if (foodItem.id === payload.id) {
      return {
        ...foodItem,
        amount: calc === 'add' ? foodItem.amount += 1 : 
          calc === 'minus' ? foodItem.amount -= 1 : foodItem.amount
      };
    } 
    return foodItem;
  });
};