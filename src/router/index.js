import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/doctor-dashboard",
    name: "doctordashboard",
    component: () =>
      import(
        /* webpackChunkName: "doctordashboard" */ "../views/FrontEnd/DoctorsFront"
      ),
  },
  {
    path: "/",
    name: "homefront",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/FrontEnd/HomeFront"),
  },
  {
    path: "/doctor-search",
    name: "doctorsearch",
    component: () =>
      import(
        /* webpackChunkName: "doctorsearch" */ "../views/FrontEnd/DoctorSearch"
      ),
  },
  {
    path: "/doctor-profile",
    name: "doctorprofile",
    component: () =>
      import(
        /* webpackChunkName: "doctorsearch" */ "../views/FrontEnd/ProfileDoctor"
      ),
  },
  {
    path: "/doctor-booking",
    name: "doctorbooking",
    component: () =>
      import(
        /* webpackChunkName: "doctorsearch" */ "../views/FrontEnd/BookingDoctor"
      ),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(
        /* webpackChunkName: "doctorsearch" */ "../views/FrontEnd/Checkout"
      ),
  },
  {
    path: "/boking-success",
    name: "boking-success",
    component: () =>
      import(
        /* webpackChunkName: "doctorsearch" */ "../views/FrontEnd/BookingSuccess"
      ),
  },
  {
    path: "/invoice-view",
    name: "invoice-view",
    component: () =>
      import(
        /* webpackChunkName: "doctorsearch" */ "../views/FrontEnd/InvoiceView"
      ),
  },
  {
    path: "/pharmacy-search",
    name: "pharmacysearch",
    component: () =>
      import(
        /* webpackChunkName: "doctorsearch" */ "../views/FrontEnd/PharmacySearch"
      ),
  },
  {
    path: "/login",
    name: "loginfront",
    component: () =>
      import(
        /* webpackChunkName: "loginfront" */ "../views/FrontEnd/LoginFront"
      ),
  },
  {
    path: "/forgot-password",
    name: "forgotpassword",
    component: () =>
      import(
        /* webpackChunkName: "forgot-password" */ "../views/FrontEnd/ForgotPasswordFront"
      ),
  },
  {
    path: "/register",
    name: "registerfront",
    component: () =>
      import(
        /* webpackChunkName: "registerfront" */ "../views/FrontEnd/RegisterFront"
      ),
  },
  {
    path: "/doctors",
    name: "doctorsfront",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/FrontEnd/DoctorsFront"
      ),
  },
  {
    path: "/Doctors/:id",
    name: "invoicesOneFront",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/FrontEnd/InvoicesOneFront"
      ),
  },
  {
    path: "/Patients",
    name: "patientsfront",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/FrontEnd/PatientsFront"
      ),
  },
  {
    path: "/Pharmacy",
    name: "pharmacyfront",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/FrontEnd/PharmacyFront"
      ),
  },
  {
    path: "/Blog",
    name: "blogfront",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/FrontEnd/BlogFront"),
  },
  {
    path: "/admin",
    name: "dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/BackEnd/DashboardBack"
      ),
  },
  {
    path: "/admin/appointments",
    name: "appointments",
    component: () =>
      import(
        /* webpackChunkName: "appointments" */ "../views/BackEnd/AppointmentsBack"
      ),
  },
  {
    path: "/admin/specialities",
    name: "specialities",
    component: () =>
      import(
        /* webpackChunkName: "specialities" */ "../views/BackEnd/SpecialitiesBack"
      ),
  },
  {
    path: "/admin/patients",
    name: "patients",
    component: () =>
      import(
        /* webpackChunkName: "patients" */ "../views/BackEnd/PatientsBack"
      ),
  },
  {
    path: "/admin/doctors",
    name: "doctors",
    component: () =>
      import(/* webpackChunkName: "doctors" */ "../views/BackEnd/DoctorsBack"),
  },
  {
    path: "/admin/settings",
    name: "settings",
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "../views/BackEnd/SettingsBack"
      ),
  },
  {
    path: "/admin/reviews",
    name: "reviews",
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/BackEnd/ReviewsBack"),
  },
  {
    path: "/admin/transactions",
    name: "transactions",
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "../views/BackEnd/TransactionsBack"
      ),
  },
  {
    path: "/admin/pharmacies",
    name: "pharmacies",
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "../views/BackEnd/PharmaciesBack"
      ),
  },
  {
    path: "/admin/pharmacies/category",
    name: "categorypharmacies",
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "../views/BackEnd/CategoryPharmaciesBack"
      ),
  },
  {
    path: "/admin/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/BackEnd/ProfileBack"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
