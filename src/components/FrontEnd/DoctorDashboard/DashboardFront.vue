<template>
  <div>
    <div class="row">
      <div v-for="item in 3" :key="item.index" class="col-lg-4 col-md-12">
        <div class="card dash-cards">
          <div class="card-body">
            <div class="dash-top-content">
              <div class="circle-bar circle-bar1">
                <div class="circle-graph1" data-percent="75">
                  <canvas width="400" height="400"></canvas>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The-punisher-logo-png-transparent.png/1200px-The-punisher-logo-png-transparent.png"
                    class="img-fluid" alt="patient" />
                </div>
              </div>
              <div class="dash-widget-info">
                <h6>Total Patient All time</h6>
                <h3>1500</h3>
              </div>
            </div>
            <div class="dash-bottom-content">
              <h6>
                <span>
                  <font-awesome-icon icon="fa-solid fa-caret-up" /> 9.5%</span>
                last Week
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="card dash-cards">
          <div class="card-header">
            <div class="today-appointment-title">
              <h5 class="mb-0">Today’s Appointments</h5>
              <a href="appointments.html">
                <h6 class="mb-0 mr-2">
                  View All
                  <font-awesome-icon icon="fa-solid fa-arrow-right" />
                </h6>
              </a>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0">
                <tbody>
                  <tr v-for="item in 4" :key="item.index">
                    <td>
                      <h2 class="table-avatar">
                        <a href="patient-profile.html" class="avatar avatar-m me-2"><img class="avatar-img"
                            src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg"
                            alt="User Image" /></a>
                        <a href="patient-profile.html">Richard<span>#PT0016</span></a>
                      </h2>
                    </td>
                    <td>
                      <div class="consult-type d-flex flex-column">
                        <h6 class="mb-0">Online Consultation</h6>
                        <p class="mb-0">
                          <font-awesome-icon icon="fa-solid fa-video" class="material-icons mr-2" />
                          Video Call
                        </p>
                      </div>
                    </td>
                    <td class="text-center">
                      <a class="call-status" href="video-call.html">Start&nbsp;Call</a>
                    </td>
                    <td class="text-center">
                      <a href="patient-profile.html"><font-awesome-icon icon="fa-solid fa-chevron-right" /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card dash-cards">
          <div class="card-header">
            <div class="today-appointment-title">
              <h5 class="mb-0">Patients</h5>
              <a href="my-patients.html">
                <h6 class="mb-0">
                  View All<font-awesome-icon icon="fa-solid fa-arrow-right" /></h6>
              </a>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0">
                <tbody>
                  <tr v-for="item in 4" :key="item.id">
                    <td>
                      <h2 class="table-avatar">
                        <a href="patient-profile.html" class="avatar avatar-m me-2"><img class="avatar-img"
                            src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg"
                            alt="User Image" /></a>
                        <a href="patient-profile.html">Richard<span>#PT0016</span></a>
                      </h2>
                    </td>
                    <td class="text-center">
                      <a href="patient-profile.html"><font-awesome-icon icon="fa-solid fa-chevron-right" /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <section class="col-md-12 connectedSortable ui-sortable">
        <div class="card">
          <div class="card-header ui-sortable-handle" style="cursor: move">
            <h3 class="card-title">
              <i class="fas fa-chart-pie mr-1"></i>
              Sales
            </h3>
            <div class="card-tools">
              <ul class="nav nav-pills ml-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <div class="tab-content p-0">
              <div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
                <canvas id="revenue-chart-canvas" height="300" style="height: 300px; display: block; width: 713px"
                  width="713" class="chartjs-render-monitor"></canvas>
              </div>
              <div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
                <canvas id="sales-chart-canvas" height="300" style="height: 300px; display: block; width: 713px"
                  class="chartjs-render-monitor" width="713"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="row">
      <div class="col-lg-4 d-flex">
        <div class="card dash-cards flex-fill">
          <div class="card-header">
            <div class="today-appointment-title">
              <h5 class="mb-0">Recent Prescriptions</h5>
              <a href="patient-profile.html">
                <h6 class="mb-0">
                  View All <font-awesome-icon icon="fa-solid fa-arrow-right" /></h6>
              </a>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0">
                <tbody>
                  <tr v-for="item in 3" :key="item.id">
                    <td>
                      <h2 class="table-avatar">
                        <a href="patient-profile.html"
                          class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                          <img src="https://doccure.dreamguystech.com/html/template/assets/img/icons/tablets.svg"
                            alt="" />
                        </a>
                        <a href="patient-profile.html" class="ml-2">Abacavir<span class="text-danger">#8995447</span></a>
                      </h2>
                    </td>
                    <td>Type : Onetime</td>
                    <td class="text-center">
                      <a href="javascript:void(0);"><font-awesome-icon icon="fa-solid fa-chevron-right" /></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 d-flex">
        <div class="card dash-cards flex-fill">
          <div class="card-header">
            <div class="today-appointment-title">
              <h5 class="mb-0">Total Earning</h5>
            </div>
          </div>
          <div class="card-body" style="position: relative">
          </div>
        </div>
      </div>
      <div class="col-lg-4 d-flex">
        <div class="card dash-cards flex-fill">
          <div class="card-header">
            <div class="today-appointment-title">
              <h5 class="mb-0">Recent Consultation</h5>
            </div>
          </div>
          <div class="card-body">
            <div class="owl-carousel report-card-slider owl-theme owl-loaded owl-drag">
              <div class="owl-stage-outer">
                <div class="owl-stage" style="
                                                transform: translate3d(-645px, 0px, 0px);
                                                transition: all 0s ease 0s;
                                                width: 2260px;
                                              ">
                </div>
              </div>
              <div class="owl-nav">
                <button type="button" role="presentation" class="owl-prev">
                  <i class="fa fa-chevron-left"></i></button><button type="button" role="presentation" class="owl-next">
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
              <div class="owl-dots">
                <button role="button" class="owl-dot active">
                  <span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button"
                  class="owl-dot"><span></span></button>
              </div>
            </div>
          </div>
        </div>
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
.card.dash-cards {
  background: #ffffff;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 4px 44px rgb(180 180 180 / 25%);
  border-radius: 4px;
}

