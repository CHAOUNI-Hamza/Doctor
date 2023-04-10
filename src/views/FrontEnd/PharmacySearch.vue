<template>
    <NavbarFront />
    <BreadCrumbFront />
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 col-lg-4 col-xl-3 sidebar">
                    <div class="theiaStickySidebar"
                        style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none; top: 0px; left: 116.5px;">
                        <div class="filter-new">
                            <div class="filter-header">
                                <h4>Categories</h4>
                            </div>
                            <div class="filter-widget filter-checkbox">
                                <div v-for="category in get.data" :key="category.id">
                                    <label class="custom_check">
                                        <input class="mr-2" type="checkbox" v-model="params.search_array"
                                            :value="category.name">
                                        <span class="checkmark"></span> {{ category.name }}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="filter-new">
                            <div class="filter-header">
                                <h4>Location</h4>
                            </div>
                            <div class="filter-widget">
                                <div class="filter-location">
                                    <div class="form-group">
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Los Angeles</option>
                                            <option>Los Angeles</option>
                                            <option>Los Angeles</option>
                                            <option>Los Angeles</option>
                                            <option>Los Angeles</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="resize-sensor"
                            style="position: absolute; inset: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
                            <div class="resize-sensor-expand"
                                style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                <div
                                    style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 295px; height: 1498px;">
                                </div>
                            </div>
                            <div class="resize-sensor-shrink"
                                style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;">
                                <div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 col-lg-8 col-xl-9">
                    <div class="filter-info" data-select2-id="24">
                        <div class="row align-items-center" data-select2-id="23">
                            <div class="col-md-7 col-12 d-md-block custom-short-by">
                                <div class="pharm-viewicon">
                                    <p><span>10</span> matches found for Pharmacy in Los Angeles</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-for="pharmacy in getPharmacy.data" :key="pharmacy" class="card pharmacy-card">
                        <div class="card-body">
                            <div class="doctor-widget pharmacy-widget">
                                <div class="doc-info-left">
                                    <div class="doctor-img1">
                                        <a href="#">
                                            <img :src="pharmacy.photo" class="img-fluid" alt="fsfsd">
                                        </a>
                                        <div class="pharmacy-pro-tags">
                                            <span class="pharmacy-closed">Closed</span>
                                        </div>
                                    </div>
                                    <div class="doc-info-cont">
                                        <h4 class="doc-name"><a href="#">{{ pharmacy.name }}</a></h4>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="clinic-details">
                                            <div class="clini-infos">
                                                <p class="doc-location">
                                                    <font-awesome-icon style="width: 10px;" class="mr-2"
                                                        icon="fa-solid fa-location-dot" /> 1430
                                                    Pretoria, Los Angeles 12401.
                                                </p>
                                                <p class="doc-location text-ellipse">
                                                    <font-awesome-icon style="width: 10px;" class="mr-2"
                                                        icon="fa-solid fa-tag" />
                                                    Hospital Equipment
                                                </p>
                                                <p class="doc-location">
                                                    <font-awesome-icon style="width: 10px;" class="mr-2"
                                                        icon="fa-regular fa-clock" /> 9
                                                    AM - 8 PM (Mon - Sat)
                                                </p>
                                            </div>
                                        </div>
                                        <div class="pharmacy-booking">
                                            <a class="btn view-details-btn" href="#">View Details</a>
                                            <a class="btn browse-products-btn" href="#">Browse Products</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav v-if="getLastPage > 1" aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" @click="params.page = LastPage - 1" href="#">Previous</a>
                            </li>
                            <li v-for="LastPage in getLastPage" :key="LastPage" class="page-item">
                                <a @click="params.page = LastPage" class="page-link" href="#">{{
                                    LastPage
                                }}</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" @click="params.page = LastPage + 1" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <FooterFront />
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import BreadCrumbFront from "../../components/FrontEnd/DoctorDashboard/BreadCrumbFront.vue";
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
                pagination: 10
            },
        };
    },
    watch: {
        params: {
            handler() {
                this.fetchPharmacy(this.params);
            },
            deep: true,
        },
    },
    computed: {
        ...mapGetters({
            get: "Categories/get",
            getTotal: "Pharmacies/getTotal",
            getPharmacy: "Pharmacies/get",
            getLastPage: "Pharmacies/getLastPage",
        }),
    },
    methods: {
        ...mapActions({
            fetch: "Categories/fetch",
            fetchPharmacy: "Pharmacies/fetch",
        }),
    },
    mounted() {
        this.fetchPharmacy(this.params);
        this.fetch();
    },
};
</script>
<style scoped>
.pharmacy-pro-tags .pharmacy-closed {
    background: #14558D;
}

.pharmacy-pro-tags span {
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    min-width: 107px;
    padding: 10px 15px;
    border-radius: 8px;
    text-align: center;
    display: inline-block;
}

.pharmacy-card {
    background: #F8F8F8;
    border-radius: 8px;
    border: 0;
    margin-bottom: 30px;
}

.pharmacy-card .card-body {
    padding: 0;
}

.pharmacy-widget {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.pharmacy-widget .doc-info-left {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.pharmacy-widget .doctor-img1 {
    position: relative;
    margin-right: 30px;
}

.pharmacy-widget .doctor-img1 img {
    border-radius: 8px 0px 0px 8px;
}

.pharmacy-pro-tags {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
}

.pharmacy-pro-tags .pharmacy-closed {
    background: #14558D;
}

.pharmacy-widget .doc-name {
    font-size: 24px;
}

.pharmacy-widget .doc-name a {
    color: #272B41;
    font-size: 30px;
    font-weight: 700;
}

.pharmacy-widget .rating {
    margin: 0;
}

.pharmacy-widget .clinic-details {
    margin-top: 15px;
}

.clini-infos {
    margin-bottom: 15px;
}

.pharmacy-widget .clini-infos p {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    color: rgba(39, 43, 65, 0.5);
    margin-bottom: 10px;
}

.pharmacy-booking .view-details-btn {
    font-weight: 600;
    font-size: 16px;
    padding: 12px 23px;
    color: #14558D;
    background: #F8F8F8;
    border: 2px solid #14558D;
    box-shadow: inset 0 0 0 0 #14558D;
    border-radius: 8px;
    margin-right: 15px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
}

.pharmacy-booking .browse-products-btn {
    font-weight: 600;
    font-size: 16px;
    padding: 12px 23px;
    color: #fff;
    background: #0DE0FE;
    border: 2px solid #0DE0FE;
    border-radius: 8px;
    box-shadow: inset 0 0 0 0 #F8F8F8;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
}

.filter-info {
    padding-bottom: 30px;
}

.pharm-viewicon p {
    font-weight: 500;
    font-size: 26px;
    color: rgba(39, 43, 65, 0.5);
    margin-bottom: 0;
}

.pharm-viewicon p span {
    font-weight: 600;
    color: #272B41;
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

.filter-new {
    background: #F8F8F8;
    border-radius: 8px;
    padding: 25px;
    margin-bottom: 30px;
}

.filter-header {
    position: relative;
    border-bottom: 1px solid rgba(39, 43, 65, 0.2);
}

.filter-header:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    background: #14558D;
    width: 30px;
    height: 2px;
}

.filter-new .filter-widget {
    margin: 25px 0 0;
}

.filter-checkbox .custom_check {
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    color: rgba(39, 43, 65, 0.5);
}

.form-control {
    background: #f8f8f8;
    width: 70%;

}
</style>
  