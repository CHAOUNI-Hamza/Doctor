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
                        <div class="mt-3">
                            <div class="text-center">
                                <div class="specialities-slider slider">
                                    <swiper
                                        :slides-per-view="5"
                                        :space-between="50"
                                        @swiper="onSwiper"
                                        @slideChange="onSlideChange"
                                        :pagination="true"
                                        :modules="modules"
                                        class="mySwiper"
                                    >
                                        <swiper-slide v-for="item in 20" :key="item">
                                            <div tabindex="-1" style="width: 100%; display: inline-block;">
                                                <div class="cercle">
                                    <img src="https://www.vie-publique.fr/sites/default/files/styles/large_full/public/en_bref/image_principale/H%C3%B4pital_0.jpg?itok=juWf2GYd" alt="">
                                    <p class="mt-2">Medical</p>
                                </div>
                                            </div>
                                        </swiper-slide>
                                    </swiper>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>        
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import "swiper/css/pagination";

  //import "./style.css";

  // import required modules
  import { Pagination } from "swiper";

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        Pagination
      };
    },
    data() {
        return {
        }
    }
  };
</script>
<style scoped>
.section-features {
    background-color: #fff;
    padding: 80px 40px;
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

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 2px 2px 13px rgb(0 0 0 / 26%);
}
.speicality-item p {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0 0;
}
</style>