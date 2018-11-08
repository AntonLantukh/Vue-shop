
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
    cart: {},
    isFetching: {
      status: false,
      id: ''
    },
    isFetched: false
  },

  getters: {
    getTotalCount: state => {
      const values = Object.values(state.cart);
      return values.reduce((arr, item) => {
        return arr + parseInt(item, 10);
      }, 0)
    },

    getTotalSum(state) {
      const keys = Object.keys(state.cart);
      let sum = 0;
      keys.forEach((item) => {
        sum += parseInt((state.products[item] * state.cart[item]), 10);
      });
      return sum;
    },

    getProductIsInCart: state => id => {
      if (id in state.cart) {
        return true;
      }
    },

    getProductCountInCart: state => id => {
      return state.cart[id];
    }
  },

  mutations: {
    add(state, {id, count}) {
      if (id in state.cart) {
        state.cart[id] += count;
      } else {
        state.cart = Object.assign({}, state.cart, {[id]: 0});
        state.cart[id] = count;
      }
    },

    remove(state, {id}) {
      if(state.cart[id] === 0) {
        return false;
      }
      state.cart[id]--;
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
    },

    removeFromCart(store, data) {
      store.commit('startFetching', data.id);
      setTimeout(() => {
        store.commit('remove', data);
        store.commit('endFetching');
      }, 1000);
    },
  }
}

export default store;
