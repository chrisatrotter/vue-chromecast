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
          v-if="!dashboardEditOpen"
          flat
          dense
          round
          @click="store.toggleEditDashboard()"
          icon="keyboard_arrow_left"
        />
        <q-btn
          size="12px"
          v-if="dashboardEditOpen"
          flat
          dense
          round
          @click="store.toggleEditDashboard()"
          icon="keyboard_arrow_down"
        />
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import DashboardStoreModule from '../store/modules/dashboard';

@Component({})
export default class DashboardItem extends Vue {
  @Prop({ default: true })
  edit!: boolean;

  @Prop({ default: false })
  show!: boolean;

  @Prop({ default: 'My Dashboard' })
  name!: string;

  @Prop({ default: 120 })
  interval!: number;

  store = getModule(DashboardStoreModule);

  get dashboardEditOpen() {
    return (this.edit = this.store.editDashboard);
  }

  set dashboardEditOpen(value: boolean) {
    this.store.SetDashboardEditing(value);
  }
}
</script>
