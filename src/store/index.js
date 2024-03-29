import { createStore } from "vuex";
import AppointmentsModule from "./Appointments";
import SpecialitiesModule from "./Specialities";
import DoctorsModule from "./Doctors";
import PatientsModule from "./Patients";
import PharmaciesModule from "./Pharmacies";
import CategoriesModule from "./Categories";
import SettingsModule from "./Settings";
import AuthModule from "./Auth";

export default createStore({
  state: {
    LogoBigSmall: true,
    UrlBack: "http://localhost:8000",
  },
  getters: {
    getLogoBigSmall(state) {
      return state.LogoBigSmall;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    Appointments: AppointmentsModule,
    Specialities: SpecialitiesModule,
    Doctors: DoctorsModule,
    Patients: PatientsModule,
    Pharmacies: PharmaciesModule,
    Categories: CategoriesModule,
    Settings: SettingsModule,
    Auth: AuthModule,
  },
});
