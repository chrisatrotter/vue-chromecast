<template>
  <tr class="bg-grey-3">
    <td class="text-left">
      <q-toggle v-model="show" color="primary" keep-color />
    </td>
    <td class="text-left">{{ name }}</td>
    <td class="text-left">{{ interval }}s</td>
    <td class="text-right">
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          size="12px"
          v-if="!isEditing"
          flat
          dense
          round
          @click="ChromeCastDashboardModule.toggleEditing()"
          icon="keyboard_arrow_left"
        />
        <q-btn
          size="12px"
          v-if="isEditing"
          flat
          dense
          round
          @click="ChromeCastDashboardModule.toggleEditing()"
          icon="keyboard_arrow_down"
        />
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ChromeCastDashboardModule from '../store/modules/ChromeCastDashboard';

@Component({})
export default class DashboardItem extends Vue {
  get show() {
    return ChromeCastDashboardModule.show;
  }

  get isEditing() {
    return ChromeCastDashboardModule.isEditing;
  }

  get name() {
    return ChromeCastDashboardModule.name;
  }

  get interval() {
    return ChromeCastDashboardModule.interval;
  }
}
</script>
