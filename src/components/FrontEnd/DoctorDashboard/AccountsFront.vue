<template>
  <div class="row">
    <div class="col-lg-5 d-flex">
      <div class="card flex-fill">
        <div class="card-header">
          <div class="row">
            <div class="col-sm-6">
              <h3 class="card-title">Account</h3>
            </div>
            <div class="col-sm-6">
              <div class="text-right">
                <a title="Edit Profile" class="btn btn-primary btn-sm" href="#account_modal" data-bs-toggle="modal"><i
                    class="fas fa-pencil"></i> Edit Details</a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="profile-view-bottom">
            <div class="row">
              <div class="col-lg-6">
                <div class="info-list">
                  <div class="title">Bank Name</div>
                  <div class="text" id="bank_name">Wells Fargo &amp; Co</div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="info-list">
                  <div class="title">Branch Name</div>
                  <div class="text" id="branch_name">Lenexa</div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="info-list">
                  <div class="title">Account Number</div>
                  <div class="text" id="account_no">5396 5250 1908 3838</div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="info-list">
                  <div class="title">Account Name</div>
                  <div class="text" id="account_name">Dr. Darren Elder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-7 d-flex">
      <div class="card flex-fill">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6">
              <div class="account-card bg-success-light">
                <span>$90.48</span> Earned
              </div>
            </div>
            <div class="col-lg-6">
              <div class="account-card bg-warning-light">
                <span>$0.00</span> Requested
              </div>
            </div>
            <div class="col-lg-6">
              <div class="account-card bg-purple-light">
                <span>$90.48</span> Balance
              </div>
            </div>
            <div class="col-md-12 text-center">
              <a href="#payment_request_modal" class="btn btn-primary request_btn" data-bs-toggle="modal">Payment
                Request</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body pt-0">
          <nav class="user-tabs mb-4">
            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
              <li v-for="tab in tabs" :key="tab" :class="['tab-button ml-2', { active: currentTab === tab }]"
                @click="currentTab = tab" class="nav-item">
                <a :class="['nav-link', { active: currentTab === tab }]" type="button">{{ tab }}</a>
              </li>
            </ul>
          </nav>

          <div class="tab-content pt-0">
            <component :is="currentTab" class="tab"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accounts from "./AccountsAccountFront.vue";
import Patients_Refund_Request from "./PatientsRefundFront.vue";
export default {
  components: {
    Accounts,
    Patients_Refund_Request,
  },
  data() {
    return {
      currentTab: "Accounts",
      tabs: ["Accounts", "Patients_Refund_Request"],
    };
  },
};
</script>
<style scoped>
.account-card {
  border-radius: 10px;
  margin-bottom: 30px;
  font-size: 16px;
  padding: 10px;
  text-align: center;
}

.bg-success-light {
  background-color: rgba(15, 183, 107, 0.12) !important;
  color: #26af48 !important;
}

.bg-warning-light {
  background-color: rgba(255, 152, 0, 0.12) !important;
  color: #f39c12 !important;
}

.bg-purple-light {
  background-color: rgba(197, 128, 255, 0.12) !important;
  color: #c580ff !important;
}

.account-card span {
  font-size: 24px;
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.nav-tabs .nav-link {
  border-bottom: none;
  border-top: none;
  border-left: none;
  border-right: none;
}

.nav-tabs .nav-link.active {
  border-bottom: 4px solid #17a2b8;
}
</style>
