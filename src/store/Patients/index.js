import axios from "axios";

export default {
  namespaced: true,
  state: {
    patients: [],
    patientsTotal: null,
    patientsLastPage: null,
  },
  mutations: {
    // Mutation pour mettre à jour les informations des patients
    setPatients(state, patients) {
      state.patients = patients;
    },
    // Mutation pour mettre à jour le nombre total de patients
    setTotalPatient(state, LastPage) {
      state.patientsTotal = LastPage;
    },
    // Mutation pour mettre à jour la dernière page des patients
    setPatientsLastPage(state, total) {
      state.patientsLastPage = total;
    },
  },
  getters: {
    // Getter pour obtenir les informations des patients
    getPatients(state) {
      return state.patients;
    },
    // Getter pour obtenir le nombre total de patients
    getPatientsTotal(state) {
      return state.patientsTotal;
    },
    // Getter pour obtenir la dernière page des patients
    getPatientsLastPage(state) {
      return state.patientsLastPage;
    },
  },
  actions: {
    // Action pour mettre à jour le statut d'un patient
    async updateStatus({ dispatch }, info) {
      try {
        const response = await axios.post(`/patients/${info.id}/update-status`, {
          status: info.status,
        });
        return dispatch("fetchPatients")
      } catch (error) {
        console.error(error);
      }
    },
    // Action pour récupérer les informations des patients
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
