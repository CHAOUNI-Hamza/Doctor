import axios from "axios";

export default {
  namespaced: true,
  state: {
    patients: [],
    patientsTotal: null,
    patientsLastPage: null,
  },
  mutations: {
    setPatients(state, patients) {
      state.patients = patients;
    },
    setTotalPatient(state, LastPage) {
      state.patientsTotal = LastPage;
    },
    setPatientsLastPage(state, total) {
      state.patientsLastPage = total;
    },
  },
  getters: {
    getPatients(state) {
      return state.patients;
    },
    getPatientsTotal(state) {
      return state.patientsTotal;
    },
    getPatientsLastPage(state) {
      return state.patientsLastPage;
    },
  },
  actions: {
    async fetchPatients({ commit }, params) {
      try {
        const response = await axios.get("/patients", {
          params,
        });
        commit("setPatients", response.data);
        commit("setTotalPatient", response.data.meta.total);
        commit("setPatientsLastPage", response.data.meta.last_page);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
