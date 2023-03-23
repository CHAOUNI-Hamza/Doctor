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
    addSpecialitie(state, speciality) {
      state.specialities.push(speciality);
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
    async createSpecialitie({ commit }, params) {
      const formData = new FormData();
      formData.append("photo", params.photo);
      formData.append("name", params.name);
      const response = await axios
        .post("/specialties", formData)
        .then((response) => {
          commit("addSpecialitie", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {
    doctor,
    appointment,
  },
});
