import axios from "../../axios.config";

export default {
  namespaced: true,
  state: {
    appointments: [],
    appointmentsTotal: null,
    appointmentsLastPage: null,
  },
  mutations: {
    setAppointments(state, appointments) {
      state.appointments = appointments;
    },
    setTotalAppointment(state, LastPage) {
      state.appointmentsTotal = LastPage;
    },
    setAppointmentsLastPage(state, total) {
      state.appointmentsLastPage = total;
    },
  },
  getters: {
    getAppointments(state) {
      return state.appointments;
    },
    getAppointmentsTotal(state) {
      return state.appointmentsTotal;
    },
    getAppointmentsLastPage(state) {
      return state.appointmentsLastPage;
    },
  },
  actions: {
    async fetchAppointments({ commit }, params) {
      try {
        const response = await axios.get("/appointements/upcomming_past", {
          params,
        });
        commit("setAppointments", response.data);
        commit("setTotalAppointment", response.data.meta.total);
        commit("setAppointmentsLastPage", response.data.meta.last_page);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
