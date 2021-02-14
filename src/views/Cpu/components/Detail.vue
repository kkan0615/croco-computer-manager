<template>
  <v-card
    class="fill-height"
  >
    <v-card-title>
      {{ cpu.manufacturer }} - {{ cpu.brand }}
    </v-card-title>
    <v-divider />
    <v-card-text
      class="text-body-1"
    >
      <div>
        Cores: {{ cpu.cores }}
      </div>
      <div>
        Physical Cores: {{ cpu.physicalCores }}
      </div>
      <div>
        Socket ({{ cpu.socket }}): {{ cpu.processors }}
      </div>
      <div>
        Virtualization: {{ cpu.virtualization ? 'Yes' : 'No' }}
      </div>
      <div>
        Default Speed: {{ cpu.speedMax }}
      </div>
    </v-card-text>
    <v-divider />
    <v-card-text
      v-if="process.all > 0"
    >
      <div>
        {{ topFiveProcesses }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CpuState } from '@/interfaces/store/cpu'
import { mapState } from 'vuex'
import { ProcessState } from '@/interfaces/store/process'

@Component({
  name: 'DetailCpu',
  computed: {
    ...mapState('cpu', {
      cpu: state => state as CpuState
    }),
    ...mapState('process', {
      process: state => state as ProcessState
    })
  }
})
export default class DetailCpu extends Vue {
  /* Cpu store state */
  private readonly cpu !: CpuState
  private readonly process !: ProcessState

  private get topFiveProcesses () {
    if (this.process.all <= 0) {
      return []
    }
    const sorted = this.process.list.sort((a, b) => a.cpus - b.cpus)
    const result = []
    for (let i = 0; i < 5; i++) {
      result.push(sorted[i].name)
    }

    return result
  }
}
</script>
