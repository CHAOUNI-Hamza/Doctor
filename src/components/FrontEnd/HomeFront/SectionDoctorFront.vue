<template>
  <section class="section section-doctor">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 top-res">
          <div class="section-header aos aos-init aos-animate mb-3" data-aos="fade-up">
            <h2>Book Our Doctor</h2>
            <p>Lorem Ipsum is simply dummy text</p>
          </div>
          <div class="about-content aos aos-init aos-animate" data-aos="fade-up">
            <p class="mb-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
            <p>
              web page editors now use Lorem Ipsum as their default model text,
              and a search for 'lorem ipsum' will uncover many web sites still
              in their infancy. Various versions have evolved over the years,
              sometimes
            </p>
            <a href="#">Read More..</a>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-md-6 col-lg-4" v-for="item in getDoctors.data" :key="item">
              <div class="card" style="width: 100%">
                <img src="https://www.pngitem.com/pimgs/m/515-5158817_telemedicine-doctor-hd-png-download.png"
                  class="card-img-top p-3" alt="..." />
                <div class="card-body pt-0">
                  <div class="pro-content">
                    <h3 class="title">
                      <router-link :to="{ name: 'doctorprofile' }">{{
                        item.username
                      }}</router-link>
                      <font-awesome-icon class="check" icon="fa-solid fa-circle-check" />
                    </h3>
                    <p class="speciality">
                      {{ item.specialty?.name }}
                    </p>
                    <div class="rating">
                      <font-awesome-icon class="text-warning" icon="fa-solid fa-star" />
                      <font-awesome-icon class="text-warning" icon="fa-solid fa-star" />
                      <font-awesome-icon class="text-warning" icon="fa-solid fa-star" />
                      <font-awesome-icon class="text-warning" icon="fa-solid fa-star" />
                      <span class="d-inline-block average-rating">(4)</span>
                    </div>
                    <ul class="available-info pl-0 mt-2">
                      <li>
                        <font-awesome-icon class="mr-1" icon="fa-solid fa-location-dot" />
                        <span>Louisiana, USA</span>
                      </li>
                      <li>
                        <font-awesome-icon class="mr-1" icon="fa-regular fa-clock" />
                        <span>Available on Fri, 22 Mar</span>
                      </li>
                      <li>
                        <font-awesome-icon class="mr-1" icon="fa-solid fa-sack-dollar" />
                        <span>$150 - $250</span>
                        <font-awesome-icon icon="fa-solid fa-star" class="ml-1 text-warning" />
                      </li>
                    </ul>
                    <div class="row row-sm">
                      <div class="col-6">
                        <router-link :to="{ name: 'doctorprofile' }" class="btn view-btn">View Profile</router-link>
                      </div>
                      <div class="col-6">
                        <router-link :to="{ name: 'doctorbooking' }" class="btn book-btn"
                          href="/template/patient/booking">Book Now</router-link>
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
      status: "active",
      params: {
        limit_doctors: 3,
      },
    };
  },
  watch: {
    params: {
      handler() {
        // Appeler la méthode "fetchDoctors" avec les paramètres mis à jour
        this.fetchDoctors(this.params);
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      getDoctors: "Doctors/getDoctors",
    }),
  },
  methods: {
    ...mapActions({
      fetchDoctors: "Doctors/fetchDoctors",
    }),
  },
  mounted() {
    // Appeler la méthode "fetchDoctors" lors du montage du composant
    this.fetchDoctors(this.params);
  },
};
</script>
<style scoped>
.title {
  display: flex;
  align-items: center;
}

.title .check {
  color: limegreen;
  font-size: 20px;
  margin-left: 10px;
}

p.speciality {
  font-size: 13px;
  color: #757575;
  margin-bottom: 5px;
  min-height: 40px;
}

.pro-content .title {
  font-size: 20px;
}

.available-info {
  list-style: none;
}

.available-info li .mr-1 {
  width: 25px;
  color: #3333337a;
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
  padding: 80px 40px;
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


/* start media */
@media (min-width: 0px) and (max-width: 428px) {
  .section-doctor {
    padding: 20px 0;
    text-align: center;
  }

  .about-content a {
    margin-bottom: 37px;
  }

  .card-body {
    text-align: left;
  }

  .card-img-top {
    height: 296px;
  }
}

@media (min-width: 429px) and (max-width: 834px) {
  .top-res {
    text-align: center;
    margin-bottom: 35px;
  }

  .card-img-top {
    height: 297px;
  }

  p.speciality {
    margin-top: 0;
  }
}
</style>
