
const store = {
  state: {
    products: {
      10: 250,
      11: 400,
      12: 750,
      13: 1000,
      14: 1200,
      15: 1500,
    },
    cart: [],
    isFetching: {
      status: false,
      id: ''
    },
    isFetched: false
  },

  getters: {
    getTotalCount(state) {
      return state.cart.reduce((total, item) => {
        return total + item.count;
      }, 0);
    },

    getTotalSum(state) {
      return state.cart.reduce((total, item) => {
        return total + item.count * state.products[item.id];
      }, 0);
    }
  },

  mutations: {
    add(state, {id, count}) {
      state.cart.push({id, count});
    },

    startFetching(state, payload) {
      state.isFetching.status = true;
      state.isFetching.id = payload;
    },

    endFetching(state) {
      state.isFetching.status = false;
      state.isFetching.id = '';
    }
  },

  actions: {
    addToCart(store, data) {
      store.commit('startFetching', data.id);
      setTimeout(() => {
        store.commit('add', data);
        store.commit('endFetching');
      }, 1000);
    }
  }
}

export default store;
