<template>
  <div class="q-pa-md">
    <div class="q-pa-md">
      <q-btn color="primary" @click="addDashboard()" label="Add Dashboard" />
    </div>

    <div class="q-pa-md">
      <div class="row q-col-gutter-md">
        <SenderDashboard
          v-for="dashboard in dashboards"
          v-bind="dashboard"
          :key="`md-${dashboard.id}`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import SenderDashboard from './Dashboard.vue';
import DashboardListModule from '../store/modules/DashboardList';
import { Dashboard } from '../store/models';
import { uid } from 'quasar';

@Component({
  components: { SenderDashboard }
})
export default class ListOfDashboard extends Vue {
  public async created() {
    await DashboardListModule.loadDashboards();
  }

  get dashboards() {
    return DashboardListModule.dashboardList;
  }

  addDashboard() {
    const dashboard: Dashboard = {
      id: uid(),
      name: 'dashboard name',
      display: false
    };
    DashboardListModule.addDashboard(dashboard);
  }
}
</script>
