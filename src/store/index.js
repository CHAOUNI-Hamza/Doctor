import { createStore } from "vuex";
import doctor from "./doctor/index";
import appointment from "./appointment/index";
import axios from "../axios.config";

export default createStore({
  state: {
    LogoBigSmall: true,
    appointments: [],
    specialities: [],
  },
  getters: {
    getLogoBigSmall(state) {
      return state.LogoBigSmall;
    },
  },
  mutations: {
    setAppointments(state, appointments) {
      state.appointments = appointments;
    },
    setSpecialities(state, specialities) {
      state.specialities = specialities;
    },
  },
  actions: {
    async fetchAppointments({ commit }, params) {
      const response = await axios.get("/appointements/upcomming_past", {
        params,
      });
      commit("setAppointments", response.data);
    },
    async fetchSpecialities({ commit }, params) {
      const response = await axios.get("/specialties", {
        params,
      });
      commit("setSpecialities", response.data);
    },
  },
  modules: {
    doctor,
    appointment,
  },
});
