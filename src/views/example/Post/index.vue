<template>
  <v-container>
    Post 예제
    <v-row>
      <v-col cols="8">
        <v-text-field
          label="Post & Get 요청 주소"
          v-model="address"
        />
      </v-col>
      <v-col cols="1">
        <v-btn @click="sendRequest">
          {{ $t('test.request') }}
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn @click="save">
          저장
        </v-btn>
      </v-col>
    </v-row>
    <div>
      {{ message }}
    </div>
    <dx-data-grid
      :data-source="dataSource"
    >
      <dx-editing
        :allow-updating="true"
        mode="cell"
      />
    </dx-data-grid>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import axios from 'axios'
import { DxDataGrid } from 'devextreme-vue'
import { DxEditing } from 'devextreme-vue/data-grid'

@Component({
  name: 'PostExample',
  components:{
    DxDataGrid,
    DxEditing
  }
})

export default class PostExample extends Vue {
  private address = '/xusers/2'
  private message = '데이터를 조회 해주세요.'
  private dataSource: Array<any> = []

  private async sendRequest () {
    const result = await axios.get(`http://localhost:3030${this.address}`)
    this.message = result.data.message

    if (result.data.data.Xposts) {
      this.message = result.data.data.nickname + '의 게시글들'
      this.dataSource = result.data.data.Xposts
    } else {
      this.dataSource = result.data.data.rows
    }
  }

  private save () {
    if (this.address === '/xusers/' || this.address === '/xusers') {
      for (const row of this.dataSource) {
        axios.put(`http://localhost:3030/xusers/${row.id}`, row)
      }
    } else {
      alert('사용자에 대해서만 변경 할 수 있습니다.')
    }
  }

}
</script>
