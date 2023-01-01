<template>
    <section class="section section-features">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-5 features-img aos aos-init aos-animate" data-aos="fade-up">
                    <img src="https://static.vecteezy.com/system/resources/previews/008/215/417/original/a-cartoon-flat-human-hand-holding-a-smartphone-with-a-video-call-to-a-female-doctor-on-the-screen-using-a-mobile-app-for-advice-or-counselling-isolated-on-a-white-background-vector.jpg" class="img-fluid" alt="Feature">
                    </div>
                    <div class="col-md-7">
                        <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
                            <h2 class="mt-2">Availabe Features in Our Clinic</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable 
                                content of a page when looking at its layout. </p>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-3 text-center" v-for="item in 4">
                                <div class="cercle">
                                    <img src="https://www.vie-publique.fr/sites/default/files/styles/large_full/public/en_bref/image_principale/H%C3%B4pital_0.jpg?itok=juWf2GYd" alt="" width="100">
                                    <p class="mt-2">Medical</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>        
</template>
<style scoped>
.section-features {
    background-color: #fff;
    padding: 80px 0;
}
.section-header h2 {
    font-size: 42px;
    margin-bottom: 0;
    font-weight: revert;
}
.section-header p {
    color: #757575;
    font-size: 16px;
    margin-bottom: 0;
    margin-top: 15px;
}
.cercle img {
    border-radius: 100%;
    box-shadow: 1px 6px 14px rgb(0 0 0 / 20%);
    height: 150px;
    object-fit: cover;
    width: 150px;
}
.cercle p {
    font-weight: 600;
    color: #333;
}
</style>