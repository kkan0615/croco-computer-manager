<template>
  <v-card
    class="two-grid-split-view"
    :height="height"
  >
    <slot name="left">
      left
    </slot>
    <v-card
      id="resizer"
      color="primary"
      class="resizer"
      @mousedown="resizeHandler"
    />
    <slot name="right">
      right
    </slot>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'TwoGridSplitView'
})
export default class TwoGridSplitView extends Vue {
  /* 무조건 %로 들어와야함 */
  @Prop({ type: Number, required: false, default: 25 })
  private readonly leftMaxWidth!: number
  @Prop({ type: String, required: false, default: '100%' })
  private readonly height!: string
  @Prop({ type: Number, required: false, default: 0 })
  private readonly rightMinWidth!: number
  @Prop({ type: Number, required: false, default: 5 })
  private readonly barWidth!: number

  private resizer: HTMLElement | null = null
  private leftSide: HTMLElement  | null = null
  private rightSide: HTMLElement  | null = null
  private x = 0
  private y = 0
  private leftWidth = 0

  mounted () {
    this.resizer = document.getElementById('resizer')

    if (!this.resizer) return
    this.leftSide = this.resizer.previousElementSibling as HTMLElement
    this.rightSide = this.resizer.nextElementSibling as HTMLElement
  }

  private resizeHandler (e: any) {
    if (!this.resizer || !this.leftSide || !this.rightSide) {
      console.error('개발자님, TwoGridSplitView에 문제가 발생했습니다.')
      return
    }

    this.x = e.clientX
    this.y = e.clientY
    this.leftWidth = this.leftSide.getBoundingClientRect().width
    /* Add new events to resizer  */
    document.addEventListener('mousemove', this.resizerMoveHandler)
    document.addEventListener('mouseup', this.resizerStopHandler)
  }

  private resizerMoveHandler (e: any) {
    if (!this.resizer || !this.leftSide || !this.rightSide) {
      console.error('개발자님, TwoGridSplitView에 문제가 발생했습니다.')
      return
    }

    const dx = e.clientX - this.x
    if (! this.resizer.parentNode) return
    let newLeftWidth = (this.leftWidth + dx) * 100 / (this.resizer.parentNode as Element).getBoundingClientRect().width

    if (newLeftWidth < this.leftMaxWidth)
      newLeftWidth = this.leftMaxWidth

    // if (newLeftWidth >= this.rightMaxWidth)
    //   newLeftWidth = 100 - newLeftWidth

    this.leftSide.style.width = `${newLeftWidth}%`
    this.rightSide.style.width = `${100 - newLeftWidth}%`
    this.resizer.style.cursor = 'col-resize'
  }

  private resizerStopHandler () {
    if (!this.resizer || !this.leftSide || !this.rightSide) {
      console.error('개발자님, TwoGridSplitView에 문제가 발생했습니다.')
      return
    }

    this.resizer.style.removeProperty('cursor')
    document.body.style.removeProperty('cursor')
    this.leftSide.style.removeProperty('user-select')
    this.leftSide.style.removeProperty('pointer-events')
    this.rightSide.style.removeProperty('user-select')
    this.rightSide.style.removeProperty('pointer-events')

    /* Remove all events about resizer except mousedown */
    document.removeEventListener('mousemove', this.resizerMoveHandler)
    document.removeEventListener('mouseup', this.resizerStopHandler)
  }
}
</script>
<style lang="scss" scoped>
  @import "./styles/index.scss";
</style>
