<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Basic Information</h4>
                    <div class="row form-row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="change-avatar">
                                    <div class="profile-img">
                                        <img src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg"
                                            alt="User Image" />
                                    </div>
                                    <div class="upload-img ml-3">
                                        <div class="change-photo-btn">
                                            <span><font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />
                                                Upload Photo</span>
                                            <input type="file" class="upload" />
                                        </div>
                                        <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Username <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" readonly="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" readonly="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>First Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Last Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Gender</label>
                                <select class="select form-control select2-hidden-accessible" data-select2-id="1"
                                    tabindex="-1" aria-hidden="true">
                                    <option data-select2-id="3">Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-0">
                                <label>Date of Birth</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">About Me</h4>
                    <div class="form-group mb-0">
                        <label>Biography</label>
                        <textarea class="form-control" rows="5"></textarea>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Clinic Info</h4>
                    <div class="row form-row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Clinic Name</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Clinic Address</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Clinic Images</label>
                                <form action="#" class="dropzone dz-clickable">
                                    <div class="dz-default dz-message">
                                        <span>Drop files here to upload</span>
                                    </div>
                                </form>
                            </div>
                            <div class="upload-wrap">
                                <div class="upload-images">
                                    <img src="assets/img/features/feature-01.jpg" alt="Upload Image" />
                                    <a href="javascript:void(0);" class="btn btn-icon btn-danger btn-sm"><i
                                            class="far fa-trash-alt"></i></a>
                                </div>
                                <div class="upload-images">
                                    <img src="assets/img/features/feature-02.jpg" alt="Upload Image" />
                                    <a href="javascript:void(0);" class="btn btn-icon btn-danger btn-sm"><i
                                            class="far fa-trash-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card contact-card">
                <div class="card-body">
                    <h4 class="card-title">Contact Details</h4>
                    <div class="row form-row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Address Line 1</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Address Line 2</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">City</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">State / Province</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Country</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">Postal Code</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Pricing</h4>
                    <div class="form-group mb-0">
                        <div id="pricing_select">
                            <div class="custom-control form-check custom-control-inline">
                                <input type="radio" id="price_free" name="rating_option" class="form-check-input"
                                    value="price_free" checked="" />
                                <label class="form-check-label ml-2" for="price_free">Free</label>
                            </div>
                            <div class="custom-control form-check custom-control-inline">
                                <input type="radio" id="price_custom" name="rating_option" value="custom_price"
                                    class="form-check-input" />
                                <label class="form-check-label ml-2" for="price_custom">Custom Price (per hour)</label>
                            </div>
                        </div>
                    </div>
                    <div class="row custom_price_cont" id="custom_price_cont" style="display: none">
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="custom_rating_input" name="custom_rating_count"
                                value="" placeholder="20" />
                            <small class="form-text text-muted">Custom price you can add</small>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card services-card">
                <div class="card-body">
                    <h4 class="card-title">Services and Specialization</h4>
                    <div class="form-group">
                        <label>Services</label>
                        <div class="bootstrap-tagsinput">
                            <span v-for="(tag, index) in services" :key="index" class="tag badge badge-info">{{ tag }}
                                <span data-role="remove" class="ml-2 remove" @click="removeService(index)">X</span></span>
                            <input v-model="newService" @keydown.enter.prevent="addService" type="text"
                                placeholder="Enter Services" />
                        </div>
                        <input type="text" data-role="tagsinput" class="input-tags form-control"
                            placeholder="Enter Services" name="services" value="Tooth cleaning " id="services"
                            style="display: none" />
                        <small class="form-text text-muted">Note : Type &amp; Press enter to add new services</small>
                    </div>
                    <div class="form-group mb-0">
                        <label>Specialization </label>
                        <div class="bootstrap-tagsinput">
                            <span v-for="(tag, index) in specializations" :key="index" class="tag badge badge-info">{{ tag
                            }}
                                <span data-role="remove" class="ml-2 remove"
                                    @click="removeSpecialization(index)">X</span></span>
                            <input v-model="newSpecialization" @keydown.enter.prevent="addSpecialization" type="text"
                                placeholder="Enter Specialization" />
                        </div>
                        <input class="input-tags form-control" type="text" data-role="tagsinput"
                            placeholder="Enter Specialization" name="specialist" value="Children Care,Dental Care"
                            id="specialist" style="display: none" />
                        <small class="form-text text-muted">Note : Type &amp; Press enter to add new specialization</small>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Education</h4>
                    <div class="education-info">
                        <div class="row form-row education-cont">
                            <div class="col-12 col-md-10 col-lg-11">
                                <div class="row form-row">
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Degree</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>College/Institute</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Year of Completion</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-more">
                        <a href="javascript:void(0);" class="add-education"><font-awesome-icon
                                icon="fa-solid fa-circle-plus" /> Add
                            More</a>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Experience</h4>
                    <div class="experience-info">
                        <div class="row form-row experience-cont">
                            <div class="col-12 col-md-10 col-lg-11">
                                <div class="row form-row">
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Hospital Name</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>From</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>To</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="form-group">
                                            <label>Designation</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-more">
                        <a href="javascript:void(0);" class="add-experience"><font-awesome-icon
                                icon="fa-solid fa-circle-plus" /> Add
                            More</a>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Awards</h4>
                    <div class="awards-info">
                        <div class="row form-row awards-cont">
                            <div class="col-12 col-md-5">
                                <div class="form-group">
                                    <label>Awards</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="form-group">
                                    <label>Year</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-more">
                        <a href="javascript:void(0);" class="add-award"><font-awesome-icon icon="fa-solid fa-circle-plus" />
                            Add
                            More</a>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Memberships</h4>
                    <div class="membership-info">
                        <div class="row form-row membership-cont">
                            <div class="col-12 col-md-10 col-lg-5">
                                <div class="form-group">
                                    <label>Memberships</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-more">
                        <a href="javascript:void(0);" class="add-membership"><font-awesome-icon
                                icon="fa-solid fa-circle-plus" /> Add
                            More</a>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Registrations</h4>
                    <div class="registrations-info">
                        <div class="row form-row reg-cont">
                            <div class="col-12 col-md-5">
                                <div class="form-group">
                                    <label>Registrations</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                            <div class="col-12 col-md-5">
                                <div class="form-group">
                                    <label>Year</label>
                                    <input type="text" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="add-more">
                        <a href="javascript:void(0);" class="add-reg"><font-awesome-icon icon="fa-solid fa-circle-plus" />
                            Add
                            More</a>
                    </div>
                </div>
            </div>

            <div class="submit-section submit-btn-bottom">
                <button type="submit" class="btn btn-primary submit-btn">
                    Save Changes
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    components: {},
    data() {
        return {
            services: [],
            newService: "",
            specializations: [],
            newSpecialization: "",
        };
    },
    methods: {
        // Méthode pour ajouter un service
        addService() {
            if (this.newService !== "") {
                this.services.push(this.newService);
                this.newService = "";
            }
        },
        // Méthode pour supprimer un service
        removeService(index) {
            this.services.splice(index, 1);
        },
        // Méthode pour ajouter une spécialisation
        addSpecialization() {
            if (this.newSpecialization !== "") {
                this.specializations.push(this.newSpecialization);
                this.newSpecialization = "";
            }
        },
        // Méthode pour supprimer une spécialisation
        removeSpecialization(index) {
            this.specializations.splice(index, 1);
        }
    },
};
</script>
<style scoped>
.change-avatar .profile-img img {
    border-radius: 4px;
    height: 100px;
    width: 100px;
    object-fit: cover;
}

