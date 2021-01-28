<template>
  <div
    style="height: 100%"
  >
    <TripleGridSplitView>
      <template #left>
        <v-card
          width="70%"
          height="100%"
        >
          <v-card-title
            style="height: 20%"
          >
            Test title
          </v-card-title>
          <v-divider />
          <v-data-table
            v-scrollable="{height: '80%'}"
            dense
            :headers="headers"
            :items="desserts"
            :items-per-page="500"
            class="elevation-1"
            hide-default-footer
          />
        </v-card>
      </template>
      <template #right>
        <v-card
          width="30%"
          height="100%"
        >
          Test
        </v-card>
      </template>
      <template
        #bottom
      >
        <v-card
          v-scrollable
          width="100%"
          height="100%"
        >
          <v-data-table
            dense
            :headers="headers"
            :items="desserts"
            :items-per-page="500"
            hide-default-footer
          />
        </v-card>
      </template>
    </TripleGridSplitView>
    <v-card
      class="justify-end align-end"
    >
      <v-btn>
        test
      </v-btn>
      <v-btn>
        test
      </v-btn>
      <v-btn>
        test
      </v-btn>
      <v-btn>
        test
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TripleGridSplitView from '@/components/splitView/TripleGrid/index.vue'
import { desserts } from '@/views/temp/Playground2/data'

@Component({
  name: 'Playground2',
  components: {
    TripleGridSplitView
  }
})
export default class Playground2 extends Vue {
  private headers = [
    {
      text: 'Dessert (100g serving)',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
  ]

  private desserts = desserts
}
</script>
