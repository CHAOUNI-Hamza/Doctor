<template>
    <div class="demo">
      <button
         v-for="tab in tabs"
         :key="tab"
         :class="['tab-button ml-2', { active: currentTab === tab }]"
         @click="currentTab = tab"
       >
        {{ tab }}
      </button>
      <component :is="currentTab" class="tab mt-5"></component>
    </div>
</template>

<script>
import Email from '../../components/BackEnd/EmailSettings.vue'
import Localization from '../../components/BackEnd/LocalizationSettings.vue'
import Others from '../../components/BackEnd/OthersSettings.vue'
import Payment from '../../components/BackEnd/PaymentSettings.vue'
import Seo from '../../components/BackEnd/SeoSettings.vue'
import SocialLinks from '../../components/BackEnd/SocialLinksSettings.vue'
import SocialModialog from '../../components/BackEnd/SocialModialogSettings.vue'
import Generale from '../../components/BackEnd/GeneraleSettings.vue'
  
export default {
  components: {
    Email,
    Localization,
    Others,
    Payment,
    Seo,
    SocialLinks,
    SocialModialog,
    Generale
  },
  data() {
    return {
      currentTab: 'Generale',
      tabs: ['Generale', 'Localization', 'Payment', 'Email', 'SocialModialog', 'SocialLinks', 'Seo', 'Others']
    }
  }
}
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  margin-bottom: -1px;
  margin-right: -1px;
  background: #0000000a;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  border: 1px solid #5c8ed3;
  color: #2196f3;
  background: white;
}


</style>