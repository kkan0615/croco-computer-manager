<template>
  <v-progress-circular
    :rotate="rotate"
    :size="100"
    :width="15"
    :value="value"
    :color="color"
  >
    {{ value }} %
  </v-progress-circular>
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
}
</script>
