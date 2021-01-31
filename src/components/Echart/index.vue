<template>
  <div
    :id="id"
    :style="{height, width}"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'
import { EChartsOption, ECharts, init as initEcharts } from 'echarts'
@Component({
  name: 'EchartComponent'
})
export default class EchartComponent extends Vue {
  @Prop({ type: String, required: false, default: () => Date.now().toString() + Math.random() + '' + 'echart' })
  private readonly id !: string
  @Prop({ required: true })
  private readonly option!: EChartsOption
  @Prop({ required: false, default: '100%', type: String })
  private readonly height!: string
  @Prop({ required: false, default: '100%', type: String })
  private readonly width!: string

  public chart: ECharts | null = null

  @Watch('option', { deep: true })
  private onWatchOptionProp (newValue: EChartsOption, oldValue: EChartsOption) {
    if (newValue === oldValue) return
    if (this.chart) this.disposeChart()
    this.initChart()
  }

  mounted () {
    if (!this.$vuetify.theme.currentTheme.primary) return
    this.$nextTick(() => {
      this.initChart()
    })

    window.addEventListener('resize', this.resizeChart)
  }

  beforeDestroy () {
    this.disposeChart()

    window.removeEventListener('resize', this.resizeChart)
  }

  private initChart () {
    this.chart = initEcharts(document.getElementById(this.id) as HTMLDivElement)
    console.log(this.chart)
    this.chart.setOption(this.option)
  }

  private disposeChart () {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  }

  @Emit('refresh')
  public refresh () {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
    this.initChart()
    return this.id
  }

  @Emit('resize')
  public resizeChart () {
    if (this.chart) {
      this.chart.resize()
    }
  }

  public setOption (option: EChartsOption) {
    if (!this.chart) return
    this.chart.setOption(option)
  }
}
</script>