.card-body {
  padding: 1.5rem;
}

.dash-top-content {
  display: flex;
  align-items: center;
}

.circle-bar {
  margin-right: 15px;
}

.circle-bar>div {
  display: inline-block;
  position: relative;
  text-align: center;
}

.circle-bar>div canvas {
  width: 90px !important;
  height: 90px !important;
}

.dash-bottom-content {
  display: flex;
  justify-content: end;
}

.dash-bottom-content h6 {
  color: #7e84a3;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 0px;
}

.dash-bottom-content h6 span {
  color: #10916f;
}

.circle-bar>div img {
  left: 0;
  position: absolute;
  top: 50%;
  right: 0;
  text-align: center;
  margin: 0 auto;
  transform: translateY(-50%);
}

.img-fluid {
  max-width: 25%;
  height: auto;
}

/* */
.card.dash-cards {
  background: #ffffff;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 4px 44px rgb(180 180 180 / 25%);
  border-radius: 4px;
}

.card .card-header {
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-header {
  padding: 1rem 1.5rem;
}

.today-appointment-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.today-appointment-title h5 {
  font-size: 16px;
  font-weight: 500;
}

.today-appointment-title h6 {
  font-size: 14px;
  color: #ff0000;
  transition: 0.3s linear;
}

.table.table-center td,
.table.table-center th {
  vertical-align: middle;
}

table.table td h2.table-avatar {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  white-space: nowrap;
}

.dash-cards table.table td h2 a {
  color: #000000;
  font-weight: 500;
  font-size: 16px;
}

.avatar-img {
  width: 100%;
  height: 100%;
}

.avatar-m {
  height: 60px;
  width: 60px;
  border-radius: 4px;
}

.dash-cards table.table td h2 a {
  color: #000000;
  font-weight: 500;
  font-size: 16px;
}

table.table td h2 span {
  color: #888;
  display: block;
  font-size: 12px;
  margin-top: 3px;
}

.call-status {
  padding: 10px 25px;
  background: #0c4f8a;
  color: #fff;
  font-size: 14px;
  border-radius: 3px;
  transition: all 0.5s;
}

/**/
.card.dash-cards {
  background: #FFFFFF;
  border: 1px solid #F4F4F4;
  box-shadow: 0px 4px 44px rgb(180 180 180 / 25%);
  border-radius: 4px;
}

.card .card-header {
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.today-appointment-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.today-appointment-title h5 {
  font-size: 16px;
  font-weight: 500;
}

.card-body {
  padding: 1.5rem;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table {
  color: #272b41;
  max-width: 100%;
  margin-bottom: 0;
  width: 100%;
}

table.table td h2.table-avatar {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  white-space: nowrap;
}

.dash-cards table.table td h2 a {
  color: #000000;
  font-weight: 500;
  font-size: 16px;
}

.avatar-m img {
  border-radius: 6px;
}

.dash-cards table.table td h2 a {
  color: #000000;
  font-weight: 500;
  font-size: 16px;
}

.dash-cards table.table td h2 span {
  color: #585858;
  font-weight: 400;
  font-size: 13px;
}

table.table td h2 span {
  color: #888;
  display: block;
  font-size: 12px;
  margin-top: 3px;
}

.avatar-m {
  height: 60px;
  width: 60px;
  border-radius: 4px;
}

.avatar-tablet {
  background: #0CE0FF;
}

/* */
.owl-carousel.report-card-slider {
  min-height: 280px;
}

.no-js .owl-carousel,
.owl-carousel.owl-loaded {
  display: block;
}

.owl-carousel .owl-stage-outer {
  position: relative;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
}

.owl-carousel .owl-stage {
  position: relative;
  -ms-touch-action: pan-Y;
  touch-action: manipulation;
  -moz-backface-visibility: hidden;
}

.owl-carousel.owl-drag .owl-item {
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
