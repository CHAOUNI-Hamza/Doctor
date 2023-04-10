<template>
  <router-view />
  <GoToTopButton v-if="isShow" />
</template>

<script>


export default {
  components: {

  },
  data() {
    return {
      isShow: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 300) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
};
</script>

<style>
.main-sidebar {
  background-color: #ffffff !important;
}
</style>
