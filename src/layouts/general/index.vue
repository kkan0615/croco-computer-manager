<template>
  <div
    class="general-layout fill-height"
  >
    <app-bar
      class="general-header app-bar"
    />
    <drawer />
    <v-main
      class="pa-3 main"
    >
      <router-view />
    </v-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppBar from '@/layouts/general/components/appBar/index.vue'
import Drawer from '@/layouts/general/components/drawer/index.vue'

@Component({
  name: 'GeneralLayout',
  components: {
    Drawer,
    AppBar
  }
})
export default class GeneralLayout extends Vue {
}
</script>

<style scoped lang="scss">
  .app-bar {
  }
  .main {
    height: calc(100vh - 30px) !important;
  }
</style>
