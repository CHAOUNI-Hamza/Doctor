<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Upcoming Appointments</h3>
        <div class="card-tools d-flex">
          <div class="input-group input-group-sm" style="width: 200px">
            <div class="input-group-append">
              <button type="submit" class="btn btn-default">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <input
              type="text"
              name="table_search"
              class="form-control float-right"
              v-model="params.name_doctor"
              placeholder="Search By Doctor" />
          </div>
          <div class="input-group input-group-sm" style="width: 200px">
            <div class="input-group-append">
              <button type="submit" class="btn btn-default">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <input
              type="text"
              name="table_search"
              class="form-control float-right"
              v-model="params.name_patient"
              placeholder="Search By Patient" />
          </div>
        </div>
      </div>

      <div class="card-body table-responsive p-0" style="height: 100vh">
        <table class="table table-head-fixed text-nowrap">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Disease</th>
              <th>Consultation Type</th>
              <th>Date & Time</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(appointment, index) in getAppointments.data"
              :key="appointment.id">
              <td>{{ index + 1 }}</td>
              <td>
                <div class="media">
                  <div class="d-flex media-body">
                    <a
                      class="avatar avatar-sm me-2 user-dt"
                      href="/template/admin/profile">
                      <img
                        :src="appointment.patient.photo"
                        class="avatar avatar-img" />
                    </a>
                    <div class="text-secondary">
                      <span class="user-name">{{
                        appointment.patient.name
                      }}</span
                      ><br />
                      <span class="d-block text-muted"
                        >{{ appointment.patient.sex }},
                        {{ appointment.patient.age }} Years Old</span
                      >
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div class="media">
                  <div class="d-flex media-body">
                    <a
                      class="avatar avatar-sm me-2 user-dt"
                      href="/template/admin/profile">
                      <img
                        :src="appointment.doctor.photo"
                        class="avatar avatar-img" />
                    </a>
                    <div class="text-secondary">
                      <span class="d-block text-muted"
                        >{{ appointment.doctor.sex }},
                        {{ appointment.doctor.age }} Years Old</span
                      >
                      <span class="user-name">{{
                        appointment.doctor.username
                      }}</span
                      ><br />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span class="Disease">{{ appointment.disease }}</span>
              </td>
              <td>
                <span class="consultation-type">
                  <font-awesome-icon icon="fa-regular fa-message" />
                  {{ appointment.consultation_type }}
                </span>
              </td>
              <td>
                <span class="user-name">{{ appointment.date_time }}</span
                ><br />
                <span class="text-muted">{{ appointment.date_time }}</span>
              </td>
              <td>{{ appointment.amount }} DH</td>
              <td>
                <span
                  class="badge bg-badge-grey"
                  :class="[
                    { 'text-danger': appointment.status == 'cancelled' },
                    'text-success',
                  ]"
                  ><font-awesome-icon icon="fa-solid fa-circle" class="mr-1" />
                  {{ appointment.status }}</span
                >
              </td>
            </tr>
            <tr v-if="getAppointments.data?.length <= 0">
              <p class="m-3 no-result">No results Found</p>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" @click="params.page = LastPage - 1" href="#"
            >Previous</a
          >
        </li>
        <li
          v-for="LastPage in getAppointmentsLastPage"
          :key="LastPage"
          class="page-item">
          <a @click="params.page = LastPage" class="page-link" href="#">{{
            LastPage
          }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="params.page = LastPage + 1" href="#"
            >Next</a
          >
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
        name_doctor: "",
        name_patient: "",
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
  },
  mounted() {
    this.fetchAppointments(this.params);
  },
};
</script>
<style scoped>
.card-title {
  font-size: 1.3rem;
  font-weight: bold;
}

.form-control {
  border: none;
  margin-right: 10px;
}

.input-group-append .btn {
  background: none;
  border: none;
}

select.form-control {
  color: #00000082 !important;
}

.page-header ul {
  display: flex;
}

.page-header ul li {
  list-style: none;
}

.page-header ul li .btn {
  padding: 12px 15px;
  margin-left: 20px;
}

.page-header ul li .btn.active {
  border: 1px solid #5c8ed3;
  color: #2196f3;
}

.page-header ul li .btn.disbled {
  background: #0000000a;
  border: none;
}

.table .media {
  align-items: flex-start;
}

.table .d-flex.media-body {
  align-items: center !important;
}

.table .avatar {
  position: relative;
  display: inline-block;
}

.table .avatar-sm {
  width: 2.5rem;
  height: 2.5rem;
}

.table .avatar > img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 5px;
}

.table .text-secondary {
  margin-left: 10px;
}

.table span.user-name {
  color: #131523;
  font-weight: 600;
}

.table span.text-muted {
  color: #7e84a3 !important;
}

.table .Disease {
  font-weight: bold;
}

.table .consultation-type {
  color: #2196f3;
  font-size: 17px;
}

table .badge {
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  min-width: 75px;
  padding: 7px 12px;
  text-align: center;
  background: #f5f6fa;
}
.no-result {
  color: #ff0000ba;
}
</style>
