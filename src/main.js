import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import routes from './routes';
import store from './store';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

const vuexStore = new Vuex.Store(store);

new Vue({
  el: '#app',
  router,
  vuexStore,
  render: h => h(App)
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

