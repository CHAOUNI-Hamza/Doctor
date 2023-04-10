<template>
    <NavbarFront />
    <BreadCrumbFront />
    <div class="content container">
        <div class="container-fluid">
            <div class="row">
                <div class="row" style="transform: none;">
                    <div class="col-md-7 col-lg-8">
                        <div class="card">
                            <div class="card-body">

                                <form action="booking-success.html">

                                    <div class="info-widget">
                                        <h4 class="card-title">Personal Information</h4>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>First Name</label>
                                                    <input class="form-control" type="text">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Last Name</label>
                                                    <input class="form-control" type="text">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Email</label>
                                                    <input class="form-control" type="email">
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-12">
                                                <div class="form-group card-label">
                                                    <label>Phone</label>
                                                    <input class="form-control" type="text">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="exist-customer">Existing Customer? <a href="#">Click here to login</a>
                                        </div>
                                    </div>

                                    <div class="payment-widget">
                                        <h4 class="card-title">Payment Method</h4>

                                        <div class="payment-list">
                                            <div class="payment-list">

                                                <input id="01" type="radio" name="r" value="1" checked="">
                                                <label for="01" class="ml-1">Paypal</label>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group card-label">
                                                        <label for="card_name">Name on Card</label>
                                                        <input class="form-control" id="card_name" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group card-label">
                                                        <label for="card_number">Card Number</label>
                                                        <input class="form-control" id="card_number"
                                                            placeholder="1234  5678  9876  5432" type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group card-label">
                                                        <label for="expiry_month">Expiry Month</label>
                                                        <input class="form-control" id="expiry_month" placeholder="MM"
                                                            type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group card-label">
                                                        <label for="expiry_year">Expiry Year</label>
                                                        <input class="form-control" id="expiry_year" placeholder="YY"
                                                            type="text">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group card-label">
                                                        <label for="cvv">CVV</label>
                                                        <input class="form-control" id="cvv" type="text">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="payment-list">

                                            <input id="01" type="radio" name="r" value="1" checked="">
                                            <label for="01" class="ml-1">Paypal</label>
                                        </div>




                                        <div class="terms-accept mt-3">
                                            <div class="custom-checkbox">
                                                <input type="checkbox" id="terms_accept">
                                                <label for="terms_accept">I have read and accept <a href="#">Terms &amp;
                                                        Conditions</a></label>
                                            </div>
                                        </div>


                                        <div class="submit-section mt-4">
                                            <router-link :to="{ name: 'boking-success' }"
                                                class="btn btn-primary submit-btn">

                                                Confirm and
                                                Pay</router-link>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-4 theiaStickySidebar"
                        style="position: relative; overflow: visible; box-sizing: border-box; min-height: 1px;">



                        <div class="theiaStickySidebar"
                            style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none; left: 876.5px; top: 0px;">
                            <div class="card booking-card">
                                <div class="card-header">
                                    <h4 class="card-title">Booking Summary</h4>
                                </div>
                                <div class="card-body">

                                    <div class="booking-doc-info">
                                        <a href="doctor-profile.html" class="booking-doc-img">
                                            <img :src="doctor.photo" alt="User Image">
                                        </a>
                                        <div class="booking-info">
                                            <h4><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
                                            <div class="clinic-details">
                                                <p class="doc-location"><font-awesome-icon class="mr-2"
                                                        icon="fa-solid fa-location-dot" /> {{ doctor.adresse_one }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="booking-summary mt-3">
                                        <div class="booking-item-wrap">
                                            <ul class="booking-date">
                                                <li>Date <span>16 Nov 2019</span></li>
                                                <li>Time <span>10:00 AM</span></li>
                                            </ul>
                                            <ul class="booking-fee">
                                                <li>Consulting Fee <span>$100</span></li>
                                                <li>Booking Fee <span>$10</span></li>
                                                <li>Video Call <span>$50</span></li>
                                            </ul>
                                            <div class="booking-total">
                                                <ul class="booking-total-list">
                                                    <li>
                                                        <span>Total</span>
                                                        <span class="total-cost">$160</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="resize-sensor"
                                style="position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                                <div class="resize-sensor-expand"
                                    style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                    <div
                                        style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 390px; height: 760px;">
                                    </div>
                                </div>
                                <div class="resize-sensor-shrink"
                                    style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                    <div
                                        style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <FooterFront />
</template>
  
<script>
import axios from "../../axios.config";
import BreadCrumbFront from "./../../components/FrontEnd/DoctorDashboard/BreadCrumbFront.vue";
export default {
    components: {
        BreadCrumbFront,
    },
    data() {
        return {
            params: {
                search_by: "Search by...",
                value: "",
                page: 1,
                search_array: [],
                sex: []
            },
            doctor: [],
            activetab: 1
        };
    },
    watch: {
        params: {
            handler() {
                //this.fetchDoctors(this.params);
            },
            deep: true,
        },
    },
    computed: {

    },
    methods: {
        async fetch() {
            const response = await axios.get(`/doctors/1`);
            this.doctor = response.data.data;
        },
    },
    mounted() {
        this.fetch()
    },
};
</script>
<style scoped>
.card {
    border: 1px solid #f0f0f0;
    margin-bottom: 1.875rem;
}

.card-body {
    padding: 1.5rem;
}

.info-widget {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 30px;
    margin-bottom: 30px;
}

.card-title {
    margin-bottom: 15px;
    float: none;
}

.card-label>label {
    background-color: #fff;
    color: #959595;
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    margin: 6px auto auto 8px;
    padding: 0 7px;
}

.card-label>input {
    background-color: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .05);
    display: block;
    height: 50px;
    margin-top: -13px;
    padding: 5px 15px 0;
    transition: border-color .3s;
    width: 100%;
}

