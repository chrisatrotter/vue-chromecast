<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-4" v-for="n in 5" :key="`md-${n}`">
        <Dashboard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Dashboard from './Dashboard.vue';

@Component({
  components: { Dashboard }
})
export default class ListOfDashboard extends Vue {}
</script>
