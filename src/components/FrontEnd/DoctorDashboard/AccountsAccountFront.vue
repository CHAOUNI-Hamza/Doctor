<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Invoice No</th>
                <th scope="col">Patient</th>
                <th scope="col">Amount</th>
                <th scope="col">Paid On</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in 10" :key="item.index">
                <td>#INV-0010</td>
                <td>
                  <h2 class="table-avatar">
                    <a href="patient-profile.html" class="avatar avatar-sm me-2">
                      <img class="avatar-img rounded-circle"
                        src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-caucasian-260nw-1954278664.jpg"
                        alt="User Image" />
                    </a>
                    <a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
                  </h2>
                </td>
                <td>$450</td>
                <td>
                  <span class="badge rounded-pill bg-success-light">Paid</span>
                </td>
                <td class="text-right">
                  <div class="table-action">
                    <a class="btn btn-sm bg-success" data-toggle="modal" data-target="#exampleModal"
                      href="/template/doctor/appointments#0">
                      <font-awesome-icon icon="fa-solid fa-eye" class="mr-1" />
                      View
                    </a>
                    <a class="btn btn-sm bg-info ml-2" href="/template/doctor/appointments#0">
                      <font-awesome-icon icon="fa-solid fa-print" />
                      Print
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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

table.table td h2 a {
  color: #272b41;
}

.avatar-sm {
  width: 2.5rem;
  height: 2.5rem;
}

.avatar {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
}

.avatar>img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

table.table td h2 a {
  color: #272b41;
}

table.table td h2 span {
  color: #888;
  display: block;
  font-size: 12px;
  margin-top: 3px;
}

.bg-success-light {
  background-color: rgba(15, 183, 107, 0.12) !important;
  color: #26af48 !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.table td,
.table th {
  vertical-align: middle;
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

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: .75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
</style>
