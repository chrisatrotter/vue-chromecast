<template>
  <q-markup-table flat bordered>
    <thead class="bg-teal">
      <tr>
        <th colspan="5">
          <div class="row no-wrap items-center">
            <div class="text-h4 q-ml-md text-white">Dashboard Name</div>
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
    <tbody>
      <DashboardItem />
      <EditDashboard />
    </tbody>
    <div class="q-pa-md">
      <q-btn color="primary" :disable="loading" label="Add Dashboard" />
    </div>
  </q-markup-table>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import DashboardItem from './DashboardItem.vue';
import EditDashboard from './EditDashboard.vue';
import { getModule } from 'vuex-module-decorators';
import DashboardStoreModule from '../store/modules/dashboard';

@Component({
  components: { DashboardItem, EditDashboard }
})
export default class Dashboard extends Vue {
  store = getModule(DashboardStoreModule);

  get dashboardEditOpen() {
    return this.store.editDashboard;
  }

  set dashboardEditOpen(value: boolean) {
    this.store.SetDashboardEditing(value);
  }
}
</script>
