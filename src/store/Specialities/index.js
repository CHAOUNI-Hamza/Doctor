import axios from "axios";

export default {
  namespaced: true,
  state: {
    specialities: [],
    specialitiesTotal: null,
    specialitiesLastPage: null,
  },
  mutations: {
    setspecialitiesLastPage(state, LastPage) {
      state.specialitiesLastPage = LastPage;
    },
    setSpecialities(state, specialities) {
      state.specialities = specialities;
    },
    setTotalSpecialitie(state, total) {
      state.specialitiesTotal = total;
    },
  },
  getters: {
    getSpecialities(state) {
      return state.specialities;
    },
    getSpecialitiesTotal(state) {
      return state.specialitiesTotal;
    },
    getSpecialitiesLastPage(state) {
      return state.specialitiesLastPage;
    },
  },
  actions: {
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
    async updateSpecialitie({ _ }, params) {
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
      } catch (error) {
        console.error(error);
      }
    },
    async deleteSpecialitie({ _ }, id) {
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
          await axios.delete(`/specialties/${id}`);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
};
