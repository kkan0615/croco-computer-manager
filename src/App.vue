<template>
  <v-app>
    <snackbar />
    <full-screen-loading />
    <v-main>
      <router-view
        :style="themeStyle"
      />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Snackbar from '@/components/alert/Snackbar/index.vue'
import FullScreenLoading from '@/components/Loding/index.vue'

@Component({
  name: 'Prototype',
  components: {
    FullScreenLoading,
    Snackbar
  }
})
export default class Prototype extends Vue {
  private cpuInterval: any = null

  async created () {
    await this.preLoadInfo()
    this.cpuInterval = setInterval(async () => {
      await this.$store.dispatch('cpu/observeCpu')
    }, 1000)
  }

  beforeDestroy () {
    if (this.cpuInterval) {
      clearInterval(this.cpuInterval)
      this.cpuInterval = null
    }
  }

  /**
   * @description Use it to set the style in script tag
   * @return string - completed string of style
   */
  private get themeStyle (): string {
    return `background: ${this.$vuetify.theme.currentTheme.background}`
  }

  private async preLoadInfo () {
    await this.$loading.openLoading()
    await this.$store.dispatch('cpu/initCpuInfo')
    await this.$loading.closeLoading()
  }
}
</script>
