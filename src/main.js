import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex';
Vue.use(Vuex);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
