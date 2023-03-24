import { createStore } from "vuex";
import doctor from "./doctor";
import appointment from "./appointment";
import speciality from "./speciality";
import axios from "../axios.config";

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
    appointment,
    speciality,
  },
});
