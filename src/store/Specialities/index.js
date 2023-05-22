import axios from "axios";

export default {
  namespaced: true,
  state: {
    specialities: [],
    specialitiesTotal: null,
    specialitiesLastPage: null,
  },
  mutations: {
    // Mutation pour définir la dernière page des spécialités
    setspecialitiesLastPage(state, LastPage) {
      state.specialitiesLastPage = LastPage;
    },
    // Mutation pour définir la liste des spécialités
    setSpecialities(state, specialities) {
      state.specialities = specialities;
    },
    // Mutation pour définir le total des spécialités
    setTotalSpecialitie(state, total) {
      state.specialitiesTotal = total;
    },
  },
  getters: {
    // Getter pour obtenir la liste des spécialités
    getSpecialities(state) {
      return state.specialities;
    },
    // Getter pour obtenir le total des spécialités
    getSpecialitiesTotal(state) {
      return state.specialitiesTotal;
    },
    // Getter pour obtenir la dernière page des spécialités
    getSpecialitiesLastPage(state) {
      return state.specialitiesLastPage;
    },
  },
  actions: {
    // Action pour récupérer les spécialités
    async fetchSpecialities({ commit }, params) {
      try {
        const response = await axios.get("/specialties", { params });
        commit("setSpecialities", response.data);
        commit("setTotalSpecialitie", response.data.meta?.total);
        commit("setspecialitiesLastPage", response.data.meta?.last_page);
      } catch (error) {
        console.log(error);
      }
    },
    // Action pour créer une spécialité
    async createSpecialitie({ dispatch }, params) {
      try {
        const formData = new FormData();
        formData.append("photo", params.photo);
        formData.append("name", params.name);
        const response = await axios.post("/specialties", formData);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Is Created",
          showConfirmButton: false,
          timer: 1500,
        });
        return dispatch("fetchSpecialities", params = {
          order_by: "id",
          name: "",
          page: 1,
          pagination: 10,
        },);
      } catch (error) {
        console.log(error);
      }
    },
    // Action pour mettre à jour une spécialité
    async updateSpecialitie({ dispatch }, params) {
      try {
        const formData = new FormData();
        formData.append("photo", params.photo);
        formData.append("name", params.name);

        const response = await axios.post(
          `/specialties/${params.id}`,
          formData
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Is Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        return dispatch("fetchSpecialities", params = {
          order_by: "id",
          name: "",
          page: 1,
          pagination: 10,
        })
      } catch (error) {
        console.error(error);
      }
    },
    // Action pour supprimer une spécialité
    async deleteSpecialitie({ dispatch }, params) {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        });
        if (result.isConfirmed) {
          await axios.delete(`/specialties/${params}`, params);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        return dispatch("fetchSpecialities", params = {
          order_by: "id",
          name: "",
          page: 1,
          pagination: 10,
        })
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
};