.exist-customer a {
    color: #20c0f3;
    font-weight: 500;
}

.payment-radio {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 600;
    color: #272b41;
    text-transform: capitalize;
}

.payment-radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.payment-radio input:checked~.checkmark {
    border-color: #20c0f3;
}

.payment-radio .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    width: 19px;
    height: 19px;
    margin: 3px 0 0 0;
    border: 2px solid #ddd;
    border-top-color: rgb(221, 221, 221);
    border-right-color: rgb(221, 221, 221);
    border-bottom-color: rgb(221, 221, 221);
    border-left-color: rgb(221, 221, 221);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
}

.card .card-header {
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
}

.booking-doc-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.booking-doc-info .booking-doc-img {
    width: 80px;
    margin-right: 15px;
}

.booking-doc-info .booking-doc-img img {
    border-radius: 4px;
    height: 80px;
    width: 80px;
    object-fit: cover;
}

.clinic-details {
    margin-bottom: 15px;
    margin-top: 10px;
}

.booking-date {
    padding: 0;
    list-style: none;
}

.booking-date li {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #272b41;
    text-transform: capitalize;
    margin-bottom: 15px;
}

.booking-date li span {
    float: right;
    color: #757575;
    font-weight: 400;
    font-size: 15px;
    text-align: right;
}

.booking-fee {
    padding: 0;
    list-style: none;
}

.booking-fee li {
    position: relative;
    font-size: 14px;
    font-weight: 500;
    color: #272b41;
    text-transform: capitalize;
    margin-bottom: 15px;
}

.booking-fee li span {
    float: right;
    color: #757575;
    font-weight: 400;
    font-size: 15px;
}

.booking-total {
    border-top: 1px solid #e4e4e4;
    margin-top: 20px;
    padding-top: 20px;
}

.booking-total ul {
    padding: 0;
    list-style: none;
    margin: 0;
}

.booking-total ul li .total-cost {
    color: #20c0f3;
    font-size: 16px;
    float: right;
}









.form {
    --background: #ffffff;
    --text: #414856;
    --radio: #7C96B2;
    --radio-checked: #4F29F0;
    --radio-size: 20px;
    --width: 150px;
    --height: 140px;
    --border-radius: 10px;
    background: var(--background);
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    color: var(--text);
    position: relative;
    box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
    padding: 30px 20px;
    display: grid;
    grid-template-columns: auto var(--radio-size);
    align-items: center;
}

.form label {
    cursor: pointer;
}

.form input[type="radio"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    height: var(--radio-size);
    width: var(--radio-size);
    outline: none;
    margin: 0;
    cursor: pointer;
    border: 2px solid var(--radio);
    background: transparent;
    border-radius: 50%;
    display: grid;
    justify-self: end;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    transition: border .5s ease;
}

.form input[type="radio"]::before,
.form input[type="radio"]::after {
    content: "";
    display: flex;
    justify-self: center;
    border-radius: 50%;
}

.form input[type="radio"]::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--background);
    z-index: 1;
    opacity: var(--opacity, 1);
}

.form input[type="radio"]::after {
    position: relative;
    width: calc(100% /2);
    height: calc(100% /2);
    background: var(--radio-checked);
    top: var(--y, 100%);
    transition: top 0.5s cubic-bezier(0.48, 1.97, 0.5, 0.63);
}

.form input[type="radio"]:checked {
    --radio: var(--radio-checked);
}

.form input[type="radio"]:checked::after {
    --y: 0%;
    animation: stretch-animate .3s ease-out .17s;
}

.form input[type="radio"]:checked::before {
    --opacity: 0;
}

.form input[type="radio"]:checked~input[type="radio"]::after {
    --y: -100%;
}

.form input[type="radio"]:not(:checked)::before {
    --opacity: 1;
    transition: opacity 0s linear .5s;
}

@keyframes stretch-animate {
    0% {
        transform: scale(1, 1);
    }

    28% {
        transform: scale(1.15, 0.85);
    }

    50% {
        transform: scale(0.9, 1.1);
    }

    100% {
        transform: scale(1, 1);
    }
}

.socials {
    position: fixed;
    display: block;
    left: 20px;
    bottom: 20px;
}

.socials>a {
    display: block;
    width: 30px;
    opacity: .2;
    transform: scale(var(--scale, 0.8));
    transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
}

.socials>a:hover {
    --scale: 1;
}

.submit-section .submit-btn {
    padding: 12px 30px;
    font-weight: 600;
    font-size: 16px;
    min-width: 120px;
}

.btn-primary {
    background-color: #09e5ab;
    border: 1px solid #09e5ab;
}
</style>
  