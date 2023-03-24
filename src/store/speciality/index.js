import axios from "../../axios.config";

export default {
  namespaced: true,
  state: {
    specialities: [],
  },
  mutations: {
    setSpecialities(state, specialities) {
      state.specialities = specialities;
    },
    addSpecialitie(state, speciality) {
      state.specialities.push(speciality);
    },
    improveSpecialitie(state, speciality) {
      state.specialities.push(speciality);
    },
  },
  getters: {},
  actions: {
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
  },
  modules: {},
};
