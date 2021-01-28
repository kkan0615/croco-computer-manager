<template>
  <v-card
    class="ml-3"
    tile
    elevation="0"
    width="100%"
    height="100%"
  >
    <v-card-actions
      class="pa-1 justify-end"
      style="height: 6%"
    >
      <v-btn
        v-if="status === 'READ' && selectedProduct.id"
        color="primary"
        icon
        small
        @click="editForm"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        v-if="status === 'CREATE' || status === 'UPDATE'"
        color="primary"
        icon
        small
      >
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn
        v-if="status === 'CREATE' || status === 'UPDATE'"
        color="primary"
        icon
        small
        @click="cancelWriteForm"
      >
        <v-icon>cancel</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider />
    <v-card-text
      v-if="selectedProduct.id"
      v-scrollable="{height: '94%'}"
    >
      <v-form>
        <v-row
          class="pa-1"
        >
          <v-col
            :cols="4"
            class="pa-0 pr-1"
          >
            <v-text-field
              v-model="selectedProduct.title"
              outlined
              label="제목"
              dense
            />
          </v-col>
          <v-col
            :cols="4"
            class="pa-0 pr-1"
          >
            <v-text-field
              v-model="selectedProduct.price"
              outlined
              label="가격"
              dense
            />
          </v-col>
          <v-col
            :cols="4"
            class="pa-0 pr-1"
          >
            <v-text-field
              v-model="selectedProduct.category"
              outlined
              label="카테고리"
              dense
            />
          </v-col>
          <v-col
            :cols="12"
            class="pa-0"
          >
            <v-textarea
              v-model="selectedProduct.category"
              outlined
              label="카테고리"
              dense
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-row
      v-else
      class="fill-height"
      align="center"
      justify="center"
    >
      <div
        class="text-h6"
      >
        왼쪽에서 데이터를 먼저 선택해주세요.
      </div>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { DummyProduct } from '@/interfaces/model/dummyProduct'
import { Status } from '@/views/example/ListWithForm/types'

@Component({
  name: 'FormListWithFormExample'
})
export default class FormListWithFormExample extends Vue {
  @Prop({ required: false, type: Object, default: {} as DummyProduct })
  private readonly selectedProduct!: DummyProduct
  @Prop({ required: true, type: String, default: 'READ' as Status })
  private readonly status!: Status

  @Emit('editForm')
  private editForm () {
    return
  }

  private cancelWriteForm () {
    if (!confirm('취소할 경우 기본데이터로 돌아갑니다. 계속 하시겠습니까?')) return

    this.$emit('cancelWriteForm')
  }
}
</script>

