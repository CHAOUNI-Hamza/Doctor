<template>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Upcoming Appointments</h3>
                    <div class="card-tools">
                        <div class="input-group input-group-sm" style="width: 300px;">
                            <select class="form-control">
                                <option>Search by...</option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                                <option>option 5</option>
                            </select>
                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default">
                                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                                </button>
                            </div>
                            <input type="text" name="table_search" class="form-control float-right" placeholder="Search">
                        </div>
                    </div>
                </div>
    
                <div class="card-body table-responsive p-0" style="height: 100vh;">
                    <table class="table table-head-fixed text-nowrap">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Patient</th>
                                <th>Doctor</th>
                                <th>Disease</th>
                                <th>Consultation Type</th>
                                <th>Date & Time</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in 10" :key="item">
                                <td>183</td>
                                <td>
                                    <div class="media">
                                        <div class="d-flex media-body">
                                            <a class="avatar avatar-sm me-2 user-dt" href="/template/admin/profile">
                                                <img src="https://doccure-react.dreamguystech.com/template/32b8469a75322a6ba6b15343e65f1072.jpg" class="avatar avatar-img">
                                            </a>
                                            <div class="text-secondary">
                                                <span class="user-name">Gobbs Siauw</span><br>
                                                <span class="d-block text-muted">Male, 40 Years Old</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="media">
                                        <div class="d-flex media-body">
                                            <a class="avatar avatar-sm me-2 user-dt" href="/template/admin/profile">
                                                <img src="https://doccure-react.dreamguystech.com/template/2da722e671accc5ddf48b2fc8e947a3e.jpg" class="avatar avatar-img">
                                            </a>
                                            <div class="text-secondary">
                                                <span class="d-block text-muted">Male, 40 Years Old</span>
                                                <span class="user-name">Gobbs Siauw</span><br>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="Disease">Allergies & Asthma</span>
                                </td>
                                <td>
                                    <span class="consultation-type">
                                        <font-awesome-icon icon="fa-regular fa-message" />
                                        Chat
                                    </span>
                                </td>
                                <td>
                                    <span class="user-name">26 November 2022</span><br>
                                    <span class="text-muted">12/20/2022</span>
                                </td>
                                <td>
                                    300.00 DH
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </template>
    <script>
    export default {
        data() {
            return {
    
            }   
        },
        methods: {
    
        }
    }
    </script>
    <style scoped>
    .card-title {
        font-size: 1.3rem;
        font-weight: bold;
    }
    .form-control {
        border: none;
        margin-right: 10px;
    }
    .input-group-append .btn {
        background: none;
        border: none;
    }
    select.form-control {
        color: #00000082!important;
    }
    
    .page-header ul {
        display: flex;
    }
    .page-header ul li {
        list-style: none;
    }
    
    .page-header ul li .btn {
        padding: 12px 15px;
        margin-left: 20px;
    }
    
    .page-header ul li .btn.active {
        border: 1px solid #5c8ed3;
        color: #2196f3;
    }
    .page-header ul li .btn.disbled {
        background: #0000000a;
        border: none;
    }
    
    
    .table .media {
        align-items: flex-start;
    }
    .table .d-flex.media-body {
        align-items: center!important;
    }
    .table .avatar {
        position: relative;
        display: inline-block;
    }
    .table .avatar-sm {
        width: 2.5rem;
        height: 2.5rem;
    }
    
    .table .avatar > img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 5px;
    }
    
    .table .text-secondary {
        margin-left: 10px;
    }
    .table span.user-name {
        color: #131523;
        font-weight: 600;
    }
    .table span.text-muted {
        color: #7E84A3 !important;
    }
    
    .table .Disease {
        font-weight: bold;
    }
    .table .consultation-type {
        color: #2196f3;
        font-size: 17px;
    }
    
    </style>