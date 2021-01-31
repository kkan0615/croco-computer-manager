<template>
  <div
    class="fill-height"
    style="max-height: 100%"
  >
    <v-row
      class="fill-height"
    >
      <v-col
        :cols="8"
        class="fill-height pa-1"
      >
        <v-card
          height="30%"
          class="mb-2"
        >
          <echart-component
            ref="lineChartRef"
            height="100%"
            :option="usageOption"
          />
        </v-card>
        <v-card
          height="30%"
          class="mb-2"
        >
          <echart-component
            ref="lineChartRef"
            :option="usageOption"
          />
        </v-card>
        <v-card
          height="30%"
        >
          <echart-component
            ref="lineChartRef"
            :option="usageOption"
          />
        </v-card>
      </v-col>
      <v-col
        :cols="4"
        class="fill-height pa-1"
      >
        <v-card
          class="fill-height"
        >
          <v-card-title class="pa-1">
            {{ cpu.manufacturer }} - {{ cpu.brand }}
          </v-card-title>
          <v-divider />
          <v-card-text class="pa-1">
            <!-- Cores -->
            <flex-description-cpu
              label="Cores:"
              :content="cpu.cores"
            />
            <!-- Physical Cores -->
            <flex-description-cpu
              label="Physical Cores:"
              :content="cpu.physicalCores"
            />
            <!-- Socket + processors -->
            <flex-description-cpu
              :label="`Socket (${cpu.socket})`"
              :content="cpu.processors"
            />
            <flex-description-cpu
              label="Virtualization"
              :content="cpu.virtualization ? 'Yes' : 'No'"
            />
            <flex-description-cpu
              label="Default Speed"
              :content="cpu.speedMax"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { CpuState } from '@/interfaces/store/cpu'
import FlexDescriptionCpu from '@/views/Cpu/components/FlexDescription.vue'
import Os from 'os'
import EchartComponent from '@/components/Echart/index.vue'
import { EChartsOption } from 'echarts'
import { mapState } from 'vuex'

@Component({
  name: 'Cpu',
  components: { EchartComponent, FlexDescriptionCpu },
  computed: {
    ...mapState('cpu', {
      cpu: state => state as CpuState
    })
  }
})
export default class Cpu extends Vue {
  private cpu !: CpuState
  private usageOption: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: []
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        name: 'Usage',
        type: 'line',
        stack: '总量',
        data: [],
        areaStyle: {}
      }
    ]
  }
  private cpuLineChartInterval: any = null
  private historyOfUsuage: Array<number> = []

  @Ref('lineChartRef')
  private readonly lineChartRef !: any

  created () {
    for (let i = 0; i < 60; i++) {
      if (!this.usageOption.xAxis || Array.isArray(this.usageOption.xAxis)) break
      this.usageOption.xAxis.data?.push(`${60 - i}(sec)`)
    }
    this.initCpuLineChartInterval()
    console.log(this.cpu)
  }

  beforeDestroy () {
    this.disposeCpuLineChartInterval()
  }

  private initCpuLineChartInterval () {
    this.cpuLineChartInterval = setInterval(async () => {
      if (this.historyOfUsuage.length > 60) this.historyOfUsuage.shift()
      this.historyOfUsuage.push(parseFloat(this.cpu.load.currentLoadUser.toFixed(2)))
      this.lineChartRef.setOption({
        series: [{
          data: this.historyOfUsuage
        }]
      })
      console.log(Os.cpus())
    }, 1000)
  }

  private disposeCpuLineChartInterval () {
    if (this.cpuLineChartInterval) {
      clearInterval(this.cpuLineChartInterval)
      this.cpuLineChartInterval = null
    }
  }
}
</script>
