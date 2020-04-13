<template>
  <td colspan="4" v-if="isEditing">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-input
          outlined
          @input="$event = updateName($event.target.value)"
          v-model="name"
          label="Dashboard Name"
        />
        <q-input
          outlined
          @input="$event = updateUrl($event.target.value)"
          v-model="url"
          label="URL"
        />
        <q-select
          outlined
          @input="$event = updateInterval($event.target.value)"
          v-model="interval"
          :options="intervalOptions"
          label="Interval (seconds)"
        />
        <q-input
          outlined
          @input="$event = updateLicenseUrl($event.target.value)"
          v-model="licenseurl"
          label="LicenseURL"
        />
        <q-select
          outlined
          @input="$event = updateDRM($event.target.value)"
          v-model="drm"
          :options="drmOptions"
          label="DRM"
        />
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ChromeCastDashboardModule from '../store/modules/ChromeCastDashboard';

@Component({})
export default class EditDashboard extends Vue {
  editing: boolean = false;
  name: string = '';
  interval: number = 0;
  intervalOptions: number[] = [30, 60, 120];
  url: string = '';
  licenseurl: string = '';
  drm: string = '';
  drmOptions: string[] = ['something', 'some', 'heey'];

  get isEditing() {
    return (this.editing = ChromeCastDashboardModule.isEditing);
  }

  get getName() {
    return (this.name = ChromeCastDashboardModule.name);
  }

  get getInterval() {
    return (this.interval = ChromeCastDashboardModule.interval);
  }

  get getIntervalOptions() {
    return (this.intervalOptions = ChromeCastDashboardModule.intervalOptions);
  }

  get getUrl() {
    return (this.url = ChromeCastDashboardModule.url);
  }

  get getLicenseurl() {
    return (this.licenseurl = ChromeCastDashboardModule.licenseurl);
  }

  get getDRM() {
    return (this.drm = ChromeCastDashboardModule.drm);
  }

  get getDRMOptions() {
    return (this.drmOptions = ChromeCastDashboardModule.drmOptions);
  }

  set UpdateName(value: string) {
    ChromeCastDashboardModule.setName(value);
  }

  set UpdateInterval(value: number) {
    ChromeCastDashboardModule.setInterval(value);
  }

  set UpdateUrl(value: string) {
    ChromeCastDashboardModule.setUrl(value);
  }

  set UpdateLicenseUrl(value: string) {
    ChromeCastDashboardModule.setLicenseUrl(value);
  }

  set UpdateDRM(value: string) {
    ChromeCastDashboardModule.setDRM(value);
  }
}
</script>
