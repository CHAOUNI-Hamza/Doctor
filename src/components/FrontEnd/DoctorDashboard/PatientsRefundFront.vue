<template>
  <div class="row  mt-3">
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
                <td>14 Nov 2019</td>
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
</style>
