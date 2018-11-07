import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import routes from './routes';
import vuexStore from './store';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

const store = new Vuex.Store(vuexStore);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

