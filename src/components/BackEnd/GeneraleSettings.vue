<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="card-header mb-3">
                        <h5 class="card-title">Website Basic Details</h5>
                    </div>
                    <form>
                        <div class="settings-form">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Logo</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label" for="inputGroupFile01">Choose logo</label>
                                </div>
                                <span class="font-weight-bold">Recommended image size is 150px x 150px</span>
                                <div class="upload-images">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_Good_Doctor_logo_2.svg/2560px-The_Good_Doctor_logo_2.svg.png" alt="">
                                    <font-awesome-icon icon="fa-regular fa-circle-xmark" class="remove"/>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Favicon</label>
                                <div class="custom-file mb-1">
                                    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                                    <label class="custom-file-label" for="inputGroupFile01">Choose logo</label>
                                </div>
                                <span class="font-weight-bold">Recommended image size is 16px x 16px or 32px x 32px<br>Accepted formats: only png and ico</span>
                                <div class="upload-images upload-size">
                                    <img src="https://www.pgdesign.be/wp-content/uploads/2020/06/Logo-bleu-400.png" alt="">
                                    <font-awesome-icon icon="fa-regular fa-circle-xmark" class="remove"/>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" for="s2">RL</label>
                                <div class="custom-file">
                                    <input id="s2" type="checkbox" class="switch ml-5">
                                </div>  
                            </div>
                            <div class="mb-3">
                                <div class="form-group mb-0">
                                    <div class="settings-btns">
                                        <button type="submit" class="btn btn-update">Update</button>
                                        <button type="submit" class="btn btn-cancel ml-2">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="card-header mb-3">
                        <h5 class="card-title">Address Details</h5>
                    </div>
                    <form>
                        <div class="settings-form">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Address Line 1 </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address Line 1...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Address Line 2 </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address Line 2...">
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">City </label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City...">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">State/Province </label>
                                            <select class="form-control">
                                                <option>State/Province...</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                                <option>option 4</option>
                                                <option>option 5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Zip/Postal Code </label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Zip/Postal Code...">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Country </label>
                                            <select class="form-control">
                                                <option>Country...</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                                <option>option 4</option>
                                                <option>option 5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-group mb-0">
                                    <div class="settings-btns">
                                        <button type="submit" class="btn btn-update">Update</button>
                                        <button type="submit" class="btn btn-cancel ml-2">Cancel</button>
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