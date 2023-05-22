<template>
    <div class="wrapper">
        <NavbarBack />
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <MainSidebar />
        </aside>
        <div class="content-wrapper" style="margin-top: 30px">
            <div class="content" style="background-color: white">
                <div class="container-fluid">
                    <div class="row container">
                        <div class="col-md-8">
                            <form @submit.prevent="submitForm">
                                <div class="setting-info profile-info">
                                    <h4>Personal Information</h4>
                                    <label class="avatar profile-cover-avatar" for="avatar_upload">


                                        <img class="avatar-img" v-if="imageUrl" :src="imageUrl" alt="Profile Image">
                                        <img class="avatar-img" v-else :src="params.photo" alt="Profile Image">
                                        <input @change="onFileSelected" type="file" id="avatar_upload">

                                        <span class="avatar-edit">
                                            <font-awesome-icon class="mr-1" icon="fa-solid fa-pen-to-square" />
                                        </span>
                                    </label>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">Name</label>
                                                <input v-model="params.name" type="text" class="form-control floating">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">First Name</label>
                                                <input v-model="params.firstname" type="text" class="form-control floating">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">Last Name</label>
                                                <input v-model="params.lastname" type="text" class="form-control floating">

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">Age</label>
                                                <input v-model="params.age" type="text" class="form-control floating">

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">Date of Birth</label>
                                                <input v-model="params.date_naissance" type="text"
                                                    class="form-control floating">

                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea v-model="params.about_me" class="form-control"
                                                    placeholder="About me" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="mt-0">
                                    <h5 class="mb-1">Address &amp; Location</h5>
                                    <p class="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">Address / Street name</label>
                                                <input v-model="params.adresse" type="text" class="form-control floating">

                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">City</label>
                                                <input v-model="params.city_state" type="text"
                                                    class="form-control floating">

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">Pincode</label>
                                                <input v-model="params.pin_code" type="text" class="form-control floating">

                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group form-focus">
                                                <label class="focus-label">Password</label>
                                                <input v-model="params.pin_code" type="text" class="form-control floating">

                                            </div>
                                        </div>
                                        <div class="col-md-12 text-right">
                                            <div class="mb-3">
                                                <div class="form-group mb-0">
                                                    <div class="settings-btns">
                                                        <button type="submit" class="btn btn-update">Save</button>
                                                        <!--<button type="submit" class="btn btn-cancel ml-2">Cancel</button>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <aside class="control-sidebar control-sidebar-dark">
            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>
        <MainFooterBack />
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
            params: {
                id: '',
                name: '',
                email: '',
                password: '',
                photo: '',
                firstname: '',
                lastname: '',
                age: '',
                date_naissance: '',
                about_me: '',
                adresse: '',
                city_state: '',
                pin_code: '',
            },
            imageUrl: null,
        }
    },
    methods: {
        // Appelé lorsqu'un fichier est sélectionné dans l'input de type file
        onFileSelected(event) {
            this.params.photo = event.target.files[0];
            this.previewImage();
        },
        // Affiche une prévisualisation de l'image sélectionnée
        previewImage() {
            const reader = new FileReader();
            reader.readAsDataURL(this.params.photo);
            reader.onload = (event) => {
                this.imageUrl = event.target.result;
            };
        },
        ...mapActions({
            update: "Auth/update",
        }),
        // Utilise la fonction "update" de Vuex pour mettre à jour les données
        submitForm() {
            this.update(this.params)
        }
    },
    computed: {
        ...mapGetters({
            authenticated: "Auth/authenticated",
            getAdmin: "Auth/getAdmin"
        }),
    },
    mounted() {
        // Initialise les données "params" avec les valeurs de l'administrateur récupérées depuis Vuex
        this.params = {
            id: this.getAdmin.id,
            name: this.getAdmin.name,
            email: this.getAdmin.email,
            password: this.getAdmin.password,
            photo: this.getAdmin.photo,
            firstname: this.getAdmin.firstname,
            lastname: this.getAdmin.lastname,
            age: this.getAdmin.age,
            date_naissance: this.getAdmin.date_naissance,
            about_me: this.getAdmin.about_me,
            adresse: this.getAdmin.adresse,
            city_state: this.getAdmin.city_state,
            pin_code: this.getAdmin.pin_code,
        }
    }
}
</script>
<style scoped>
.profile-cover-avatar {
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 25px;
    border: 1px solid #E0E0E0;
    border-radius: 3px;
    width: 93px;
    height: 93px;
    position: relative;
}

.avatar-edit {
    position: absolute;
    top: 5px;
    left: 107px;
    background: #f44336;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
}

.btn {
    color: white;
    font-weight: bold;
}

.btn-update {
    background: #03a9f470;
    transition: .2s;
}

.btn-cancel {
    background: #ff5722a8;
    transition: .2s;
}

.btn-update:hover {
    background: #03a9f4;
}

.btn-cancel:hover {
    background: #ff5722;
}

textarea {
    background: #33333314;
}
</style>