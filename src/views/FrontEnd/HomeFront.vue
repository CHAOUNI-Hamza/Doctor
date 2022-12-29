<template>
  <NavbarFront />
  <SectionSearchFront />
  <SectionTileFront />
  <SectionSpecialitiesFront />
  <SectionDoctorFront />
  <FooterFront />
  
</template>

<script>
import SectionSearchFront from '../../components/FrontEnd/HomeFront/SectionSearchFront.vue'
import SectionTileFront from '../../components/FrontEnd/HomeFront/SectionTileFront.vue'
import SectionDoctorFront from '../../components/FrontEnd/HomeFront/SectionDoctorFront.vue'
import SectionSpecialitiesFront from '../../components/FrontEnd/HomeFront/SectionSpecialitiesFront.vue'
export default {
  components: {
    SectionSearchFront,
    SectionTileFront,
    SectionSpecialitiesFront,
    SectionDoctorFront
  },
  data() {
    return {

    }
  }
}
</script>
<style>

</style>
