<template>
  <div class="row align-items-center">
    <div class="col-md-12 d-flex justify-content-end mb-3 align-items-center">
      <div class="doc-badge me-3 mr-4">
        Total Ratings
        <span class="ms-1">48</span>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Ratings</h3>
          <div class="card-tools">
            <div class="input-group input-group-sm" style="width: 300px;">
              <select class="form-control">
                <option>Order by...</option>
                <option>option 2</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>
              <div class="input-group-append">
                <button type="submit" class="btn btn-default">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
              </div>
              <input type="text" name="table_search" class="form-control float-right" placeholder="Search">
            </div>
          </div>
        </div>

        <div class="card-body table-responsive p-0" style="height: 100vh;">
          <table class="table table-head-fixed text-nowrap">
            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Consultation Date</th>
                <th>Ratings</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in 10" :key="item">
                <td>183</td>
                <td>
                  <div class="media">
                    <div class="d-flex media-body">
                      <a class="avatar avatar-sm me-2 user-dt" href="/template/admin/profile">
                        <img src="https://www.nicepng.com/png/detail/507-5079134_cardiology-icon-cardiology.png"
                          class="avatar avatar-img">
                      </a>
                      <div class="text-secondary">
                        <span class="d-block text-muted">Urology</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="media">
                    <div class="d-flex media-body">
                      <a class="avatar avatar-sm me-2 user-dt" href="/template/admin/profile">
                        <img src="https://www.nicepng.com/png/detail/507-5079134_cardiology-icon-cardiology.png"
                          class="avatar avatar-img">
                      </a>
                      <div class="text-secondary">
                        <span class="d-block text-muted">Urology</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td><span class="user-name">26 November 2022 </span><span class="d-block">12/20/2022</span></td>
                <td>
                  <div class="ratings">
                    <font-awesome-icon class="far fa-star" icon="fa-solid fa-star" />
                    <font-awesome-icon class="far fa-star" icon="fa-solid fa-star" />
                    <font-awesome-icon class="far fa-star" icon="fa-solid fa-star" />
                    <font-awesome-icon class="far fa-star" icon="fa-solid fa-star" />
                    <font-awesome-icon class="far fa-star filled" icon="fa-solid fa-star" />
                  </div>
                </td>
                <td class="desc-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                <td>
                  <span class="btn-delete text-danger">
                    <font-awesome-icon class="mr-1" icon="fa-solid fa-trash-can" />Delete
                  </span>
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
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>
.card-title {
  font-size: 1.3rem;
  font-weight: bold;
}

.form-control {
  border-bottom: 1px solid #33333336;
  margin-right: 10px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-radius: 0;
  margin-right: 10px;
}

.input-group-append .btn {
  background: none;
  border: none;
}

select.form-control {
  color: #00000082 !important;
}

.table .media {
  align-items: flex-start;
}

.table .d-flex.media-body {
  align-items: center !important;
}

.table .avatar {
  position: relative;
  display: inline-block;
}

.table .avatar-sm {
  width: 2.5rem;
  height: 2.5rem;
}

.table .avatar>img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 5px;
}

.table .text-secondary {
  margin-left: 10px;
}

.btn-add,
.btn-save {
  color: #fff;
  background-color: #5c8ed3;
  border-color: #007bff;
  box-shadow: none;
  border: none;
}


.doc-badge span {
  background: red;
  color: white;
  padding: 0px 2px;
  border-radius: 2px;
}



.card-upload {
  border: 1px solid #00000047;
  padding: 18px;
  display: grid;
  align-items: center;
  justify-content: center;
  border-style: dotted;
}

.card-upload .form-control-file {
  background: #00bcd4;
  padding: 6px;
}

.ratings .fa-star {
  color: #FFBC00;
}


/* @media */
@media (max-width: 390px) {}
</style>