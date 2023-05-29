<template>
  <section class="section section-specialities">
    <div class="container-fluid">
      <div class="section-header text-center">
        <h2>Clinic and Specialities</h2>
        <p class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="row justify-content-center mt-5">
        <div class="col-md-9 web">
          <div class="specialities-slider slider">
            <swiper :slides-per-view="6" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
              :pagination="true" :modules="modules" class="mySwiper">
              <swiper-slide v-for="item in getSpecialities.data" :key="item">
                <div tabindex="-1" style="width: 100%; display: inline-block">
                  <div class="speicality-item text-center">
                    <div class="speicality-img">
                      <img :src="item.photo" class="img-fluid" alt="Speciality" />
                      <span>
                        <i class="fa fa-circle" aria-hidden="true"></i>
                      </span>
                    </div>
                    <p>{{ item.name }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="container-fluid cards-responsive">
    <div class="col-lg-12 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12" v-for="item in getSpecialities.data" :key="item">
        <figure>
            <div class="media" style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_15.png)"></div>
            <figcaption><svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%">
                            <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect><text class="title" dx="50%" dy="2.5em">ENJOY</text><text class="title" dx="50%" dy="3.5em">EVERY</text><text class="title" dx="50%" dy="4.5em">MOMENT</text>
                        </mask>
                    </defs>
                    <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
                </svg>
            </figcaption><a href="#"></a>
        </figure>
    </div>
</div>

      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
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
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      Pagination,
    };
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters({
      getSpecialities: "Specialities/getSpecialities",
    }),
  },
  methods: {
    ...mapActions({
      fetchSpecialities: "Specialities/fetchSpecialities",
    }),
  },
  mounted() {
    // Appeler la méthode "fetchSpecialities" lors du montage du composant
    this.fetchSpecialities();
  },
};
</script>
<style scoped>
.section-specialities {
  background-color: #fff;
  padding: 80px 0;
}

.section-specialities h2 {
  font-size: 36px;
  margin-bottom: 0;
  font-weight: 500;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 2px 2px 13px rgb(0 0 0 / 26%);
}

.speicality-item p {
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0 0;
}

.speicality-img {
  width: 150px;
  height: 150px;
}







@import url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/library.less");
 @import url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/variables.less");
 .media {
	 background-position: center;
	 background-size: cover;
	 height: 100%;
	 position: absolute;
	 transition: all 0.3s ease;
	 width: 100%;
}
 figure {
	 height: 370px;
	 overflow: hidden;
	 position: relative;
}
 figure a {
	 height: 100%;
	 left: 0;
	 position: absolute;
	 top: 0;
	 width: 100%;
	 z-index: 3;
}
 figure:hover .media {
	 transform: scale(1.25);
}
figcaption {
    color: #252830;
    height: calc(100% - 105px);
    margin: 15px;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
}

 svg {
	 height: inherit;
	 width: 100%;
}
 svg text {
	 text-anchor: middle;
}
 svg #alpha {
	 fill: white;
}
 svg .title {
	 font-size: 28px;
	 font-family: "Montserrat";
	 letter-spacing: 5px;
}
 svg #base {
	 fill: white;
	 -webkit-mask: url(#mask);
	 mask: url(#mask);
}


.cards-responsive {
    display: none;
  }

  .web {
    display: block;
  }


/* start media */
@media (min-width: 0px) and (max-width: 428px) {
  .section-specialities {
    padding: 12px 0;
  }
  .web {
    display: none;
  }

  .cards-responsive {
    display: block;
  }
}

@media (min-width: 429px) and (max-width: 834px) {
  .web {
    display: none;
  }

  .cards-responsive {
    display: block;
  }
}
</style>
