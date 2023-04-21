import axios from "../../axios.config";
import router from "@/router";

export default {
    namespaced: true,
    state: {
        admins: [],
        adminTotal: null,
        adminLastPage: null,
        token: null,
        admin: {},
        errorMessage: null,
        overLay: false
    },
    mutations: {
        setAdmins(state, admins) {
            state.admins = admins;
        },
        setTotalAdmin(state, LastPage) {
            state.adminTotal = LastPage;
        },
        setAdminsLastPage(state, total) {
            state.adminLastPage = total;
        },
        setToken(state, token) {
            state.token = token;
        },
        setAdmin(state, data) {
            state.admin = data;
        },
        setErrorMessage(state, data) {
            state.errorMessage = data;
        },
        setOverLay(state, data) {
            state.overLay = data;
        },
    },
    getters: {
        getAdmins(state) {
            return state.admins;
        },
        getAdminsTotal(state) {
            return state.adminTotal;
        },
        getAdminsLastPage(state) {
            return state.adminLastPage;
        },
        authenticated(state) {
            return state.token && state.admin;
        },
        getAdmin(state) {
            return state.admin;
        },
        getErrorMessage(state) {
            return state.errorMessage;
        },
        getOverLay(state) {
            return state.overLay;
        },
    },
    actions: {
        async fetchAdmins({ commit }, params) {
            try {
                const response = await axios.get("/admins", {
                    params,
                });
                commit("setAdmins", response.data);
                commit("setTotalAdmin", response.data.meta?.total);
                commit("setAdminsLastPage", response.data.meta?.last_page);
            } catch (error) {
                console.error(error);
            }
        },
        async signIn({ commit, dispatch }, credentials) {
            try {
                const response = await axios.post("auth/login", credentials);
                router.replace({ name: "appointments" });
                commit("setErrorMessage", null);
                commit("setOverLay", true);
                setTimeout(() => {
                    commit("setOverLay", false);
                }, 3000);
                console.log(response);
                return dispatch("attempt", response.data.access_token);
            } catch (error) {
                // Si la connexion échoue, afficher le message d'erreur
                if (error.response.status === 401) {
                    commit("setErrorMessage", "Identifiants invalides. Veuillez réessayer.");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Identifiants invalides. Veuillez réessayer.',
                        showConfirmButton: false,
                        timer: 3000
                    })
                } else {
                    commit("setErrorMessage", "Une erreur s'est produite. Veuillez réessayer.");
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: "Une erreur s'est produite. Veuillez réessayer.",
                        showConfirmButton: false,
                        timer: 3000
                    })
                }

            }
        },
        async attempt({ commit, state }, token) {

            try {
                if (token) {
                    commit("setToken", token);
                }

                if (!state.token) {
                    return;

                }

                const response = await axios.post(`auth/me?token=${token}`);

                commit("setAdmin", response.data.data);

                console.log("success");
            } catch (error) {
                commit("setAdmin", null);
                commit("setToken", null);
            }
        },
        async signUp({ commit }, credentials) {
            try {
                const response = await axios
                    .post("admins", credentials)
                    .then(() => {
                        router.replace({ name: "loginfront" });
                        commit("setErrorMessage", null);
                        commit("setOverLay", true);
                        setTimeout(() => {
                            commit("setOverLay", false);
                        }, 3000);
                    })
            } catch (error) {
                commit("setErrorMessage", "Cet email est déjà utilisé.");
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "Une erreur s'est produite. Veuillez réessayer.",
                    showConfirmButton: false,
                    timer: 3000
                })

            }
        },
        async signOut({ commit, state }) {
            try {

                await axios.post(`auth/logout?token=${state.token}`).then(() => {
                    localStorage.removeItem("token");
                    commit("setAdmin", null);
                    commit("setToken", null);
                    router.replace({ name: "homefront" });
                });

            } catch (error) {
                console.log(error)
            }
        },
    },
};
