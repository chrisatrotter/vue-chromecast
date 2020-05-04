<template :key="id">
  <div class="col-4">
    <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <div class="text-h4 q-ml-md text-white">{{ dashboardCollection.name }}</div>
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
      <tbody
        v-for="chromeCastDashboard in chromeCastDashboards"
        :key="`md-${chromeCastDashboard.id}`"
      >
        <DashboardItem
          v-bind:dashboardCollectionId="dashboardCollectionId"
          v-bind:chromeCastDashboardId="chromeCastDashboard.id"
          :key="`di-${chromeCastDashboard.id}`"
        />
        <EditDashboard
          v-bind:dashboardCollectionId="dashboardCollectionId"
          v-bind:chromeCastDashboardId="chromeCastDashboard.id"
          :key="`ed-${chromeCastDashboard.id}`"
        />
      </tbody>
      <div class="q-pa-md">
        <q-btn color="primary" @click="addChromeCastDashboard()" label="Add Dashboard" />
      </div>
    </q-markup-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import DashboardItem from './DashboardItem.vue';
import EditDashboard from './EditDashboard.vue';
import DashboardCollectionsModule from '../store/modules/DashboardCollections';
import DashboardCollection from '../model/DashboardCollection';
import ChromecastDashboard from '../model/ChromecastDashboard';

@Component({
  components: { DashboardItem, EditDashboard }
})
export default class SenderDashboard extends Vue {
  @Prop({ required: true })
  dashboardCollectionId!: string;

  get dashboardCollection(): DashboardCollection {
    return DashboardCollectionsModule.dashboardCollections.filter(
      (dashboboardCollection: DashboardCollection) =>
        dashboboardCollection.id == this.dashboardCollectionId
    )[0];
  }

  get chromeCastDashboards(): ChromecastDashboard[] {
    return DashboardCollectionsModule.chromecastDashboards.filter(
      (chromecastDashboard: ChromecastDashboard) =>
        chromecastDashboard.getDashboardCollectionId() ==
        this.dashboardCollectionId
    );
  }

  addChromeCastDashboard() {
    DashboardCollectionsModule.addChromeCastDashboard(
      new ChromecastDashboard(this.dashboardCollectionId)
    );
  }
}
</script>
