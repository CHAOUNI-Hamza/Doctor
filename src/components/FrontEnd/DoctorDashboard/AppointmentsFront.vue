<template>
  <div class="appointment">
    <div class="appointment-list d-flex align-items-center mb-3" v-for="appointment in getAppointments.data" :key="item">
      <div class="profile-info-widget d-flex align-items-center">
        <a class="booking-doc-img" href="/template/doctor/patient-profile">
          <img :src="appointment.patient.photo" alt="User" />
        </a>
        <div class="profile-det-info">
          <h3>
            <a href="/template/doctor/patient-profile">{{ appointment.patient.name }}</a>
          </h3>
          <div class="patient-details">
            <h5>
              <i class="far fa-clock"></i>
              <date-format :date="appointment.created_at" />
            </h5>
            <h5>
              <i class="fas fa-map-marker-alt"></i>
              {{ appointment.patient.address }}
            </h5>
            <h5>
              <i class="fas fa-envelope"></i>
              {{ appointment.patient.email }}
            </h5>
            <h5 class="mb-0">
              <i class="fas fa-phone"></i>
              {{ appointment.patient.phone }}
            </h5>
          </div>
        </div>
      </div>
      <div class="appointment-action">
        <a class="btn btn-sm bg-success" data-toggle="modal" data-target="#exampleModal"
          href="/template/doctor/appointments#0">
          <font-awesome-icon icon="fa-solid fa-eye" class="mr-1" />
          View
        </a>
        <a class="btn btn-sm bg-info ml-2" href="/template/doctor/appointments#0">
          <font-awesome-icon icon="fa-solid fa-clipboard-check" class="mr-1" />
          Accept
        </a>
        <a class="btn btn-sm bg-warning ml-2" href="/template/doctor/appointments#0">
          <font-awesome-icon icon="fa-solid fa-xmark" class="mr-1" />
          Cancel
        </a>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Appointment Details
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul class="info-details list-unstyled">
                <li>
                  <div class="details-header">
                    <div class="row justify-content-between">
                      <div class="col-md-6">
                        <span class="title">#APT0001</span>
                        <span class="text d-block">21 Oct 2019 10:00 AM</span>
                      </div>
                      <div class="col-md-6">
                        <div class="text-right">
                          <button type="button" class="btn bg-success btn-sm" id="topup_status">
                            Completed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <span class="title">Status:</span>
                  <span class="text d-block">Completed</span>
                </li>
                <li>
                  <span class="title">Confirm Date:</span>
                  <span class="text d-block">29 Jun 2019</span>
                </li>
                <li>
                  <span class="title">Paid Amount</span>
                  <span class="text d-block">$450</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

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
    })
  },
  mounted() {
    this.fetchAppointments(this.params);
  },
};
</script>
<style scoped>
.profile-info-widget {
  text-align: left;
  margin-right: auto;
}

.booking-doc-img img {
  width: 150px;
  height: 150px;
  margin-right: 10px;
  border-radius: 8px;
}

.appointment-list {
  border: 1px solid #33333314;
  border-radius: 5px;
  padding: 14px;
}

.profile-det-info h3 a {
  color: #000000b8;
  font-size: 24px;
  transition: 0.2s;
}

.profile-det-info h3 a:hover {
  color: #15558d;
  font-size: 24px;
}

.patient-details h5 {
  font-size: 17px;
  color: #33333394;
}

.btn {
  padding: 4px 17px;
  color: white;
}

.modal-title {
  font-size: 24px;
  color: #272b41;
  font-weight: 500;
}

.info-details li .title {
  color: #272b41;
  font-weight: 500;
  font-size: 21px;
}

.info-details li .text {
  color: #757575;
  display: block;
  font-size: 18px;
  overflow: hidden;
}
</style>
