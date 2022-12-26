<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="card-header mb-3 d-flex justify-content-between align-items-center">
                        <h5 class="card-title">Paypal</h5>
                        <div class="status-toggle d-flex justify-content-between align-items-center">
                            <input id="s2" type="checkbox" class="switch">
                        </div>
                    </div>
                    <form>
                        <div class="settings-form">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Paypal Option</label><br>
                                <input id="r1" type="radio" name="radio" value="1">
                                <label for="r1">Sandbox</label>
                                <input id="r2" class="ml-2" type="radio" name="radio" value="2" checked>
                                <label for="r2">Live</label>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Braintree Tokenization key</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Braintree Tokenization key...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Braintree Merchant ID</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Braintree Merchant ID...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Braintree Public key</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Braintree Public key...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Braintree Private key</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Braintree Private key...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Paypal APP ID</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Paypal APP ID...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Paypal Secret Key</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Paypal Secret Key...">
                            </div>
                            <div class="mb-3">
                                <div class="form-group mb-0">
                                    <div class="settings-btns">
                                        <button type="submit" class="btn btn-update">Save</button>
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
                    <div class="card-header mb-3 d-flex justify-content-between align-items-center">
                        <h5 class="card-title">Stripe</h5>
                        <div class="status-toggle d-flex justify-content-between align-items-center">
                            <input id="s2" type="checkbox" class="switch">
                        </div>
                    </div>
                    <form>
                        <div class="settings-form">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Stripe Option</label><br>
                                <input id="r1" type="radio" name="radio" value="1">
                                <label for="r1">Sandbox</label>
                                <input id="r2" class="ml-2" type="radio" name="radio" value="2" checked>
                                <label for="r2">Live</label>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Gateway Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Gateway Name...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Braintree Merchant ID</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Braintree Merchant ID...">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Rest Key</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Rest Key...">
                            </div>
                            <div class="mb-3">
                                <div class="form-group mb-0">
                                    <div class="settings-btns">
                                        <button type="submit" class="btn btn-update">Save</button>
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