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
                Specialities
                <span class="ms-1">{{ getSpecialitiesTotal }}</span>
              </div>
              <!-- Button trigger modal -->
              <a @click="resetForm" data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-add">
                <font-awesome-icon icon="fa-solid fa-plus" />
                Add New
              </a>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Specialities</h3>
                  <div class="card-tools">
                    <div class="input-group input-group-sm" style="width: 300px">
                      <select v-model="params.order_by" class="form-control">
                        <option>Order by...</option>
                        <option value="id">id</option>
                        <option value="name">name</option>
                      </select>
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </button>
                      </div>
                      <input type="text" name="table_search" v-model="params.name" class="form-control float-right"
                        placeholder="Search" />
                    </div>
                  </div>
                </div>

                <div class="card-body table-responsive p-0" style="height: 100vh">
                  <table class="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(specialitie, index) in getSpecialities.data" :key="specialitie.id">
                        <td>{{ index + 1 }}</td>
                        <td>
                          <div class="media">
                            <div class="d-flex media-body">
                              <a class="avatar avatar-sm me-2 user-dt" href="#">
                                <img :src="specialitie.photo" class="avatar avatar-img" />
                              </a>
                              <div class="text-secondary">
                                <span class="d-block text-muted">{{
                                  specialitie.name
                                }}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span class="btn-edit mr-2">
                            <font-awesome-icon class="mr-1" icon="fa-solid fa-pen-to-square" data-toggle="modal"
                              data-target="#exampleModal1" @click="fetchSpecialitie(specialitie.id)" />
                            Edit
                          </span>
                          <span class="btn-delete text-danger">
                            <font-awesome-icon class="mr-1" @click="deleteSpecialitie(specialitie.id)"
                              icon="fa-solid fa-trash-can" />Delete
                          </span>
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
                  <a class="page-link" @click="params.page = LastPage - 1" href="#">Previous</a>
                </li>
                <li v-for="LastPage in getSpecialitiesLastPage" :key="LastPage" class="page-item">
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
          <!-- start modal Add -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Speciality</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form @submit.prevent="submitForm">
                  <div class="modal-body">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Speciality Name</label>
                      <input @blur="v$.data.name.$touch" :class="{
                        'text-fields-error': v$.data.name.$error === true,
                      }" v-model="data.name" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Speciality Name..." />
                    </div>
                    <div class="form-group card-upload" :class="{
                      'text-fields-error': v$.data.photo.$error === true,
                    }">
                      <input @blur="v$.data.photo.$touch" :class="{
                        'text-fields-error': v$.data.photo.$error === true,
                      }" @change="onFileSelected" type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <div class="form-group show-image" v-if="imageUrl">
                      <img :src="imageUrl" alt="uploaded photo" />
                    </div>
                  </div>
                  <div class="modal-footer text-center">
                    <button v-if="v$.$invalid" type="submit" class="btn btn-save disable">
                      Send
                    </button>
                    <button v-if="!v$.$invalid" type="submit" class="btn btn-save">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- start modal Update -->
          <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Update Speciality</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form @submit.prevent="updateForm">
                  <div class="modal-body">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Speciality Name</label>
                      <input @blur="v$.data.name.$touch" :class="{
                        'text-fields-error': v$.data.name.$error === true,
                      }" v-model="data.name" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Speciality Name..." />
                    </div>
                    <div class="form-group card-upload" :class="{
                      'text-fields-error': v$.data.photo.$error === true,
                    }">
                      <input @blur="v$.data.photo.$touch" :class="{
                        'text-fields-error': v$.data.photo.$error === true,
                      }" @change="onFileSelected" type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <div class="form-group show-image" v-if="imageUrl">
                      <img :src="imageUrl" alt="uploaded photo" />
                    </div>
                  </div>
                  <div class="modal-footer text-center">
                    <button v-if="v$.$invalid" type="submit" class="btn btn-save disable">
                      Send
                    </button>
                    <button v-if="!v$.$invalid" type="submit" class="btn btn-save">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import axios from "../../axios.config";

export default {
  data() {
    return {
      imageUrl: null,
      v$: useVuelidate(),
      params: {
        order_by: "id",
        name: "",
        page: 1,
        pagination: 10,
      },
      data: {
        name: "",
        photo: "",
      },
    };
  },
  validations: {
    data: {
      name: { required },
      photo: { required },
    },
  },
  computed: {
    ...mapGetters({
      getSpecialitiesTotal: "Specialities/getSpecialitiesTotal",
      getSpecialities: "Specialities/getSpecialities",
      getSpecialitiesLastPage: "Specialities/getSpecialitiesLastPage",
    }),
  },
  watch: {
    params: {
      handler() {
        this.fetchSpecialities(this.params);
      },
      deep: true,
    },
  },

  methods: {
    onFileSelected(event) {
      this.data.photo = event.target.files[0];
      this.previewImage();
    },
    previewImage() {
      const reader = new FileReader();
      reader.readAsDataURL(this.data.photo);
      reader.onload = (event) => {
        this.imageUrl = event.target.result;
      };
    },
    ...mapActions({
      fetchSpecialities: "Specialities/fetchSpecialities",
      deleteSpecialitie: "Specialities/deleteSpecialitie",
      createSpecialitie: "Specialities/createSpecialitie",
      updateSpecialitie: "Specialities/updateSpecialitie",
    }),
    submitForm() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        this.createSpecialitie(this.data);
        this.resetForm();
        this.hideModal("exampleModal");
      }
    },
    updateForm() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        this.updateSpecialitie(this.data);
        this.resetForm();
        this.hideModal("exampleModal1");
      }
    },
    resetForm() {
      this.data = {
        name: "..",
        photo: "..",
      };
      this.imageUrl = null;
    },
    hideModal(id) {
      var div = document.getElementById(id);
      div.classList.remove("show");
    },
    async fetchSpecialitie(id) {
      const response = await axios.get(`/specialties/${id}`);
      const specialitie = response.data.data;
      this.data = {
        name: specialitie.name,
        photo: specialitie.photo,
        id: specialitie.id,
      };
      this.imageUrl = specialitie.photo;
    },
  },
  mounted() {
    this.fetchSpecialities(this.params);
  },
};
</script>
<style scoped>
.card-title {
  font-size: 1.3rem;
  font-weight: bold;
}

.form-control {
  border-bottom: 1px solid #33333336;
  margin-right: 10px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-radius: 0;
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

.btn-add,
.btn-save {
  color: #fff;
  background-color: #5c8ed3;
  border-color: #007bff;
  box-shadow: none;
  border: none;
}

.doc-badge span {
  background: red;
  color: white;
  padding: 0px 2px;
  border-radius: 2px;
}

.card-upload {
  border: 1px solid #00000047;
  padding: 18px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-style: dotted;
}

.card-upload .form-control-file {
  background: #00bcd4;
  padding: 6px;
}

.text-fields-error {
  border: 1px solid #ff00008f !important;
}

.text-fields-error::placeholder {
  color: #ff00008f !important;
}

.error-msg {
  color: #ff00008f;
  font-size: 13px;
  margin-top: 5px;
}

.show-image img {
  width: 100%;
}

.disable {
  cursor: not-allowed;
  pointer-events: none;
}

.btn-edit .mr-1,
.btn-delete .mr-1 {
  cursor: pointer;
}

/* @media */
@media (max-width: 390px) {}
</style>
