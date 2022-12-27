<template>
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <a class="navbar-brand logo" href="#">
          <img class="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_Good_Doctor_logo_2.svg/2560px-The_Good_Doctor_logo_2.svg.png" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li v-for="nav in listsNav" :key="nav.id" class="nav-item">
              <router-link :to="{ name : nav.link }" class="nav-link" href="#">
                {{ nav.title }}
                <font-awesome-icon icon="fa-solid fa-angle-down" class="ml-1"/>
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
            <li class="nav-item">
              <a class="nav-link header-login" href="/template/login">login / Signup </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  
  export default {
    components: {},
    data() {
      return {
        listsNav: [
            {
              title : 'Home',
              link : 'homefront',
            },
            {
              title : 'Doctors',
              link : 'doctorsfront',
            },
            {
              title : 'Patients',
              link : 'patientsfront',
            },
            {
              title : 'Pharmacy',
              link : 'pharmacyfront',
            },
            {
              title : 'Blog',
              link : 'blogfront',
            }
          ],
      }
    }
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
      color: #333!important;
      font-weight: bold;
      font-size: 17px;
      margin-right: 20px;
      transition: .1s;
  }
  .nav-link:hover {
      color: #03a9f4!important;
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
      color: #00bcd4!important;
      border-radius: 6px;
      transition: .3s;
  }
  .header-login:hover {
      background: #00bcd4;
      color: white!important;
  }
  </style>
  