<template>
  <v-card
    class="triple-grid-split-view"
  >
    <!-- Top -->
    <div
      class="top-section"
    >
      <slot
        name="left"
      >
        left
      </slot>
      <!-- Scrollbar -->
      <v-card
        id="verticalResizer"
        color="primary"
        class="verticalResizer"
        @mousedown="resizeHandler"
      />

      <slot
        name="right"
      >
        right
      </slot>
    </div>
    <v-card
      id="horizontalResizer"
      color="primary"
      class="horizontalResizer"
      @mousedown="horizontalResizeHandler"
    />
    <!-- Bottom -->
    <slot
      name="bottom"
    >
      bottom
    </slot>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'TripleGridSplitView'
})
export default class TripleGridSplitView extends Vue {
  /* 무조건 %로 들어와야함 */
  @Prop({ type: Number, required: false, default: 25 })
  private leftMaxWidth!: number
  @Prop({ type: Number, required: false, default: 0 })
  private rightMinWidth!: number
  @Prop({ type: Number, required: false, default: 5 })
  private barWidth!: number

  private horizontalResizer: HTMLElement | null = null
  private verticalResizer: HTMLElement | null = null
  private leftSide: HTMLElement  | null = null
  private rightSide: HTMLElement  | null = null
  private topSide: HTMLElement  | null = null
  private bottomSide: HTMLElement  | null = null
  private x = 0
  private y = 0
  private leftWidth = 0
  private topHeight = 0

  private get leftSideStyle () {
    return `height: 100%; width: ${this.leftMaxWidth.toString()}%`
  }

  private get rightSideStyle () {
    let result = ''
    if (this.rightMinWidth) result += `height: 100%; min-width: ${this.rightMinWidth.toString()}%;`
    result += `height: 100%; width: ${75}%`
    return result
  }

  mounted () {
    this.horizontalResizer = document.getElementById('horizontalResizer')
    this.verticalResizer = document.getElementById('verticalResizer')

    if (!this.horizontalResizer || !this.verticalResizer) return
    this.leftSide = this.verticalResizer.previousElementSibling as HTMLElement
    this.rightSide = this.verticalResizer.nextElementSibling as HTMLElement
    this.topSide = this.horizontalResizer.previousElementSibling as HTMLElement
    this.bottomSide = this.horizontalResizer.nextElementSibling as HTMLElement
  }

  private resizeHandler (e: any) {
    if (!this.horizontalResizer || !this.leftSide || !this.rightSide) {
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
    if (!this.horizontalResizer || !this.leftSide || !this.rightSide) {
      console.error('개발자님, TwoGridSplitView에 문제가 발생했습니다.')
      return
    }

    const dx = e.clientX - this.x
    if (! this.horizontalResizer.parentNode) return
    let newLeftWidth = (this.leftWidth + dx) * 100 / (this.horizontalResizer.parentNode as Element).getBoundingClientRect().width

    /* 최소 값을 넘을 수 없음 */
    if (newLeftWidth < this.leftMaxWidth)
      newLeftWidth = this.leftMaxWidth

    // if (newLeftWidth >= this.rightMaxWidth)
    //   newLeftWidth = 100 - newLeftWidth

    this.leftSide.style.width = `${newLeftWidth}%`
    this.rightSide.style.width = `${100 - newLeftWidth}%`
    this.horizontalResizer.style.cursor = 'col-resize'
  }

  private resizerStopHandler () {
    if (!this.horizontalResizer || !this.leftSide || !this.rightSide) {
      console.error('개발자님, TwoGridSplitView에 문제가 발생했습니다.')
      return
    }

    this.horizontalResizer.style.removeProperty('cursor')
    document.body.style.removeProperty('cursor')
    this.leftSide.style.removeProperty('user-select')
    this.leftSide.style.removeProperty('pointer-events')
    this.rightSide.style.removeProperty('user-select')
    this.rightSide.style.removeProperty('pointer-events')

    /* Remove all events about resizer except mousedown */
    document.removeEventListener('mousemove', this.resizerMoveHandler)
    document.removeEventListener('mouseup', this.resizerStopHandler)
  }

  private horizontalResizeHandler (e: any) {
    if (!this.horizontalResizer || !this.topSide || !this.bottomSide) {
      console.error('개발자님, TwoGridSplitView에 문제가 발생했습니다.')
      return
    }

    this.x = e.clientX
    this.y = e.clientY
    this.topHeight = this.topSide.getBoundingClientRect().height
    /* Add new events to resizer  */
    document.addEventListener('mousemove', this.horizontalResizerMoveHandler)
    document.addEventListener('mouseup', this.horizontalResizerStopHandler)
  }

  private horizontalResizerMoveHandler (e: any) {
    if (!this.horizontalResizer || !this.topSide || !this.bottomSide) {
      console.error('개발자님, TwoGridSplitView에 문제가 발생했습니다.')
      return
    }

    const dy = e.clientY - this.y
    if (! this.horizontalResizer.parentNode) return
    const newTopHeight = (this.topHeight + dy) * 100 / (this.horizontalResizer.parentNode as Element).getBoundingClientRect().height
    // if (newLeftWidth >= this.rightMaxWidth)
    //   newLeftWidth = 100 - newLeftWidth

    this.topSide.style.height = `${newTopHeight}%`
    this.horizontalResizer.style.cursor = 'row-resize'
  }

  private horizontalResizerStopHandler () {
    if (!this.horizontalResizer || !this.leftSide || !this.rightSide) {
      console.error('개발자님, TwoGridSplitView에 문제가 발생했습니다.')
      return
    }

    this.horizontalResizer.style.removeProperty('cursor')
    document.body.style.removeProperty('cursor')
    this.leftSide.style.removeProperty('user-select')
    this.leftSide.style.removeProperty('pointer-events')
    this.rightSide.style.removeProperty('user-select')
    this.rightSide.style.removeProperty('pointer-events')

    /* Remove all events about resizer except mousedown */
    document.removeEventListener('mousemove', this.horizontalResizerMoveHandler)
    document.removeEventListener('mouseup', this.horizontalResizerStopHandler)

  }
}
</script>
<style lang="scss" scoped>
  @import "./styles/index.scss";
</style>
