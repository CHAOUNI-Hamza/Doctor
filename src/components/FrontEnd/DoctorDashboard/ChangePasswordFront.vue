<template>
  <div class="card  mt-3">
    <div class="card-body">
      <div class="row">
        <div class="col-md-12 col-lg-6">

          <form @submit.prevent="changePasswor">
            <div class="form-group">
              <label>Old Password</label>
              <input @blur="v$.changePassword.current_password.$touch" v-model="changePassword.current_password"
                :class="{ 'text-fields-error': v$.changePassword.current_password.$error === true }" type="password"
                class="form-control">
            </div>
            <div class="form-group">
              <label>New Password</label>
              <input @blur="v$.changePassword.new_password.$touch" v-model="changePassword.new_password"
                :class="{ 'text-fields-error': v$.changePassword.new_password.$error === true }" type="password"
                class="form-control">
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input @blur="v$.changePassword.new_password_confirmation.$touch"
                v-model="changePassword.new_password_confirmation"
                :class="{ 'text-fields-error': v$.changePassword.new_password_confirmation.$error === true }"
                type="password" class="form-control">
            </div>
            <div v-if="v$.$invalid" class="submit-section">
              <button type="submit" class="btn btn-primary submit-btn disable">Save Changes</button>
            </div>
            <div v-if="!v$.$invalid" class="submit-section">
              <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      v$: useVuelidate(),
      changePassword: {
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      }
    };
  },
  validations() {
    return {
      changePassword: {
        current_password: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(30),
          $autoDirty: true,
        },
        new_password: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(30),
          $autoDirty: true,
        },
        new_password_confirmation: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(30),
          $autoDirty: true,
        },
      }
    };
  },
  methods: {
    ...mapActions({
      changePasswordDoctor: "Doctors/changePasswordDoctor",
    }),
    changePasswor() {
      this.changePasswordDoctor(this.changePassword)
    }
  }
};
</script>
<style scoped>
.disable {
  cursor: not-allowed;
  pointer-events: none;
}

form .text-fields-error {
  border: 1px solid #ff00008f !important;
}

form .text-fields-error::placeholder {
  color: #ff00008f !important;
}

form .error-msg {
  color: #ff00008f;
  font-size: 13px;
  margin-top: 5px;
  text-align: left;
}


form .error-message {
  color: #dd4b39;
  font-size: 16px;
}
</style>
