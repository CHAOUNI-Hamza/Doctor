<template>
  <NavbarFront />
  <SectionSearchFront />
  <SectionTileFront />
  <SectionSpecialitiesFront />
  <SectionDoctorFront />
  <SectionFeaturesFront />
  <SectionBlogsFront />
  <FooterFront />
  
</template>

<script>
import SectionSearchFront from '../../components/FrontEnd/HomeFront/SectionSearchFront.vue'
import SectionTileFront from '../../components/FrontEnd/HomeFront/SectionTileFront.vue'
import SectionDoctorFront from '../../components/FrontEnd/HomeFront/SectionDoctorFront.vue'
import SectionSpecialitiesFront from '../../components/FrontEnd/HomeFront/SectionSpecialitiesFront.vue'
import SectionFeaturesFront from '../../components/FrontEnd/HomeFront/SectionFeaturesFront.vue'
import SectionBlogsFront from '../../components/FrontEnd/HomeFront/SectionBlogsFront.vue'
export default {
  components: {
    SectionSearchFront,
    SectionTileFront,
    SectionSpecialitiesFront,
    SectionDoctorFront,
    SectionFeaturesFront,
    SectionBlogsFront
  },
  data() {
    return {

    }
  }
}
</script>
<style>

</style>
