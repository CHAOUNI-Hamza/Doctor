import { createStore } from 'vuex'

export default createStore({
  state: {
    LogoBigSmall : true
  },
  getters: {
    getLogoBigSmall(state) {
      return state.LogoBigSmall;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
