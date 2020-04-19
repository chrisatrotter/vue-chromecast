<template>
  <div class="col-4" :key="md-`${dashboards.id}`">
    <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <div class="text-h4 q-ml-md text-white">{{ dashboards.name }}</div>
            </div>
          </th>
        </tr>
        <tr>
          <th class="text-left">Show</th>
          <th class="text-left">Dashboard Name</th>
          <th class="text-left">Interval</th>
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody v-for="item in dashboards.chromeCastDashboard" :key="`md-${item.id}`">
        <DashboardItem v-bind="item" :key="item.id" />
        <EditDashboard v-bind="item" :key="item.id" />
      </tbody>
      <div class="q-pa-md">
        <q-btn color="primary" @click="addDashboard()" :disable="loading" label="Add Dashboard" />
      </div>
    </q-markup-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import DashboardItem from './DashboardItem.vue';
import EditDashboard from './EditDashboard.vue';
import DashboardModule from '../store/modules/Dashboard';
import { ChromeCastDashboard, Dashboard } from '../store/models';

@Component({
  components: { DashboardItem, EditDashboard }
})
export default class SenderDashboard extends Vue {
  @Prop({ required: true })
  dashboard!: Dashboard;

  public created() {
    DashboardModule.setDashboard(this.dashboard);
  }

  get dashboards() {
    return DashboardModule.dashboard;
  }

  addDashboard() {
    const dashboard: ChromeCastDashboard = {
      id: '2',
      name: 'dashboard name',
      show: true,
      interval: 120,
      intervalOptions: [30, 60, 90, 120],
      url: 'jiaoj.com',
      licenseurl: 'licenseurl.com',
      drm: 'drm',
      drmOptions: ['sp,etjomg', 'hosg'],
      isEditing: true
    };
    DashboardModule.addDashboard(dashboard);
  }
}
</script>
