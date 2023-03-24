import { createStore } from "vuex";
import axios from "../axios.config";

export default createStore({
  state: {
    LogoBigSmall: true,
    UrlBack: "http://localhost:8000",
    /* */
    appointments: [],
    /* */
    specialities: [],
    specialitiesTotal: null,
    specialitiesLastPage: null
    /* */
  },
  getters: {
    getLogoBigSmall(state) {
      return state.LogoBigSmall;
    },
    /* */
    /* */
  },
  mutations: {
    /* */
    setAppointments(state, appointments) {
      state.appointments = appointments;
    },
    /* */
    setspecialitiesLastPage(state, LastPage) {
      state.specialitiesLastPage = LastPage;
    },
    setSpecialities(state, specialities) {
      state.specialities = specialities;
    },
    addSpecialitie(state, speciality) {
      state.specialities.push(speciality);
    },
    setTotalSpecialitie(state, total) {
      state.specialitiesTotal = total;
    },
    improveSpecialitie(state, speciality) {
      state.specialities.push(speciality);
    },
    /* */
  },
  actions: {
    /* */
    async fetchAppointments({ commit }, params) {
      const response = await axios.get("/appointements/upcomming_past", {
        params,
      });
      commit("setAppointments", response.data);
    },
    /* */
    async fetchSpecialities({ commit }, params) {
      const response = await axios.get("/specialties", {
        params,
      });
      commit("setSpecialities", response.data);
      commit("setTotalSpecialitie", response.data.meta.total);
      commit("setspecialitiesLastPage", response.data.meta.last_page);
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
    async updateSpecialitie({ commit }, params) {
      const formData = new FormData();
      formData.append("photo", params.photo);
      formData.append("name", params.name);
      const response = await axios
        .post(`/specialties/${params.id}`, formData)
        .then((response) => {
          commit("improveSpecialitie", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /* */
  },
  modules: {
  },
});
