<template>
  <div
    class="playground"
  >
    <TwoGridSplitView>
      <template #left>
        <v-card>
          <v-card-title>left</v-card-title>
        </v-card>
      </template>
      <template #right>
        <v-card>
          <v-card-title>right</v-card-title>
        </v-card>
      </template>
    </TwoGridSplitView>
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
    <!--    <p>This is playground view</p>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TwoGridSplitView from '@/components/splitView/TwoGrid/index.vue'

@Component({
  name: 'Playground',
  components: { TwoGridSplitView }
})
export default class Playground extends Vue {
}
</script>
<style scoped lang="scss">
  .playground {
    height: 100%;
    overflow: hidden;
  }
</style>
