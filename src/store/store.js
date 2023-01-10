import Vuex from 'vuex';
import Vue from 'vue';
import dummyData from '@/data/dummyData.js';

// import inCartState from './modules/inCart/state.js';
import inCartGetters from './modules/inCart/getters.js';

Vue.use(Vuex);

const state = {
  foodInCart: [],
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
      if (0 > cart.findIndex(item => item.id === payload.item.id) && !payload.item.amount) {
        let item = null;
        console.log(dummyData);
        for (const cat in dummyData) {
          console.log(dummyData[cat], cat) 
          item = dummyData[cat].food.find(foodItem => foodItem.id === payload.item.id);
          console.log(item);
          if (item) break;
        }
        if (item) {
          cart.push({
            ...item,
            amount: 1
          })
        }
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
    },
    removeFromCart(context, payload) {
      const cart = context.state.foodInCart;
      const indexOfItem = cart.findIndex(item => item.id === payload.id)
      if (indexOfItem >= 0) {
        cart.splice(indexOfItem, 1);
      }
      context.commit('UPDATE_CART', cart);
    }
        // insertToCart(context, payload) {
    //   const cart = context.state.foodInCart;
    //   if (0 > cart.findIndex(item => item.id === payload.item.id) && !payload.item.amount) {
    //     cart.push({
    //       ...dummyData.find(foodItem => foodItem.id === payload.item.id),
    //       amount: 1
    //     })
    //   }
    //   context.commit('UPDATE_CART', cart);
    // },
  }
});

