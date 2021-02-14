import { EChartsOption, ECharts } from 'echarts'

export interface EchartComponentLib {
  chart: ECharts | null
  setOption(option: EChartsOption): void
  resizeChart(): void
}
