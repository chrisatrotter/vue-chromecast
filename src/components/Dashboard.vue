<template>
  <q-markup-table flat bordered>
    <thead class="bg-teal">
      <tr>
        <th colspan="5">
          <div class="row no-wrap items-center">
            <div class="text-h4 q-ml-md text-white">{{ name }}</div>
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
    <tbody v-for="dashboard in dashboards" :key="`md-${dashboard.id}`">
      <DashboardItem />
      <EditDashboard />
    </tbody>
    <div class="q-pa-md">
      <q-btn
        color="primary"
        @click="addDashboard()"
        :disable="loading"
        label="Add Dashboard"
      />
    </div>
  </q-markup-table>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import DashboardItem from './DashboardItem.vue';
import EditDashboard from './EditDashboard.vue';
import DashboardModule from '../store/modules/Dashboard';
import { IChromeCastDashboard, IDashboard } from '../store/models';

@Component({
  components: { DashboardItem, EditDashboard }
})
export default class Dashboard extends Vue {
  public created() {}

  get name() {
    return DashboardModule.name;
  }

  get dashboards() {
    return DashboardModule.dashboard;
  }

  addDashboard() {
    const dashboard: IChromeCastDashboard = {
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
