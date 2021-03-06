import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueGoogleCharts from 'vue-google-charts'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueGoogleCharts);

Vue.http.options.root = 'https://vuejs-my-stock-trader-3c8f9.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
