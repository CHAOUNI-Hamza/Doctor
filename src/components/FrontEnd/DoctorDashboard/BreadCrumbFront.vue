<template>
  <div class="breadcrumb-bar">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-12 col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb pb-0">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Library
              </li>
            </ol>
          </nav>
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
.breadcrumb-bar {
  background: #15558d;
  margin-bottom: 20px;
  padding: 15px 0;
}
.breadcrumb {
  background-color: #15558d;
}
.breadcrumb li,
.breadcrumb a {
  color: white;
  font-size: 18px;
}
</style>
