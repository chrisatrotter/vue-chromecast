<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Vue Chromecast App
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="store.toggleRightDrawer()"
        />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/sender" label="Sender" />
        <q-route-tab to="/receiver" label="Receiver" />
      </q-tabs>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      show-if-above
      side="right"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { LayoutModule } from '../store/modules/MainLayout';
import EssentialLink from '../components/EssentialLink.vue';

@Component({
  components: { EssentialLink }
})
export default class MyLayout extends Vue {
  get rightDrawerOpen() {
    return LayoutModule.rightDrawerOpen;
  }

  set rightDrawerOpen(value: boolean) {
    LayoutModule.setRightDrawerOpen(value);
  }
}
</script>
