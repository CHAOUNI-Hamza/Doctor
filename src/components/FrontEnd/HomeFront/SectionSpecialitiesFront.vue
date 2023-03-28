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
        <div class="col-md-9">
          <div class="specialities-slider slider">
            <swiper
              :slides-per-view="6"
              :space-between="50"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              :pagination="true"
              :modules="modules"
              class="mySwiper">
              <swiper-slide v-for="item in getSpecialities.data" :key="item">
                <div tabindex="-1" style="width: 100%; display: inline-block">
                  <div class="speicality-item text-center">
                    <div class="speicality-img">
                      <img
                        :src="item.photo"
                        class="img-fluid"
                        alt="Speciality" />
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
</style>
