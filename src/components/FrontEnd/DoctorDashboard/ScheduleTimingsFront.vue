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
                    <label>Timing Slot Duration</label>
                    <select class="form-select form-control">
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
                          <li class="nav-item"
                            v-for="tab in tabs"
                            :key="tab"
                            :class="['tab-button ml-2', { active: currentTab === tab }]"
                            @click="currentTab = tab"
                          >
                            <a class="nav-link" data-bs-toggle="tab" href="#slot_sunday">{{ tab }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-content schedule-cont">
                      <div v-if="currentTab == 'Sunday'" class="tab-pane fade">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>Time Slots</span>
                          <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                            <i class="fa fa-plus-circle"></i> Add Slot
                          </a>
                          </h4>
                          <p class="text-muted mb-0">Not Available</p>
                      </div>
                      <div id="slot_monday" class="tab-pane fade active show">
                        <h4 class="card-title d-flex justify-content-between">
                          <span>Time Slots</span>
                          <a class="edit-link" data-bs-toggle="modal" href="#edit_time_slot">
                            <i class="fa fa-edit me-1"></i>Edit
                          </a>
                        </h4>
                      <div class="doc-times">
                        <div class="doc-slot-list">8:00 pm - 11:30 pm
                          <a href="#" class="delete_schedule">
                            <i class="fa fa-times"></i>
                          </a>
                        </div>
                        <div class="doc-slot-list">11:30 pm - 1:30 pm
                          <a href="#" class="delete_schedule">
                            <i class="fa fa-times"></i>
                          </a>
                        </div>
                        <div class="doc-slot-list">3:00 pm - 5:00 pm
                          <a href="#" class="delete_schedule">
                            <i class="fa fa-times"></i>
                          </a>
                        </div>
                        <div class="doc-slot-list">6:00 pm - 11:00 pm
                          <a href="#" class="delete_schedule">
                            <i class="fa fa-times"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="slot_tuesday" class="tab-pane fade">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
                    </div>
                    <div id="slot_wednesday" class="tab-pane fade">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                        </h4>
                        <p class="text-muted mb-0">Not Available</p>
                      </div>
                    <div id="slot_thursday" class="tab-pane fade">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
                    </div>
                    <div id="slot_friday" class="tab-pane fade">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                        </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
                    </div>
                    <div id="slot_saturday" class="tab-pane fade">
                      <h4 class="card-title d-flex justify-content-between">
                        <span>Time Slots</span>
                        <a class="edit-link" data-bs-toggle="modal" href="#add_time_slot">
                          <i class="fa fa-plus-circle"></i> Add Slot
                          </a>
                      </h4>
                      <p class="text-muted mb-0">Not Available</p>
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
</template>
  
  <script>
  export default {
    components: {

    },
    data() {
      return {
        currentTab: 'Sunfday',
        tabs: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      }
    }
  }
  </script>
  <style scoped>
  .nav-link {
    border: 1px solid #00000014;
    border-radius: 5px;
}
  
  </style>
  