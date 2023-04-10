<template>
    <NavbarFront />
    <BreadCrumbFront />
    <div class="content container">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="doctor-widget">
                                <div class="doc-info-left">
                                    <div class="doctor-img">
                                        <a href="doctor-profile.html">
                                            <img :src="doctor.photo" class="img-fluid .img-fluid-pro" alt="User Image" />
                                        </a>
                                    </div>
                                    <div class="doc-info-cont">
                                        <h4 class="doc-name">
                                            <a href="doctor-profile.html">{{ doctor.username }}</a>
                                        </h4>
                                        <h5 class="doc-department">
                                            <img :src="doctor.specialty?.photo" class="img-fluid" alt="Speciality" />{{
                                                doctor.specialty?.name
                                            }}
                                        </h5>
                                        <div class="clinic-details">
                                            <p class="doc-location">
                                                <font-awesome-icon class="mr-2" icon="fa-solid fa-location-dot" />
                                                {{ doctor.clinicadresse }}
                                            </p>
                                        </div>
                                        <div class="clinic-services">
                                            <span>{{ doctor.clinicname }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="doc-info-right">
                                    <div class="clini-infos">
                                        <ul style="list-style: none">
                                            <li>
                                                <font-awesome-icon style="width: 29px" icon="fa-regular fa-heart" />
                                                98%
                                            </li>
                                            <li>
                                                <font-awesome-icon style="width: 29px" icon="fa-regular fa-comment-dots" />
                                                17 Feedback
                                            </li>
                                            <li>
                                                <font-awesome-icon style="width: 29px" icon="fa-solid fa-location-dot" />
                                                Florida, USA
                                            </li>
                                            <li>
                                                <font-awesome-icon style="width: 29px" icon="fa-solid fa-sack-dollar" />
                                                $300 - $1000
                                                <font-awesome-icon style="width: 29px" icon="fa-solid fa-circle-info" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="clinic-booking">
                                        <router-link :to="{ name: 'doctorbooking' }" class="apt-btn">Book
                                            Appointment</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body pt-0">

                            <nav class="user-tabs mb-4">
                                <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                    <li class="nav-item">
                                        <a class="nav-link" v-on:click="activetab = 1"
                                            v-bind:class="[activetab === 1 ? 'active' : '']">Overview</a>
                                    </li>
                                    <!--<li class="nav-item">
                                        <a class="nav-link" v-on:click="activetab = 2"
                                            v-bind:class="[activetab === 2 ? 'active' : '']">Locations</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" v-on:click="activetab = 3"
                                            v-bind:class="[activetab === 3 ? 'active' : '']">Reviews</a>
                                    </li>-->
                                    <li class="nav-item">
                                        <a class="nav-link" v-on:click="activetab = 4"
                                            v-bind:class="[activetab === 4 ? 'active' : '']">Business
                                            Hours</a>
                                    </li>
                                </ul>
                            </nav>


                            <div class="tab-content pt-0 content">

                                <div v-if="activetab === 1" class="tabcontent">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-9">

                                            <div class="widget about-widget">
                                                <h4 class="widget-title">About Me</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                                    mollit anim id est laborum.</p>
                                            </div>


                                            <div class="widget education-widget">
                                                <h4 class="widget-title">Education</h4>
                                                <div class="experience-box">
                                                    <ul class="experience-list">
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">American Dental Medical
                                                                        University</a>
                                                                    <div>BDS</div>
                                                                    <span class="time">1998 - 2003</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">American Dental Medical
                                                                        University</a>
                                                                    <div>MDS</div>
                                                                    <span class="time">2003 - 2005</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div class="widget experience-widget">
                                                <h4 class="widget-title">Work &amp; Experience</h4>
                                                <div class="experience-box">
                                                    <ul class="experience-list">
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">Glowing Smiles Family Dental
                                                                        Clinic</a>
                                                                    <span class="time">2010 - Present (5 years)</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">Comfort Care Dental Clinic</a>
                                                                    <span class="time">2007 - 2010 (3 years)</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <a href="#/" class="name">Dream Smile Dental
                                                                        Practice</a>
                                                                    <span class="time">2005 - 2007 (2 years)</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div class="widget awards-widget">
                                                <h4 class="widget-title">Awards</h4>
                                                <div class="experience-box">
                                                    <ul class="experience-list">
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <p class="exp-year">July 2019</p>
                                                                    <h4 class="exp-title">Humanitarian Award</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                        elit. Proin a ipsum tellus. Interdum et malesuada
                                                                        fames ac ante ipsum primis in faucibus.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <p class="exp-year">March 2011</p>
                                                                    <h4 class="exp-title">Certificate for International
                                                                        Volunteer Service</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                        elit. Proin a ipsum tellus. Interdum et malesuada
                                                                        fames ac ante ipsum primis in faucibus.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="experience-user">
                                                                <div class="before-circle"></div>
                                                            </div>
                                                            <div class="experience-content">
                                                                <div class="timeline-content">
                                                                    <p class="exp-year">May 2008</p>
                                                                    <h4 class="exp-title">The Dental Professional of The
                                                                        Year Award</h4>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                        elit. Proin a ipsum tellus. Interdum et malesuada
                                                                        fames ac ante ipsum primis in faucibus.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div class="service-list">
                                                <h4>Services</h4>
                                                <ul class="clearfix">
                                                    <li>Tooth cleaning </li>
                                                    <li>Root Canal Therapy</li>
                                                    <li>Implants</li>
                                                    <li>Composite Bonding</li>
                                                    <li>Fissure Sealants</li>
                                                    <li>Surgical Extractions</li>
                                                </ul>
                                            </div>


                                            <div class="service-list">
                                                <h4>Specializations</h4>
                                                <ul class="clearfix">
                                                    <li>Children Care</li>
                                                    <li>Dental Care</li>
                                                    <li>Oral and Maxillofacial Surgery </li>
                                                    <li>Orthodontist</li>
                                                    <li>Periodontist</li>
                                                    <li>Prosthodontics</li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div v-if="activetab === 2" class="tabcontent">
                                    dgdfgdf
                                </div>
                                <div v-if="activetab === 3" class="tabcontent">
                                    dgdfgdf
                                </div>


                                <div v-if="activetab === 4" class="tabcontent">
                                    <div class="row">
                                        <div class="col-md-6 offset-md-3">

                                            <div class="widget business-widget">
                                                <div class="widget-content">
                                                    <div class="listing-hours">
                                                        <div class="listing-day current">
                                                            <div class="day">Today <span>5 Nov 2019</span></div>
                                                            <div class="time-items">
                                                                <span class="open-status"><span
                                                                        class="badge bg-success-light">Open
                                                                        Now</span></span>
                                                                <span class="time">07:00 AM - 09:00 PM</span>
                                                            </div>
                                                        </div>
                                                        <div class="listing-day">
                                                            <div class="day">Monday</div>
                                                            <div class="time-items">
                                                                <span class="time">07:00 AM - 09:00 PM</span>
                                                            </div>
                                                        </div>
                                                        <div class="listing-day">
                                                            <div class="day">Tuesday</div>
                                                            <div class="time-items">
                                                                <span class="time">07:00 AM - 09:00 PM</span>
                                                            </div>
                                                        </div>
                                                        <div class="listing-day">
                                                            <div class="day">Wednesday</div>
                                                            <div class="time-items">
                                                                <span class="time">07:00 AM - 09:00 PM</span>
                                                            </div>
                                                        </div>
                                                        <div class="listing-day">
                                                            <div class="day">Thursday</div>
                                                            <div class="time-items">
                                                                <span class="time">07:00 AM - 09:00 PM</span>
                                                            </div>
                                                        </div>
                                                        <div class="listing-day">
                                                            <div class="day">Friday</div>
                                                            <div class="time-items">
                                                                <span class="time">07:00 AM - 09:00 PM</span>
                                                            </div>
                                                        </div>
                                                        <div class="listing-day">
                                                            <div class="day">Saturday</div>
                                                            <div class="time-items">
                                                                <span class="time">07:00 AM - 09:00 PM</span>
                                                            </div>
                                                        </div>
                                                        <div class="listing-day closed">
                                                            <div class="day">Sunday</div>
                                                            <div class="time-items">
                                                                <span class="time"><span
                                                                        class="badge bg-danger-light">Closed</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
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
.widget {
    margin-bottom: 30px;
}

.widget-title {
    margin-bottom: 15px;
}

.experience-box {
    position: relative;
}

.experience-list {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
}

.experience-list::before {
    background: #ddd;
    bottom: 0;
    content: "";
    left: 8px;
    position: absolute;
    top: 8px;
    width: 2px;
}

.experience-list>li {
    position: relative;
}

.experience-list>li .experience-user {
    background: #fff;
    height: 10px;
    left: 4px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 4px;
    width: 10px;
}

.before-circle {
    background-color: rgba(32, 192, 243, 0.2);
    border-radius: 50%;
    height: 12px;
    width: 12px;
    border: 2px solid #20c0f3;
}

.experience-list>li .experience-content {
    background-color: #fff;
    margin: 0 0 20px 40px;
    padding: 0;
    position: relative;
}

.experience-list>li .experience-content .timeline-content {
    color: #757575;
}

.experience-list>li .experience-content .timeline-content a.name {
    font-weight: 500;
}

.experience-list>li .time {
    color: #757575;
    display: block;
    font-size: 13px;
}

.service-list {
    margin-bottom: 30px;
}

.service-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.service-list ul li {
    float: left;
    margin: 6px 0;
    padding-left: 25px;
    position: relative;
    width: 33%;
}

.exp-year {
    color: #0071DC;
    margin-bottom: 2px;
}

.exp-title {
    font-size: 16px;
    color: black;
}

.service-list ul li::before {
    color: #ccc;
    content: '\f178';
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    left: 0;
    position: absolute;
}

.clearfix::after {
    display: block;
    clear: both;
    content: "";
}



.business-widget {
    background-color: #fcfcfc;
    border: 1px solid #f0f0f0;
    padding: 20px;
    margin-bottom: 0;
}

.listing-day.current {
    border-bottom: 1px solid #ddd;
    padding-bottom: 13px;
    margin-bottom: 13px;
}

.listing-day.current .day {
    font-weight: bold;
}

.time-items {
    color: #757575;
}

.time-items>span.open-status {
    margin-bottom: 3px;
}

.time-items>span {
    display: block;
    text-align: right;
}

.listing-day .day {
    font-weight: 500;
}

.listing-day.current .day span {
    display: block;
    font-weight: normal;
}

.bg-danger-light {
    background-color: rgba(242, 17, 54, 0.12) !important;
    color: #e63c3c !important;
}

.time-items>span.open-status {
    margin-bottom: 3px;
}

.bg-success-light {
    background-color: rgba(15, 183, 107, 0.12) !important;
    color: #26af48 !important;
}

.badge {
    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: .75em;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
}

.listing-day {
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    color: #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    -ms-flex-pack: space-between;
    margin-bottom: 10px;
}

.card-body {
    padding: 1.5rem;
}

.nav-tabs {
    border-bottom: 1px solid #f0f0f0;
}

.user-tabs .nav-tabs.nav-tabs-bottom>li>a.active {
    border-bottom: 4px solid #20c0f3;
    color: #20c0f3 !important;
}

.nav-justified .nav-item,
.nav-justified>.nav-link {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
}

.nav-justified .nav-item .nav-link {
    width: 100%;
}

.user-tabs .nav-tabs>li>a {
    border: 0;
    border-bottom: 3px solid transparent;
    color: #3e3e3e;
    font-weight: 600;
    padding: 20px;
}


.tabs a.active {
    background-color: #fff;
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}






.img-fluid-pro {
    border-radius: 9px;
}

.clinic-booking a {
    background-color: #fff;
    border: 2px solid #0db9f2;
    border-radius: 5px;
    color: #0db9f2;
    display: block;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 10px 10px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
}

.clinic-booking a.apt-btn {
    background-color: #0db9f2;
    color: #fff;
    padding: 10px 9px;
}

.doc-name a {
    color: #20c3f6;
}

.dashboard-widget .nav-item {
    border-bottom: 1px solid #f0f0f0;
    padding: 9px 20px;
}

.dashboard-widget .nav-item .nav-link {
    color: #757575 !important;
    font-weight: 500;
}

.content {
    padding: 15px;
}

.profile-sidebar {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
}

.widget-profile {
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
}

.doc-img {
    background-color: #f7f7f7;
    width: auto;
    display: inline-block;
    padding: 8px;
    border-radius: 50%;
}

.doc-img img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
}

.profile-info h3 {
    font-size: 21px;
    font-weight: 700;
    margin-top: 14px;
}

.patient-details h5 {
    color: #757575;
    font-size: 17px;
}

.custom_check {
    color: #666;
}

.card-title {
    float: left;
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    color: #00000099;
}

.filter-widget h4 {
    font-size: 18px;
    font-weight: bold;
}

.card {
    border: 1px solid #f0f0f0;
    margin-bottom: 1.875rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}

.card-body {
    padding: 1.5rem;
}

.doctor-widget {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.doc-info-left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.doc-info-right {
    margin-left: auto;
    -ms-flex: 0 0 205px;
    flex: 0 0 205px;
    max-width: 205px;
}

.doctor-img {
    -ms-flex: 0 0 150px;
    flex: 0 0 150px;
    margin-right: 20px;
    width: 150px;
}

.doc-department img {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 5px;
}
</style>
  