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
      const {
        status = "approved",
        name_doctor = "malinda96",
        name_patient = "Wilfred Morar",
      } = params;

      const response = await axios.get("/appointements/upcomming_past", {
        params: {
          status,
          name_doctor,
          name_patient,
        },
      });

      commit("setAppointments", response.data);
    },
  },
};
