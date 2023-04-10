<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li @click="$store.state.LogoBigSmall = !$store.state.LogoBigSmall" class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button">
          <font-awesome-icon icon="fa-regular fa-chart-bar" />
        </a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </span>
          </div>
          <input type="text" class="form-control" placeholder="Start you search...">
        </div>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item nav-link">
        <a href="" class="dark-mode-toggle">
          <font-awesome-icon icon="fa-regular fa-moon" class="dark-mode-toggle-active" />
          <font-awesome-icon icon="fa-regular fa-sun" />
        </a>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <font-awesome-icon style="color:#333" icon="fa-solid fa-bell" />
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-notifications dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <div class="noti-content">
            <ul class="list-unstyled">
              <li v-for="item in 6" :key="item.id">
                <a href="#" class="dropdown-item">
                  <div class="media d-flex">
                    <span class="avatar">
                      <img class="avatar-img" alt=""
                        src="https://doccure-react.dreamguystech.com/template/32b8469a75322a6ba6b15343e65f1072.jpg"
                        width="40" height="40">
                    </span>
                    <div class="media-body">
                      <h6>Travis Tremble <span class="notification-time">18.30 PM</span>
                      </h6>
                      <p class="noti-details">Sent a amount of $210 for his Appointment <span class="noti-title">Dr.Ruby
                          perin </span></p>
                    </div>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
              </li>
            </ul>
          </div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <font-awesome-icon style="color:#333" icon="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </li>
      <li class="nav-item position-relative" @mouseleave="show = false" @click="show = !show">
        <a class="nav-link" role="button">
          <span class="user-img">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" width="36" height="36">
          </span>
        </a>
        <transition>
          <div v-if="show" class="dropdown-menu dropdown-user show p-0 position-absolute">
            <div class="user-header">
              <div class="avatar avatar-sm">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Image"
                  class="avatar-img rounded-circle" width="36" height="36">
              </div>
              <div class="user-text ml-2">
                <h6 class="m-0 font-weight-bold">Robert Haddin</h6>
                <p class="text-muted mb-0">Administrator</p>
              </div>
            </div>
            <a class="dropdown-item text-muted mb-2" href="#">
              <font-awesome-icon class="mr-2" style="color:#333" icon="fa-regular fa-user" />My Profile
            </a>
            <a class="dropdown-item text-muted mb-2" href="#">
              <font-awesome-icon class="mr-2" style="color:#333" icon="fa-solid fa-pen-to-square" />Edit Profile
            </a>
            <a class="dropdown-item text-muted mb-2" href="#">
              <font-awesome-icon class="mr-2" style="color:#333" icon="fa-solid fa-magnifying-glass" />Account Settings
            </a>
            <hr class="my-0 ms-2 me-2">
            <a class="dropdown-item text-muted mb-2" href="#">
              <font-awesome-icon class="mr-2" icon="fa-solid fa-right-from-bracket" />Logout
            </a>
          </div>
        </transition>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'NavbarBack',
  data() {
    return {
      show: false
    }
  }
}
</script>
<style scoped>
.navbar-nav .nav-item .form-control {
  border: 0;
}

.navbar-nav .nav-item .input-group-text {
  background: none;
  border: 0;
}

.nav-link {
  display: flex;
  align-items: center;
}

.dark-mode-toggle {
  width: 63px;
  height: 31px;
  background-color: #FFF;
  color: #5c8ed3;
  font-size: 16px;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  border: 1px solid rgba(66, 139, 193, 0.22);
  border-radius: 3px;
  margin: 15px 15px 15px 0;
  padding: 4px 8px;
}


.dark-mode-toggle-active {
  background: #5c8ed3;
  color: white;
  padding: 4px;
  margin-right: 6px;
  border-radius: 2px;
  display: block;
  justify-content: center;
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
}</style>