<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Schedule Timings</h4>
          <div class="profile-box">
            <div class="row">
              <div class="col-sm-6 col-12 avail-time">
                <div class="mb-3 mt-3">
                  <div class="schedule-calendar-col justify-content-start">
                    <form class="d-flex flex-wrap">
                      <span class="input-group-text mr-2">Date:</span>
                      <div class="me-3 mr-2">
                        <input
                          type="date"
                          class="form-control"
                          name="schedule_date"
                          id="schedule_date"
                          value="2021-05-21"
                          min="2021-05-21" />
                      </div>
                      <div class="search-time-mobile mr-2">
                        <input
                          type="submit"
                          name="submit"
                          value="Search"
                          class="btn btn-primary h-100" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <h3
                  class="h3 text-center book-btn2 mt-3 px-5 py-1 mx-3 rounded">
                  1<sup>st</sup> Session
                </h3>
                <div class="text-center mt-3">
                  <h4 class="h4 mb-2">Start Time</h4>
                  <span class="h4 btn btn-outline-primary"
                    ><b> 09:00 AM</b></span
                  >
                </div>
                <div class="token-slot mt-2">
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value="18" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="02:40 PM"
                        >02:40 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="15:00:00"
                        data-end-time="15:20:00"
                        data-session="1"
                        name="token[]"
                        value="19" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="03:00 PM"
                        >03:00 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="15:20:00"
                        data-end-time="15:40:00"
                        data-session="1"
                        name="token[]"
                        value="20" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="03:20 PM"
                        >03:20 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="15:40:00"
                        data-end-time="16:00:00"
                        data-session="1"
                        name="token[]"
                        value="21" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="03:40 PM"
                        >03:40 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="16:00:00"
                        data-end-time="16:20:00"
                        data-session="1"
                        name="token[]"
                        value="22" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="04:00 PM"
                        >04:00 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="16:20:00"
                        data-end-time="16:40:00"
                        data-session="1"
                        name="token[]"
                        value="23" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="04:20 PM"
                        >04:20 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="16:40:00"
                        data-end-time="17:00:00"
                        data-session="1"
                        name="token[]"
                        value="24" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="04:40 PM"
                        >04:40 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="17:00:00"
                        data-end-time="17:20:00"
                        data-session="1"
                        name="token[]"
                        value="25" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="05:00 PM"
                        >05:00 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="17:20:00"
                        data-end-time="17:40:00"
                        data-session="1"
                        name="token[]"
                        value="26" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="05:20 PM"
                        >05:20 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="17:40:00"
                        data-end-time="18:00:00"
                        data-session="1"
                        name="token[]"
                        value="27" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="05:40 PM"
                        >05:40 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="18:00:00"
                        data-end-time="18:20:00"
                        data-session="1"
                        name="token[]"
                        value="28" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="06:00 PM"
                        >06:00 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="18:20:00"
                        data-end-time="18:40:00"
                        data-session="1"
                        name="token[]"
                        value="29" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="06:20 PM"
                        >06:20 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="18:40:00"
                        data-end-time="19:00:00"
                        data-session="1"
                        name="token[]"
                        value="30" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="06:40 PM"
                        >06:40 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="19:00:00"
                        data-end-time="19:20:00"
                        data-session="1"
                        name="token[]"
                        value="31" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="07:00 PM"
                        >07:00 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="19:20:00"
                        data-end-time="19:40:00"
                        data-session="1"
                        name="token[]"
                        value="32" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="07:20 PM"
                        >07:20 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="19:40:00"
                        data-end-time="20:00:00"
                        data-session="1"
                        name="token[]"
                        value="33" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="07:40 PM"
                        >07:40 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="20:00:00"
                        data-end-time="20:20:00"
                        data-session="1"
                        name="token[]"
                        value="34" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="08:00 PM"
                        >08:00 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="20:20:00"
                        data-end-time="20:40:00"
                        data-session="1"
                        name="token[]"
                        value="35" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="08:20 PM"
                        >08:20 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="20:40:00"
                        data-end-time="21:00:00"
                        data-session="1"
                        name="token[]"
                        value="36" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="08:40 PM"
                        >08:40 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="21:00:00"
                        data-end-time="21:20:00"
                        data-session="1"
                        name="token[]"
                        value="37" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="09:00 PM"
                        >09:00 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="21:20:00"
                        data-end-time="21:40:00"
                        data-session="1"
                        name="token[]"
                        value="38" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="09:20 PM"
                        >09:20 PM</span
                      >
                    </label>
                  </div>
                  <div class="form-check-inline visits me-0">
                    <label class="visit-btns">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        data-date="2021-05-21"
                        data-timezone="Asia/Calcutta"
                        data-start-time="21:40:00"
                        data-end-time="22:00:00"
                        data-session="1"
                        name="token[]"
                        value="39" />
                      <span
                        class="visit-rsn"
                        data-bs-toggle="tooltip"
                        title=""
                        data-bs-original-title="09:40 PM"
                        >09:40 PM</span
                      >
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-3">
            <button class="btn btn-primary">Save</button>
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
  methods: {},
};
</script>
<style scoped>
.card-title {
  float: none;
  font-size: 21px;
  font-weight: 700;
}
.visit-btns {
  color: #272b41;
  background-color: #fff;
  width: 80%;
  margin-bottom: 10px;
  display: block;
  outline: unset;
  cursor: pointer;
}
.form-check-input {
  visibility: hidden;
}
.form-check-input:checked[type="checkbox"] {
  background-image: url("https://toppng.com/uploads/preview/check-mark-white-11562946459m3bsuyoavu.png");
}
.visits input:checked ~ .visit-rsn {
  background-color: #0071dc;
  color: #fff;
  border-radius: 4px;
  position: relative;
}
.visits span.visit-rsn {
  text-align: center;
  border: 0;
  border-radius: 5px;
  padding: 13px 5px;
  background: #f3f9ff;
  min-width: 133px;
  display: inline-block;
  width: 100%;
}
.visits input:checked ~ .visit-rsn:before {
  opacity: 1;
}
.visits input.form-check-input {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  margin-left: 0;
}
/*.visits span.visit-rsn:before {
  color: #0071dc;
  background-color: #fff;
  content: "\f00c";
  font-family: "Font Awesome 5 Free";
  font-size: 10px;
  font-weight: 900;
  position: absolute;
  right: 10px;
  top: 50%;
  border-radius: 50px;
  width: 18px;
  height: 18px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  opacity: 0;
}*/
</style>
