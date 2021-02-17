<template>
  <v-card
    height="100%"
  >
    <v-card-title>
      {{ cachedMemory }}
      {{ swapMemory }}
      {{ memory }}
    </v-card-title>
    <v-card-text>
      {{ memory.buffers }} / {{ memory.buffcache }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RamMemory } from '@/interfaces/model/ramMemory'
import { getFixedNumber, toFormattedLocaleString } from '@/utils/number'

@Component({
  name: 'GeneralDetailMemory'
})
export default class GeneralDetailMemory extends Vue {
  @Prop({ type: Object, default: {}, required: true })
  private readonly memory !: RamMemory

  private get cachedMemory () {
    return (this.memory.cached * 100)
  }

  private get swapMemory () {
    const used = toFormattedLocaleString(getFixedNumber(this.memory.swapused))
    const total = toFormattedLocaleString(getFixedNumber(this.memory.total))
    return `${used} / ${total}`
  }
}
</script>
