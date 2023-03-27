import axios from "../../axios.config";

export default {
  namespaced: true,
  state: {
    doctors: [],
    appointmentsTotal: null,
    appointmentsLastPage: null,
  },
  mutations: {
    setDoctors(state, doctors) {
      state.doctors = doctors;
    },
    setTotalDoctor(state, LastPage) {
      state.appointmentsTotal = LastPage;
    },
    setappointmentsLastPage(state, total) {
      state.appointmentsLastPage = total;
    },
  },
  getters: {
    getDoctors(state) {
      return state.doctors;
    },
    getDoctorsTotal(state) {
      return state.appointmentsTotal;
    },
    getDoctorsLastPage(state) {
      return state.appointmentsLastPage;
    },
  },
  actions: {
    async fetchDoctors({ commit }, params) {
      try {
        const response = await axios.get("/doctors", {
          params,
        });
        commit("setDoctors", response.data);
        commit("setTotalDoctor", response.data.meta.total);
        commit("setDoctorsLastPage", response.data.meta.last_page);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
