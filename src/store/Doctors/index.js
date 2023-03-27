import axios from "../../axios.config";

export default {
  namespaced: true,
  state: {
    doctors: [],
    doctorsTotal: null,
    doctorsLastPage: null,
  },
  mutations: {
    setDoctors(state, doctors) {
      state.doctors = doctors;
    },
    setTotalDoctor(state, LastPage) {
      state.doctorsTotal = LastPage;
    },
    setDoctorsLastPage(state, total) {
      state.doctorsLastPage = total;
    },
  },
  getters: {
    getDoctors(state) {
      return state.doctors;
    },
    getDoctorsTotal(state) {
      return state.doctorsTotal;
    },
    getDoctorsLastPage(state) {
      return state.doctorsLastPage;
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
    }
  },
};
