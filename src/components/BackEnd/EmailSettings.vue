<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div
            class="card-header mb-3 d-flex justify-content-between align-items-center">
            <h5 class="card-title">PHP Mail</h5>
            <div
              class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Email From Address</label
                >
                <input
                  v-model="data.php_mail_email"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email From Address..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label"
                  >Email Password</label
                >
                <input
                  v-model="data.php_mail_password"
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Email Password..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput3" class="form-label"
                  >Emails From Name</label
                >
                <input
                  v-model="data.php_mail_email_from_name"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Emails From Name..." />
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Submit</button>
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
          <div
            class="card-header mb-3 d-flex justify-content-between align-items-center">
            <h5 class="card-title">SMTP</h5>
            <div
              class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form @submit.prevent="updateForm">
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput4" class="form-label"
                  >Email From Address</label
                >
                <input
                  v-model="data.smtp_email"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput4"
                  placeholder="Email From Address..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput5" class="form-label"
                  >Email Password</label
                >
                <input
                  v-model="data.smtp_password"
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput5"
                  placeholder="Email Password..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput6" class="form-label"
                  >Email Host</label
                >
                <input
                  v-model="data.smtp_email_host"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput6"
                  placeholder="Email Host..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput7" class="form-label"
                  >Email Port</label
                >
                <input
                  v-model="data.smtp_email_port"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput7"
                  placeholder="Email Port..." />
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Submit</button>
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
import axios from "../../axios.config";

export default {
  data() {
    return {
      imageUrl: null,
      data: {
        php_mail_email: "",
        php_mail_password: "",
        php_mail_email_from_name: "",
        smtp_email: "",
        smtp_password: "",
        smtp_email_host: "",
        smtp_email_port: "",
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
          php_mail_email: response.data.data.php_mail_email,
          php_mail_password: response.data.data.php_mail_password,
          php_mail_email_from_name: response.data.data.php_mail_email_from_name,
          smtp_email: response.data.data.smtp_email,
          smtp_password: response.data.data.smtp_password,
          smtp_email_host: response.data.data.smtp_email_host,
          smtp_email_port: response.data.data.smtp_email_port,
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
