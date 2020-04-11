<template>
  <td colspan="4" v-if="dashboardEditOpen">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-input outlined v-model="name" label="Dashboard Name" />
        <q-input outlined v-model="url" label="URL" />
        <q-select
          outlined
          v-model="interval"
          :options="intervalOptions"
          label="Interval (seconds)"
        />
        <q-input outlined v-model="licenseurl" label="LicenseURL" />
        <q-select outlined v-model="drm" :options="drmOptions" label="DRM" />
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import DashboardStoreModule from '../store/modules/dashboard';

@Component({})
export default class EditDashboard extends Vue {
  store = getModule(DashboardStoreModule);

  @Prop({ default: false })
  edit!: boolean;

  @Prop({ default: false })
  show!: boolean;

  @Prop({ default: 'My Dashboard' })
  name!: string;

  @Prop({ default: 120 })
  interval!: number;

  @Prop({ default: [30, 60, 120, 240, 300] })
  intervalOptions!: number[];

  @Prop({ default: 'http://chris-calendar.com' })
  url!: string;

  @Prop({ default: 'https://widevine-proxy.appspot.com/proxy' })
  licenseurl!: string;

  @Prop({ default: 'widevine' })
  drm!: string;

  @Prop({ default: ['something', 'some', 'widevine'] })
  drmOptions!: string[];

  get dashboardEditOpen() {
    return this.store.editDashboard;
  }

  set dashboardEditOpen(value: boolean) {
    this.store.SetDashboardEditing(value);
  }
}
</script>
