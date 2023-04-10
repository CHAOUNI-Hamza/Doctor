<template>
    <NavbarFront />
    <BreadCrumbFront />
    <div class="content container">
        <div class="container-fluid">
            <div class="row" ref="divToPrint">
                <div class="col-lg-8 offset-lg-2">
                    <div class="invoice-content">
                        <div class="invoice-item">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="invoice-logo">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_Good_Doctor_logo_2.svg/2560px-The_Good_Doctor_logo_2.svg.png"
                                            alt="logo">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <p class="invoice-details">
                                        <strong>Order:</strong> #00124 <br>
                                        <strong>Issued:</strong> 20/07/2019
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="invoice-item">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="invoice-info">
                                        <strong class="customer-text">Invoice From</strong>
                                        <p class="invoice-details invoice-details-two">
                                            Dr. {{ doctor.username }} <br>
                                            806 Twin Willow Lane, Old Forge,<br>
                                            Newyork, USA <br>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="invoice-info invoice-info2">
                                        <strong class="customer-text">Invoice To</strong>
                                        <p class="invoice-details">
                                            Walter Roberson <br>
                                            299 Star Trek Drive, Panama City, <br>
                                            Florida, 32405, USA <br>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="invoice-item">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="invoice-info">
                                        <strong class="customer-text">Payment Method</strong>
                                        <p class="invoice-details invoice-details-two">
                                            Debit Card <br>
                                            XXXXXXXXXXXX-2541 <br>
                                            HDFC Bank<br>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="invoice-item invoice-table-wrap">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-responsive">
                                        <table class="invoice-table table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Description</th>
                                                    <th class="text-center">Quantity</th>
                                                    <th class="text-center">VAT</th>
                                                    <th class="text-end">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>General Consultation</td>
                                                    <td class="text-center">1</td>
                                                    <td class="text-center">$0</td>
                                                    <td class="text-end">$100</td>
                                                </tr>
                                                <tr>
                                                    <td>Video Call Booking</td>
                                                    <td class="text-center">1</td>
                                                    <td class="text-center">$0</td>
                                                    <td class="text-end">$250</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xl-4 ms-auto">
                                    <div class="table-responsive">
                                        <table class="invoice-table-two table">
                                            <tbody>
                                                <tr>
                                                    <th>Subtotal:</th>
                                                    <td><span>$350</span></td>
                                                </tr>
                                                <tr>
                                                    <th>Discount:</th>
                                                    <td><span>-10%</span></td>
                                                </tr>
                                                <tr>
                                                    <th>Total Amount:</th>
                                                    <td><span>$315</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="other-info">
                            <h4>Other information</h4>
                            <p class="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
                                dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a
                                ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu
                                scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque
                                libero.</p>
                        </div>

                        <a @click="imprimerDiv" class="fancy mt-4" href="#">
                            <span class="top-key"></span>
                            <span class="text">Imprimer</span>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </a>

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
        imprimerDiv() {
            // Utiliser la référence de la div pour obtenir l'élément DOM
            const divToPrint = this.$refs.divToPrint;

            // Utiliser la fonction window.print() pour déclencher l'impression
            window.print();
        },
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
.fancy {
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 1.25em 2em;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: 13px;
}

.fancy::before {
    content: " ";
    width: 1.5625rem;
    height: 2px;
    background: black;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
}

.fancy .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
}

.fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, left 0.3s ease-out;
}

.fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
}

.fancy:hover {
    color: white;
    background: black;
}

.fancy:hover::before {
    width: 0.9375rem;
    background: white;
}

.fancy:hover .text {
    color: white;
    padding-left: 1.5em;
}

.fancy:hover .top-key {
    left: -2px;
    width: 0px;
}

.fancy:hover .bottom-key-1,
.fancy:hover .bottom-key-2 {
    right: 0;
    width: 0;
}



.invoice-item .invoice-details-two {
    text-align: left !important;
}

.invoice-content {
    background-color: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    margin-bottom: 30px;
    padding: 30px;
}

.invoice-item .invoice-logo {
    margin-bottom: 30px;
}

.invoice-item .invoice-logo img {
    width: auto;
    max-height: 52px;
}

.invoice-item .invoice-details {
    text-align: right;
    color: #757575;
    font-weight: 500;
}

.invoice-item .invoice-details strong {
    color: #272b41;
}

.invoice-info {
    margin-bottom: 30px;
}

.invoice-item .customer-text {
    font-size: 18px;
    color: #272b41;
    font-weight: 600;
    margin-bottom: 8px;
    display: block;
}

.invoice-item .invoice-details-two {
    text-align: left;
}

.invoice-info.invoice-info2 {
    text-align: right;
}

.invoice-item .invoice-details {
    text-align: right;
    color: #757575;
    font-weight: 500;
}

.ms-auto {
    margin-left: auto !important;
}

.table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.invoice-table tr th,
.invoice-table tr td,
.invoice-table-two tr th,
.invoice-table-two tr td {
    color: #272b41;
    font-weight: 600;
    padding: 10px 20px;
    line-height: inherit;
}

.invoice-table tr td,
.invoice-table-two tr td {
    color: #757575;
    font-weight: 500;
}

.table {
    color: #272b41;
    max-width: 100%;
    margin-bottom: 0;
    width: 100%;
}

.other-info {
    margin-top: 10px;
}

.text-muted {
    color: #757575 !important;
}
</style>
  