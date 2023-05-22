<template>
  <div class="row row-grid">
    <div class="col-md-6 col-lg-4 col-xl-3" v-for="appointment in getAppointments.data" :key="item">
      <div class="card widget-profile pat-widget-profile">
        <div class="card-body">
          <div class="pro-widget-content">
            <div class="profile-info-widget text-center">
              <a class="booking-doc-img" href="#">
                <img :src="appointment.patient.photo" alt="User">
              </a>
              <div class="profile-det-info">
                <h3 class="mt-2">
                  <a href="#">{{ appointment.patient.name }}</a>
                </h3>
                <div class="patient-details">
                  <h5><b>Patient ID :</b> #{{ appointment.patient.id }}</h5>
                  <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i>{{ appointment.patient.address }}</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="patient-info pt-4">
            <ul class="list-unstyled">
              <li>Phone <span>{{ appointment.patient.phone }}</span></li>
              <li>Age <span>{{ calculateAge(appointment.patient.date_of_birth) }} Years, {{ appointment.patient.sex
              }}</span></li>
              <li>Blood Group <span>{{ appointment.patient.blood_group }}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <nav v-if="getAppointmentsLastPage > 1" aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" @click="params.page = LastPage - 1" href="#">Previous</a>
          </li>
          <li v-for="LastPage in getAppointmentsLastPage" :key="LastPage" class="page-item">
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
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      params: {
        app_to_doctor: 1,

      },
    };
  },
  watch: {
    params: {
      handler() {
        this.fetchAppointments(this.params);
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      getAppointments: "Appointments/getAppointments",
      getAppointmentsTotal: "Appointments/getAppointmentsTotal",
      getAppointmentsLastPage: "Appointments/getAppointmentsLastPage",
    }),
  },
  methods: {
    ...mapActions({
      fetchAppointments: "Appointments/fetchAppointments",
    }),
    calculateAge(birthDate) {
      const currentYear = new Date().getFullYear();
      const birthYear = new Date(birthDate).getFullYear();
      return `${currentYear - birthYear}`;
    }
  },
  mounted() {
    this.fetchAppointments(this.params);

  },
};
</script>
<style scoped>
.profile-det-info h3 a {
  color: black;
  font-size: 21px;
}

.card-body {
  padding: 1.5rem;
  height: 440px;
}

.patient-details h5 {
  color: #33333396;
  font-size: 14px;
}

.booking-doc-img img {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.pro-widget-content {
  border-bottom: 1px solid #f0f0f0;
  padding: 20px;
}

.patient-info ul li span {
  float: right;
  color: #33333396;
}
</style>
  