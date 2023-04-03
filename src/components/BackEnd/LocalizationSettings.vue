<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div class="card-header mb-3 d-flex justify-content-between align-items-center">
            <h5 class="card-title">Localization Details</h5>
            <div class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Time Zone</label>
                <select v-model="data.time_zone" class="form-control">
                  <option value="Fuseau horaire de la zone géographique 'Casablanca' (UTC)">Fuseau horaire de la zone
                    géographique "Casablanca" (UTC)</option>
                  <option value="Fuseau horaire de la zone géographique 'Paris', France (UTC+2)">Fuseau horaire de la zone
                    géographique "Paris, France" (UTC+2)</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Date Format
                </label>
                <input v-model="data.date_format" type="date" class="form-control" id="exampleFormControlInput1"
                  placeholder="Email Password..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Time Format</label>
                <input v-model="data.time_format" type="time" class="form-control" id="exampleFormControlInput1"
                  placeholder="Emails From Name..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Currency Symbol
                </label>
                <select v-model="data.currency" class="form-control">
                  <option value="USD">$</option>
                  <option value="EUR">€</option>
                  <option value="GBP">£</option>
                  <option value="JPY">¥</option>
                </select>
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Update</button>
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
import axios from "../../axios.config";

export default {
  data() {
    return {
      imageUrl: null,
      data: {
        time_zone: "",
        date_format: "",
        time_format: "",
        currency: "",
      },
    };
  },
  computed: {
    /* ...mapGetters({
      get: "Settings/get",
    }),*/
  },
  methods: {
    async fetch() {
      try {
        const response = await axios.get(`/settings/1`);
        console.log(response.data.data);
        this.data = {
          time_zone: response.data.data.time_zone,
          date_format: response.data.data.date_format,
          time_format: response.data.data.time_format,
          currency: response.data.data.currency,
        };
      } catch (error) {
        console.log(error);
      }
    },
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
      update: "Settings/update",
    }),
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
