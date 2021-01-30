<template>
  <div
    class="fill-height"
    style="max-height: 100%"
  >
    <v-row
      class="fill-height"
    >
      <v-col
        :cols="8"
        class="fill-height pa-1"
      >
        <v-card
          v-scrollable
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
          <v-card-title class="pa-1">
            {{ cpu.manufacturer }} - {{ cpu.brand }}
          </v-card-title>
          <v-divider />
          <v-card-text class="pa-1">
            <!-- Cores -->
            <flex-description-cpu
              label="Cores:"
              :content="cpu.cores"
            />
            <!-- Physical Cores -->
            <flex-description-cpu
              label="Physical Cores:"
              :content="cpu.physicalCores"
            />
            <!-- Socket + processors -->
            <flex-description-cpu
              :label="`Socket (${cpu.socket})`"
              :content="cpu.processors"
            />
            <flex-description-cpu
              label="Virtualization"
              :content="cpu.virtualization ? 'Yes' : 'No'"
            />
            <flex-description-cpu
              label="Default Speed"
              :content="cpu.speedMax"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CpuState } from '@/interfaces/store/cpu'
import FlexDescriptionCpu from '@/views/Cpu/components/FlexDescription.vue'
import Os from 'os'

@Component({
  name: 'Cpu',
  components: { FlexDescriptionCpu }
})
export default class Cpu extends Vue {
  private cpu = this.$store.state.cpu as CpuState

  created () {
    console.log(Os.totalmem())
    console.log(Os.freemem())
  }
}
</script>
