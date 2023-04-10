<template>
    <NavbarFront />
    <BreadCrumbFront />
    <div class="content container">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-6">

                    <div class="card success-card">
                        <div class="card-body">
                            <div class="success-cont">
                                <i class="fas fa-check"></i>
                                <h3>Appointment booked Successfully!</h3>
                                <p>Appointment booked with <strong>Dr. {{ doctor.username }}</strong><br> on <strong>12 Nov
                                        2019
                                        5:00PM to 6:00PM</strong></p>
                                <router-link :to="{ name: 'invoice-view' }" class="btn btn-primary view-inv-btn">View
                                    Invoice</router-link>
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

.success-card .card-body {
    padding: 50px 20px;
}

.success-cont {
    text-align: center;
}

.success-cont h3 {
    font-size: 24px;
}

.success-cont p {
    margin-bottom: 30px;
}

.view-inv-btn {
    font-size: 16px;
    font-weight: 600;
    padding: 12px 30px;
}

.btn-primary {
    background-color: #09e5ab;
    border: 1px solid #09e5ab;
}
</style>
  