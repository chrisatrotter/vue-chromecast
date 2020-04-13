<template>
  <div class="q-pa-md">
    <div class="q-pa-md">
      <q-btn color="primary" @click="addDashboard()" label="Add Dashboard" />
    </div>

    <div class="q-pa-md">
      <div class="row q-col-gutter-md">
        <div
          class="col-4"
          v-for="dashboard in dashboards"
          :key="`md-${dashboard.id}`"
        >
          <Dashboard />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Dashboard from './Dashboard.vue';
import DashboardListModule from '../store/modules/DashboardList';
import { IDashboard } from '../store/models';

@Component({
  components: { Dashboard }
})
export default class ListOfDashboard extends Vue {
  num: number = 1;

  public async created() {
    await DashboardListModule.loadDashboards();
    this.dashboards;
  }

  get dashboards() {
    return DashboardListModule.dashboardList;
  }

  addDashboard() {
    const dashboard: IDashboard = {
      id: (this.num++).toString(),
      name: 'a dashboard name',
      display: false,
      dashboard: []
    };
    DashboardListModule.addDashboard(dashboard);
  }
}
</script>
