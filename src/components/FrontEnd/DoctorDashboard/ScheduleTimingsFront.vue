<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Schedule Timings</h4>
          <div class="profile-box">
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="mt-2">Timing Slot Duration</label>
                  <select class="form-select form-control mt-3 mb-2">
                    <option>30 mins</option>
                    <option>15 mins</option>
                    <option>30 mins</option>
                    <option>45 mins</option>
                    <option>1 Hour</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card schedule-widget mb-0">
                  <div class="schedule-header">
                    <div class="schedule-nav">
                      <ul class="nav nav-tabs nav-justified p-3">
                        <li class="nav-item" v-for="tab in tabs" :key="tab" :class="[
                          'tab-button ml-2',
                          { active: currentTab === tab },
                        ]" @click="currentTab = tab">
                          <a class="nav-link active">{{ tab }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="tab-content schedule-cont p-3">
                    <div v-if="currentTab == 'Sunday'" class="tab-pane-day">
                      <h4 class="card-title d-flex justify-content-between">
                        <span class="font-weight-bold">Time Slots</span>
                        <a type="button" data-toggle="modal" data-target="#addSlot" class="edit-link"
                          data-bs-toggle="modal" href="#add_time_slot">
                          <font-awesome-icon icon="fa-solid fa-circle-plus" />
                          Add Slot
                        </a>
                      </h4>
                      <div class="doc-times d-flex">
                        <div v-for="slot in slots" :key="slot.id" class="doc-slot-list">
                          8:00 pm - 11:30 pm
                          <a type="button" @click="deleteSlot(index)" class="delete_schedule">
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                          </a>
                        </div>
                      </div>
                      <div class="doc-times d-flex">
                        <div v-for="slot in slots" :key="slot.id" class="doc-slot-list">
                          8:00 pm - 11:30 pm
                          <a href="#" class="delete_schedule">
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                          </a>
                        </div>
                      </div>
                      <p class="text-muted mb-0 mt-2">Not Available</p>
                    </div>
                    <!--<div v-if="currentTab == 'Monday'" class="tab-pane-day">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a @click="test()" class="edit-link" data-bs-toggle="modal" href="#edit_time_slot">
                          <i class="fa fa-edit me-1"></i>Edit
                        </a>
                      </h4>
                      <div class="doc-times d-flex">
                        <div v-for="slot in slots" :key="slot.id" class="doc-slot-list">
                          8:00 pm - 11:30 pm
                          <a href="#" class="delete_schedule">
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div v-if="currentTab == 'Tuesday'" class="tab-pane-day">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
                    </div>
                    <div v-if="currentTab == 'Wednesday'" class="tab-pane-day">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
                    </div>
                    <div v-if="currentTab == 'Thursday'" class="tab-pane-day">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
                    </div>
                    <div v-if="currentTab == 'Friday'" class="tab-pane-day">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
                    </div>
                    <div v-if="currentTab == 'Saturday'" class="tab-pane-day">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->

  <!-- Modal -->
  <div class="modal fade" id="addSlot" tabindex="-1" aria-labelledby="addSlotLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Time Slots</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="hours-info">
              <div v-for="(input, index) in inputs" :key="index" class="row form-row hours-cont">
                <div class="col-12 col-md-12">
                  <div class="row form-row">
                    <div class="col-12 col-md-5">
                      <div class="form-group">
                        <label>Start Time</label>
                        <select v-model="inputs[index].value1" class="form-select form-control">
                          <option value="fdgdf">30 mins</option>
                          <option value="fdgdf">12.00 am</option>
                          <option value="fdgdf">12.30 am</option>
                          <option value="fdgdf">1.00 am</option>
                          <option value="fdgdf">1.30 am</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-5">
                      <div class="form-group">
                        <label>End Time</label>
                        <select v-model="inputs[index].value2" class="form-select form-control">
                          <option value="fdgdf">30 mins</option>
                          <option value="fdgdf">12.00 am</option>
                          <option value="fdgdf">12.30 am</option>
                          <option value="fdgdf">1.00 am</option>
                          <option value="fdgdf">1.30 am</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-12 col-md-2">
                      <label></label>
                      <div class="form-group">
                        <button @click="deleteInput(index)" class="btn btn-danger mt-2">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="add-more mb-3">
              <a @click="addInput" type="button" class="add-hours">
                <font-awesome-icon icon="fa-solid fa-circle-plus" /> Add More
              </a>
            </div>
            <div class="submit-section text-center">
              <button @click="addslots()" type="button" class="btn btn-primary submit-btn">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      valueInput: [{ value1: "", value2: "" }],
      inputs:
        []
      ,
      currentTab: "Sunday",
      tabs: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      slots: [],
      starttime: "",
      endtime: "",
    };
  },
  methods: {
    addInput() {
      this.inputs.push(this.valueInput);
    },
    deleteInput(index) {
      this.inputs.splice(index, 1);
    },
    deleteSlot(index) {
      this.slots.splice(index, 1);
    },
    addslots() {
      this.slots.push(this.inputs);
    },
  },
};
</script>
<style scoped>
.nav-link {
  border: 1px solid #00000014;
  border-radius: 5px;
  cursor: pointer;
}

.nav-link.active {
  background: #ff4877;
  border: 1px solid #ff4877 !important;
  color: white !important;
}

.card-title {
  float: none;
  font-size: 21px;
  font-weight: 700;
}

.edit-link {
  font-weight: 800;
}

.form-group label {
  font-weight: inherit;
  color: #000000a1;
}

.doc-slot-list {
  background-color: #d9534f;
  border: 1px solid #d43f3a;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  margin: 10px 10px 0 0;
  padding: 6px 15px;
}

.delete_schedule {
  color: white;
  margin-left: 9px;
}
</style>
