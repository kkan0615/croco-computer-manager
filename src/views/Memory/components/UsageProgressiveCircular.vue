<template>
  <div>
    <v-progress-circular
      class="mb-3"
      :rotate="rotate"
      :size="100"
      :width="15"
      :value="value"
      :color="color"
    >
      {{ value }} %
    </v-progress-circular>
    <br>
    <div
      class="text-center"
    >
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'UsageProgressiveCircularMemory'
})
export default class UsageProgressiveCircularMemory extends Vue {
  @Prop({ type: Number, required: true })
  private readonly rotate !: number
  @Prop({ type: String, required: true })
  private readonly color !: string
  @Prop({ type: Number, required: true })
  private readonly value !: string
  @Prop({ type: String, required: true })
  private readonly title !: string
}
</script>
