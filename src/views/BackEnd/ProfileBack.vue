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
                            <div class="setting-info profile-info">
                                <h4>Personal Information</h4>
                                <label class="avatar profile-cover-avatar" for="avatar_upload">
                                    <img class="avatar-img"
                                        src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                                        alt="Profile Image">
                                    <input type="file" id="avatar_upload">
                                    <span class="avatar-edit">
                                        <font-awesome-icon class="mr-1" icon="fa-solid fa-pen-to-square" />
                                    </span>
                                </label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">First Name</label>
                                            <input type="text" class="form-control floating">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">Last Name</label>
                                            <input type="text" class="form-control floating">

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">Age</label>
                                            <input type="text" class="form-control floating">

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">Date of Birth</label>
                                            <input type="text" class="form-control floating">

                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <textarea class="form-control" placeholder="About me" rows="4"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-0">
                                <h5 class="mb-1">Address &amp; Location</h5>
                                <p class="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">Address / Street name</label>
                                            <input type="text" class="form-control floating">

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">Country</label>
                                            <input type="text" class="form-control floating">

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">City</label>
                                            <input type="text" class="form-control floating">

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">State</label>
                                            <input type="text" class="form-control floating">

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group form-focus">
                                            <label class="focus-label">Pincode</label>
                                            <input type="text" class="form-control floating">

                                        </div>
                                    </div>
                                    <div class="col-md-12 text-right">
                                        <div class="mb-3">
                                            <div class="form-group mb-0">
                                                <div class="settings-btns">
                                                    <button type="submit" class="btn btn-update">Save</button>
                                                    <button type="submit" class="btn btn-cancel ml-2">Cancel</button>
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
        <aside class="control-sidebar control-sidebar-dark">
            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>
            </div>
        </aside>
        <MainFooterBack />
    </div>
</template>
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
}</style>