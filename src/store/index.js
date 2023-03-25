import { createStore } from "vuex";
import AppointmentsModule from "./Appointments";
import SpecialitiesModule from "./Specialities";

export default createStore({
  state: {
    LogoBigSmall: true,
    UrlBack: "http://localhost:8000",
  },
  getters: {
    getLogoBigSmall(state) {
      return state.LogoBigSmall;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    Appointments: AppointmentsModule,
    Specialities: SpecialitiesModule,
  },
});
