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
                    class="img-fluid"
                    alt="patient" />
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
                  <font-awesome-icon icon="fa-solid fa-caret-up" /> 9.5%</span
                >
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
              <a href="appointments.html"
                ><h6 class="mb-0 mr-2">
                  View All
                  <font-awesome-icon icon="fa-solid fa-arrow-right" /></h6
              ></a>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0">
                <tbody>
                  <tr v-for="item in 4" :key="item.index">
                    <td>
                      <h2 class="table-avatar">
                        <a
                          href="patient-profile.html"
                          class="avatar avatar-m me-2"
                          ><img
                            class="avatar-img"
                            src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg"
                            alt="User Image"
                        /></a>
                        <a href="patient-profile.html"
                          >Richard<span>#PT0016</span></a
                        >
                      </h2>
                    </td>
                    <td>
                      <div class="consult-type d-flex flex-column">
                        <h6 class="mb-0">Online Consultation</h6>
                        <p class="mb-0">
                          <font-awesome-icon
                            icon="fa-solid fa-video"
                            class="material-icons mr-2" />
                          Video Call
                        </p>
                      </div>
                    </td>
                    <td class="text-center">
                      <a class="call-status" href="video-call.html"
                        >Start&nbsp;Call</a
                      >
                    </td>
                    <td class="text-center">
                      <a href="patient-profile.html"
                        ><font-awesome-icon icon="fa-solid fa-chevron-right"
                      /></a>
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
              <a href="my-patients.html"
                ><h6 class="mb-0">
                  View All<font-awesome-icon
                    icon="fa-solid fa-arrow-right" /></h6
              ></a>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0">
                <tbody>
                  <tr v-for="item in 4" :key="item.id">
                    <td>
                      <h2 class="table-avatar">
                        <a
                          href="patient-profile.html"
                          class="avatar avatar-m me-2"
                          ><img
                            class="avatar-img"
                            src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg"
                            alt="User Image"
                        /></a>
                        <a href="patient-profile.html"
                          >Richard<span>#PT0016</span></a
                        >
                      </h2>
                    </td>
                    <td class="text-center">
                      <a href="patient-profile.html"
                        ><font-awesome-icon icon="fa-solid fa-chevron-right"
                      /></a>
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
                  <a
                    class="nav-link active"
                    href="#revenue-chart"
                    data-toggle="tab"
                    >Area</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#sales-chart" data-toggle="tab"
                    >Donut</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <div class="tab-content p-0">
              <div
                class="chart tab-pane active"
                id="revenue-chart"
                style="position: relative; height: 300px">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
                <canvas
                  id="revenue-chart-canvas"
                  height="300"
                  style="height: 300px; display: block; width: 713px"
                  width="713"
                  class="chartjs-render-monitor"></canvas>
              </div>
              <div
                class="chart tab-pane"
                id="sales-chart"
                style="position: relative; height: 300px">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand">
                    <div class=""></div>
                  </div>
                  <div class="chartjs-size-monitor-shrink">
                    <div class=""></div>
                  </div>
                </div>
                <canvas
                  id="sales-chart-canvas"
                  height="300"
                  style="height: 300px; display: block; width: 713px"
                  class="chartjs-render-monitor"
                  width="713"></canvas>
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
              <a href="patient-profile.html"
                ><h6 class="mb-0">
                  View All <i class="feather-arrow-right"></i></h6
              ></a>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0">
                <tbody>
                  <tr>
                    <td>
                      <h2 class="table-avatar">
                        <a
                          href="patient-profile.html"
                          class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                          <img src="assets/img/icons/tablets.svg" alt="" />
                        </a>
                        <a href="patient-profile.html"
                          >Abacavir<span class="text-danger">#8995447</span></a
                        >
                      </h2>
                    </td>
                    <td>Type : Onetime</td>
                    <td class="text-center">
                      <a href="javascript:void(0);"
                        ><i class="fas fa-chevron-right"></i
                      ></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 class="table-avatar">
                        <a
                          href="patient-profile.html"
                          class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                          <img src="assets/img/icons/tablets.svg" alt="" />
                        </a>
                        <a href="patient-profile.html"
                          >Calcium<span class="text-danger">#8995447</span></a
                        >
                      </h2>
                    </td>
                    <td>Type : Onetime</td>
                    <td class="text-center">
                      <a href="javascript:void(0);"
                        ><i class="fas fa-chevron-right"></i
                      ></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 class="table-avatar">
                        <a
                          href="patient-profile.html"
                          class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                          <img src="assets/img/icons/tablets.svg" alt="" />
                        </a>
                        <a href="patient-profile.html"
                          >Citrizen<span class="text-danger">#8995447</span></a
                        >
                      </h2>
                    </td>
                    <td>Type : Onetime</td>
                    <td class="text-center">
                      <a href="javascript:void(0);"
                        ><i class="fas fa-chevron-right"></i
                      ></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 class="table-avatar">
                        <a
                          href="patient-profile.html"
                          class="avatar-m avatar-tablet me-2 d-flex align-items-center justify-content-center">
                          <img src="assets/img/icons/tablets.svg" alt="" />
                        </a>
                        <a href="patient-profile.html"
                          >Glabton<span class="text-danger">#8995447</span></a
                        >
                      </h2>
                    </td>
                    <td>Type : Onetime</td>
                    <td class="text-center">
                      <a href="javascript:void(0);"
                        ><i class="fas fa-chevron-right"></i
                      ></a>
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
            <div id="earnings-chart" style="min-height: 330px">
              <div
                id="apexchartsau6riazq"
                class="apexcharts-canvas apexchartsau6riazq apexcharts-theme-light"
                style="width: 313px; height: 315px">
                <svg
                  id="SvgjsSvg3145"
                  width="313"
                  height="315"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  class="apexcharts-svg apexcharts-zoomable"
                  xmlns:data="ApexChartsNS"
                  transform="translate(0, 0)"
                  style="background: transparent">
                  <g
                    id="SvgjsG3147"
                    class="apexcharts-inner apexcharts-graphical"
                    transform="translate(45.2353515625, 30)">
                    <defs id="SvgjsDefs3146">
                      <clipPath id="gridRectMaskau6riazq">
                        <rect
                          id="SvgjsRect3153"
                          width="265.7646484375"
                          height="251.348"
                          x="-4"
                          y="-2"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"></rect>
                      </clipPath>
                      <clipPath id="gridRectMarkerMaskau6riazq">
                        <rect
                          id="SvgjsRect3154"
                          width="261.7646484375"
                          height="251.348"
                          x="-2"
                          y="-2"
                          rx="0"
                          ry="0"
                          opacity="1"
                          stroke-width="0"
                          stroke="none"
                          stroke-dasharray="0"
                          fill="#fff"></rect>
                      </clipPath>
                      <linearGradient
                        id="SvgjsLinearGradient3159"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                          id="SvgjsStop3160"
                          stop-opacity="0.65"
                          stop-color="rgba(12,79,138,0.65)"
                          offset="0"></stop>
                        <stop
                          id="SvgjsStop3161"
                          stop-opacity="0.5"
                          stop-color="rgba(134,167,197,0.5)"
                          offset="1"></stop>
                        <stop
                          id="SvgjsStop3162"
                          stop-opacity="0.5"
                          stop-color="rgba(134,167,197,0.5)"
                          offset="1"></stop>
                      </linearGradient>
                    </defs>
                    <line
                      id="SvgjsLine3152"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="247.348"
                      stroke="#b6b6b6"
                      stroke-dasharray="3"
                      class="apexcharts-xcrosshairs"
                      x="0"
                      y="0"
                      width="1"
                      height="247.348"
                      fill="#b1b9c4"
                      filter="none"
                      fill-opacity="0.9"
                      stroke-width="1"></line>
                    <g
                      id="SvgjsG3165"
                      class="apexcharts-xaxis"
                      transform="translate(0, 0)">
                      <g
                        id="SvgjsG3166"
                        class="apexcharts-xaxis-texts-g"
                        transform="translate(0, -4)">
                        <text
                          id="SvgjsText3168"
                          font-family="Helvetica, Arial, sans-serif"
                          x="0"
                          y="276.348"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          class="apexcharts-text apexcharts-xaxis-label"
                          style="font-family: Helvetica, Arial, sans-serif">
                          <tspan id="SvgjsTspan3169">Jan</tspan>
                          <title>Jan</title>
                        </text>
                        <text
                          id="SvgjsText3171"
                          font-family="Helvetica, Arial, sans-serif"
                          x="42.96077473958333"
                          y="276.348"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          class="apexcharts-text apexcharts-xaxis-label"
                          style="font-family: Helvetica, Arial, sans-serif">
                          <tspan id="SvgjsTspan3172">Feb</tspan>
                          <title>Feb</title>
                        </text>
                        <text
                          id="SvgjsText3174"
                          font-family="Helvetica, Arial, sans-serif"
                          x="85.92154947916667"
                          y="276.348"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          class="apexcharts-text apexcharts-xaxis-label"
                          style="font-family: Helvetica, Arial, sans-serif">
                          <tspan id="SvgjsTspan3175">Mar</tspan>
                          <title>Mar</title>
                        </text>
                        <text
                          id="SvgjsText3177"
                          font-family="Helvetica, Arial, sans-serif"
                          x="128.88232421875003"
                          y="276.348"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          class="apexcharts-text apexcharts-xaxis-label"
                          style="font-family: Helvetica, Arial, sans-serif">
                          <tspan id="SvgjsTspan3178">Apr</tspan>
                          <title>Apr</title>
                        </text>
                        <text
                          id="SvgjsText3180"
                          font-family="Helvetica, Arial, sans-serif"
                          x="171.84309895833337"
                          y="276.348"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          class="apexcharts-text apexcharts-xaxis-label"
                          style="font-family: Helvetica, Arial, sans-serif">
                          <tspan id="SvgjsTspan3181">May</tspan>
                          <title>May</title>
                        </text>
                        <text
                          id="SvgjsText3183"
                          font-family="Helvetica, Arial, sans-serif"
                          x="214.8038736979167"
                          y="276.348"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          class="apexcharts-text apexcharts-xaxis-label"
                          style="font-family: Helvetica, Arial, sans-serif">
                          <tspan id="SvgjsTspan3184">Jun</tspan>
                          <title>Jun</title>
                        </text>
                        <text
                          id="SvgjsText3186"
                          font-family="Helvetica, Arial, sans-serif"
                          x="257.7646484375"
                          y="276.348"
                          text-anchor="middle"
                          dominant-baseline="auto"
                          font-size="12px"
                          font-weight="400"
                          fill="#373d3f"
                          class="apexcharts-text apexcharts-xaxis-label"
                          style="font-family: Helvetica, Arial, sans-serif">
                          <tspan id="SvgjsTspan3187">Jul</tspan>
                          <title>Jul</title>
                        </text>
                      </g>
                      <line
                        id="SvgjsLine3188"
                        x1="0"
                        y1="248.348"
                        x2="257.7646484375"
                        y2="248.348"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        stroke-width="1"></line>
                    </g>
                    <g id="SvgjsG3201" class="apexcharts-grid">
                      <g
                        id="SvgjsG3202"
                        class="apexcharts-gridlines-horizontal">
                        <line
                          id="SvgjsLine3211"
                          x1="0"
                          y1="0"
                          x2="257.7646484375"
                          y2="0"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"></line>
                        <line
                          id="SvgjsLine3212"
                          x1="0"
                          y1="61.837"
                          x2="257.7646484375"
                          y2="61.837"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"></line>
                        <line
                          id="SvgjsLine3213"
                          x1="0"
                          y1="123.674"
                          x2="257.7646484375"
                          y2="123.674"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"></line>
                        <line
                          id="SvgjsLine3214"
                          x1="0"
                          y1="185.51100000000002"
                          x2="257.7646484375"
                          y2="185.51100000000002"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"></line>
                        <line
                          id="SvgjsLine3215"
                          x1="0"
                          y1="247.348"
                          x2="257.7646484375"
                          y2="247.348"
                          stroke="#e0e0e0"
                          stroke-dasharray="0"
                          class="apexcharts-gridline"></line>
                      </g>
                      <g
                        id="SvgjsG3203"
                        class="apexcharts-gridlines-vertical"></g>
                      <line
                        id="SvgjsLine3204"
                        x1="0"
                        y1="248.348"
                        x2="0"
                        y2="254.348"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        class="apexcharts-xaxis-tick"></line>
                      <line
                        id="SvgjsLine3205"
                        x1="42.960774739583336"
                        y1="248.348"
                        x2="42.960774739583336"
                        y2="254.348"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        class="apexcharts-xaxis-tick"></line>
                      <line
                        id="SvgjsLine3206"
                        x1="85.92154947916667"
                        y1="248.348"
                        x2="85.92154947916667"
                        y2="254.348"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        class="apexcharts-xaxis-tick"></line>
                      <line
                        id="SvgjsLine3207"
                        x1="128.88232421875"
                        y1="248.348"
                        x2="128.88232421875"
                        y2="254.348"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        class="apexcharts-xaxis-tick"></line>
                      <line
                        id="SvgjsLine3208"
                        x1="171.84309895833334"
                        y1="248.348"
                        x2="171.84309895833334"
                        y2="254.348"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        class="apexcharts-xaxis-tick"></line>
                      <line
                        id="SvgjsLine3209"
                        x1="214.80387369791669"
                        y1="248.348"
                        x2="214.80387369791669"
                        y2="254.348"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        class="apexcharts-xaxis-tick"></line>
                      <line
                        id="SvgjsLine3210"
                        x1="257.7646484375"
                        y1="248.348"
                        x2="257.7646484375"
                        y2="254.348"
                        stroke="#e0e0e0"
                        stroke-dasharray="0"
                        class="apexcharts-xaxis-tick"></line>
                      <line
                        id="SvgjsLine3217"
                        x1="0"
                        y1="247.348"
                        x2="257.7646484375"
                        y2="247.348"
                        stroke="transparent"
                        stroke-dasharray="0"></line>
                      <line
                        id="SvgjsLine3216"
                        x1="0"
                        y1="1"
                        x2="0"
                        y2="247.348"
                        stroke="transparent"
                        stroke-dasharray="0"></line>
                    </g>
                    <g
                      id="SvgjsG3155"
                      class="apexcharts-area-series apexcharts-plot-series">
                      <g
                        id="SvgjsG3156"
                        class="apexcharts-series"
                        seriesName="TotalxEarnings"
                        data:longestSeries="true"
                        rel="1"
                        data:realIndex="0">
                        <path
                          id="SvgjsPath3163"
                          d="M 0 247.348L 0 185.51100000000042C 15.036271158854165 185.51100000000042 27.924503580729166 179.32730000000083 42.96077473958333 179.32730000000083C 57.99704589843749 179.32730000000083 70.8852783203125 154.59250000000065 85.92154947916666 154.59250000000065C 100.95782063802082 154.59250000000065 113.84605305989584 148.40880000000016 128.88232421875 148.40880000000016C 143.91859537760416 148.40880000000016 156.80682779947915 136.04140000000007 171.84309895833331 136.04140000000007C 186.87937011718748 136.04140000000007 199.7676025390625 123.67399999999998 214.80387369791666 123.67399999999998C 229.84014485677082 123.67399999999998 242.72837727864584 61.837000000000444 257.7646484375 61.837000000000444C 257.7646484375 61.837000000000444 257.7646484375 61.837000000000444 257.7646484375 247.348M 257.7646484375 61.837000000000444z"
                          fill="url(#SvgjsLinearGradient3159)"
                          fill-opacity="1"
                          stroke-opacity="1"
                          stroke-linecap="butt"
                          stroke-width="0"
                          stroke-dasharray="0"
                          class="apexcharts-area"
                          index="0"
                          clip-path="url(#gridRectMaskau6riazq)"
                          pathTo="M 0 247.348L 0 185.51100000000042C 15.036271158854165 185.51100000000042 27.924503580729166 179.32730000000083 42.96077473958333 179.32730000000083C 57.99704589843749 179.32730000000083 70.8852783203125 154.59250000000065 85.92154947916666 154.59250000000065C 100.95782063802082 154.59250000000065 113.84605305989584 148.40880000000016 128.88232421875 148.40880000000016C 143.91859537760416 148.40880000000016 156.80682779947915 136.04140000000007 171.84309895833331 136.04140000000007C 186.87937011718748 136.04140000000007 199.7676025390625 123.67399999999998 214.80387369791666 123.67399999999998C 229.84014485677082 123.67399999999998 242.72837727864584 61.837000000000444 257.7646484375 61.837000000000444C 257.7646484375 61.837000000000444 257.7646484375 61.837000000000444 257.7646484375 247.348M 257.7646484375 61.837000000000444z"
                          pathFrom="M -1 5627.167L -1 5627.167L 42.96077473958333 5627.167L 85.92154947916666 5627.167L 128.88232421875 5627.167L 171.84309895833331 5627.167L 214.80387369791666 5627.167L 257.7646484375 5627.167"></path>
                        <path
                          id="SvgjsPath3164"
                          d="M 0 185.51100000000042C 15.036271158854165 185.51100000000042 27.924503580729166 179.32730000000083 42.96077473958333 179.32730000000083C 57.99704589843749 179.32730000000083 70.8852783203125 154.59250000000065 85.92154947916666 154.59250000000065C 100.95782063802082 154.59250000000065 113.84605305989584 148.40880000000016 128.88232421875 148.40880000000016C 143.91859537760416 148.40880000000016 156.80682779947915 136.04140000000007 171.84309895833331 136.04140000000007C 186.87937011718748 136.04140000000007 199.7676025390625 123.67399999999998 214.80387369791666 123.67399999999998C 229.84014485677082 123.67399999999998 242.72837727864584 61.837000000000444 257.7646484375 61.837000000000444"
                          fill="none"
                          fill-opacity="1"
                          stroke="#0c4f8a"
                          stroke-opacity="1"
                          stroke-linecap="butt"
                          stroke-width="4"
                          stroke-dasharray="0"
                          class="apexcharts-area"
                          index="0"
                          clip-path="url(#gridRectMaskau6riazq)"
                          pathTo="M 0 185.51100000000042C 15.036271158854165 185.51100000000042 27.924503580729166 179.32730000000083 42.96077473958333 179.32730000000083C 57.99704589843749 179.32730000000083 70.8852783203125 154.59250000000065 85.92154947916666 154.59250000000065C 100.95782063802082 154.59250000000065 113.84605305989584 148.40880000000016 128.88232421875 148.40880000000016C 143.91859537760416 148.40880000000016 156.80682779947915 136.04140000000007 171.84309895833331 136.04140000000007C 186.87937011718748 136.04140000000007 199.7676025390625 123.67399999999998 214.80387369791666 123.67399999999998C 229.84014485677082 123.67399999999998 242.72837727864584 61.837000000000444 257.7646484375 61.837000000000444"
                          pathFrom="M -1 5627.167L -1 5627.167L 42.96077473958333 5627.167L 85.92154947916666 5627.167L 128.88232421875 5627.167L 171.84309895833331 5627.167L 214.80387369791666 5627.167L 257.7646484375 5627.167"></path>
                        <g
                          id="SvgjsG3157"
                          class="apexcharts-series-markers-wrap"
                          data:realIndex="0">
                          <g class="apexcharts-series-markers">
                            <circle
                              id="SvgjsCircle3223"
                              r="0"
                              cx="0"
                              cy="0"
                              class="apexcharts-marker weycfmv8fj no-pointer-events"
                              stroke="#ffffff"
                              fill="#0c4f8a"
                              fill-opacity="1"
                              stroke-width="2"
                              stroke-opacity="0.9"
                              default-marker-size="0"></circle>
                          </g>
                        </g>
                      </g>
                      <g
                        id="SvgjsG3158"
                        class="apexcharts-datalabels"
                        data:realIndex="0"></g>
                    </g>
                    <line
                      id="SvgjsLine3218"
                      x1="0"
                      y1="0"
                      x2="257.7646484375"
                      y2="0"
                      stroke="#b6b6b6"
                      stroke-dasharray="0"
                      stroke-width="1"
                      class="apexcharts-ycrosshairs"></line>
                    <line
                      id="SvgjsLine3219"
                      x1="0"
                      y1="0"
                      x2="257.7646484375"
                      y2="0"
                      stroke-dasharray="0"
                      stroke-width="0"
                      class="apexcharts-ycrosshairs-hidden"></line>
                    <g id="SvgjsG3220" class="apexcharts-yaxis-annotations"></g>
                    <g id="SvgjsG3221" class="apexcharts-xaxis-annotations"></g>
                    <g id="SvgjsG3222" class="apexcharts-point-annotations"></g>
                    <rect
                      id="SvgjsRect3224"
                      width="0"
                      height="0"
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fefefe"
                      class="apexcharts-zoom-rect"></rect>
                    <rect
                      id="SvgjsRect3225"
                      width="0"
                      height="0"
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fefefe"
                      class="apexcharts-selection-rect"></rect>
                  </g>
                  <rect
                    id="SvgjsRect3151"
                    width="0"
                    height="0"
                    x="0"
                    y="0"
                    rx="0"
                    ry="0"
                    opacity="1"
                    stroke-width="0"
                    stroke="none"
                    stroke-dasharray="0"
                    fill="#fefefe"></rect>
                  <g
                    id="SvgjsG3189"
                    class="apexcharts-yaxis"
                    rel="0"
                    transform="translate(15.2353515625, 0)">
                    <g id="SvgjsG3190" class="apexcharts-yaxis-texts-g">
                      <text
                        id="SvgjsText3191"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="31.4"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        class="apexcharts-text apexcharts-yaxis-label"
                        style="font-family: Helvetica, Arial, sans-serif">
                        <tspan id="SvgjsTspan3192">91k</tspan>
                      </text>
                      <text
                        id="SvgjsText3193"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="93.23700000000001"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        class="apexcharts-text apexcharts-yaxis-label"
                        style="font-family: Helvetica, Arial, sans-serif">
                        <tspan id="SvgjsTspan3194">90k</tspan>
                      </text>
                      <text
                        id="SvgjsText3195"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="155.074"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        class="apexcharts-text apexcharts-yaxis-label"
                        style="font-family: Helvetica, Arial, sans-serif">
                        <tspan id="SvgjsTspan3196">89k</tspan>
                      </text>
                      <text
                        id="SvgjsText3197"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="216.91100000000003"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        class="apexcharts-text apexcharts-yaxis-label"
                        style="font-family: Helvetica, Arial, sans-serif">
                        <tspan id="SvgjsTspan3198">88k</tspan>
                      </text>
                      <text
                        id="SvgjsText3199"
                        font-family="Helvetica, Arial, sans-serif"
                        x="20"
                        y="278.748"
                        text-anchor="end"
                        dominant-baseline="auto"
                        font-size="11px"
                        font-weight="400"
                        fill="#373d3f"
                        class="apexcharts-text apexcharts-yaxis-label"
                        style="font-family: Helvetica, Arial, sans-serif">
                        <tspan id="SvgjsTspan3200">87k</tspan>
                      </text>
                    </g>
                  </g>
                  <g id="SvgjsG3148" class="apexcharts-annotations"></g>
                </svg>
                <div
                  class="apexcharts-legend"
                  style="max-height: 157.5px"></div>
                <div class="apexcharts-tooltip apexcharts-theme-light">
                  <div
                    class="apexcharts-tooltip-title"
                    style="
                      font-family: Helvetica, Arial, sans-serif;
                      font-size: 12px;
                    "></div>
                  <div class="apexcharts-tooltip-series-group" style="order: 1">
                    <span
                      class="apexcharts-tooltip-marker"
                      style="background-color: rgb(12, 79, 138)"></span>
                    <div
                      class="apexcharts-tooltip-text"
                      style="
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 12px;
                      ">
                      <div class="apexcharts-tooltip-y-group">
                        <span class="apexcharts-tooltip-text-label"></span
                        ><span class="apexcharts-tooltip-text-value"></span>
                      </div>
                      <div class="apexcharts-tooltip-z-group">
                        <span class="apexcharts-tooltip-text-z-label"></span
                        ><span class="apexcharts-tooltip-text-z-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                  <div
                    class="apexcharts-xaxistooltip-text"
                    style="
                      font-family: Helvetica, Arial, sans-serif;
                      font-size: 12px;
                    "></div>
                </div>
                <div
                  class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                  <div class="apexcharts-yaxistooltip-text"></div>
                </div>
                <div class="apexcharts-toolbar" style="top: 0px; right: 3px">
                  <div class="apexcharts-zoomin-icon" title="Zoom In">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    </svg>
                  </div>
                  <div class="apexcharts-zoomout-icon" title="Zoom Out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                    </svg>
                  </div>
                  <div
                    class="apexcharts-zoom-icon apexcharts-selected"
                    title="Selection Zoom">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24">
                      <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>
                    </svg>
                  </div>
                  <div class="apexcharts-pan-icon" title="Panning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24">
                      <defs>
                        <path d="M0 0h24v24H0z" id="a"></path>
                      </defs>
                      <clipPath id="b">
                        <use overflow="visible" xlink:href="#a"></use>
                      </clipPath>
                      <path
                        clip-path="url(#b)"
                        d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path>
                    </svg>
                  </div>
                  <div class="apexcharts-reset-icon" title="Reset Zoom">
                    <svg
                      fill="#000000"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                  </div>
                  <div class="apexcharts-menu-icon" title="Menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24">
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path
                        d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                  </div>
                  <div class="apexcharts-menu">
                    <div
                      class="apexcharts-menu-item exportSVG"
                      title="Download SVG">
                      Download SVG
                    </div>
                    <div
                      class="apexcharts-menu-item exportPNG"
                      title="Download PNG">
                      Download PNG
                    </div>
                    <div
                      class="apexcharts-menu-item exportCSV"
                      title="Download CSV">
                      Download CSV
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="resize-triggers">
              <div class="expand-trigger">
                <div style="width: 362px; height: 380px"></div>
              </div>
              <div class="contract-trigger"></div>
            </div>
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
            <div
              class="owl-carousel report-card-slider owl-theme owl-loaded owl-drag">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="
                    transform: translate3d(-645px, 0px, 0px);
                    transition: all 0s ease 0s;
                    width: 2260px;
                  ">
                  <div
                    class="owl-item cloned"
                    style="width: 312.75px; margin-right: 10px">
                    <div class="item">
                      <div class="paitents-report-card">
                        <div
                          class="paitents-report-card-head d-flex align-items-center">
                          <div class="paitent-report-card-photo">
                            <a
                              href="patient-profile.html"
                              class="avatar avatar-m me-2"
                              ><img
                                class="avatar-img"
                                src="assets/img/patients/patient2.jpg"
                                alt="User Image"
                            /></a>
                          </div>
                          <div
                            class="paitent-report-card-detail d-flex flex-column">
                            <a href="patient-profile.html">James</a>
                            <p class="text-dark mb-0">Male - 35years</p>
                          </div>
                        </div>
                        <div class="paitents-report-card-body">
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Problem</h3>
                            <h6 class="mb-0">Fever, Soar throat, Allergy</h6>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Last Checked</h3>
                            <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                            <p class="text-danger mb-0">
                              Prescription : #566646
                            </p>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Observation</h3>
                            <h6>
                              Three Sickle cells are sustained at normal
                              hemoglobin Level
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 312.75px; margin-right: 10px">
                    <div class="item">
                      <div class="paitents-report-card">
                        <div
                          class="paitents-report-card-head d-flex align-items-center">
                          <div class="paitent-report-card-photo">
                            <a
                              href="patient-profile.html"
                              class="avatar avatar-m me-2"
                              ><img
                                class="avatar-img"
                                src="assets/img/patients/patient3.jpg"
                                alt="User Image"
                            /></a>
                          </div>
                          <div
                            class="paitent-report-card-detail d-flex flex-column">
                            <a href="patient-profile.html">Richard</a>
                            <p class="text-dark mb-0">Male - 30years</p>
                          </div>
                        </div>
                        <div class="paitents-report-card-body">
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Problem</h3>
                            <h6 class="mb-0">Fever, Soar throat, Allergy</h6>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Last Checked</h3>
                            <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                            <p class="text-danger mb-0">
                              Prescription : #566646
                            </p>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Observation</h3>
                            <h6>
                              Three Sickle cells are sustained at normal
                              hemoglobin Level
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 312.75px; margin-right: 10px">
                    <div class="item">
                      <div class="paitents-report-card">
                        <div
                          class="paitents-report-card-head d-flex align-items-center">
                          <div class="paitent-report-card-photo">
                            <a
                              href="patient-profile.html"
                              class="avatar avatar-m me-2"
                              ><img
                                class="avatar-img"
                                src="assets/img/patients/patient4.jpg"
                                alt="User Image"
                            /></a>
                          </div>
                          <div
                            class="paitent-report-card-detail d-flex flex-column">
                            <a href="patient-profile.html">Hendry</a>
                            <p class="text-dark mb-0">Female - 40years</p>
                          </div>
                        </div>
                        <div class="paitents-report-card-body">
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Problem</h3>
                            <h6 class="mb-0">Fever, Soar throat, Allergy</h6>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Last Checked</h3>
                            <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                            <p class="text-danger mb-0">
                              Prescription : #566646
                            </p>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Observation</h3>
                            <h6>
                              Three Sickle cells are sustained at normal
                              hemoglobin Level
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 312.75px; margin-right: 10px">
                    <div class="item">
                      <div class="paitents-report-card">
                        <div
                          class="paitents-report-card-head d-flex align-items-center">
                          <div class="paitent-report-card-photo">
                            <a
                              href="patient-profile.html"
                              class="avatar avatar-m me-2"
                              ><img
                                class="avatar-img"
                                src="assets/img/patients/patient2.jpg"
                                alt="User Image"
                            /></a>
                          </div>
                          <div
                            class="paitent-report-card-detail d-flex flex-column">
                            <a href="patient-profile.html">James</a>
                            <p class="text-dark mb-0">Male - 35years</p>
                          </div>
                        </div>
                        <div class="paitents-report-card-body">
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Problem</h3>
                            <h6 class="mb-0">Fever, Soar throat, Allergy</h6>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Last Checked</h3>
                            <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                            <p class="text-danger mb-0">
                              Prescription : #566646
                            </p>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Observation</h3>
                            <h6>
                              Three Sickle cells are sustained at normal
                              hemoglobin Level
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item"
                    style="width: 312.75px; margin-right: 10px">
                    <div class="item">
                      <div class="paitents-report-card">
                        <div
                          class="paitents-report-card-head d-flex align-items-center">
                          <div class="paitent-report-card-photo">
                            <a
                              href="patient-profile.html"
                              class="avatar avatar-m me-2"
                              ><img
                                class="avatar-img"
                                src="assets/img/patients/patient3.jpg"
                                alt="User Image"
                            /></a>
                          </div>
                          <div
                            class="paitent-report-card-detail d-flex flex-column">
                            <a href="patient-profile.html">Richard</a>
                            <p class="text-dark mb-0">Male - 30years</p>
                          </div>
                        </div>
                        <div class="paitents-report-card-body">
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Problem</h3>
                            <h6 class="mb-0">Fever, Soar throat, Allergy</h6>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Last Checked</h3>
                            <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                            <p class="text-danger mb-0">
                              Prescription : #566646
                            </p>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Observation</h3>
                            <h6>
                              Three Sickle cells are sustained at normal
                              hemoglobin Level
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 312.75px; margin-right: 10px">
                    <div class="item">
                      <div class="paitents-report-card">
                        <div
                          class="paitents-report-card-head d-flex align-items-center">
                          <div class="paitent-report-card-photo">
                            <a
                              href="patient-profile.html"
                              class="avatar avatar-m me-2"
                              ><img
                                class="avatar-img"
                                src="assets/img/patients/patient4.jpg"
                                alt="User Image"
                            /></a>
                          </div>
                          <div
                            class="paitent-report-card-detail d-flex flex-column">
                            <a href="patient-profile.html">Hendry</a>
                            <p class="text-dark mb-0">Female - 40years</p>
                          </div>
                        </div>
                        <div class="paitents-report-card-body">
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Problem</h3>
                            <h6 class="mb-0">Fever, Soar throat, Allergy</h6>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Last Checked</h3>
                            <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                            <p class="text-danger mb-0">
                              Prescription : #566646
                            </p>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Observation</h3>
                            <h6>
                              Three Sickle cells are sustained at normal
                              hemoglobin Level
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 312.75px; margin-right: 10px">
                    <div class="item">
                      <div class="paitents-report-card">
                        <div
                          class="paitents-report-card-head d-flex align-items-center">
                          <div class="paitent-report-card-photo">
                            <a
                              href="patient-profile.html"
                              class="avatar avatar-m me-2"
                              ><img
                                class="avatar-img"
                                src="assets/img/patients/patient2.jpg"
                                alt="User Image"
                            /></a>
                          </div>
                          <div
                            class="paitent-report-card-detail d-flex flex-column">
                            <a href="patient-profile.html">James</a>
                            <p class="text-dark mb-0">Male - 35years</p>
                          </div>
                        </div>
                        <div class="paitents-report-card-body">
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Problem</h3>
                            <h6 class="mb-0">Fever, Soar throat, Allergy</h6>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Last Checked</h3>
                            <h6>Dr Kimberly on Fret Hospital in 29/05/2022</h6>
                            <p class="text-danger mb-0">
                              Prescription : #566646
                            </p>
                          </div>
                          <div
                            class="paitents-report-card-details d-flex flex-column">
                            <h3>Observation</h3>
                            <h6>
                              Three Sickle cells are sustained at normal
                              hemoglobin Level
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-nav">
                <button type="button" role="presentation" class="owl-prev">
                  <i class="fa fa-chevron-left"></i></button
                ><button type="button" role="presentation" class="owl-next">
                  <i class="fa fa-chevron-right"></i>
                </button>
              </div>
              <div class="owl-dots">
                <button role="button" class="owl-dot active">
                  <span></span></button
                ><button role="button" class="owl-dot"><span></span></button
                ><button role="button" class="owl-dot"><span></span></button>
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
.circle-bar > div {
  display: inline-block;
  position: relative;
  text-align: center;
}
.circle-bar > div canvas {
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
.circle-bar > div img {
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
</style>
