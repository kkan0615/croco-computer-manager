<template>
  <v-container>
    Dev 예제

    <v-row>
      <v-col>
        <dx-text-box
          v-model="text"
          :max-length="40"
          value-change-event="keyup"
        />
      </v-col>
      <v-col>
        <dx-color-box
          v-model="color"
          apply-value-mode="instantly"
        />
      </v-col>
    </v-row>
    <h1 :style="`color: ${color}`">
      {{ text }}
    </h1>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { DxTextBox, DxColorBox } from 'devextreme-vue'

@Component({
  name: 'PostExample',
  components:{
    DxTextBox,
    DxColorBox
  }
})

export default class PostExample extends Vue {
  private text = '데브 입력창 예제'
  private color = '#f05b41'
}
</script>
