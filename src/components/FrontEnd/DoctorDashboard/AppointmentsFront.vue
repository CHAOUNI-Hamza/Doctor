<template>
  <div class="appointment">
    <div
      class="appointment-list d-flex align-items-center mb-3"
      v-for="item in 6"
      :key="item">
      <div class="profile-info-widget d-flex align-items-center">
        <a class="booking-doc-img" href="/template/doctor/patient-profile">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="User" />
        </a>
        <div class="profile-det-info">
          <h3>
            <a href="/template/doctor/patient-profile">Richard Wilson</a>
          </h3>
          <div class="patient-details">
            <h5>
              <i class="far fa-clock"></i>
              14 Nov 2019, 10.00 AM
            </h5>
            <h5>
              <i class="fas fa-map-marker-alt"></i>
              Newyork, United States
            </h5>
            <h5>
              <i class="fas fa-envelope"></i>
              richard@example.com
            </h5>
            <h5 class="mb-0">
              <i class="fas fa-phone"></i>
              +1 923 782 4575
            </h5>
          </div>
        </div>
      </div>
      <div class="appointment-action">
        <a class="btn btn-sm bg-success" href="/template/doctor/appointments#0">
          <i class="far fa-eye"></i>
          View
        </a>
        <a
          class="btn btn-sm bg-info ml-2"
          href="/template/doctor/appointments#0">
          <i class="fas fa-check"></i>
          Accept
        </a>
        <a
          class="btn btn-sm bg-warning ml-2"
          href="/template/doctor/appointments#0">
          <i class="fas fa-times"></i>
          Cancel
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.profile-info-widget {
  text-align: left;
  margin-right: auto;
}
.booking-doc-img img {
  width: 150px;
  height: 150px;
  margin-right: 10px;
  border-radius: 8px;
}
.appointment-list {
  border: 1px solid #33333314;
  border-radius: 5px;
  padding: 14px;
}
.profile-det-info h3 a {
  color: black;
  font-size: 24px;
}
.patient-details h5 {
  font-size: 17px;
  color: #33333394;
}
.btn {
  padding: 4px 17px;
  color: white;
}
</style>
