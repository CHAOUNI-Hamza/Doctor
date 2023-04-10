<template>
  <section class="section home-tile-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9 m-auto">
          <div class="section-header text-center mb-5">
            <h2>What are you looking for?</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 mb-3">
              <div class="card text-center doctor-book-card">
                <img
                  src="https://media.istockphoto.com/photos/pharmacist-filling-prescription-in-pharmacy-store-picture-id1154962393?b=1&k=20&m=1154962393&s=612x612&w=0&h=lnWDwjfqAAsjO0KZOfoB4l-cULAuohN9pa-yog7ePrc="
                  alt="" class="img-fluid" />
                <div class="delay"></div>
                <div class="doctor-book-card-content tile-card-content-1">
                  <div>
                    <h3 class="mb-0">Visit a Doctor</h3>
                    <router-link :to="{ name: 'doctorsearch' }" class="btn book-btn1 px-3 py-2 mt-3" tabindex="0"
                      href="/template/patient/search-doctor">Book Now</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-3">
              <div class="card text-center doctor-book-card">
                <img
                  src="https://media.istockphoto.com/photos/pharmacist-filling-prescription-in-pharmacy-store-picture-id1154962393?b=1&k=20&m=1154962393&s=612x612&w=0&h=lnWDwjfqAAsjO0KZOfoB4l-cULAuohN9pa-yog7ePrc="
                  alt="" class="img-fluid" />
                <div class="delay"></div>
                <div class="doctor-book-card-content tile-card-content-1">
                  <div>
                    <h3 class="mb-0">Find a Pharmacy</h3>
                    <router-link :to="{ name: 'pharmacysearch' }" class="btn book-btn1 px-3 py-2 mt-3" tabindex="0"
                      href="/template/Pharmacy/pharmacy-search">Find Now</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-3">
              <div class="card text-center doctor-book-card">
                <img
                  src="https://media.istockphoto.com/photos/scientists-in-laboratory-working-on-research-picture-id1012405368?b=1&k=20&m=1012405368&s=612x612&w=0&h=H-gU_s8DnSh2QPQeZIKePGSyRMtF_cn5BmiblreMt0s="
                  alt="" class="img-fluid" />
                <div class="delay"></div>
                <div class="doctor-book-card-content tile-card-content-1">
                  <div>
                    <h3 class="mb-0">Find a Lab</h3>
                    <a href="#" class="btn book-btn1 px-3 py-2 mt-3" tabindex="0">Coming Soon</a>
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
<style scoped>
.home-tile-section {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.section-header h2 {
  font-size: 36px;
  margin-bottom: 0;
  font-weight: 500;
}

.doctor-book-card {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  box-shadow: 0px 3px 20px #0000000b;
  overflow: hidden;
}

.doctor-book-card img {
  vertical-align: middle;
  border-radius: 0.25rem;
  transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  transition: 1s;
}

.doctor-book-card:hover img {
  transform: scale(1.2);
}

.doctor-book-card-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f1f1f1;
  width: 100%;
  border-radius: 0.25rem;
}

.doctor-book-card h3 {
  text-shadow: 2px 4px 3px rgb(0 0 0 / 30%);
  color: #fff;
}

.book-btn1 {
  background-color: #4dd0ec;
  border: 2px solid #0de0fe;
  color: #fff;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  padding: 6px 10px;
}

.delay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0000008c;
}
</style>
