<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <router-link class="navbar-brand logo" :to="{ name: 'homefront' }">
        <img class="img-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_Good_Doctor_logo_2.svg/2560px-The_Good_Doctor_logo_2.svg.png"
          alt="">
      </router-link>
      <button class="navbar-toggler" @click="showNavbaResponsive = !showNavbaResponsive">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li v-for="nav in listsNav" :key="nav.id" class="nav-item">
            <router-link :to="{ name: nav.link }" class="nav-link" :class="{ 'admin': nav.title === 'Admin' }">
              {{ nav.title }}
              <!--<font-awesome-icon icon="fa-solid fa-angle-down" class="ml-1"/>-->
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item contact-item">
            <div class="header-contact-img">
              <font-awesome-icon icon="fa-solid fa-hotel" class="img-hop" />
            </div>
            <div class="header-contact-detail">
              <p class="contact-header m-0">Contact</p>
              <p class="contact-info-header m-0 text-dark font-weight-bold"> +212 6 10 20 52 13</p>
            </div>
          </li>
          <li v-if="!authenticated" class="nav-item">
            <router-link :to="{ name: 'loginfront' }" class="nav-link header-login" href="/template/login">login / Signup
            </router-link>
          </li>
          <li v-else class="nav-item position-relative" @mouseleave="show = false" @click="show = !show">
            <a class="nav-link" role="button">
              <span class="user-img">
                <img :src="getUser.photo" style="border-radius: 50%;" alt="user" width="36" height="36">
              </span>
            </a>
            <transition>
              <div v-if="show" class="dropdown-menu dropdown-user show p-0 position-absolute">
                <div class="user-header">
                  <div class="avatar avatar-sm">
                    <img :src="getUser.photo" alt="User Image" class="avatar-img rounded-circle" width="36" height="36">
                  </div>
                  <div class="user-text ml-2">
                    <h6 class="m-0 font-weight-bold">{{ getUser.username }}</h6>
                    <p class="text-muted mb-0">Doctor</p>
                  </div>
                </div>
                <a class="dropdown-item text-muted mb-2" href="#">
                  <font-awesome-icon class="mr-2" style="color:#333" icon="fa-regular fa-user" />Dashboard
                </a>
                <a class="dropdown-item text-muted mb-2" href="#">
                  <font-awesome-icon class="mr-2" style="color:#333" icon="fa-solid fa-pen-to-square" />Profile Settings
                </a>
                <hr class="my-0 ms-2 me-2">
                <a class="dropdown-item text-muted mb-2" @click="signOut" style="cursor: pointer;">
                  <font-awesome-icon class="mr-2" icon="fa-solid fa-right-from-bracket" />Logout
                </a>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </nav>
    <!-- start navbar responsive -->
    <div class="navbar-responsive" :class="{ active: showNavbaResponsive }">
      <div class="closemmn" @click="showNavbaResponsive = !showNavbaResponsive">
        <font-awesome-icon style="margin-left: 7px;" icon="fa-regular fa-circle-xmark" />
      </div>
      <div style="box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) !important;">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item" v-for="nav in listsNav" :key="nav.id">
            <router-link :to="{ name: nav.link }" class="nav-link">
              <h6 :class="{ 'admin': nav.title === 'Admin' }">{{ nav.title }}</h6>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- end navbar responsive -->
  </header>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {

  components: {},
  data() {
    return {
      showNavbaResponsive: false,
      show: false,
      listsNav: [
        {
          title: 'Home',
          link: 'homefront',
        },
        {
          title: 'Doctors',
          link: 'doctorsfront',
        },
        {
          title: 'Patients',
          link: 'patientsfront',
        },
        {
          title: 'Pharmacy',
          link: 'pharmacyfront',
        },
        {
          title: 'Blog',
          link: 'blogfront',
        }
        ,
        {
          title: 'Admin',
          link: 'appointments',
        }
      ],
    }
  },
  methods: {
    ...mapActions({
      signOut: "Doctors/signOut",
    })
  },
  computed: {
    ...mapGetters({
      authenticated: "Doctors/authenticated",
      getUser: "Doctors/getUser"
    }),
  },
}
</script>
<style>
.navbar {
  height: 85px;
  padding: 0 30px;
}

.logo {
  display: inline-block;
  margin-right: 30px;
  width: 160px;
}

.img-logo {
  max-width: 100%;
  height: auto;
}

.nav-link {
  color: #333 !important;
  font-weight: bold;
  font-size: 17px;
  margin-right: 20px;
  transition: .1s;
}

.nav-link:hover {
  color: #03a9f4 !important;
}

.router-link-active {
  color: #5c8ed3 !important;
  font-weight: 700;
}

.contact-item {
  align-items: center;
  -webkit-box-align: center;
  display: inline-flex;
  padding-right: 20px;
  -webkit-justify-content: center;
}

.header-contact-img {
  display: inline-block;
}

.contact-header {
  color: #333333b8;
  font-weight: 600;
}

.img-hop {
  font-size: 31px;
  color: #333333b8;
}

.header-contact-detail {
  display: inline-block;
  padding-left: 10px;
}

.navbar-light .navbar-toggler {
  border-color: rgb(0 0 0 / 0%);
}

.header-login {
  border: 2px solid #00bcd4;
  color: #00bcd4 !important;
  border-radius: 6px;
  transition: .3s;
}

.header-login:hover {
  background: #00bcd4;
  color: white !important;
}

.admin {
  background: #00b9ff;
  color: white !important;
  border-radius: 37px;
  transition: 1s;
  padding: 5px 17px;
}

.admin:hover {
  background: #ffffff;
  color: rgb(0, 0, 0) !important;
  border-radius: 37px;
}

