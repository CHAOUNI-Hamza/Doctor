import axios from "axios";

export default {
  namespaced: true,
  state: {
    categories: [],
    Total: null,
    LastPage: null,
  },
  mutations: {
    // Définir la valeur de la dernière page
    setLastPage(state, LastPage) {
      state.LastPage = LastPage;
    },
    // Définir le tableau de catégories
    set(state, categories) {
      state.categories = categories;
    },
    // Définir la valeur totale
    setTotal(state, total) {
      state.Total = total;
    },
  },
  getters: {
    // Obtenir le tableau de catégories
    get(state) {
      return state.categories;
    },
    // Obtenir la valeur totale
    getTotal(state) {
      return state.Total;
    },
    // Obtenir la valeur de la dernière page
    getLastPage(state) {
      return state.LastPage;
    },
  },
  actions: {
    // Récupérer les catégories depuis le serveur
    async fetch({ commit }, params) {
      try {
        const response = await axios.get("/categories", { params });
        commit("set", response.data);
        commit("setTotal", response.data.meta?.total);
        commit("setLastPage", response.data.meta?.last_page);
      } catch (error) {
        console.log(error);
      }
    },
    // Créer une nouvelle catégorie
    async create({ dispatch }, params) {
      try {
        const formData = new FormData();
        formData.append("photo", params.photo);
        formData.append("icone", params.icone);
        formData.append("name", params.name);

        const response = await axios.post("/categories", formData);
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
        })
      } catch (error) {
        console.log(error);
      }
    },
    // Mettre à jour une catégorie existante
    async update({ dispatch }, params) {
      try {
        const formData = new FormData();
        formData.append("photo", params.photo);
        formData.append("icone", params.icone);
        formData.append("name", params.name);

        const response = await axios.post(`/categories/${params.id}`, formData);
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
        })
      } catch (error) {
        console.error(error);
      }
    },
    // Supprimer une catégorie
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
          await axios.delete(`/categories/${params}`);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          return dispatch("fetch", params = {
            order_by: "id",
            page: 1,
            pagination: 10,
          })
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
};
