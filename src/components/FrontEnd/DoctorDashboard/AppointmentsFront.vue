<template>
  <div class="appointment mt-3">
    <div class="appointment-list d-flex align-items-center mb-3 web" v-for="appointment in getAppointments.data"
      :key="item">
      <div class="profile-info-widget d-flex align-items-center">
        <a class="booking-doc-img" href="#">
          <img :src="appointment.patient.photo" alt="User" />
        </a>
        <div class="profile-det-info">
          <h3>
            <a href="#">{{ appointment.patient.name }}</a>
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
        <a class="btn btn-sm bg-success" data-toggle="modal" :data-target="'#exampleModal' + appointment.id" href="#">
          <font-awesome-icon icon="fa-solid fa-eye" class="mr-1" />
          View
        </a>
        <a class="btn btn-sm bg-info ml-2" href="#">
          <font-awesome-icon icon="fa-solid fa-clipboard-check" class="mr-1" />
          Accept
        </a>
        <a class="btn btn-sm bg-warning ml-2" href="#">
          <font-awesome-icon icon="fa-solid fa-xmark" class="mr-1" />
          Cancel
        </a>
      </div>
      <!-- Modal -->
      <div class="modal fade" :id="'exampleModal' + appointment.id" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
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
                  <span class="text d-block">{{ appointment.status }}</span>
                </li>
                <li>
                  <span class="title">Confirm Date:</span>
                  <span class="text d-block">{{ appointment.created_at }}</span>
                </li>
                <li>
                  <span class="title">Paid Amount</span>
                  <span class="text d-block">{{ appointment.amount }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col s12 cards-responsive mt-3" v-for="appointment in getAppointments.data" :key="item">
        <div class="card z-depth-2">
          <div class="card-image">
            <img :src="appointment.patient.photo">
          </div>
          <div class="card-content">
            <h6 class="card-titlee">Card Title</h6>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
          </div>
          <div class="card-action">
            <a class="btn btn-sm bg-success" data-toggle="modal" :data-target="'#exampleModal' + appointment.id" href="#">
              <font-awesome-icon icon="fa-solid fa-eye" class="mr-1" />
              View
            </a>
            <a class="btn btn-sm bg-info ml-2" href="#">
              <font-awesome-icon icon="fa-solid fa-clipboard-check" class="mr-1" />
              Accept
            </a>
            <a class="btn btn-sm bg-warning ml-2" href="#">
              <font-awesome-icon icon="fa-solid fa-xmark" class="mr-1" />
              Cancel
            </a>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" :id="'exampleModal' + appointment.id" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
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
                    <span class="text d-block">{{ appointment.status }}</span>
                  </li>
                  <li>
                    <span class="title">Confirm Date:</span>
                    <span class="text d-block">{{ appointment.created_at }}</span>
                  </li>
                  <li>
                    <span class="title">Paid Amount</span>
                    <span class="text d-block">{{ appointment.amount }}</span>
                  </li>
                </ul>
              </div>
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
      params: {},
    };
  },
  watch: {
    // Surveillance de la propriété "params"
    params: {
      handler() {
        // Appel de la fonction fetchAppointments lorsque la propriété "params" change
        this.fetchAppointmentsDoctor(this.params);
      },
      deep: true,
    },
  },
  computed: {
    // Utilisation des getters du store
    ...mapGetters({
      getAppointments: "Appointments/getAppointments",
      getAppointmentsTotal: "Appointments/getAppointmentsTotal",
      getAppointmentsLastPage: "Appointments/getAppointmentsLastPage",
      getUser: "Doctors/getUser"
    }),
  },
  methods: {
    // Utilisation des actions du store
    ...mapActions({
      fetchAppointmentsDoctor: "Appointments/fetchAppointmentsDoctor",
    }),
  },
  mounted() {
    // Appel initial de la fonction fetchAppointments avec les paramètres actuels
    this.fetchAppointmentsDoctor(this.params);
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


.web {
  display: block;
}

.cards-responsive {
  display: none;
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {
  .card-image img {
    width: 100% !important;
    height: 360px;
  }

  .card .card-content {
    padding: 20px;
    border-radius: 0 0 2px 2px;
  }

  .card .card-content p {
    margin: 0;
    color: inherit;
  }

  .card .card-action {
    position: relative;
    background-color: inherit;
    border-top: 1px solid rgba(160, 160, 160, 0.2);
    padding: 20px;
  }

  .card .card-content .card-titlee {
    line-height: 48px;
    font-size: 24px;
    font-weight: 300;
  }
}

@media (min-width: 0px) and (max-width: 428px) {
  .web {
    display: none !important;
  }

  .cards-responsive {
    display: block;
  }

}

@media (min-width: 429px) and (max-width: 834px) {
  .btn {
    font-size: 11px;
    margin-left: 0 !important;
    margin-top: 3px;
    width: 92px;
  }

  .patient-details h5 {
    margin-right: 7px;
  }

}
</style>
