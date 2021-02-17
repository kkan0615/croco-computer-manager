<template>
  <div
    class="fill-height"
  >
    <!--    {{ memory }}-->
    <v-card>
      <top-filter
        v-height="'7%'"
        class="mb-2"
      />
    </v-card>
    <v-row
      v-height="'92%'"
      class="ma-0"
    >
      <v-col
        v-height="'100%'"
        class="pa-0"
      >
        <v-card
          class="mb-2"
          height="50%"
        >
          <v-container
            fluid
            class="fill-height"
          >
            <v-row
              justify="center"
              align="center"
            >
              <usage-progressive-circular-memory
                class="mr-4"
                :rotate="-90"
                :value="memory.usedPercentage"
                color="error"
                title="Used"
              />

              <usage-progressive-circular-memory
                class="ml-4"
                :rotate="60"
                :value="memory.freePercentage"
                color="info"
                title="Free"
              />
            </v-row>
          </v-container>
        </v-card>
        <v-card
          height="49%"
        >
          test
          <!--          {{ memory }}-->
        </v-card>
      </v-col>
      <v-col
        class="fill-height"
      >
        <div
          v-height="'9%'"
          class="mb-2"
        >
          <v-select
            v-model="selectedIndex"
            outlined
            dense
            hide-details
            item-text="name"
            item-value="id"
            :items="selectedItems"
          />
        </div>
        <div
          v-height="'90%'"
        >
          <general-detail-memory
            v-if="selectedIndex === 0"
            :memory="memory"
          />
          <detail-memory
            v-else
            :memory-layout="selectedRamMemory"
          />
        </div>
      </v-col>
    </v-row>
    <!-- <v-tab-item -->
    <!--        v-for="layout in memory.layouts"-->
    <!--        :key="layout.serialNum"-->
    <!--      >-->
    <!--        {{ layout }}-->
    <!--      </v-tab-item>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { MemoryState } from '@/interfaces/store/memory'
import UsageProgressiveCircularMemory from '@/views/Memory/components/UsageProgressiveCircular.vue'
import EchartComponent from '@/components/Echart/index.vue'
import TopFilter from '@/components/TopFilter/index.vue'
import DetailMemory from '@/views/Memory/components/Detail.vue'
import { MemoryLayout } from '@/interfaces/model/ramMemory'
import GeneralDetailMemory from '@/views/Memory/components/GeneralDetail.vue'

@Component({
  name: 'Memory',
  components: { GeneralDetailMemory, DetailMemory, TopFilter, EchartComponent, UsageProgressiveCircularMemory },
  computed: {
    ...mapState('memory', {
      memory: state => state as MemoryState
    })
  }
})
export default class Memory extends Vue {
  private memory !: MemoryState

  /* 0이면 전체 */
  private selectedIndex = 0

  private get selectedRamMemory () {
    if (this.selectedIndex === 0)
      return {} as MemoryLayout
    return this.memory.layouts[this.selectedIndex - 1]
  }

  private get selectedItems () {
    const result = [{
      id: 0,
      name: 'General'
    }]

    for (let i = 0; i < this.memory.layouts.length; i++) {
      result.push({
        id: i + 1,
        name: this.memory.layouts[i].serialNum
      })
    }

    return result
  }
}
</script>
