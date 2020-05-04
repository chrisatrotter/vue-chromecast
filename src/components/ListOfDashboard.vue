<template>
  <div class="q-pa-md">
    <div class="q-pa-md">
      <q-btn color="primary" @click="addDashboard()" label="Add Dashboard" />
    </div>

    <div class="q-pa-md">
      <div class="row q-col-gutter-md">
        <SenderDashboard
          v-for="dashboard in dashboardCollections"
          v-bind:dashboardCollectionId="dashboard.id"
          v-bind:key="dashboard.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import SenderDashboard from './SenderDashboard.vue';
import DashboardCollectionsModule from '../store/modules/DashboardCollections';
import DashboardCollection from '../model/DashboardCollection';

@Component({
  components: { SenderDashboard }
})
export default class ListOfDashboard extends Vue {
  public async created() {
    await DashboardCollectionsModule.loadDashboardCollections();
    await DashboardCollectionsModule.loadChromecastDashboards();
  }

  get dashboardCollections(): DashboardCollection[] {
    return DashboardCollectionsModule.dashboardCollections;
  }

  addDashboard() {
    DashboardCollectionsModule.addDashboardCollection(
      new DashboardCollection()
    );
  }
}
</script>
