import axios from "../../axios.config";
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
    setDoctors(state, doctors) {
      state.doctors = doctors;
    },
    setTotalDoctor(state, LastPage) {
      state.doctorsTotal = LastPage;
    },
    setDoctorsLastPage(state, total) {
      state.doctorsLastPage = total;
    },
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, data) {
      state.user = data;
    },
    setErrorMessage(state, data) {
      state.errorMessage = data;
    },
    setOverLay(state, data) {
      state.overLay = data;
    },
  },
  getters: {
    getDoctors(state) {
      return state.doctors;
    },
    getDoctorsTotal(state) {
      return state.doctorsTotal;
    },
    getDoctorsLastPage(state) {
      return state.doctorsLastPage;
    },
    authenticated(state) {
      return state.token && state.user;
    },
    getUser(state) {
      return state.user;
    },
    getErrorMessage(state) {
      return state.errorMessage;
    },
    getOverLay(state) {
      return state.overLay;
    },
  },
  actions: {
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
    async attempt({ commit, state }, token) {
      try {
        if (token) {
          commit("setToken", token);
        }

        if (!state.token) {
          return;
        }

        const response = await axios.post(`doctors/me?token=${token}`);

        commit("setUser", response.data.data);

        console.log("success");
      } catch (error) {
        commit("setUser", null);
        commit("setToken", null);
      }
    },
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
    async signOut({ commit, state }) {
      try {

        await axios.post(`doctors/logout?token=${state.token}`).then(() => {
          localStorage.removeItem("token");
          commit("setUser", null);
          commit("setToken", null);
          router.replace({ name: "homefront" });
        });

      } catch (error) {
        console.log(error)
      }
    },
  },
};
