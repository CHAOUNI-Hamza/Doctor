import axios from "../../axios.config";

export default {
  namespaced: true,
  state: {
    appointments: [],
  },
  mutations: {
    setAppointments(state, appointments) {
      state.appointments = appointments;
    },
  },
  getters: {},
  actions: {
    async fetchAppointments({ commit }, params) {
      const response = await axios.get("/appointements/upcomming_past", {
        params,
      });
      commit("setAppointments", response.data);
    },
  },
};
