<template>
  <!-- Brand Logo -->
  <a v-if="LogoBigSmall" href="index3.html" class="brand-link">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_Good_Doctor_logo_2.svg/2560px-The_Good_Doctor_logo_2.svg.png"
      alt="AdminLTE Logo"
      class="logo"
      style="opacity: 0.8" />
  </a>
  <a v-if="!LogoBigSmall" href="index3.html" class="brand-link">
    <img
      src="https://www.pgdesign.be/wp-content/uploads/2020/06/Logo-bleu-400.png"
      alt="AdminLTE Logo"
      class="logo"
      style="opacity: 0.8" />
  </a>
  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul
        class="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->
        <li class="nav-item menu-open">
          <ul class="nav nav-treeview">
            <li v-for="nav in listsNav" :key="nav.id" class="nav-item">
              <router-link :to="{ name: nav.link }" class="nav-link">
                <font-awesome-icon
                  style="color: #333"
                  class="icone"
                  :icon="nav.icone" />
                <p>{{ nav.title }}</p>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      listsNav: [
        {
          title: "Dashboard",
          link: "dashboard",
          icone: "fa-solid fa-gauge",
        },
        {
          title: "Appointments",
          link: "appointments",
          icone: "fa-solid fa-table-columns",
        },
        {
          title: "Specialities",
          link: "specialities",
          icone: "fa-solid fa-cube",
        },
        {
          title: "Doctors",
          link: "doctors",
          icone: "fa-solid fa-user-plus",
        },
        {
          title: "Patients",
          link: "patients",
          icone: "fa-solid fa-users",
        },
        {
          title: "Reviews",
          link: "reviews",
          icone: "fa-solid fa-star",
        },
        {
          title: "Transactions",
          link: "transactions",
          icone: "fa-regular fa-credit-card",
        },
        {
          title: "Settings",
          link: "settings",
          icone: "fa-solid fa-sliders",
        },
        {
          title: "Pharmacies",
          link: "pharmacies",
          icone: "fa-solid fa-prescription-bottle-medical",
        },
        {
          title: "Category Pharmacies",
          link: "categorypharmacies",
          icone: "fa-solid fa-prescription-bottle-medical",
        },
        {
          title: "Profile",
          link: "profile",
          icone: "fa-regular fa-address-card",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      LogoBigSmall: "getLogoBigSmall",
    }),
  },
};
</script>
<style scoped>
.nav-link {
  font-size: 18px;
}

.nav-link p {
  margin-left: 10px;
  color: #333 !important;
  font-weight: 300;
  font-size: 16px;
}

.brand-link .logo {
  opacity: 0.8;
  width: 67%;
}

.brand-link {
  border-bottom: 1px solid #4b545c30 !important;
}

.router-link-active {
  color: #5c8ed3 !important;
  font-weight: 700;
  background: #5c8ed32b;
}

.icone {
  width: 20px;
}
</style>
