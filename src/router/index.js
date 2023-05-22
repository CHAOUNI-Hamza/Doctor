import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: '/:pathMatch(.*)*', component: () =>
      import(
    /* webpackChunkName: "PageNotFound" */ "../views/FrontEnd/PageNotFound"
      ),
  },
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
    beforeEnter: (to, from, next) => {
      if (store.getters["Doctors/authenticated"]) {
        return next({ name: "doctorsfront" });
      }

      next();
    }
  },
  {
    path: "/admin/login",
    name: "loginadmin",
    component: () =>
      import(
        /* webpackChunkName: "loginadmin" */ "../views/FrontEnd/LoginAdmin"
      ),
    beforeEnter: (to, from, next) => {
      if (store.getters["Auth/authenticated"]) {
        return next({ name: "appointments" });
      }

      next();
    }
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
    beforeEnter: (to, from, next) => {
      if (store.getters["Doctors/authenticated"]) {
        return next({ name: "doctorsfront" });
      }

      next();
    }
  },
  {
    path: "/doctors",
    name: "doctorsfront",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/FrontEnd/DoctorsFront"
      ),
    beforeEnter: (to, from, next) => {
      if (!store.getters["Doctors/authenticated"]) {
        return next({ name: "loginfront" });
      }

      next();
    }
  },
  {
    path: "/doctors/:id",
    name: "invoicesOneFront",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/FrontEnd/InvoicesOneFront"
      ),
  },
  {
    path: "/patients",
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
    children: [
      {
        path: "reset-password-admin/:token",
        name: "resetpasswordadmin",
        component: () =>
          import(
            /* webpackChunkName: "forgot-password" */ "../views/FrontEnd/ResetPasswordAdmin"
          ),
      },
      {
        path: "forgot-password-admin",
        name: "forgotpasswordadmin",
        component: () =>
          import(
            /* webpackChunkName: "forgot-password" */ "../views/FrontEnd/ForgoutPasswordAdmin"
          ),
      },
      {
        path: "appointments",
        name: "appointments",
        component: () =>
          import(
              /* webpackChunkName: "appointments" */ "../views/BackEnd/AppointmentsBack"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "specialities",
        name: "specialities",
        component: () =>
          import(
              /* webpackChunkName: "specialities" */ "../views/BackEnd/SpecialitiesBack"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "patients",
        name: "patients",
        component: () =>
          import(
              /* webpackChunkName: "patients" */ "../views/BackEnd/PatientsBack"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "doctors",
        name: "doctors",
        component: () =>
          import(/* webpackChunkName: "doctors" */ "../views/BackEnd/DoctorsBack"),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "settings",
        name: "settings",
        component: () =>
          import(
              /* webpackChunkName: "settings" */ "../views/BackEnd/SettingsBack"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "reviews",
        name: "reviews",
        component: () =>
          import(/* webpackChunkName: "settings" */ "../views/BackEnd/ReviewsBack"),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "transactions",
        name: "transactions",
        component: () =>
          import(
              /* webpackChunkName: "settings" */ "../views/BackEnd/TransactionsBack"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "pharmacies",
        name: "pharmacies",
        component: () =>
          import(
              /* webpackChunkName: "settings" */ "../views/BackEnd/PharmaciesBack"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "pharmacies/category",
        name: "categorypharmacies",
        component: () =>
          import(
              /* webpackChunkName: "settings" */ "../views/BackEnd/CategoryPharmaciesBack"
          ),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      },
      {
        path: "profile",
        name: "profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/BackEnd/ProfileBack"),
        beforeEnter: (to, from, next) => {
          if (!store.getters["Auth/authenticated"]) {
            return next({ name: "loginadmin" });
          }

          next();
        }
      }
    ]
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
