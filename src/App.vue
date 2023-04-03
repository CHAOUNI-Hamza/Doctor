<template>
  <!--<div class="wrapper">
    <NavbarBack />
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <MainSidebar />
    </aside>
    <div class="content-wrapper" style="margin-top: 30px">
      <div class="content" style="background-color: white">
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
    </div>
    <aside class="control-sidebar control-sidebar-dark">
      <div class="p-3">
        <h5>Title</h5>
        <p>Sidebar content</p>
      </div>
    </aside>
    <MainFooterBack />
  </div>-->

  <router-view />
  <GoToTopButton v-if="isShow" />
</template>

<script>
import MainSidebar from "./components/BackEnd/MainSidebar.vue";
import NavbarBack from "./components/BackEnd/NavbarBack.vue";
import MainFooterBack from "./components/BackEnd/MainFooterBack.vue";

export default {
  components: {
    MainSidebar,
    NavbarBack,
    MainFooterBack,
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

<style scoped>
.main-sidebar {
  background-color: #ffffff !important;
}
</style>
