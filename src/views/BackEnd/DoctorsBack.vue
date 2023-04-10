<template>
  <div class="wrapper">
    <NavbarBack />
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <MainSidebar />
    </aside>
    <div class="content-wrapper" style="margin-top: 30px">
      <div class="content" style="background-color: white">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-12 d-flex justify-content-end mb-3 align-items-center">
              <div class="doc-badge me-3 mr-4">
                Doctors
                <span class="ms-1">{{ getDoctorsTotal }}</span>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Doctors</h3>
                  <div class="card-tools">
                    <div class="input-group input-group-sm" style="width: 300px">
                      <select v-model="params.search_by" class="form-control">
                        <option>{{ params.search_by }}</option>
                        <option value="username">Username</option>
                        <option value="specialty">Specialty</option>
                      </select>
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                      </div>
                      <input v-model="params.value" type="text" name="table_search" class="form-control float-right"
                        placeholder="Search" />
                    </div>
                  </div>
                </div>

                <div class="card-body table-responsive p-0" style="height: 100vh">
                  <table class="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Doctor</th>
                        <th>Specialities</th>
                        <th>MemberSince</th>
                        <th>Number Of Doctors</th>
                        <th>TotalIncome</th>
                        <th>Account status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(doctor, index) in getDoctors.data" :key="doctor.id">
                        <td>{{ index + 1 }}</td>
                        <td>
                          <div class="media">
                            <div class="d-flex media-body">
                              <a class="avatar avatar-sm me-2 user-dt" href="#">
                                <img :src="doctor.photo" class="avatar avatar-img" />
                              </a>
                              <div class="text-secondary">
                                <span class="user-name">{{ doctor.username }}</span><br />
                                <span class="d-block text-muted">{{ doctor.sex }}, 40 Years Old</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{{ doctor.specialty.name }}</td>
                        <td>
                          <span class="user-name">
                            <date-format :date="doctor.created_at" /> </span><br />
                          <span class="text-muted">{{ doctor.created_at }}</span>
                        </td>
                        <td>{{ doctor.appointments_count }}</td>
                        <td>300.00 DH</td>
                        <td class="text-left">
                          <span @click="status = 'inactive'">
                            <input id="s1" type="checkbox" class="switch" />
                          </span>

                          <!--  <div>
                            <label>
                              <input type="radio" value="active" v-model="doctor.status" />
                              Active
                            </label>
                            <label>
                              <input type="radio" value="inactive" v-model="doctor.status" />
                              Inactive
                            </label>
                            <button @click="updateStatus(doctor.id)">Update</button>
                          </div>

                          <toggle-button @click="handleChange" />-->
                        </td>
                      </tr>
                      <tr v-if="getDoctors.data?.length <= 0">
                        <p class="m-3 no-result">No results Found</p>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <nav aria-label="Page navigation example">
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
    <aside class="control-sidebar control-sidebar-dark">
      <div class="p-3">
        <h5>Title</h5>
        <p>Sidebar content</p>
      </div>
    </aside>
    <MainFooterBack />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import axios from "../../axios.config";
import ToggleButton from "vue-js-toggle-button";
export default {
  components: {
    ToggleButton,
  },
  data() {
    return {
      status: "active",
      params: {
        search_by: "Search by...",
        value: "",
        page: 1,
      },
      value: true,
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
      getDoctorsTotal: "Doctors/getDoctorsTotal",
      getDoctorsLastPage: "Doctors/getDoctorsLastPage",
    }),
  },
  methods: {
    handleChange() {
      console.log("Toggle button value:");
    },
    test() {
      console.log("ggfdgf");
    },
    async updateStatus(id) {
      try {
        const response = await axios.post(`/doctors/${id}/update-status`, {
          status: this.status,
        });
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions({
      fetchDoctors: "Doctors/fetchDoctors",
    }),
  },
  mounted() {
    this.fetchDoctors(this.params);
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

.table .avatar>img {
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

.doc-badge span {
  background: red;
  color: white;
  padding: 0px 2px;
  border-radius: 2px;
}

.no-result {
  color: #ff0000ba;
}

/* @media */
@media (max-width: 390px) {}
</style>
