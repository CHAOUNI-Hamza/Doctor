<template>
  <div class="row align-items-center">
    <div class="col-md-12 d-flex justify-content-end mb-3 align-items-center">
      <div class="doc-badge me-3 mr-4">
        Total Patients
        <span class="ms-1">{{ getPatientsTotal }}</span>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Patients</h3>
          <div class="card-tools">
            <div class="input-group input-group-sm" style="width: 300px">
              <select v-model="params.search_by" class="form-control">
                <option>{{ params.search_by }}</option>
                <option value="name">Name</option>
                <option value="sex">Sex</option>
                <option value="blood_group">Blood Group</option>
              </select>
              <div class="input-group-append">
                <button type="submit" class="btn btn-default">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
              </div>
              <input
                v-model="params.value"
                type="text"
                name="table_search"
                class="form-control float-right"
                placeholder="Search" />
            </div>
          </div>
        </div>

        <div class="card-body table-responsive p-0" style="height: 100vh">
          <table class="table table-head-fixed text-nowrap">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Last Visit</th>
                <th>Blood group</th>
                <th>TotalIncome</th>
                <th>Account status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(patient, index) in getPatients.data"
                :key="patient.id">
                <td>{{ index + 1 }}</td>
                <td>
                  <div class="media">
                    <div class="d-flex media-body">
                      <a
                        class="avatar avatar-sm me-2 user-dt"
                        href="/template/admin/profile">
                        <img :src="patient.photo" class="avatar avatar-img" />
                      </a>
                      <div class="text-secondary">
                        <span class="user-name">{{ patient.name }}</span
                        ><br />
                        <span class="d-block text-muted"
                          >{{ patient.sex }}, 40 Years Old</span
                        >
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    v-for="last in patient.appointments"
                    :key="last"
                    class="user-name"
                    ><date-format :date="last.created_at" /></span
                  ><br />
                  <span
                    v-for="last in patient.appointments"
                    :key="last"
                    class="text-muted"
                    >{{ last.created_at }}</span
                  >
                </td>
                <td>
                  {{ patient.blood_group }}
                </td>
                <td>300.00 DH</td>
                <td class="text-left">
                  <input id="s1" type="checkbox" class="switch" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
          v-for="LastPage in getPatientsLastPage"
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
import axios from "../../axios.config";
export default {
  data() {
    return {
      status: "active",
      params: {
        search_by: "Search by...",
        value: "",
        specialty: "",
        page: 1,
      },
    };
  },
  watch: {
    params: {
      handler() {
        this.fetchPatients(this.params);
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      getPatients: "Patients/getPatients",
      getPatientsTotal: "Patients/getPatientsTotal",
      getPatientsLastPage: "Patients/getPatientsLastPage",
    }),
  },
  methods: {
    async updateStatus(id) {
      try {
        const response = await axios.post(`/patients/${id}/update-status`, {
          status: this.status,
        });
        //this.status = response.data.status;
        console.error(response);
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions({
      fetchPatients: "Patients/fetchPatients",
    }),
  },
  mounted() {
    this.fetchPatients(this.params);
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

.doc-badge span {
  background: red;
  color: white;
  padding: 0px 2px;
  border-radius: 2px;
}

/* @media */
@media (max-width: 390px) {
}

@supports (-webkit-appearance: none) or (-moz-appearance: none) {
  input[type="checkbox"],
  input[type="radio"] {
    --active: #275efe;
    --active-inner: #fff;
    --focus: 2px rgba(39, 94, 254, 0.3);
    --border: #bbc1e173;
    --border-hover: #275efe;
    --background: #fff;
    --disabled: #f6f8ff;
    --disabled-inner: #e1e6f9;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 1px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }

  input[type="checkbox"]:after,
  input[type="radio"]:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }

  input[type="checkbox"]:checked,
  input[type="radio"]:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }

  input[type="checkbox"]:disabled,
  input[type="radio"]:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
  }

  input[type="checkbox"]:disabled:checked,
  input[type="radio"]:disabled:checked {
    --b: var(--disabled-inner);
    --bc: var(--border);
  }

  input[type="checkbox"]:disabled + label,
  input[type="radio"]:disabled + label {
    cursor: not-allowed;
  }

  input[type="checkbox"]:hover:not(:checked):not(:disabled),
  input[type="radio"]:hover:not(:checked):not(:disabled) {
    --bc: var(--border-hover);
  }

  input[type="checkbox"]:focus,
  input[type="radio"]:focus {
    box-shadow: 0 0 0 var(--focus);
  }

  input[type="checkbox"]:not(.switch),
  input[type="radio"]:not(.switch) {
    width: 21px;
  }

  input[type="checkbox"]:not(.switch):after,
  input[type="radio"]:not(.switch):after {
    opacity: var(--o, 0);
  }

  input[type="checkbox"]:not(.switch):checked,
  input[type="radio"]:not(.switch):checked {
    --o: 1;
  }

  input[type="checkbox"] + label,
  input[type="radio"] + label {
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }

  input[type="checkbox"]:not(.switch) {
    border-radius: 7px;
  }

  input[type="checkbox"]:not(.switch):after {
    width: 5px;
    height: 9px;
    border: 2px solid var(--active-inner);
    border-top: 0;
    border-left: 0;
    left: 7px;
    top: 4px;
    transform: rotate(var(--r, 20deg));
  }

  input[type="checkbox"]:not(.switch):checked {
    --r: 43deg;
  }

  input[type="checkbox"].switch {
    width: 38px;
    border-radius: 11px;
  }

  input[type="checkbox"].switch:after {
    left: 2px;
    top: 2px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
  }

  input[type="checkbox"].switch:checked {
    --ab: var(--active-inner);
    --x: 17px;
  }

  input[type="checkbox"].switch:disabled:not(:checked):after {
    opacity: 0.6;
  }

  input[type="radio"] {
    border-radius: 50%;
  }

  input[type="radio"]:after {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background: var(--active-inner);
    opacity: 0;
    transform: scale(var(--s, 0.7));
  }

  input[type="radio"]:checked {
    --s: 0.5;
  }
}
</style>
