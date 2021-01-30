<template>
  <div
    style="height: 100%"
  >
    <v-row
      class="fill-height"
    >
      <v-col
        :cols="8"
        class="fill-height pa-1"
      >
        <v-card
          class="fill-height"
        >
          {{ cpu }}
        </v-card>
      </v-col>
      <v-col
        :cols="4"
        class="fill-height pa-1"
      >
        <v-card
          class="fill-height"
        >
          <v-card-title>{{ cpu.manufacturer }} - {{ cpu.brand }}</v-card-title>
          <v-divider />
          <v-card-text>
            {{ cpu.cores }}
            {{ cpu.physicalCores }}
            {{ cpu.processors }}
            {{ cpu.socket }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CpuState } from '@/interfaces/store/cpu'

@Component({
  name: 'Cpu'
})
export default class Cpu extends Vue {
  private cpu = this.$store.state.cpu as CpuState
}
</script>
