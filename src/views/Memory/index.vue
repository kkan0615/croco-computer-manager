<template>
  <div
    class="fill-height"
  >
    {{ memory }}
    <v-tabs
      v-model="tabIndex"
    >
      <v-tab>
        General
      </v-tab>
      <v-tab
        v-for="(layout, index) in memory.layouts"
        :key="index"
      >
        {{ layout.serialNum }}
      </v-tab>
      <v-tab-item>
        <!--        {{ memory }}-->
        <v-card
          class="mb-2"
        >
          top 1
        </v-card>
        <v-row>
          <v-col>
            <v-card>
              <usage-progressive-circular-memory
                :rotate="-90"
                :value="memory.usedPercentage"
                color="error"
              />
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <usage-progressive-circular-memory
                :rotate="0"
                :value="memory.freePercentage"
                color="info"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item
        v-for="layout in memory.layouts"
        :key="layout.serialNum"
      >
        {{ layout }}
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { MemoryState } from '@/interfaces/store/memory'
import UsageProgressiveCircularMemory from '@/views/Memory/components/UsageProgressiveCircular.vue'

@Component({
  name: 'Memory',
  components: { UsageProgressiveCircularMemory },
  computed: {
    ...mapState('memory', {
      memory: state => state as MemoryState
    })
  }
})
export default class Memory extends Vue {
  private memory !: MemoryState
  private tabIndex = 0
  private memoryUsageHistories: Array<number> = []
}
</script>
