import { createStore } from "vuex";
import doctor from "./doctor/index";

export default createStore({
  state: {
    LogoBigSmall: true,
  },
  getters: {
    getLogoBigSmall(state) {
      return state.LogoBigSmall;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    doctor,
  },
});
