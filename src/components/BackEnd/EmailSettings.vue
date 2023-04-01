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
        favicon: "",
        address_one: "",
        address_two: "",
        city: "",
        province: "",
        postal_code: "",
        country: "",
        time_zone: "",
        date_format: "",
        time_format: "",
        currency: "",
        paypal_tokenization_key: "",
        paypal_merchant_id: "",
        paypal_public_key: "",
        paypal_private_key: "",
        paypal_app_id: "",
        paypal_secret_key: "",
        stripe_option: "",
        stripe_name: "",
        stripe_merchant_id: "",
        stripe_rest_id: "",
        php_mail_email: "",
        php_mail_password: "",
        php_mail_email_from_name: "",
        smtp_email: "",
        smtp_password: "",
        smtp_email_host: "",
        smtp_email_port: "",
        google_client_id: "",
        google_client_secret: "",
        facebook_app_id: "",
        facebook_app_secret: "",
        twitter_client_id: "",
        twitter_client_secret: "",
        facebook: "",
        twitter: "",
        linkedin: "",
        seo_title: "",
        seo_description: "",
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
    async fetch() {
      try {
        const response = await axios.get(`/settings/1`);
        this.data = {
          favicon: response.data.data.favicon,
          address_one: response.data.data.address_one,
          address_two: response.data.data.address_two,
          city: response.data.data.city,
          province: response.data.data.province,
          postal_code: response.data.data.postal_code,
          country: response.data.data.country,
          time_zone: response.data.data.time_zone,
          date_format: response.data.data.date_format,
          time_format: response.data.data.time_format,
          currency: response.data.data.currency,
          paypal_tokenization_key: response.data.data.paypal_tokenization_key,
          paypal_merchant_id: response.data.data.paypal_merchant_id,
          paypal_public_key: response.data.data.paypal_public_key,
          paypal_private_key: response.data.data.paypal_private_key,
          paypal_app_id: response.data.data.paypal_app_id,
          paypal_secret_key: response.data.data.paypal_secret_key,
          stripe_option: response.data.data.stripe_option,
          stripe_name: response.data.data.stripe_name,
          stripe_merchant_id: response.data.data.stripe_merchant_id,
          stripe_rest_id: response.data.data.stripe_rest_id,
          php_mail_email: response.data.data.php_mail_email,
          php_mail_password: response.data.data.php_mail_password,
          php_mail_email_from_name: response.data.data.php_mail_email_from_name,
          smtp_email: response.data.data.smtp_email,
          smtp_password: response.data.data.smtp_password,
          smtp_email_host: response.data.data.smtp_email_host,
          smtp_email_port: response.data.data.smtp_email_port,
          google_client_id: response.data.data.google_client_id,
          google_client_secret: response.data.data.google_client_secret,
          facebook_app_id: response.data.data.facebook_app_id,
          facebook_app_secret: response.data.data.facebook_app_secret,
          twitter_client_id: response.data.data.twitter_client_id,
          twitter_client_secret: response.data.data.twitter_client_secret,
          facebook: response.data.data.facebook,
          twitter: response.data.data.twitter,
          linkedin: response.data.data.linkedin,
          seo_title: response.data.data.seo_title,
          seo_description: response.data.data.seo_description,
          google_analytics: response.data.data.google_analytics,
          google_adcence_code: response.data.data.google_adcence_code,
          facebook_messanger: response.data.data.facebook_messanger,
          display_facebook_pixel: response.data.data.display_facebook_pixel,
          google_rechaptcha_key: response.data.data.google_rechaptcha_key,
          google_rechaptcha_secret: response.data.data.google_rechaptcha_secret,
          cookies_agreement: response.data.data.cookies_agreement,
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
      //fetch: "Settings/fetch",
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
