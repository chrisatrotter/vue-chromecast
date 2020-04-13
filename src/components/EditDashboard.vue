<template>
  <td colspan="4" v-if="isEditing">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-input
          outlined
          @input="$event = updateName($event.target.value)"
          :value="name()"
          label="Dashboard Name"
        />
        <q-input
          outlined
          @input="$event = updateUrl($event.target.value)"
          :value="url()"
          label="URL"
        />
        <q-select
          outlined
          @input="$event = updateInterval($event.target.value)"
          :value="interval()"
          :options="intervalOptions"
          label="Interval (seconds)"
        />
        <q-input
          outlined
          @input="$event = updateLicenseUrl($event.target.value)"
          :value="licenseurl()"
          label="LicenseURL"
        />
        <q-select
          outlined
          @input="$event = updateDRM($event.target.value)"
          :value="drm()"
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
import { ChromeCastDashboardModule } from '../store/modules/ChromeCastDashboard';

@Component({})
export default class EditDashboard extends Vue {
  get isEditing() {
    return ChromeCastDashboardModule.isEditing;
  }

  get name() {
    return ChromeCastDashboardModule.name;
  }

  get interval() {
    return ChromeCastDashboardModule.interval;
  }

  get intervalOptions() {
    return ChromeCastDashboardModule.intervalOptions;
  }

  get url() {
    return ChromeCastDashboardModule.url;
  }

  get licenseurl() {
    return ChromeCastDashboardModule.licenseurl;
  }

  get drm() {
    return ChromeCastDashboardModule.drm;
  }

  get drmOptions() {
    return ChromeCastDashboardModule.drmOptions;
  }

  set updateName(value: string) {
    ChromeCastDashboardModule.setName(value);
  }

  set updateInterval(value: number) {
    ChromeCastDashboardModule.setInterval(value);
  }

  set updateUrl(value: string) {
    ChromeCastDashboardModule.setUrl(value);
  }

  set updateLicenseUrl(value: string) {
    ChromeCastDashboardModule.setLicenseUrl(value);
  }

  set updateDRM(value: string) {
    ChromeCastDashboardModule.setDRM(value);
  }
}
</script>
