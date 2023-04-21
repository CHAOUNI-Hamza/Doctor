<template>
  <NavbarFront />
  <BreadCrumbFront />
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-lg-4 col-xl-3 sidebar">
          <div class="sticksidebar">
            <div class="profile-sidebar">
              <div class="widget-profile">
                <div class="profile-info-widget text-center">
                  <a href="" class="doc-img">
                    <img :src="getUser?.photo" alt="user-img" />
                  </a>
                  <div class="profile-info">
                    <h3>Dr. {{ getUser.username }}</h3>
                    <div class="patient-details">
                      <h5>{{ getUser.specialty?.name }}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dashboard-widget">
                <ul class="nav flex-column">
                  <li class="nav-item d-flex align-items-center" v-for="tab in tabs" :key="tab"
                    :class="['tab-button ml-2', { active: currentTab === tab.title }]" @click="currentTab = tab.title">
                    <font-awesome-icon style="color: #333" class="icone" :icon="tab.icone" />
                    <a class="nav-link active" href="#">{{ tab.title }}</a>
                  </li>

                  <li class="nav-item d-flex align-items-center tab-button ml-2" @click="signOut">
                    <font-awesome-icon style="color: #333" class="icone" icon="fa-solid fa-right-from-bracket" />
                    <a class="nav-link" href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-8 col-xl-9">
          <component :is="currentTab" class="tab"></component>
        </div>
      </div>
    </div>
  </div>
  <FooterFront />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
//import axios from "../../axios.config";
import BreadCrumbFront from "./../../components/FrontEnd/DoctorDashboard/BreadCrumbFront.vue";
import Dashboard from "./../../components/FrontEnd/DoctorDashboard/DashboardFront.vue";
import Appointments from "./../../components/FrontEnd/DoctorDashboard/AppointmentsFront.vue";
import MyPatients from "./../../components/FrontEnd/DoctorDashboard/MyPatientsFront.vue";
import ScheduleTimings from "./../../components/FrontEnd/DoctorDashboard/ScheduleTimingsFront.vue";
import AvailableTimings from "./../../components/FrontEnd/DoctorDashboard/AvailableTimingsFront.vue";
import Invoices from "./../../components/FrontEnd/DoctorDashboard/InvoicesFront.vue";
import Accounts from "./../../components/FrontEnd/DoctorDashboard/AccountsFront.vue";
import Reviews from "./../../components/FrontEnd/DoctorDashboard/ReviewsFront.vue";
import Message from "./../../components/FrontEnd/DoctorDashboard/MessageFront.vue";
import SocialeMedia from "./../../components/FrontEnd/DoctorDashboard/SocialeMediaFront.vue";
import ChangePassword from "./../../components/FrontEnd/DoctorDashboard/ChangePasswordFront.vue";
import ProfileSettings from "./../../components/FrontEnd/DoctorDashboard/ProfileSettings.vue";
export default {
  components: {
    BreadCrumbFront,
    Dashboard,
    Appointments,
    MyPatients,
    ScheduleTimings,
    AvailableTimings,
    Invoices,
    Accounts,
    Reviews,
    Message,
    SocialeMedia,
    ChangePassword,
    ProfileSettings
  },
  data() {
    return {
      //currentTab: "Dashboard",
      currentTab: "Appointments",
      doctor: [],
      tabs: [
        /*{
          title: 'Dashboard',
          icone: 'fa-solid fa-table-columns'
        },*/
        {
          title: 'Appointments',
          icone: 'fa-regular fa-calendar-check'
        },
        {
          title: 'MyPatients',
          icone: 'fa-solid fa-bed'
        },
        {
          title: 'ScheduleTimings',
          icone: 'fa-solid fa-business-time'
        },
        {
          title: 'AvailableTimings',
          icone: 'fa-solid fa-hourglass-start'
        },
        {
          title: 'Invoices',
          icone: 'fa-solid fa-file-invoice'
        },
        {
          title: 'Accounts',
          icone: 'fa-solid fa-user-doctor'
        },
        /*{
          title: 'Reviews',
          icone: ''
        },*/
        {
          title: 'Message',
          icone: 'fa-solid fa-comment-medical'
        },
        {
          title: 'ProfileSettings',
          icone: 'fa-solid fa-gear'
        },
        {
          title: 'SocialeMedia',
          icone: 'fa-solid fa-share-nodes'
        },
        {
          title: 'ChangePassword',
          icone: 'fa-solid fa-unlock'
        },
      ]
    };
  },
  methods: {
    ...mapActions({
      signOut: "Doctors/signOut",
    })
  },
  computed: {
    ...mapGetters({
      getUser: "Doctors/getUser"
    }),
  },
  mounted() {
  }
};
</script>
<style scoped>
.icone {
  width: 20px;
}

.dashboard-widget .nav-item {
  border-bottom: 1px solid #f0f0f0;
  padding: 9px 20px;
}

.dashboard-widget .nav-item .nav-link {
  color: #757575 !important;
  font-weight: 500;
}

.content {
  padding: 15px;
}

.profile-sidebar {
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.widget-profile {
  border-bottom: 1px solid #f0f0f0;
  padding: 10px;
}

.doc-img {
  background-color: #f7f7f7;
  width: auto;
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
}

.doc-img img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}

.profile-info h3 {
  font-size: 21px;
  font-weight: 700;
  margin-top: 14px;
}

.patient-details h5 {
  color: #757575;
  font-size: 17px;
}
</style>
