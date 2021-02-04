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
import si from 'systeminformation'

// import { exec, execSync } from 'child_process'
// import { promisify } from 'util'
// const execAsync = promisify(exec)
// const gpuTempeturyCommand = 'nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader'
const gpuTempeturyCommand = 'system_profiler SPDisplaysDataType'
@Component({
  name: 'Prototype',
  components: {
    FullScreenLoading,
    Snackbar
  }
})
export default class Prototype extends Vue {
  private cpuInterval: NodeJS.Timeout | null = null
  private memoryInterval: NodeJS.Timeout | null  = null
  private gpuInterval: NodeJS.Timeout | null  = null
  private processInterval: NodeJS.Timeout | null  = null

  async created () {
    await this.preLoadInfo()
    // this.setCpuInterval()
    this.setMemoryInterval()
    this.setProcessInterval()
    // console.log(await si.time())
    // console.log(await si.processes())
    console.log(await si.getAllData())
    console.log(await si.cpuTemperature())
  }

  async mounted () {
    // console.log(await execSync(gpuTempeturyCommand))
  }

  beforeDestroy () {
    if (this.cpuInterval)
      clearInterval(this.cpuInterval)
    if (this.memoryInterval)
      clearInterval(this.memoryInterval)
    if (this.processInterval)
      clearInterval(this.processInterval)

    this.cpuInterval = null
    this.memoryInterval = null
    this.processInterval = null
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
    await this.$store.dispatch('memory/initMemoryInfo')
    await this.$loading.closeLoading()
  }

  private setCpuInterval () {
    this.cpuInterval = setInterval(async () => {
      await this.$store.dispatch('cpu/observeCpu')
    }, 1000)
  }

  private setMemoryInterval () {
    this.memoryInterval = setInterval(async () => {
      await this.$store.dispatch('memory/observeMemory')
    }, 1000)
  }

  private setProcessInterval () {
    this.processInterval = setInterval(async () => {
      await this.$store.dispatch('process/observeProcess')
    }, 3000)
  }
}
</script>
