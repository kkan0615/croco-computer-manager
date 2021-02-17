<template>
  <v-card
    height="100%"
  >
    <v-card-title>
      {{ memoryLayout.serialNum }}
    </v-card-title>
    <v-card-text>
      {{ memoryLayout.manufacturer }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { MemoryLayout } from '@/interfaces/model/ramMemory'
import { MemoryInfo } from 'electron'

@Component({
  name: 'DetailMemory'
})
export default class DetailMemory extends Vue {
  @Prop({ type: Object, default: {}, required: true })
  private readonly memoryLayout !: MemoryLayout | MemoryInfo
}
</script>
