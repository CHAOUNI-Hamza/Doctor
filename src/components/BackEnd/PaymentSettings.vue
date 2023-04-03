<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <div
            class="card-header mb-3 d-flex justify-content-between align-items-center">
            <h5 class="card-title">Paypal</h5>
            <div
              class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form>
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Paypal Option</label
                ><br />
                <input
                  v-model="data.paypal_tokenization_key"
                  id="r1"
                  type="radio"
                  name="radio"
                  value="1" />
                <label for="r1">Sandbox</label>
                <input
                  v-model="data.paypal_tokenization_key"
                  id="r2"
                  class="ml-2"
                  type="radio"
                  name="radio"
                  value="2"
                  checked />
                <label for="r2">Live</label>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Braintree Tokenization key</label
                >
                <input
                  v-model="data.paypal_tokenization_key"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Braintree Tokenization key..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Braintree Merchant ID</label
                >
                <input
                  v-model="data.paypal_merchant_id"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Braintree Merchant ID..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Braintree Public key</label
                >
                <input
                  v-model="data.paypal_public_key"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Braintree Public key..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Braintree Private key</label
                >
                <input
                  v-model="data.paypal_private_key"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Braintree Private key..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Paypal APP ID</label
                >
                <input
                  v-model="data.paypal_app_id"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Paypal APP ID..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Paypal Secret Key</label
                >
                <input
                  v-model="data.paypal_secret_key"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Paypal Secret Key..." />
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Save</button>
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
            <h5 class="card-title">Stripe</h5>
            <div
              class="status-toggle d-flex justify-content-between align-items-center">
              <input id="s2" type="checkbox" class="switch" />
            </div>
          </div>
          <form>
            <div class="settings-form">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Stripe Option</label
                ><br />
                <input
                  v-model="data.stripe_option"
                  id="r1"
                  type="radio"
                  name="radio"
                  value="1" />
                <label for="r1">Sandbox</label>
                <input
                  v-model="data.stripe_option"
                  id="r2"
                  class="ml-2"
                  type="radio"
                  name="radio"
                  value="2"
                  checked />
                <label for="r2">Live</label>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Gateway Name</label
                >
                <input
                  v-model="data.stripe_name"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Gateway Name..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Braintree Merchant ID</label
                >
                <input
                  v-model="data.stripe_merchant_id"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Braintree Merchant ID..." />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"
                  >Rest Key</label
                >
                <input
                  v-model="data.stripe_rest_id"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Rest Key..." />
              </div>
              <div class="mb-3">
                <div class="form-group mb-0">
                  <div class="settings-btns">
                    <button type="submit" class="btn btn-update">Save</button>
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
