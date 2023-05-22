import axios from 'axios';
import router from "@/router";

export default {
  namespaced: true,
  state: {
    doctors: [],
    doctorsTotal: null,
    doctorsLastPage: null,
    token: null,
    user: {},
    errorMessage: null,
    overLay: false
  },
  mutations: {
    // Définit les médecins
    setDoctors(state, doctors) {
      state.doctors = doctors;
    },
    // Définit le total des médecins
    setTotalDoctor(state, LastPage) {
      state.doctorsTotal = LastPage;
    },
    // Définit la dernière page des médecins
    setDoctorsLastPage(state, total) {
      state.doctorsLastPage = total;
    },
    // Définit le jeton d'authentification
    setToken(state, token) {
      state.token = token;
    },
    // Définit l'utilisateur connecté
    setUser(state, data) {
      state.user = data;
    },
    // Définit le message d'erreur
    setErrorMessage(state, data) {
      state.errorMessage = data;
    },
    // Définit l'indicateur d'affichage en superposition
    setOverLay(state, data) {
      state.overLay = data;
    },
  },
  getters: {
    // Retourne les médecins
    getDoctors(state) {
      return state.doctors;
    },
    // Retourne le total des médecins
    getDoctorsTotal(state) {
      return state.doctorsTotal;
    },
    // Retourne la dernière page des médecins
    getDoctorsLastPage(state) {
      return state.doctorsLastPage;
    },
    // Indique si l'utilisateur est authentifié
    authenticated(state) {
      return state.token && state.user;
    },
    // Retourne l'utilisateur connecté
    getUser(state) {
      return state.user;
    },
    // Retourne le message d'erreur
    getErrorMessage(state) {
      return state.errorMessage;
    },
    // Retourne l'indicateur d'affichage en superposition
    getOverLay(state) {
      return state.overLay;
    },
  },
  actions: {
    // Récupère les médecins
    async fetchDoctors({ commit }, params) {
      try {
        const response = await axios.get("/doctors", {
          params,
        });
        commit("setDoctors", response.data);
        commit("setTotalDoctor", response.data.meta?.total);
        commit("setDoctorsLastPage", response.data.meta?.last_page);
      } catch (error) {
        console.error(error);
      }
    },
    // Connexion de l'utilisateur
    async signIn({ commit, dispatch }, credentials) {
      try {
        const response = await axios.post("doctors/login", credentials);
        router.replace({ name: "doctorsfront" });
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
    // Met à jour le statut d'un médecin
    async updateStatus({ dispatch }, info) {
      try {
        const response = await axios.post(`/doctors/${info.id}/update-status`, {
          status: info.status,
        });
        return dispatch("fetchDoctors")
      } catch (error) {
        console.error(error);
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

        const response = await axios.post('doctors/me');

        commit("setUser", response.data.data);

        console.log(response);
      } catch (error) {
        commit("setUser", null);
        commit("setToken", null);
      }
    },
    // Inscription d'un nouvel utilisateur
    async signUp({ commit }, credentials) {
      try {
        const response = await axios
          .post("doctors", credentials)
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
    // Déconnexion de l'utilisateur
    async signOut({ commit }) {
      try {

        await axios.post('doctors/logout').then(() => {
          localStorage.removeItem("tokenDoctor");
          commit("setUser", null);
          commit("setToken", null);
          router.replace({ name: "homefront" });
        });

      } catch (error) {
        console.log(error)
      }
    },
    // Change Password de l'utilisateur
    async changePasswordDoctor({ commit, dispatch }, credentials) {
      try {
        const response = await axios.post("doctors/change_password", credentials);
        commit("setErrorMessage", null);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'The password has been changed successfully.',
          showConfirmButton: false,
          timer: 3000
        })
        return dispatch("attempt", response.data.access_token);
      } catch (error) {
        // Si la connexion échoue, afficher le message d'erreur
        if (error.response.status === 422) {
          commit("setErrorMessage", "The current password is incorrect.");
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'The current password is incorrect.',
            showConfirmButton: false,
            timer: 3000
          })
        }

      }
    },
  },
};
