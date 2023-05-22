import axios from "axios";

export default {
  namespaced: true,
  state: {
    pharmacies: [],
    pharmaciesTotal: null,
    pharmaciesLastPage: null,
  },
  mutations: {
    // Mutateur pour définir la dernière page
    setLastPage(state, LastPage) {
      state.pharmaciesLastPage = LastPage;
    },
    // Mutateur pour définir les pharmacies
    set(state, pharmacies) {
      state.pharmacies = pharmacies;
    },
    // Mutateur pour définir le total des pharmacies
    setTotal(state, total) {
      state.pharmaciesTotal = total;
    },
  },
  getters: {
    // Getter pour obtenir la liste des pharmacies
    get(state) {
      return state.pharmacies;
    },
    // Getter pour obtenir le total des pharmacies
    getTotal(state) {
      return state.pharmaciesTotal;
    },
    // Getter pour obtenir la dernière page des pharmacies
    getLastPage(state) {
      return state.pharmaciesLastPage;
    },
  },
  actions: {
    // Action pour récupérer les pharmacies
    async fetch({ commit }, params) {
      try {
        const response = await axios.get("/pharmacies", { params });
        commit("set", response.data);
        commit("setTotal", response.data.meta?.total);
        commit("setLastPage", response.data.meta?.last_page);
      } catch (error) {
        console.log(error);
      }
    },
    // Action pour créer une nouvelle pharmacie
    async create({ dispatch }, params) {
      try {
        const formData = new FormData();
        formData.append("photo", params.photo);
        formData.append("category_id", params.category_id);
        formData.append("address", params.address);
        formData.append("administrator", params.administrator);
        formData.append("phone", params.phone);
        formData.append("location", params.location);
        formData.append("about", params.about);
        formData.append("name", params.name);

        const response = await axios.post("/pharmacies", formData);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Is Created",
          showConfirmButton: false,
          timer: 1500,
        });
        return dispatch("fetch", params = {
          order_by: "id",
          page: 1,
          pagination: 10,
        },);
      } catch (error) {
        console.log(error);
      }
    },
    // Action pour mettre à jour une pharmacie existante
    async update({ dispatch }, params) {
      try {
        const formData = new FormData();
        formData.append("photo", params.photo);
        formData.append("category_id", params.category_id);
        formData.append("address", params.address);
        formData.append("administrator", params.administrator);
        formData.append("phone", params.phone);
        formData.append("location", params.location);
        formData.append("about", params.about);
        formData.append("name", params.name);

        const response = await axios.post(`/pharmacies/${params.id}`, formData);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Is Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        return dispatch("fetch", params = {
          order_by: "id",
          page: 1,
          pagination: 10,
        },);
      } catch (error) {
        console.error(error);
      }
    },
    // Action pour supprimer une pharmacie
    async destroy({ dispatch }, params) {
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
          await axios.delete(`/pharmacies/${params}`);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          return dispatch("fetch", params = {
            order_by: "id",
            page: 1,
            pagination: 10,
          },);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
};
