<template>
  <section class="section section-features">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-5 col-md-12 features-img aos aos-init aos-animate" data-aos="fade-up">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/215/417/original/a-cartoon-flat-human-hand-holding-a-smartphone-with-a-video-call-to-a-female-doctor-on-the-screen-using-a-mobile-app-for-advice-or-counselling-isolated-on-a-white-background-vector.jpg"
            class="img-fluid" alt="Feature">
        </div>
        <div class="col-lg-7 col-md-12">
          <div class="section-header aos aos-init aos-animate" data-aos="fade-up">
            <h2 class="mt-2">Availabe Features in Our Clinic</h2>
            <p>It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. </p>
          </div>
          <!-- card responsive -->
          <section v-for="item in 10" :key="item" class="cards-section cards-responsive">
            <article class="card card--1">
              <div class="card__img"></div>
              <a href="#" class="card_link">
                <div class="card__img--hover"
                  style="background-image: url('https://www.vie-publique.fr/sites/default/files/styles/large_full/public/en_bref/image_principale/H%C3%B4pital_0.jpg?itok=juWf2GYd');">
                </div>
              </a>
              <div class="card__info">
                <!--<span class="card__category"> Recipe</span>-->
                <h3 class="card__title">Medical</h3>
                <!--<span class="card__by">by <a href="#" class="card__author" title="author">Celeste Mills</a></span>-->
              </div>
            </article>




          </section>

          <div class="web mt-3">
            <div class="text-center">
              <div class="specialities-slider slider">
                <div class="specialities-slider slider">
                  <swiper :slides-per-view="5" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
                    :pagination="true" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="item in 20" :key="item">
                      <div tabindex="-1" style="width: 100%; display: inline-block;">
                        <div class="cercle">
                          <img
                            src="https://www.vie-publique.fr/sites/default/files/styles/large_full/public/en_bref/image_principale/H%C3%B4pital_0.jpg?itok=juWf2GYd"
                            alt="">
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
      //
    }
  }
};
</script>
<style scoped>
.section-features {
  background-color: #fff;
  padding: 80px 40px;
  text-align: center;
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


.web {
  display: block;
}

.cards-responsive {
  display: none;
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {}

@media (min-width: 429px) and (max-width: 834px) {
  .cercle img {
    height: 70px;
    width: 70px;
  }
}

@media (min-width: 429px) and (max-width: 834px),
(min-width: 0px) and (max-width: 428px) {
  .web {
    display: none;
  }

  .cards-responsive {
    display: block;
  }

  .section-header h2 {
    font-size: 24px;
  }

  .swiper-wrapper {
    display: block;
  }

  .cards-section {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
  }

  .card--1 .card__img,
  .card--1 .card__img--hover {
    background-image: url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  }

  .card--2 .card__img,
  .card--2 .card__img--hover {
    background-image: url('https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  }

  .card__like {
    width: 18px;
  }

  .card__clock {
    width: 15px;
    vertical-align: middle;
    fill: #AD7D52;
  }

  .card__time {
    font-size: 12px;
    color: #AD7D52;
    vertical-align: middle;
    margin-left: 5px;
  }

  .card__clock-info {
    float: right;
  }

  .card__img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;


  }

  .card__info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  .card__img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;

  }

  .card {
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    width: 100%;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.10, 1.10);
  }

  .card__info {
    z-index: 2;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
  }

  .card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
  }

  .card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
  }

  .card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
  }

  .card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
  }

  .card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
  }

  .card:hover .card__info {
    background-color: transparent;
    position: relative;
  }

  .card:hover .card__info-hover {
    opacity: 1;
  }
}
</style>