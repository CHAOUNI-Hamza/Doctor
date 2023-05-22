import axios from 'axios';
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
        // Mutateur pour mettre à jour la liste des administrateurs
        setAdmins(state, admins) {
            state.admins = admins;
        },
        // Mutateur pour mettre à jour le total des administrateurs
        setTotalAdmin(state, LastPage) {
            state.adminTotal = LastPage;
        },
        // Mutateur pour mettre à jour la dernière page des administrateurs
        setAdminsLastPage(state, total) {
            state.adminLastPage = total;
        },
        // Mutateur pour mettre à jour le token
        setToken(state, token) {
            state.token = token;
        },
        // Mutateur pour mettre à jour les données de l'administrateur actuel
        setAdmin(state, data) {
            state.admin = data;
        },
        // Mutateur pour définir le message d'erreur
        setErrorMessage(state, data) {
            state.errorMessage = data;
        },
        // Mutateur pour définir l'état de superposition (overlay)
        setOverLay(state, data) {
            state.overLay = data;
        },
    },
    getters: {
        // Getter pour obtenir la liste des administrateurs
        getAdmins(state) {
            return state.admins;
        },
        // Getter pour obtenir le total des administrateurs
        getAdminsTotal(state) {
            return state.adminTotal;
        },
        // Getter pour obtenir la dernière page des administrateurs
        getAdminsLastPage(state) {
            return state.adminLastPage;
        },
        // Getter pour vérifier si l'administrateur est authentifié
        authenticated(state) {
            return state.token && state.admin;
        },
        // Getter pour obtenir les données de l'administrateur actuel
        getAdmin(state) {
            return state.admin;
        },
        // Getter pour obtenir le message d'erreur
        getErrorMessage(state) {
            return state.errorMessage;
        },
        // Getter pour obtenir l'état de superposition (overlay)
        getOverLay(state) {
            return state.overLay;
        },
    },
    actions: {
        // Action pour récupérer la liste des administrateurs
        async fetchAdmins({ commit }, params) {
            try {
                const response = await axios.get("admins", {
                    params,
                });
                commit("setAdmins", response.data);
                commit("setTotalAdmin", response.data.meta?.total);
                commit("setAdminsLastPage", response.data.meta?.last_page);
            } catch (error) {
                console.error(error);
            }
        },
        // Action pour se connecter
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
        // Action pour vérifier la connexion
        async attempt({ commit, state }, token) {
            try {
                if (token) {
                    commit("setToken", token);
                }
                if (!state.token) {
                    return;
                }
                const response = await axios.post(`auth/me`);
                commit("setAdmin", response.data.data);
            } catch (error) {
                commit("setAdmin", null);
                commit("setToken", null);
            }
        },
        // Action pour s'inscrire
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
        // Action pour mettre à jour les informations de l'administrateur
        async update({ dispatch }, params) {
            try {
                const formData = new FormData();
                formData.append("photo", params.photo);
                formData.append("name", params.name);
                formData.append("email", params.email);
                formData.append("password", params.password);
                formData.append("firstname", params.firstname);
                formData.append("lastname", params.lastname);
                formData.append("age", params.age);
                formData.append("date_naissance", params.date_naissance);
                formData.append("about_me", params.about_me);
                formData.append("adresse", params.adresse);
                formData.append("city_state", params.city_state);
                formData.append("pin_code", params.pin_code);

                const response = await axios.post(
                    `/auth/${params.id}/update`,
                    formData
                );

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Is Updated",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return dispatch("attempt")
            } catch (error) {
                console.error(error);
            }
        },
        // Action pour se déconnecter
        async signOut({ commit, state }) {
            try {

                await axios.post('auth/logout').then(() => {
                    localStorage.removeItem("token");
                    commit("setAdmin", null);
                    commit("setToken", null);
                    router.replace({ name: "homefront" });
                });

            } catch (error) {
                console.log(error)
            }
        },
        // Action pour forgout Password
        async forgoutPassword({ commit }, params) {
            try {

                const response = await axios
                    .post("auth/forgot-password-admin", params)
                    .then((res) => {
                        commit("setErrorMessage", null);
                        if (res.data == 'passwords.user') {
                            commit("setErrorMessage", "This mail does not exist.");
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'This mail does not exist.',
                                showConfirmButton: false,
                                timer: 3000
                            })
                        }
                        if (res.data == 'passwords.sent' || res.data == 'passwords.throttled') {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'The link has been sent to your email',
                                showConfirmButton: false,
                                timer: 3000
                            })
                        }
                        console.log(res.data)
                    })



            } catch (error) {
                console.log(error)
            }

        },
        // Action pour Reset password
        async ResetPassword({ _ }, params) {
            try {
                const response = await axios
                    .post("auth/reset-password-admin", params)
                    .then((res) => {
                        console.log(res);
                    })
            }
            catch (error) {
                console.log(error);
            }
        },
    },
};
