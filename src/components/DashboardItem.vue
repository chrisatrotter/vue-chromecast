<template>
  <tr class="bg-grey-3">
    <td class="text-left">
      <q-toggle v-model="chromeCastDashboard.show" color="primary" keep-color />
    </td>
    <td class="text-left">{{ chromeCastDashboard.name }}</td>
    <td class="text-left">{{ chromeCastDashboard.interval }}s</td>
    <td class="text-right">
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          size="12px"
          v-if="!chromeCastDashboard.isEditing"
          flat
          dense
          round
          @click="this.toggleIsEditing()"
          icon="keyboard_arrow_left"
        />
        <q-btn
          size="12px"
          v-if="chromeCastDashboard.isEditing"
          flat
          dense
          round
          @click="this.toggleIsEditing()"
          icon="keyboard_arrow_down"
        />
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import DashboardCollectionsModule from '../store/modules/DashboardCollections';
import DashboardCollection from '../model/DashboardCollection';
import ChromecastDashboard from '../model/ChromecastDashboard';

@Component({})
export default class DashboardItem extends Vue {
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
