<template>
  <q-page class="flex flex-top">
      <ListOfDashboard />
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ListOfDashboard from '../components/ListOfDashboard.vue'

@Component({
  components: { ListOfDashboard }
})
export default class Sender extends Vue {}
</script>