.user-header {
  background-color: #F5F6FA;
  border-radius: 5px;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  padding: 10px;
}

.user-header::before,
.dropdown-header::before {
  content: '';
  border: 7px solid #fff;
  border-color: transparent transparent #fff #fff;
  box-shadow: -2px 2px 2px -1px rgb(0 0 0 / 10%);
  right: 0;
  position: absolute;
  top: 2px;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

.dropdown-user {
  left: -105px;
}

.dropdown-notifications .dropdown-header {
  /* float: left; */
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid #33333342;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: black;
}


.dropdown-notifications .dropdown-menu-lg {
  min-width: 395px;
}

.dropdown-notifications .notification-time {
  font-size: 12px;
  line-height: 1.35;
  float: right;
}

.dropdown-notifications .noti-title {
  color: #0CE0FF;
}

.dropdown-notifications .avatar {
  margin-right: 15px;
  border-radius: 5px;
}

.dropdown-notifications .noti-content {
  height: 260px;
  width: 100%;
  overflow-y: auto;
  position: relative;
}


/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Navbar Responsive */
.navbar-responsive {
  display: flex;
  position: fixed;
  z-index: 999;
  background: #ffffff;
  height: 100%;
  justify-content: left;
  top: 0;
  left: -419px;
  transition: all 1s ease-in-out;
  font-family: "Poppins", sans-serif;
}

.navbar-responsive .closemmn {
  color: #73d0f3;
  background-color: #fff;
  position: absolute;
  top: 15px;
  right: -27px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  font-size: 34px;
  border-radius: 50%;
}

.navbar-responsive .navbar-brand {
  margin-right: 110px;
}

.navbar-responsive .navbar-nav {
  width: 215px;
  padding: 10px;
}

.navbar-responsive .collapse .nav-link {
  font-weight: 600;
  text-transform: capitalize;
  transition: 0.5s;
}

.navbar-responsive .collapse .nav-link:hover {
  background: #75d0f3;
  color: black;
}

.navbar-responsive .icons-col a {
  position: relative;
  color: black;
  display: inherit;
  font-size: 25px;
}

.navbar-responsive .icons-col button {
  background: none;
  border: none;
  font-size: 23px;
}

.navbar-responsive .icons-col a .cart {
  position: absolute;
  background: black;
  color: white;
  min-width: 16px;
  height: 16px;
  border-radius: 16px;
  line-height: 17px;
  right: 40px;
  top: 0px;
  font-size: 11px;
}

.navbar-responsive .navbar-nav a {
  position: relative;
  color: black;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  position: relative;
  line-height: 40px;
  /*padding: 0 15px;*/
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.navbar-responsive .navbar-nav a span {
  position: absolute;
  top: -10px;
  left: 55%;
  font-size: 8px;
  background-color: green;
  display: inline-block;
  padding: 3px 4px;
  vertical-align: middle;
  color: white;
  line-height: 1;
  z-index: 4;
}

.navbar-responsive .navbar-nav a span::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 5px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid green;
  top: 7px;
  left: 3px;
}

.navbar-responsive .search-popup {
  width: 100%;
  padding: 40px 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: white;
  text-align: left;
  opacity: 0;
  display: none;
  transform: translateY(100%);
}

.navbar-responsive .search-popup button {
  background: none;
  border: none;
}

.navbar-responsive .search-popup .closeSearch {
  position: absolute;
  color: black;
  font-size: 17px;
  top: 10px;
  right: 20px;
}

.navbar-responsive .search-popup h4 {
  font-weight: 800;
  color: black;
  font-size: 16px;
}

.navbar-responsive .input-group .form-control {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  border-bottom: 1px solid #eeeeee;
}

.navbar-responsive .input-group .btn {
  border: none;
}

.navbar-responsive .input-group .form-control::placeholder {
  font-size: 12px;
}

.navbar-responsive .search-popup-none {
  opacity: 1;
  display: block;
  transform: translateY(0);
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {

  .banner .navbar-brand {
    margin: initial;
  }

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }

  .sci {
    bottom: 105px;
    gap: 70px;
  }

  .img-logo {
    max-width: 72%;
  }

  .content {

    margin-bottom: 110px;
  }

  .banner header {
    padding: 16px 19px;
  }

  .banner {
    padding: 26px;
  }

  .banner .checkbtn {
    display: block;
  }

  .banner .link {
    display: none;
  }

  .navbar-responsive.active {
    left: 0;
  }

  .navbar-responsive .navbar-nav .nav-link {
    line-height: 0;
  }

  .navbar-responsive .navbar-nav {
    padding: 53px 10px;
  }
}

@media (min-width: 429px) and (max-width: 834px) {
  .navbar-responsive .navbar-nav .nav-link {
    line-height: 0;
  }

  .navbar-responsive .navbar-nav {
    padding: 53px 10px;
  }

  .banner .navbar-brand {
    margin: initial;
  }

  h2 {
    font-size: 3em;
  }

  p {
    font-size: 1.5em;
    margin-top: 57px;
  }

  .sci {
    bottom: 157px;
    gap: 131px;
  }

  .content {

    margin-bottom: 420px;
  }

  .banner header {
    padding: 44px 66px;
  }

  .banner {
    padding: 87px;
  }

  .banner .checkbtn {
    display: block;
  }

  .banner .link {
    display: none;
  }

  .navbar-responsive.active {
    left: 0;
  }

  .sci li a {
    font-size: 3.5em;
  }

  .men {
    max-width: 635px;

  }

  .logo {

    font-size: 2.5em;

  }

  label .fa {
    font-size: 2em;
  }
}

/* end media */
</style>
  