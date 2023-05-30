<template>
  <div class="row mt-3">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Invoice No</th>
                <th scope="col">Patient</th>
                <th scope="col">Amount</th>
                <th scope="col">Paid On</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(appointment, index) in getAppointments.data" :key="appointment.id">
                <td>#INV-00{{ index + 1 }}</td>
                <td>
                  <h2 class="table-avatar">
                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                      <img class="avatar-img rounded-circle" :src="appointment.patient.photo" alt="User Image" />
                    </a>
                    <a href="patient-profile.html" class="ml-2">{{ appointment.patient?.name }} <span>#PT0016</span></a>
                  </h2>
                </td>
                <td>{{ appointment.amount }}</td>
                <td><date-format :date="appointment.created_at" /></td>
                <td class="text-right">
                  <div class="table-action">
                    <router-link :to="{ name: 'invoice-view' }" class="btn btn-sm bg-success" data-toggle="modal"
                      data-target="#exampleModal" href="/template/doctor/appointments#0">
                      <font-awesome-icon icon="fa-solid fa-eye" class="mr-1" />
                      View
                    </router-link>
                    <a class="btn btn-sm bg-info ml-2" href="#template/doctor/appointments#0">
                      <font-awesome-icon icon="fa-solid fa-print" />
                      Print
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
        // Appelle la fonction 'fetchAppointments' avec les paramètres mis à jour
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
    // Appelle la fonction 'fetchAppointments' avec les paramètres initiaux lors du montage du composant
    this.fetchAppointments(this.params);

  },
};
</script>
<style scoped>
table.table td h2.table-avatar {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  white-space: nowrap;
}

table.table td h2 a {
  color: #272b41;
}

.avatar-sm {
  width: 2.5rem;
  height: 2.5rem;
}

.avatar {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
}

.avatar>img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

table.table td h2 a {
  color: #272b41;
}

table.table td h2 span {
  color: #888;
  display: block;
  font-size: 12px;
  margin-top: 3px;
}
</style>
