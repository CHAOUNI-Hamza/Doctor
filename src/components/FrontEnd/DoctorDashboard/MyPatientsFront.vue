<template>
  <div class="row row-grid">
    <div class="col-md-6 col-lg-4 col-xl-3" v-for="item in 10" :key="item">
      <div class="card widget-profile pat-widget-profile">
        <div class="card-body">
          <div class="pro-widget-content">
            <div class="profile-info-widget text-center">
              <a class="booking-doc-img" href="/template/doctor/patient-profile">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="User">
              </a>
                <div class="profile-det-info">
                  <h3 class="mt-2">
                    <a href="/template/doctor/patient-profile">Richard Wilson</a>
                  </h3>
                  <div class="patient-details">
                  <h5><b>Patient ID :</b> P0016</h5>
                  <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Alabama, USA</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="patient-info pt-4">
            <ul class="list-unstyled">
              <li>Phone <span>+1 952 001 8563</span></li>
              <li>Age <span>38 Years, Male</span></li>
              <li>Blood Group <span>AB+</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    components: {

    },
    data() {
      return {
  
      }
    }
  }
  </script>
  <style scoped>

  .profile-det-info h3 a {
    color: black;
    font-size: 21px;
  }
  .card-body {
    padding: 1.5rem;
}
.patient-details h5 {
  color: #33333396;
  font-size: 14px;
}
  .booking-doc-img img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
}
.pro-widget-content {
    border-bottom: 1px solid #f0f0f0;
    padding: 20px;
}
.patient-info ul li span {
  float: right;
  color: #33333396;
}
  </style>
  