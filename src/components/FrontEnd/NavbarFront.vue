<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
      <router-link class="navbar-brand logo" :to="{ name: 'homefront' }">
        <img class="img-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_Good_Doctor_logo_2.svg/2560px-The_Good_Doctor_logo_2.svg.png"
          alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
  </header>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {

  components: {},
  data() {
    return {
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
</style>
  