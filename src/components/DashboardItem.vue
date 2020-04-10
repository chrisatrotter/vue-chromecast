<template>
  <tr>
    <td class="text-left">
      <q-toggle v-model="value" color="primary" keep-color />
    </td>
    <td class="text-left">My Calendar Dashboard</td>
    <td class="text-center">120s</td>
    <td class="text-right">
      <div class="text-grey-8 q-gutter-xs">
        <q-btn class="gt-xs" size="12px" flat dense round icon="edit" />
        <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
        <q-btn size="12px" flat dense round icon="more_vert" />
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class DashboardItem extends Vue {
  value: boolean = true;
}
</script>
