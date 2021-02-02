<template>
  <div
    class="fill-height"
  >
    {{ memory }}
    <v-tabs
      v-model="tabIndex"
    >
      <v-tab>
        General
      </v-tab>
      <v-tab
        v-for="(layout, index) in memory.layouts"
        :key="index"
      >
        {{ layout.serialNum }}
      </v-tab>
      <v-tab-item>
        <!--        {{ memory }}-->
        <v-card
          width="100%"
          class="mb-2"
        >
          <echart-component
            ref="lineChartRef"
            :option="usageOption"
          />
        </v-card>
        <v-row>
          <v-col>
            <v-card>
              <usage-progressive-circular-memory
                :rotate="-90"
                :value="memory.usedPercentage"
                color="error"
              />
              <div>
                used
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <usage-progressive-circular-memory
                :rotate="0"
                :value="memory.freePercentage"
                color="info"
              />
              <div>
                free
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item
        v-for="layout in memory.layouts"
        :key="layout.serialNum"
      >
        {{ layout }}
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { MemoryState } from '@/interfaces/store/memory'
import UsageProgressiveCircularMemory from '@/views/Memory/components/UsageProgressiveCircular.vue'
import { EChartsOption } from 'echarts'
import EchartComponent from '@/components/Echart/index.vue'

@Component({
  name: 'Memory',
  components: { EchartComponent, UsageProgressiveCircularMemory },
  computed: {
    ...mapState('memory', {
      memory: state => state as MemoryState
    })
  }
})
export default class Memory extends Vue {
  private memory !: MemoryState
  private tabIndex = 0
  private memoryUsageHistories: Array<number> = []
  private usageOption: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      width: '100%',
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
  private memoryUsageInterval:  NodeJS.Timeout | null = null

  @Ref('lineChartRef')
  private readonly lineChartRef !: any

  created () {
    for (let i = 0; i < 60; i++) {
      if (!this.usageOption.xAxis || Array.isArray(this.usageOption.xAxis)) break
      this.usageOption.xAxis.data?.push(`${60 - i}(sec)`)
    }
    this.initMemoryUsageInterval()
  }

  beforeDestroy () {
    this.disposeCpuLineChartInterval()
  }

  private initMemoryUsageInterval () {
    this.memoryUsageInterval = setInterval(async () => {
      if (this.memoryUsageHistories.length > 60) this.memoryUsageHistories.shift()
      this.memoryUsageHistories.push(this.memory.usedPercentage)
      this.lineChartRef.setOption({
        series: [{
          data: this.memoryUsageHistories
        }]
      })
    }, 1000)
  }

  private disposeCpuLineChartInterval () {
    if (this.memoryUsageInterval) {
      clearInterval(this.memoryUsageInterval)
      this.memoryUsageInterval = null
    }
  }
}
</script>
