<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="card-header mb-3 d-flex justify-content-between align-items-center">
            <h5 class="card-title">Google Login Credential</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Client ID</label>
                <input v-model="data.google_client_id" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Client Secret</label>
                <input v-model="data.google_client_secret" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="" />
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Save</button>
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
          <div class="card-header mb-3 d-flex justify-content-between align-items-center">
            <h5 class="card-title">Facebook</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">App ID</label>
                <input v-model="data.facebook_app_id" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">App Secret</label>
                <input v-model="data.facebook_app_secret" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="" />
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Save</button>
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
          <div class="card-header mb-3 d-flex justify-content-between align-items-center">
            <h5 class="card-title">Twiter Login Credential</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Client ID</label>
                <input v-model="data.twitter_client_id" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Client Secret</label>
                <input v-model="data.twitter_client_secret" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="" />
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Save</button>
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
import axios from "axios";

export default {
  data() {
    return {
      imageUrl: null,
      data: {
        google_client_id: "",
        google_client_secret: "",
        facebook_app_id: "",
        facebook_app_secret: "",
        twitter_client_id: "",
        twitter_client_secret: "",
      },
    };
  },
  methods: {
    // Fonction pour récupérer les données depuis l'API
    async fetch() {
      try {
        const response = await axios.get(`/settings/1`);
        this.data = {
          google_client_id: response.data.data.google_client_id,
          google_client_secret: response.data.data.google_client_secret,
          facebook_app_id: response.data.data.facebook_app_id,
          facebook_app_secret: response.data.data.facebook_app_secret,
          twitter_client_id: response.data.data.twitter_client_id,
          twitter_client_secret: response.data.data.twitter_client_secret,
          facebook: response.data.data.facebook,
          twitter: response.data.data.twitter,
          type: 'socialmodialog'
        };
      } catch (error) {
        console.log(error);
      }
    },
    // Fonction appelée lorsqu'un fichier est sélectionné
    onFileSelected(event) {
      this.data.photo = event.target.files[0];
      this.previewImage();
    },
    // Fonction pour prévisualiser l'image sélectionnée
    previewImage() {
      const reader = new FileReader();
      reader.readAsDataURL(this.data.photo);
      reader.onload = (event) => {
        this.imageUrl = event.target.result;
      };
    },
    ...mapActions({
      update: "Settings/update",
    }),
    // Fonction pour mettre à jour le formulaire
    updateForm() {
      this.update(this.data);
    },
  },
  mounted() {
    // Appel de la fonction fetch lors du montage du composant
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
