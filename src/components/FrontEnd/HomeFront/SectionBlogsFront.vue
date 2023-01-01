<template>
    <section class="section section-doctor">
        <div class="container-fluid">
            <div class="section-header text-center mb-4" data-aos="fade-up">
                <h2>Blogs and News</h2>
                <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-md-3" v-for="item in 4">
                            <div class="card" style="width: 100%;">
                                <img src="https://www.pngitem.com/pimgs/m/515-5158817_telemedicine-doctor-hd-png-download.png" class="card-img-top p-3" alt="...">
                                <div class="card-body pt-0">
                                    <div class="pro-content">
                                        <h3 class="title">
                                            <a href="/template/patient/doctor-profile text-light">
                                                <img src="https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg" alt="">
                                                <span class="name">Sofia Brient</span>
                                            </a>
                                        </h3>
                                        <p class="speciality">
                                            <font-awesome-icon icon="fa-regular fa-clock" />
                                            <span class="times-text ml-1">4 DEC 2022</span>
                                        </p>
                                        <h3 class="blog-title">
                                            <a href="/template/blog/blog-details">Doccure – Making your clinic painless visit?</a>
                                        </h3>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
            <div class="view-all text-center">
                    <a href="#0" class="btn btn-primary">View All</a>
                </div>
        </div>
    </section>
</template>
<style scoped>
.view-all .btn {
    background-color: #00d0ff;
    border: none;
    padding: 11px 30px;
    margin-top: 22px;
}
.blog-title {
    font-size: 26px;
    margin: 0 0 5px;
    min-height: 43px;
}
.blog-title a {
    color: black;
}
.pro-content img {
    border-radius: 100%;
    width: 28px;
    flex: 0 0 28px;
    margin-right: 5px;
}
.pro-content .name {
    font-size: 19px;
    color: #333;
    margin-left: 2px;
    font-weight: 300;
}
.times-text {
    font-size: 16px;
    color: #33333394;
    margin-left: 2px;
    font-weight: 800;
}
p.speciality {
    font-size: 13px;
    color: #757575;
    margin-bottom: 5px;
    min-height: 40px;
}
.section-header .sub-title {
    color: #757575;
    font-size: 16px;
    max-width: 600px;
    margin: 15px auto 0;
}
.available-info {
    list-style: none;
}
.view-btn {
    color: #0de0fe;
    font-size: 13px;
    border: 2px solid #0de0fe;
    text-align: center;
    display: block;
    font-weight: 500;
    padding: 6px;
}
.book-btn {
    background-color: #0de0fe;
    border: 2px solid #0de0fe;
    color: #fff;
    font-size: 13px;
    text-align: center;
    display: block;
    font-weight: 500;
    padding: 6px;
}

.card-img-top {
    height: 216px;
}

.section-doctor {
    background-color: #f8f9fa;
    padding: 80px 0;
}
.section-doctor .section-header h2 {
    font-size: 36px;
    margin-bottom: 0;
    font-weight: 500;
}
.container-fluid {
    padding-left: 30px;
    padding-right: 30px;
}
.section-header p {
    color: #757575; 
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 15px;
}
.about-content p {
    font-size: 14px;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    color: #33333394;
}
.about-content a {
    background-color: #0de0fe;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    margin-top: 30px;
    min-width: 150px;
    padding: 15px 20px;
    text-align: center;
    transition: 1s;
}
.about-content a:hover {
    background-color: #17a2b8;
}
</style>