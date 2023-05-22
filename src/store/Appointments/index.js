import axios from "axios";

export default {
  namespaced: true,
  state: {
    appointments: [],
    appointmentsTotal: null,
    appointmentsLastPage: null,
  },
  mutations: {
    // Mutation pour définir la liste des rendez-vous
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
    // Getter pour obtenir la liste des rendez-vous
    getAppointments: state => state.appointments,
    // Getter pour obtenir le total des rendez-vous
    getAppointmentsTotal: state => state.appointmentsTotal,
    // Getter pour obtenir la dernière page de rendez-vous
    getAppointmentsLastPage: state => state.appointmentsLastPage,
  },
  actions: {
    // Action pour récupérer les rendez-vous
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
    // Action pour récupérer les rendez-vous par doctor connecté
    async fetchAppointmentsDoctor({ commit }, params) {
      try {
        const response = await axios.get("/appointements/appointement_doctor", {
          params,
        });
        console.log(response.data);
        commit("setAppointments", response.data);
        commit("setTotalAppointment", response.data.meta.total);
        commit("setAppointmentsLastPage", response.data.meta.last_page);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
