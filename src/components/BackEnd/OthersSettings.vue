<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="card-header mb-3 d-flex justify-content-between align-items-center">
            <h5 class="card-title">Enable Google Analytics</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Google Analytics</label>
                <textarea v-model="data.google_analytics" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="Google Analytics"></textarea>
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
            <h5 class="card-title">Enable Google Adsense Code</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Google Adsense Code</label>
                <textarea v-model="data.google_adcence_code" type="text" class="form-control"
                  id="exampleFormControlInput1" placeholder="Google Adsense Code"></textarea>
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
            <h5 class="card-title">Display Facebook Messenger</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Facebook Messenger
                </label>
                <textarea v-model="data.facebook_messanger" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="Facebook Messenger"></textarea>
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
            <h5 class="card-title">Display Facebook Pixel</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Google Adsense Code</label>
                <textarea v-model="data.display_facebook_pixel" type="text" class="form-control"
                  id="exampleFormControlInput1" placeholder="Google Adsense Code"></textarea>
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
            <h5 class="card-title">Display Google Recaptcha</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Google Rechaptcha Site Key</label>
                <input v-model="data.google_rechaptcha_key" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="Google Rechaptcha Site Key" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Google Rechaptcha Secret Key</label>
                <input v-model="data.google_rechaptcha_secret" type="text" class="form-control"
                  id="exampleFormControlInput1" placeholder="Google Rechaptcha Secret Key" />
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
            <h5 class="card-title">Cookies Agreement</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Cookies Agreement Text</label>
                <textarea v-model="data.cookies_agreement" type="text" class="form-control" id="exampleFormControlInput1"
                  placeholder="Cookies Agreement Text"></textarea>
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
        google_analytics: "",
        google_adcence_code: "",
        facebook_messanger: "",
        display_facebook_pixel: "",
        google_rechaptcha_key: "",
        google_rechaptcha_secret: "",
        cookies_agreement: "",
      },
    };
  },
  computed: {
    /* ...mapGetters({
      get: "Settings/get",
    }),*/
  },
  methods: {
    // Récupérer les données depuis l'API
    async fetch() {
      try {
        const response = await axios.get(`/settings/1`);
        this.data = {
          google_analytics: response.data.data.google_analytics,
          google_adcence_code: response.data.data.google_adcence_code,
          facebook_messanger: response.data.data.facebook_messanger,
          display_facebook_pixel: response.data.data.display_facebook_pixel,
          google_rechaptcha_key: response.data.data.google_rechaptcha_key,
          google_rechaptcha_secret: response.data.data.google_rechaptcha_secret,
          cookies_agreement: response.data.data.cookies_agreement,
          type: 'others'
        };
      } catch (error) {
        console.log(error);
      }
    },
    // Gérer la sélection d'un fichier
    onFileSelected(event) {
      this.data.photo = event.target.files[0];
      this.previewImage();
    },
    // Prévisualiser l'image sélectionnée
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
    // Soumettre le formulaire de mise à jour
    updateForm() {
      this.update(this.data);
    },
  },
  mounted() {
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
