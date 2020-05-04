<template>
  <td colspan="4" v-if="chromeCastDashboard.isEditing">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-input outlined v-model="chromeCastDashboard.name" label="Dashboard Name" />
        <q-input outlined v-model="chromeCastDashboard.url" label="URL" />
        <q-select
          outlined
          v-model="chromeCastDashboard.interval"
          :options="chromeCastDashboard.intervalOptions"
          label="Interval (seconds)"
        />
        <q-input outlined v-model="chromeCastDashboard.licenseurl" label="LicenseURL" />
        <q-select
          outlined
          v-model="chromeCastDashboard.drm"
          :options="chromeCastDashboard.drmOptions"
          label="DRM"
        />
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import DashboardCollectionsModule from '../store/modules/DashboardCollections';
import ChromecastDashboard from '../model/ChromecastDashboard';
import DashboardCollection from '../model/DashboardCollection';

@Component({})
export default class EditDashboard extends Vue {
  @Prop({ required: true })
  dashboardCollectionId!: string;

  @Prop({ required: true })
  chromeCastDashboardId!: string;

  get dashboardCollection(): DashboardCollection {
    return DashboardCollectionsModule.dashboardCollections.filter(
      (dashboboardCollection: DashboardCollection) =>
        dashboboardCollection.getId() == this.dashboardCollectionId
    )[0];
  }

  get chromeCastDashboards(): ChromecastDashboard[] {
    return DashboardCollectionsModule.chromecastDashboards.filter(
      (chromecastDashboard: ChromecastDashboard) =>
        chromecastDashboard.getDashboardCollectionId() ==
        this.dashboardCollectionId
    );
  }

  get chromeCastDashboard(): ChromecastDashboard {
    return this.chromeCastDashboards.filter(
      (chromecastDashboard: ChromecastDashboard) =>
        chromecastDashboard.getId() == this.chromeCastDashboardId
    )[0];
  }
}
</script>
