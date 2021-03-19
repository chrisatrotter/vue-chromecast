<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Vue Chromecast App</q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/sender" label="Sender" />
        <q-route-tab to="/receiver" label="Receiver" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class MainLayout extends Vue {}
</script>
