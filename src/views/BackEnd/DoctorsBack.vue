<template>
    <div class="row align-items-center">
        <div class="col-md-12 d-flex justify-content-end mb-3 align-items-center">
            <div class="doc-badge me-3 mr-4">
                Doctors
                <span class="ms-1">84</span>
            </div>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Doctors</h3>
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
                                <th>Doctor</th>
                                <th>Specialities</th>
                                <th>MemberSince</th>
                                <th>Number Of Appointments</th>
                                <th>TotalIncome</th>
                                <th>Account status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items" :key="item.id">
                                <td>183</td>
                                <td>
                                    <div class="media">
                                        <div class="d-flex media-body">
                                            <a class="avatar avatar-sm me-2 user-dt" href="/template/admin/profile">
                                                <img src="https://doccure-react.dreamguystech.com/template/32b8469a75322a6ba6b15343e65f1072.jpg"
                                                    class="avatar avatar-img">
                                            </a>
                                            <div class="text-secondary">
                                                <span class="user-name">Gobbs Siauw</span><br>
                                                <span class="d-block text-muted">Male, 40 Years Old</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Neurologist
                                </td>
                                <td>
                                    <span class="user-name">26 November 2022</span><br>
                                    <span class="text-muted">12/20/2022</span>
                                </td>
                                <td>
                                    545
                                </td>
                                <td>
                                    300.00 DH
                                </td>
                                <td class="text-left">
                                    <input id="s1" type="checkbox" class="switch">

                                    <div>
                                        <label>
                                            <input type="radio" value="active" v-model="status"> Active
                                        </label>
                                        <label>
                                            <input type="radio" value="inactive" v-model="status"> Inactive
                                        </label>
                                        <button @click="updateStatus">Update</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            status: 'active'
        }
    },
    methods: {
        async updateStatus() {
            try {
                const response = await axios.post('/api/update-status', { status: this.status });
                this.status = response.data.status;
            } catch (error) {
                console.error(error);
            }
        },
        ...mapActions(['fetchItems', 'deleteItem'])
    },
    mounted() {
        this.fetchItems();
    },
    computed: {
        ...mapState(['items'])
    },
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
    color: #00000082 !important;
}

.table .media {
    align-items: flex-start;
}

.table .d-flex.media-body {
    align-items: center !important;
}

.table .avatar {
    position: relative;
    display: inline-block;
}

.table .avatar-sm {
    width: 2.5rem;
    height: 2.5rem;
}

.table .avatar>img {
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

.doc-badge span {
    background: red;
    color: white;
    padding: 0px 2px;
    border-radius: 2px;
}


/* @media */
@media (max-width: 390px) {}
</style>