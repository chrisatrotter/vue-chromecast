<template>
  <tr class="bg-grey-3">
    <td class="text-left">
      <q-toggle v-model="show" color="primary" keep-color />
    </td>
    <td class="text-left">{{ dashboard.name }}</td>
    <td class="text-left">{{ dashboard.interval }}s</td>
    <td class="text-right">
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          size="12px"
          v-if="!dashboard.isEditing"
          flat
          dense
          round
          @click="ChromeCastDashboardModule.toggleEditing()"
          icon="keyboard_arrow_left"
        />
        <q-btn
          size="12px"
          v-if="dashboard.isEditing"
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
import { Component, Prop } from 'vue-property-decorator';
import ChromeCastDashboardModule from '../store/modules/ChromeCastDashboard';
import { IChromeCastDashboard } from '../store/models';

@Component({})
export default class DashboardItem extends Vue {
  @Prop({ required: true, default: null })
  dashboard!: IChromeCastDashboard;
}
</script>
