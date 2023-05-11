import axios from "axios";

export default {
  namespaced: true,
  state: {
    categories: [],
    Total: null,
    LastPage: null,
  },
  mutations: {
    setLastPage(state, LastPage) {
      state.LastPage = LastPage;
    },
    set(state, categories) {
      state.categories = categories;
    },
    setTotal(state, total) {
      state.Total = total;
    },
  },
  getters: {
    get(state) {
      return state.categories;
    },
    getTotal(state) {
      return state.Total;
    },
    getLastPage(state) {
      return state.LastPage;
    },
  },
  actions: {
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
    async create({ commit }, params) {
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
      } catch (error) {
        console.log(error);
      }
    },
    async update({ commit }, params) {
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
      } catch (error) {
        console.error(error);
      }
    },
    async destroy({ _ }, id) {
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
          await axios.delete(`/categories/${id}`);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
};
