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
                Pharmacies
                <span class="ms-1">{{ getTotal }}</span>
              </div>
              <!-- Button trigger modal -->
              <a data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-add" @click="resetForm">
                <font-awesome-icon icon="fa-solid fa-plus" />
                Add New
              </a>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Pharmacies</h3>
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
                        <th>Pharmacy Name</th>
                        <th>Categories</th>
                        <th>Pharmacy Address</th>
                        <th>Administrator Name</th>
                        <th>Phone number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(pharmacie, index) in get.data" :key="pharmacie.id">
                        <td>{{ index + 1 }}</td>
                        <td>
                          <div class="media">
                            <div class="d-flex media-body">
                              <a class="avatar avatar-sm me-2 user-dt" href="#">
                                <img :src="pharmacie.photo" class="avatar avatar-img" />
                              </a>
                              <div class="text-secondary">
                                <span class="d-block text-muted">{{
                                  pharmacie.name
                                }}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {{ pharmacie.category?.name }}
                        </td>
                        <td>
                          {{ pharmacie.address }}
                        </td>
                        <td>
                          {{ pharmacie.administrator }}
                        </td>
                        <td>
                          {{ pharmacie.phone }}
                        </td>
                        <td>
                          <span class="btn-edit mr-2">
                            <font-awesome-icon class="mr-1" icon="fa-solid fa-pen-to-square" data-toggle="modal"
                              data-target="#exampleModal2" @click="fetchOne(pharmacie.id)" />
                            Edit
                          </span>
                          <span class="btn-delete text-danger">
                            <font-awesome-icon class="mr-1" @click="destroy(pharmacie.id)"
                              icon="fa-solid fa-trash-can" />Delete
                          </span>
                        </td>
                      </tr>
                      <tr v-if="get.data?.length <= 0">
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
                <li v-for="LastPage in getLastPage" :key="LastPage" class="page-item">
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
                    <div class="form-group">
                      <label for="exampleInputEmail1">Category</label>

                      <!--<input @blur="v$.data.category_id.$touch" :class="{
                'text-fields-error': v$.data.category_id.$error === true,
              }" v-model="data.category_id" type="text" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="Category..." />-->

                      <select @blur="v$.data.category_id.$touch" v-model="data.category_id" :class="{
                            'text-fields-error': v$.data.category_id.$error === true,
                          }" class="form-control">
                        <option v-for="(categorie, index) in getCat.data" :key="categorie.id" :value="categorie.id">{{
                          categorie.name }}</option>
                      </select>


                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Address</label>
                      <input @blur="v$.data.address.$touch" :class="{
                          'text-fields-error': v$.data.address.$error === true,
                        }" v-model="data.address" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Administrator Name</label>
                      <input @blur="v$.data.administrator.$touch" :class="{
                          'text-fields-error': v$.data.administrator.$error === true,
                        }" v-model="data.administrator" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Phone</label>
                      <input @blur="v$.data.phone.$touch" :class="{
                          'text-fields-error': v$.data.phone.$error === true,
                        }" v-model="data.phone" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">About</label>
                      <input @blur="v$.data.about.$touch" :class="{
                          'text-fields-error': v$.data.about.$error === true,
                        }" v-model="data.about" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Location</label>
                      <input @blur="v$.data.location.$touch" :class="{
                          'text-fields-error': v$.data.location.$error === true,
                        }" v-model="data.location" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group card-upload" :class="{
                        'text-fields-error': v$.data.photo.$error === true,
                      }">
                      <input @blur="v$.data.photo.$touch" :class="{
                          'text-fields-error': v$.data.photo.$error === true,
                        }" @change="onFileSelected" type="file" class="form-control-file"
                        id="exampleFormControlFile1" />
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
          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Update Speciality</h5>
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
                    <div class="form-group">
                      <label for="exampleInputEmail1">Category</label>

                      <!--<input @blur="v$.data.category_id.$touch" :class="{
                'text-fields-error': v$.data.category_id.$error === true,
              }" v-model="data.category_id" type="text" class="form-control" id="exampleInputEmail1"
                aria-describedby="emailHelp" placeholder="Category..." />-->

                      <select @blur="v$.data.category_id.$touch" v-model="data.category_id" :class="{
                          'text-fields-error': v$.data.category_id.$error === true,
                        }" class="form-control">
                        <option v-for="(categorie, index) in getCat.data" :key="categorie.id" :value="categorie.id">{{
                          categorie.name }}</option>
                      </select>


                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Address</label>
                      <input @blur="v$.data.address.$touch" :class="{
                          'text-fields-error': v$.data.address.$error === true,
                        }" v-model="data.address" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Administrator Name</label>
                      <input @blur="v$.data.administrator.$touch" :class="{
                          'text-fields-error': v$.data.administrator.$error === true,
                        }" v-model="data.administrator" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Phone</label>
                      <input @blur="v$.data.phone.$touch" :class="{
                          'text-fields-error': v$.data.phone.$error === true,
                        }" v-model="data.phone" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">About</label>
                      <input @blur="v$.data.about.$touch" :class="{
                          'text-fields-error': v$.data.about.$error === true,
                        }" v-model="data.about" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Location</label>
                      <input @blur="v$.data.location.$touch" :class="{
                          'text-fields-error': v$.data.location.$error === true,
                        }" v-model="data.location" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Category..." />
                    </div>
                    <div class="form-group card-upload" :class="{
                        'text-fields-error': v$.data.photo.$error === true,
                      }">
                      <input @blur="v$.data.photo.$touch" :class="{
                          'text-fields-error': v$.data.photo.$error === true,
                        }" @change="onFileSelected" type="file" class="form-control-file"
                        id="exampleFormControlFile1" />
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
        category_id: "",
        address: "",
        administrator: "",
        phone: "",
        photo: "",
        about: "",
        location: "",
      },
    };
  },
  validations: {
    data: {
      name: { required },
      photo: { required },
      category_id: { required },
      address: { required },
      administrator: { required },
      phone: { required },
      about: { required },
      location: { required },
    },
  },
  computed: {
    ...mapGetters({
      getTotal: "Pharmacies/getTotal",
      get: "Pharmacies/get",
      getCat: "Categories/get",
      getLastPage: "Pharmacies/getLastPage",
    }),
  },
  watch: {
    params: {
      handler() {
        this.fetch(this.params);
      },
      deep: true,
    },
  },

  methods: {
    // Sélectionne un fichier lorsque l'utilisateur choisit un fichier
    onFileSelected(event) {
      this.data.photo = event.target.files[0];
      this.previewImage();
    },
    // Prévisualise l'image sélectionnée
    previewImage() {
      const reader = new FileReader();
      reader.readAsDataURL(this.data.photo);
      reader.onload = (event) => {
        this.imageUrl = event.target.result;
      };
    },
    ...mapActions({
      fetchCat: "Categories/fetch",
      fetch: "Pharmacies/fetch",
      destroy: "Pharmacies/destroy",
      create: "Pharmacies/create",
      update: "Pharmacies/update",
    }),
    // Soumet le formulaire pour créer un élément
    submitForm() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        this.create(this.data);
        this.resetForm();
        $("#exampleModal").modal('hide');
      }
    },
    // Soumet le formulaire pour mettre à jour un élément
    updateForm() {
      this.v$.$touch();
      if (!this.v$.$invalid) {
        this.update(this.data);
        this.resetForm();
        $("#exampleModal2").modal('hide');
      }
    },
    // Réinitialise le formulaire et cache le modal spécifié
    resetForm() {
      this.data = {
        name: "",
        category_id: "",
        address: "",
        administrator: "",
        phone: "",
        photo: "",
        about: "",
        location: "",
      };
      this.imageUrl = null;
    },
    hideModal(id) {
      var div = document.getElementById(id);
      div.classList.remove("show");
    },
    // Récupère les données d'un élément spécifique à partir de son ID
    async fetchOne(id) {
      const response = await axios.get(`/pharmacies/${id}/edit`);
      const pharmacie = response.data.data;
      this.data = {
        name: pharmacie.name,
        photo: pharmacie.photo,
        id: pharmacie.id,
        category_id: pharmacie.category_id,
        address: pharmacie.address,
        administrator: pharmacie.administrator,
        phone: pharmacie.phone,
        about: pharmacie.about,
        location: pharmacie.location,
      };
      this.imageUrl = pharmacie.photo;
    },
  },
  mounted() {
    // Effectue les opérations initiales lors du montage du composant
    this.fetch(this.params);
    this.fetchCat();
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

.no-result {
  color: #ff0000ba;
}

/* @media */
@media (max-width: 390px) {}
</style>
