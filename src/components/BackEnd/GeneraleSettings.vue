<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="card-header mb-3">
            <h5 class="card-title">Website Basic Details</h5>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input v-model="data.email" type="email" class="form-control" id="exampleFormControlInput1"
                  placeholder="email..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Logo</label>
                <div class="custom-file">
                  <input @change="onFileSelectedOne" type="file" class="custom-file-input" id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01" />
                  <label class="custom-file-label" for="inputGroupFile01">Choose logo</label>
                </div>
                <span class="font-weight-bold">Recommended image size is 150px x 150px</span>
                <div class="upload-images" v-if="logo">
                  <img :src="logo" alt="" />
                  <font-awesome-icon icon="fa-regular fa-circle-xmark" class="remove" />
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Favicon</label>
                <div class="custom-file mb-1">
                  <input @change="onFileSelectedTwo" type="file" class="custom-file-input" id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01" />
                  <label class="custom-file-label" for="inputGroupFile01">Choose logo</label>
                </div>
                <span class="font-weight-bold">Recommended image size is 16px x 16px or 32px x 32px<br />Accepted
                  formats: only png and ico</span>
                <div class="upload-images upload-size" v-if="favicon">
                  <img :src="favicon" alt="" />
                  <font-awesome-icon icon="fa-regular fa-circle-xmark" class="remove" />
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label" for="s2">RL</label>
                <div class="custom-file">
                  <input id="s2" type="checkbox" class="switch ml-5" />
                </div>
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Update</button>
                    <button type="submit" class="btn btn-cancel ml-2">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="card-header mb-3">
            <h5 class="card-title">Address Details</h5>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Address Line 1
                </label>
                <input v-model="data.address_one" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="Address Line 1..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Address Line 2
                </label>
                <input v-model="data.address_two" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="Address Line 2..." />
              </div>
              <div class="mb-3">
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">City
                      </label>
                      <input v-model="data.city" type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="City..." />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">State/Province
                      </label>
                      <select class="form-control" v-model="data.province">
                        <option>State/Province...</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Zip/Postal Code
                      </label>
                      <input v-model="data.postal_code" type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Zip/Postal Code..." />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Country
                      </label>
                      <select v-model="data.country" class="form-control">
                        <option>Country...</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Update</button>
                    <button type="submit" class="btn btn-cancel ml-2">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from 'axios';

export default {
  data() {
    return {
      logo: null,
      favicon: null,
      data: {
        id: "",
        email: "",
        logo: "",
        favicon: "",
        address_one: "",
        address_two: "",
        city: "",
        province: "",
        postal_code: "",
        country: "",
      },
    };
  },
  computed: {
    /* ...mapGetters({
      get: "Settings/get",
    }),*/
  },
  methods: {
    // Récupère les données à partir du backend
    async fetch() {
      try {
        const response = await axios.get(`/settings/1`);
        this.data = {
          id: response.data.data.id,
          email: response.data.data.email,
          logo: response.data.data.logo,
          favicon: response.data.data.favicon,
          address_one: response.data.data.address_one,
          address_two: response.data.data.address_two,
          city: response.data.data.city,
          province: response.data.data.province,
          postal_code: response.data.data.postal_code,
          country: response.data.data.country,
          type: 'generale'
        };
        this.logo = response.data.data.logo;
        this.favicon = response.data.data.favicon;
      } catch (error) {
        console.log(error);
      }
    },
    // Gère la sélection d'un fichier pour le logo
    onFileSelectedOne(event) {
      this.data.logo = event.target.files[0];
      this.previewImageOne();
    },
    // Gère la sélection d'un fichier pour le favicon
    onFileSelectedTwo(event) {
      this.data.favicon = event.target.files[0];
      this.previewImageTwo();
    },
    // Prévisualise l'image sélectionnée pour le logo
    previewImageOne() {
      const reader = new FileReader();
      reader.readAsDataURL(this.data.logo);
      reader.onload = (event) => {
        this.logo = event.target.result;
      };
    },
    // Prévisualise l'image sélectionnée pour le favicon
    previewImageTwo() {
      const reader = new FileReader();
      reader.readAsDataURL(this.data.favicon);
      reader.onload = (event) => {
        this.favicon = event.target.result;
      };
    },
    ...mapActions({
      update: "Settings/update",
    }),
    // Soumet le formulaire de mise à jour
    updateForm() {
      this.update(this.data);
    },
  },
  mounted() {
    // Appelle la méthode fetch lors du montage du composant
    this.fetch();
  },
};
</script>
<style scoped>
.card-title {
  font-weight: 600;
  font-size: 20px;
}

label {
  font-weight: 100 !important;
}

.upload-images {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  display: flex;
  margin-top: 30px;
  width: 228px;
  height: 78px;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

.upload-size {
  width: 89px !important;
  height: 78px !important;
}

.upload-images img {
  max-height: 45px;
  width: auto;
}

.remove {
  position: absolute;
  top: 5px;
  right: 5px;
  color: red;
}

.btn {
  color: white;
  font-weight: bold;
}

.btn-update {
  background: #03a9f470;
  transition: 0.2s;
}

.btn-cancel {
  background: #ff5722a8;
  transition: 0.2s;
}

.btn-update:hover {
  background: #03a9f4;
}

.btn-cancel:hover {
  background: #ff5722;
}
</style>
