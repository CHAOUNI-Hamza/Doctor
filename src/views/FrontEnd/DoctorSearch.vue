<template>
  <NavbarFront />
  <BreadCrumbFront />
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-lg-4 col-xl-3 sidebar">
          <div class="sticksidebar">
            <div class="profile-sidebar">
              <div class="card-header">
                <h4 class="card-title mb-0">Search Filter</h4>
              </div>
              <div class="dashboard-widget">
                <div class="card-body">
                  <!--<div class="filter-widget">
                    <div class="cal-icon mb-3">
                      <input type="date" class="form-control datetimepicker" placeholder="Select Date" />
                    </div>
                  </div>-->
                  <div class="filter-widget mb-3">
                    <h4>Gender</h4>
                    <div>
                      <label class="custom_check">
                        <input v-model="params.sex" type="checkbox" class="mr-2" name="gender_type" value="male" />
                        <span class="checkmark"></span> Male Doctor
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input v-model="params.sex" class="mr-2" type="checkbox" name="gender_type" value="female" />
                        <span class="checkmark"></span> Female Doctor
                      </label>
                    </div>
                  </div>
                  <div class="filter-widget mb-3">
                    <h4>Select Specialist</h4>
                    <div v-for="speciality in getSpecialities.data" :key="speciality.id">
                      <label class="custom_check">
                        <input v-model="params.search_array" :value="speciality.name" class="mr-2" type="checkbox"
                          name="select_specialist" />

                        <span class="checkmark"></span> {{ speciality.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-8 col-xl-9">
          <div class="card" v-for="doctor in getDoctors.data" :key="doctor">
            <div class="card-body">
              <div class="doctor-widget">
                <div class="doc-info-left">
                  <div class="doctor-img">
                    <a href="doctor-profile.html">
                      <img :src="doctor.photo" class="img-fluid .img-fluid-pro" alt="User Image" />
                    </a>
                  </div>
                  <div class="doc-info-cont">
                    <h4 class="doc-name">
                      <a href="doctor-profile.html">{{ doctor.username }}</a>
                    </h4>
                    <h5 class="doc-department">
                      <img :src="doctor.specialty?.photo" class="img-fluid" alt="Speciality" />{{ doctor.specialty?.name
                      }}
                    </h5>
                    <div class="clinic-details">
                      <p class="doc-location">
                        <font-awesome-icon class="mr-2" icon="fa-solid fa-location-dot" />
                        {{ doctor.clinicadresse }}
                      </p>
                    </div>
                    <div class="clinic-services">
                      <span>{{ doctor.clinicname }}</span>
                    </div>
                  </div>
                </div>
                <div class="doc-info-right">
                  <div class="clini-infos">
                    <ul style="list-style: none">
                      <li>
                        <font-awesome-icon style="width: 29px" icon="fa-regular fa-heart" />
                        98%
                      </li>
                      <li>
                        <font-awesome-icon style="width: 29px" icon="fa-regular fa-comment-dots" />
                        17 Feedback
                      </li>
                      <li>
                        <font-awesome-icon style="width: 29px" icon="fa-solid fa-location-dot" />
                        Florida, USA
                      </li>
                      <li>
                        <font-awesome-icon style="width: 29px" icon="fa-solid fa-sack-dollar" />
                        $300 - $1000
                        <font-awesome-icon style="width: 29px" icon="fa-solid fa-circle-info" />
                      </li>
                    </ul>
                  </div>
                  <div class="clinic-booking">
                    <a class="view-pro-btn mb-2" href="doctor-profile.html">View Profile</a>
                    <a class="apt-btn" href="booking.html">Book Appointment</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav v-if="getDoctorsLastPage > 1" aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" @click="params.page = LastPage - 1" href="#">Previous</a>
              </li>
              <li v-for="LastPage in getDoctorsLastPage" :key="LastPage" class="page-item">
                <a @click="params.page = LastPage" class="page-link" href="#">{{
                  LastPage
                }}</a>
              </li>
              <li class="page-item">
                <a class="page-link" @click="params.page = LastPage + 1" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <FooterFront />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BreadCrumbFront from "./../../components/FrontEnd/DoctorDashboard/BreadCrumbFront.vue";
export default {
  components: {
    BreadCrumbFront,
  },
  data() {
    return {
      params: {
        search_by: "Search by...",
        value: "",
        page: 1,
        search_array: [],
        sex: []
      },
    };
  },
  watch: {
    params: {
      handler() {
        this.fetchDoctors(this.params);
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      getDoctors: "Doctors/getDoctors",
      getSpecialities: "Specialities/getSpecialities",
      getDoctorsTotal: "Doctors/getDoctorsTotal",
      getDoctorsLastPage: "Doctors/getDoctorsLastPage",
    }),
  },
  methods: {
    ...mapActions({
      fetchSpecialities: "Specialities/fetchSpecialities",
      fetchDoctors: "Doctors/fetchDoctors",
    }),
  },
  mounted() {
    this.fetchSpecialities();
    this.fetchDoctors(this.params);
  },
};
</script>
<style scoped>
.img-fluid-pro {
  border-radius: 9px;
}

.clinic-booking a {
  background-color: #fff;
  border: 2px solid #0db9f2;
  border-radius: 5px;
  color: #0db9f2;
  display: block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 10px 10px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}

.clinic-booking a.apt-btn {
  background-color: #0db9f2;
  color: #fff;
  padding: 10px 9px;
}

.doc-name a {
  color: #20c3f6;
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

.custom_check {
  color: #666;
}

.card-title {
  float: left;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
  color: #00000099;
}

.filter-widget h4 {
  font-size: 18px;
  font-weight: bold;
}

.card {
  border: 1px solid #f0f0f0;
  margin-bottom: 1.875rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  padding: 1.5rem;
}

.doctor-widget {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.doc-info-left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.doc-info-right {
  margin-left: auto;
  -ms-flex: 0 0 205px;
  flex: 0 0 205px;
  max-width: 205px;
}

.doctor-img {
  -ms-flex: 0 0 150px;
  flex: 0 0 150px;
  margin-right: 20px;
  width: 150px;
}

.doc-department img {
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 5px;
}
</style>
