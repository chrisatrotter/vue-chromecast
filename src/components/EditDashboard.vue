<template>
  <td colspan="4" v-if="chromeCastDashboard.isEditing">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-input outlined v-model="chromeCastDashboard.name" label="Dashboard Name" />
        <q-input outlined v-model="chromeCastDashboard.url" label="URL" />
        <q-select
          outlined
          v-model="chromeCastDashboard.interval"
          :options="chromecast.intervalOptions"
          label="Interval (seconds)"
        />
        <q-select
          outlined
          v-model="chromeCastDashboard.licenseurl"
          :options="chromecast.licenseUrlOptions"
          label="LicenseURL"
        />
        <q-select
          outlined
          v-model="chromeCastDashboard.drm"
          :options="chromecast.drmOptions"
          label="DRM"
        />
        <q-btn color="secondary" @click="updateChromeCastDashboard()" label="Update" />
        <q-btn flat round color="red" @click="deleteChromeCastDashboard()" icon="delete" />
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import DashboardCollectionsModule from '../store/modules/DashboardCollections';
import ChromecastDashboardModule from '../store/modules/ChromecastDashboards';
import ChromecastModule from '../store/modules/Chromecast';
import ChromecastDashboard from '../model/ChromecastDashboard';
import DashboardCollection from '../model/DashboardCollection';
import Chromecast from '../model/Chromecast';

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
    return ChromecastDashboardModule.chromecastDashboards.filter(
      (chromecastDashboard: ChromecastDashboard) =>
        chromecastDashboard.getDashboardCollectionId() ==
        this.dashboardCollectionId
    );
  }

  get chromeCastDashboard(): ChromecastDashboard {
    return this.chromeCastDashboards.filter(
      (chromecastDashboard: ChromecastDashboard) =>
        chromecastDashboard.id == this.chromeCastDashboardId
    )[0];
  }

  get chromecast(): Chromecast {
    return ChromecastModule.chromecast;
  }

  updateChromeCastDashboard() {
    ChromecastDashboardModule.updateChromeCastDashboard(
      this.chromeCastDashboard
    );
  }

  deleteChromeCastDashboard() {
    ChromecastDashboardModule.removeChromeCastDashboard(
      this.chromeCastDashboard
    );
  }
}
</script>
