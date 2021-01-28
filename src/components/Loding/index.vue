<template>
  <v-overlay
    :value="$store.getters['application/isOpenLoading']"
    :z-index="100"
    opacity="0.97"
  >
    <div
      class="loading justify-center"
    >
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>
    <div
      class="mt-4 text-center text-h6"
    >
      Tip: {{ tip }}
    </div>
  </v-overlay>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'FullScreenLoading',
})
export default class FullScreenLoading extends Vue {
  private loading = false
  private tip = ''

  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'application/setLoading') {
        this.loading = state.application.loading
        if (this.loading) this.tip = this.generateRandomTip()
      }
    })
  }

  private generateRandomTip () {
    const random = Math.floor(Math.random() * 5) + 1
    return this.$t('loadingTips.tip' + random).toString()
  }
}
</script>

<style lang="scss" scoped>
  .loading {
    $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
    display: flex;
    .dot {
      position: relative;
      width: 2em;
      height: 2em;
      margin: 0.8em;
      border-radius: 50%;
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        animation: wave 2s ease-out infinite;
      }
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          background: nth($colors, $i);
          &::before {
            animation-delay: $i * 0.2s;
          }
        }
      }
    }
  }
  @keyframes wave {
    50%,
    75% {
      transform: scale(2.5);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
</style>
