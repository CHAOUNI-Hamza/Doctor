<template>
    <NavbarFront />
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="account-content">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-7 col-lg-6 login-left">
                                <img src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=2000"
                                    class="img-fluid" alt="Doccure Login">
                            </div>
                            <div class="col-md-12 col-lg-6 login-right">
                                <div class="login-header">
                                    <h3>Login <span>Doctor</span></h3>
                                </div>
                                <form @submit.prevent="submit()">
                                    <div class="form-group form-focus">
                                        <input @blur="v$.user.email.$touch"
                                            :class="{ 'text-fields-error': v$.user.email.$error === true }"
                                            v-model="user.email" type="email" class="form-control floating">
                                        <label class="focus-label">Email</label>
                                    </div>
                                    <div class="form-group form-focus">
                                        <input @blur="v$.user.password.$touch"
                                            :class="{ 'text-fields-error': v$.user.password.$error === true }"
                                            v-model="user.password" type="password" class="form-control floating">
                                        <label class="focus-label">Password</label>
                                    </div>
                                    <div class="error-message" v-if="getErrorMessage">{{ getErrorMessage }}</div>
                                    <div class="text-end">
                                        <router-link :to="{ name: 'forgotpassword' }" class="forgot-link">Forgot Password
                                            ?</router-link>
                                    </div>
                                    <button v-if="v$.$invalid" type="submit"
                                        class="btn-primary w-100 btn-lg login-btn btn btn-save disable">
                                        Login
                                    </button>
                                    <button v-if="!v$.$invalid" type="submit"
                                        class="tn-primary w-100 btn-lg login-btn btn btn-save">
                                        Login
                                    </button>
                                    <div class="login-or">
                                        <span class="or-line"></span>
                                        <span class="span-or">or</span>
                                    </div>
                                    <div class="row form-row social-login">
                                        <div class="col-6">
                                            <a href="#0" class="btn btn-facebook w-100">
                                                <font-awesome-icon class="mr-1" icon="fa-brands fa-facebook-f" />
                                                Login
                                            </a>
                                        </div>
                                        <div class="col-6">
                                            <a type="submit" class="btn btn-google w-100">
                                                <font-awesome-icon class="mr-1" icon="fa-brands fa-google" />
                                                Login
                                            </a>
                                        </div>
                                    </div>
                                    <div class="text-center dont-have">Don’t have an account?
                                        <router-link :to="{ name: 'registerfront' }">
                                            Register</router-link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterFront />
    <div class="overlay" v-if="getOverLay">
        <div class="overlay__inner">
            <div class="overlay__content"><span class="spinner"></span></div>
        </div>
    </div>
</template>
  
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { mapActions, mapGetters } from "vuex";
export default {
    components: {

    },
    data() {
        return {
            v$: useVuelidate(),
            user: {
                email: "",
                password: "",
            },
            forgotpassword: {
                email: "",
            },
            errorMessage: null,
        }
    },
    validations() {
        return {
            user: {
                password: {
                    required,
                    minLength: minLength(5),
                    maxLength: maxLength(30),
                    $autoDirty: true,
                },
                email: {
                    required,
                    email,
                    minLength: minLength(10),
                    maxLength: maxLength(40),
                    $autoDirty: true,
                },
            }
        };
    },
    methods: {
        ...mapActions({
            signIn: "Doctors/signIn",
        }),
        submit() {
            this.signIn(this.user);
        },
    },
    computed: {
        ...mapGetters({
            getErrorMessage: "Doctors/getErrorMessage",
            getOverLay: "Doctors/getOverLay"
        }),
    },
}
</script>
<style scoped>
.content {
    padding: 50px 0;
}

.login-header {
    margin-bottom: 20px;
}

.form-focus .form-control {
    height: 50px;
    padding: 21px 12px 6px;
    width: 100%;
}

.form-focus {
    position: relative;
}

.focus-label {
    position: absolute;
    top: 5px;
    left: 12px;
    font-weight: 400;
    color: #333;
    opacity: 0.5;
    font-size: 12px;
}

.login-right {
    border: 1px solid #3333331a;
    border-radius: 5px;
    padding: 25px;
}

.forgot-link {
    color: #3d3d3d;
    display: inline-block;
    font-size: 13px;
    margin-bottom: 10px;
    font-weight: 400;
}

.text-end {
    text-align: right;
}

.login-btn {
    background: #00e7ff;
    border: none;
}

.login-or {
    color: #d4d4d4;
    margin-bottom: 20px;
    margin-top: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
}

.or-line {
    background-color: #e5e5e5;
    height: 1px;
    margin-bottom: 0;
    margin-top: 0;
    display: block;
}

.span-or {
    background-color: #fff;
    display: block;
    left: 50%;
    margin-left: -20px;
    position: absolute;
    text-align: center;
    top: -3px;
    width: 42px;
}

.btn-facebook {
    background-color: #3a559f;
    color: #fff;
    font-size: 13px;
    padding: 8px 12px;
}

.btn-google {
    background-color: #dd4b39;
    color: #fff;
    font-size: 13px;
    padding: 8px 12px;
}

.login-right .dont-have {
    color: #3d3d3d;
    margin-top: 20px;
    font-size: 13px;
}

.login-right .dont-have a {
    color: #09dca4;
}

@media only screen and (max-width: 991.98px) {
    .login-left {
        display: none;
    }
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



.overlay {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #1377818a;
}

.overlay__inner {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}

.overlay__content {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}

.spinner {
    width: 75px;
    height: 75px;
    display: inline-block;
    border-width: 2px;
    border-color: rgba(255, 255, 255, 0.05);
    border-top-color: #fff;
    animation: spin 1s infinite linear;
    border-radius: 100%;
    border-style: solid;
}

.disable {
    cursor: not-allowed;
    pointer-events: none;
}

@keyframes spin {
    100% {
        transform: rotate(360deg);
    }
}
</style>
  