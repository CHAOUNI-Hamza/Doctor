
import axios from "../../axios.config";

export default {
    namespaced: true,
    state: {
        pharmacies: [],
        pharmaciesTotal: null,
        pharmaciesLastPage: null,
    },
    mutations: {
        setLastPage(state, LastPage) {
            state.pharmaciesLastPage = LastPage;
        },
        set(state, pharmacies) {
            state.pharmacies = pharmacies;
        },
        add(state, pharmacies) {
            state.pharmacies.push(pharmacies);
        },
        setTotal(state, total) {
            state.pharmaciesTotal = total;
        },
        improve(state, pharmacies) {
            state.pharmacies.push(pharmacies);
        },
    },
    getters: {
        get(state) {
            return state.pharmacies;
        },
        getTotal(state) {
            return state.pharmaciesTotal;
        },
        getLastPage(state) {
            return state.pharmaciesLastPage;
        },
    },
    actions: {
        async fetch({ commit }, params) {
            try {
                const response = await axios.get("/pharmacies", { params });
                commit("set", response.data);
                commit("setTotal", response.data.meta.total);
                commit("setLastPage", response.data.meta.last_page);
            } catch (error) {
                console.log(error);
            }
        },
        async create({ commit }, params) {
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
                commit("add", response.data.data);
            } catch (error) {
                console.log(error);
            }
        },
        async update({ commit }, params) {
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

                const response = await axios.post(
                    `/pharmacies/${params.id}`,
                    formData
                );
                commit("improve", response.data.data);
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
                    await axios.delete(`/pharmacies/${id}`);
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    modules: {},
};
