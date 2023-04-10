<template>
    <NavbarFront />
    <BreadCrumbFront />
    <div class="content" style="min-height: 5.609px;">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="booking-doc-info">
                                <a href="doctor-profile.html" class="booking-doc-img">
                                    <img :src="doctor.photo" alt="User Image">
                                </a>
                                <div class="booking-info">
                                    <h4><a href="doctor-profile.html">Dr. {{ doctor.username }}</a></h4>
                                    <p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i> {{ doctor.adresse_one
                                    }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-12 col-sm-4 col-md-6">
                            <h4 class="mb-1">11 November 2019</h4>
                            <p class="text-muted">Monday</p>
                        </div>
                        <div class="col-12 col-sm-8 col-md-4 text-right">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect2">
                                    <option>April 1, 2023 - April 30, 2023</option>
                                    <option>April 1, 2023 - April 30, 2023</option>
                                    <option>April 1, 2023 - April 30, 2023</option>
                                    <option>April 1, 2023 - April 30, 2023</option>
                                    <option>April 1, 2023 - April 30, 2023</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="card booking-schedule schedule-widget">

                        <div class="schedule-header">
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="day-slot">
                                        <ul>
                                            <li class="left-arrow">
                                                <a href="">
                                                    <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                                                </a>
                                            </li>
                                            <li>
                                                <span>Mon</span>
                                                <span class="slot-date">11 Nov <small class="slot-year">2019</small></span>
                                            </li>
                                            <li>
                                                <span>Tue</span>
                                                <span class="slot-date">12 Nov <small class="slot-year">2019</small></span>
                                            </li>
                                            <li>
                                                <span>Wed</span>
                                                <span class="slot-date">13 Nov <small class="slot-year">2019</small></span>
                                            </li>
                                            <li>
                                                <span>Thu</span>
                                                <span class="slot-date">14 Nov <small class="slot-year">2019</small></span>
                                            </li>
                                            <li>
                                                <span>Fri</span>
                                                <span class="slot-date">15 Nov <small class="slot-year">2019</small></span>
                                            </li>
                                            <li>
                                                <span>Sat</span>
                                                <span class="slot-date">16 Nov <small class="slot-year">2019</small></span>
                                            </li>
                                            <li>
                                                <span>Sun</span>
                                                <span class="slot-date">17 Nov <small class="slot-year">2019</small></span>
                                            </li>
                                            <li class="right-arrow">
                                                <a href="">
                                                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div class="schedule-cont">
                            <div class="row">
                                <div class="col-md-12">

                                    <div class="time-slot">
                                        <ul class="clearfix">
                                            <li>
                                                <a class="timing" href="#">
                                                    <span>9:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>10:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>11:00</span> <span>AM</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="timing" href="#">
                                                    <span>9:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>10:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>11:00</span> <span>AM</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="timing" href="#">
                                                    <span>9:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>10:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>11:00</span> <span>AM</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="timing" href="#">
                                                    <span>9:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>10:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>11:00</span> <span>AM</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="timing" href="#">
                                                    <span>9:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing selected" href="#">
                                                    <span>10:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>11:00</span> <span>AM</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="timing" href="#">
                                                    <span>9:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>10:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>11:00</span> <span>AM</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="timing" href="#">
                                                    <span>9:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>10:00</span> <span>AM</span>
                                                </a>
                                                <a class="timing" href="#">
                                                    <span>11:00</span> <span>AM</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                    <div class="submit-section proceed-btn text-end">
                        <router-link :to="{ name: 'checkout' }" class="btn btn-primary submit-btn">Proceed to
                            Pay</router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <FooterFront />
</template>
  
<script>
import axios from "../../axios.config";
//import { mapGetters, mapActions } from "vuex";
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
        /*...mapGetters({

        }),*/
    },
    methods: {
        async fetch() {
            const response = await axios.get(`/doctors/1`);
            this.doctor = response.data.data;
        },
        /* ...mapActions({
 
         }),*/
    },
    mounted() {
        this.fetch()
    },
};
</script>
<style scoped>
.day-slot li.right-arrow {
    right: -11px;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 20px !important;
    transform: translateY(-50%);
}

.card {
    border: 1px solid #f0f0f0;
    margin-bottom: 1.875rem;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 0.25rem;
}

.card-body {
    padding: 1.5rem;
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

img,
svg {
    vertical-align: middle;
}

.text-muted {
    color: #757575 !important;
}


.btn-white {
    background-color: #fff;
    border: 1px solid #ccc;
    color: #272b41;
}


.schedule-widget {
    border-radius: 4px;
    min-height: 100px;
}

.schedule-header {
    border-bottom: 1px solid #f0f0f0;
    border-radius: 4px 4px 0 0;
    padding: 10px 20px;
}

.day-slot ul {
    float: left;
    list-style: none;
    margin-bottom: 0;
    margin-left: -5px;
    margin-right: -5px;
    padding: 0;
    position: relative;
    width: 100%;
}

.day-slot li.left-arrow {
    left: 0;
    padding: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 20px !important;
    transform: translateY(-50%);
}

.schedule-cont {
    padding: 20px;
}

.time-slot ul {
    list-style: none;
    margin-right: -5px;
    margin-left: -5px;
    margin-bottom: 0;
    padding: 0;
}

.time-slot li {
    float: left;
    padding-left: 5px;
    padding-right: 5px;
    width: 14.28%;
    min-height: 1px;
}

.time-slot li .timing {
    background-color: #e9e9e9;
    border: 1px solid #e9e9e9;
    border-radius: 3px;
    color: #757575;
    display: block;
    font-size: 14px;
    margin-bottom: 10px;
    padding: 5px 5px;
    text-align: center;
    position: relative;
}

.day-slot li span {
    display: block;
    font-size: 18px;
    text-transform: uppercase;
}

.day-slot li span.slot-date {
    display: block;
    color: #757575;
    font-size: 14px;
}

.day-slot li small.slot-year {
    color: #757575;
    font-size: 14px;
}

.day-slot li {
    float: left;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
    width: 14.28%;
}

.submit-section.proceed-btn {
    margin: 0 0 30px;
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

.text-end {
    text-align: right !important;
}
</style>
  