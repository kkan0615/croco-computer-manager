<template>
  <div
    class="d-flex"
    :style="$vuetify.breakpoint.mdAndUp ? 'width: 50%' : ''"
  >
    <div>
      <slot>
        {{ label }}
      </slot>
    </div>
    <div
      class="ml-auto"
    >
      {{ content }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'FlexDescriptionCpu'
})
export default class FlexDescriptionCpu extends Vue {
  @Prop({ type: String, required: true })
  private readonly label !: string
  @Prop({ type: [String, Number], required: true })
  private readonly content !: string | number
  created () {
    this.$vuetify.breakpoint.mdAndUp
  }
}
</script>
