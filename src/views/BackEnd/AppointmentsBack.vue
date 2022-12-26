<template>
<div class="row">
    <div class="col-12 align-items-center mb-3">
        <div class="page-header">
            <ul>
                <li>
                    <button
                        v-for="tab in tabs"
                        :key="tab"
                        :class="['tab-button ml-2', { active: currentTab === tab }]"
                        @click="currentTab = tab"
                    >
                        {{ tab }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <component :is="currentTab" class="tab"></component>
</div>
</template>
<script>
import UpcomingAppointments from '../../components/BackEnd/UpcomingAppointments.vue'
import PastAppointments from '../../components/BackEnd/PastAppointments.vue'
export default {
    components: {
        UpcomingAppointments,
        PastAppointments,
    },
    data() {
        return {
            currentTab: 'UpcomingAppointments',
            tabs: ['UpcomingAppointments', 'PastAppointments']
        }   
    },
    methods: {

    }
}
</script>
<style scoped>
li {
    list-style: none;
}
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


/* @media */
@media (max-width: 390px) {
    .page-header ul {
        display: block;
    }
    .page-header ul li .btn {
        width: 217px;
        font-size: 14px;
        margin-bottom: 10px;
    }
}
</style>