import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
