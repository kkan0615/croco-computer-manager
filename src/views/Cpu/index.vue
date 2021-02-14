<template>
  <div
    class="fill-height"
  >
    <v-row
      class="fill-height ma-0"
    >
      <v-col
        :cols="8"
        class="fill-height pa-1"
      >
        <v-card
          height="50%"
          class="mb-2"
        >
          <echart-component
            ref="lineChartRef"
            height="100%"
            :option="usageOption"
          />
        </v-card>
        <v-card
          v-if="cpuTemperature.main"
          height="49%"
        >
          temperature
        </v-card>
        <v-card
          v-else
          height="49%"
        >
          <v-container
            class="fill-height"
            fluid
          >
            <v-row
              justify="center"
              align-content="center"
            >
              Temperature is not supported, <br>
              Please run program as admin
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col
        :cols="4"
        class="fill-height pa-1"
      >
        <detail-cpu />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { CpuState } from '@/interfaces/store/cpu'
import FlexDescriptionCpu from '@/views/Cpu/components/FlexDescription.vue'
import EchartComponent from '@/components/Echart/index.vue'
import { EChartsOption, EChartsType } from 'echarts'
import { mapGetters, mapState } from 'vuex'
import {
  CentralProcessingUnitLoad,
  CentralProcessingUnitTemperature
} from '@/interfaces/model/CentralProcessingUnti'
import DetailCpu from '@/views/Cpu/components/Detail.vue'
import Login from '@/views/Login/index.vue'

@Component({
  name: 'Cpu',
  components: { DetailCpu, EchartComponent, FlexDescriptionCpu },
  computed: {
    ...mapGetters('cpu', [
      'cpuLoads',
      'cpuTemperature'
    ]),
    ...mapState('cpu', {
      cpu: state => state as CpuState
    }),
  }
})
export default class Cpu extends Vue {
  private cpu !: CpuState
  private cpuLoads !: CentralProcessingUnitLoad
  private cpuTemperature !: CentralProcessingUnitTemperature
  private usageOption: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
      splitLine: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      type: 'line',
      data: [],
      areaStyle: {}
    }
    ]
  }
  private cpuLineChartInterval: NodeJS.Timeout | null = null
  private historyOfUsuage: Array<number> = [0]

  @Ref('lineChartRef')
  private readonly lineChartRef !: EChartsType

  created () {
    this.setCpuUsuageChart()
    console.log(this.cpu)

  }

  beforeDestroy () {
    this.disposeCpuLineChartInterval()
  }

  private setCpuUsuageChart () {
    for (let i = 0; i < 60; i++) {
      if (!this.usageOption.xAxis || Array.isArray(this.usageOption.xAxis)) break
      this.usageOption.xAxis.data?.push(`${60 - i}(sec)`)
    }

    this.initCpuLineChartInterval()
  }

  private initCpuLineChartInterval () {
    this.cpuLineChartInterval = setInterval(() => {
      if (this.cpuLoads && this.cpuLoads.currentLoadUser) {
        if (this.historyOfUsuage.length > 60) this.historyOfUsuage.shift()
        this.historyOfUsuage.push(parseFloat(this.cpuLoads.currentLoadUser.toFixed(2)))
        this.lineChartRef.setOption({
          series: [{
            data: this.historyOfUsuage
          }]
        })
      }
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