.change-avatar {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.card-title {
    margin-bottom: 15px;
    width: 100%;
}

.change-avatar .change-photo-btn {
    margin: 0 0 10px;
    width: 150px;
}

.change-photo-btn {
    background-color: #20c0f3;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 13px;
    font-weight: 600;
    margin: 0 auto;
    padding: 10px 15px;
    position: relative;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    text-align: center;
    width: 220px;
}

.change-photo-btn input.upload {
    bottom: 0;
    cursor: pointer;
    filter: alpha(opacity=0);
    left: 0;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 220px;
}

.dropzone.dz-clickable {
    cursor: pointer;
    text-align: center;
    align-items: center;
    display: grid;
}

.dropzone {
    background-color: #fbfbfb;
    border: 2px dashed rgba(0, 0, 0, 0.1);
}

.dropzone {
    min-height: 150px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: white;
    padding: 20px 20px;
}

.dropzone.dz-started .dz-message {
    display: none;
}

.dropzone .dz-preview.dz-image-preview {
    background: white;
}

.dropzone .dz-preview {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 16px;
    min-height: 100px;
}

.form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
}

.bootstrap-tagsinput[data-v-671ce016] {
    border-color: #000000;
    box-shadow: inherit;
    min-height: 46px;
    width: 100%;
    border-radius: 0;
    border: 1px solid #00000026;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding: 9px;
}

.bootstrap-tagsinput .tag {
    background-color: #20c0f3;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    font-weight: normal;
    margin-right: 2px;
    padding: 11px 15px;
    border-radius: 0;
}

.bootstrap-tagsinput input {
    border: none;
    box-shadow: none;
    outline: none;
    background-color: transparent;
    padding: 0 6px;
    margin: 0;
    width: auto;
    max-width: inherit;
}

.remove {
    cursor: pointer;
}

.bootstrap-tagsinput {
    border: 1px solid #0000001f;
    padding: 10px;
}

.add-more a {
    color: #20c0f3;
    font-size: 17px;
    font-weight: 600;
}
</style>
  