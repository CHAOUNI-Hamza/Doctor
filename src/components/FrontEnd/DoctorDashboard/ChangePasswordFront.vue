<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <div class="col-md-12 col-lg-6">

          <form>
            <div class="form-group">
              <label>Old Password</label>
              <input type="password" class="form-control">
            </div>
            <div class="form-group">
              <label>New Password</label>
              <input type="password" class="form-control">
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input type="password" class="form-control">
            </div>
            <div class="submit-section">
              <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
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
    return {};
  },
};
</script>
<style scoped></style>
