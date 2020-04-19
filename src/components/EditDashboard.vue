<template>
  <td colspan="4" v-if="isEditing">
    <div class="q-pa-md">
      <div class="q-gutter-y-md">
        <q-input outlined v-model="dashboard.name" label="Dashboard Name" />
        <q-input outlined v-model="dashboard.url" label="URL" />
        <q-select
          outlined
          v-model="dashboard.interval"
          :options="dashboard.intervalOptions"
          label="Interval (seconds)"
        />
        <q-input outlined v-model="dashboard.licenseurl" label="LicenseURL" />
        <q-select outlined v-model="dashboard.drm" :options="dashboard.drmOptions" label="DRM" />
      </div>
    </div>
  </td>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import ChromeCastDashboardModule from '../store/modules/ChromeCastDashboard';
import { ChromeCastDashboard } from '../store/models';

@Component({})
export default class EditDashboard extends Vue {
  @Prop({ required: true, default: null })
  dashboard!: ChromeCastDashboard;
}
</script>
