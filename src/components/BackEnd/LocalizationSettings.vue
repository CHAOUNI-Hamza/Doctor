<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="card-header mb-3 d-flex justify-content-between align-items-center">
                        <h5 class="card-title">Localization Details</h5>
                        <div class="status-toggle d-flex justify-content-between align-items-center">
                            <input id="s2" type="checkbox" class="switch">
                        </div>
                    </div>
                    <form>
                        <div class="settings-form">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Time Zone</label>
                                <input type="datetime-local" class="form-control" id="exampleFormControlInput1" placeholder="Email From Address...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Date Format </label>
                                <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Email Password...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Time Format</label>
                                <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="Emails From Name...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Currency Symbol </label>
                                    <select class="form-control">
                                        <option>S</option>
                                        <option>option 2</option>
                                        <option>option 3</option>
                                        <option>option 4</option>
                                        <option>option 5</option>
                                    </select>
                            </div>
                            <div class="mb-3">
                                <div class="form-group mb-0">
                                    <div class="settings-btns">
                                        <button type="submit" class="btn btn-update">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
.card-title {
    font-weight: 600;
    font-size: 20px;
}
label {
    font-weight: 100 !important;
}
.upload-images {
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #E4E4E4;
    border-radius: 5px;
    display: flex;
    margin-top: 30px;
    width: 228px;
    height: 78px;
    justify-content: space-around;
    align-items: center;
    position: relative;
}
.upload-size {
    width: 89px!important;
    height: 78px!important;
}
.upload-images img {
    max-height: 45px;
    width: auto;
}
.remove {
    position: absolute;
    top: 5px;
    right: 5px;
    color: red;
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
</style>