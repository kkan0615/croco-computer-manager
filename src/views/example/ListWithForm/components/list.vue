<template>
  <v-card
    tile
    elevation="0"
    width="25%"
    height="100%"
  >
    <v-card-actions
      style="height: 6%"
      class="pa-1"
    >
      <v-checkbox
        :value="checkedAll"
        class="pa-0 ma-0"
        hide-details
        dense
        @change="handleCheckedAll"
      />
      <v-spacer />
      <v-btn
        color="primary"
        icon
        small
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        icon
        small
        :disabled="!checkedData.length"
        @click="handleDelete"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider />
    <v-card-text
      v-scrollable="{height: '94%'}"
      class="pa-1"
    >
      <v-list>
        <v-list-item-group
          color="primary"
          @change="onChangeSelectedValue"
        >
          <div
            v-for="dummyExample in dummyExamples"
            :key="dummyExample.id"
            class="pa-0"
          >
            <v-list-item>
              <v-list-item-action>
                <v-checkbox
                  class="pa-0 ma-0"
                  hide-details
                  dense
                  :value="isInCheckedList(dummyExample)"
                  @change="(bool) => handleCheckedList(bool, dummyExample)"
                  @click.prevent.stop="() => {}"
                />
              </v-list-item-action>
              <v-list-item-content
                class="pa-0"
              >
                <v-list-item-title>
                  {{ dummyExample.title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ dummyExample.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
          </div>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { DummyProduct } from '@/interfaces/model/dummyProduct'
import { SnackbarOption } from '@/interfaces/snackbar'

@Component({
  name: 'ListListWithFormExample'
})
export default class ListListWithFormExample extends Vue {
  @Prop({ required: true, type: Array })
  private readonly dummyExamples!: Array<DummyProduct>
  @Prop({ required: true, type: Boolean, default: false })
  private readonly checkedAll!: boolean
  @Prop({ required: true, type: Array, default: [] })
  private readonly checkedData!: Array<DummyProduct>

  /**
   * 왼쪽에 선택되어야하는지 안되어야하는지를 컨트롤 하는 함수,
   * get 즉 computed를 사용 할 경우 parameter를 받을 수 없기 때문에 일반 함수 사용
   * @param data - Target data
   */
  private isInCheckedList (data: DummyProduct) {
    /* Deep copy로 들어온 것은 바로 indexOf(data)로 찾을 수 없음 */
    const index = this.checkedData.findIndex(checked => checked.id === data.id)
    return !!(index + 1)
  }

  @Emit('onChangeSelectedValue')
  private onChangeSelectedValue (selectedData?: number) {
    if (!selectedData && selectedData !== 0) return {} as DummyProduct
    else return this.dummyExamples[selectedData]
  }

  /**
   * Add to or remove from checked list
   * @param bool - true is add, false is remove
   * @param data - adding or removing data
   */
  private handleCheckedList (bool: boolean, data: DummyProduct) {
    this.$emit('checked', bool, data)
  }

  /**
   * checkedAll check box를 눌렀을 때 나오는 이벤트를 handling 해주는 함수
   * @param bool - status of checkedAll
   */
  @Emit('handleCheckedAll')
  private handleCheckedAll (bool: boolean) {
    return bool
  }

  private handleDelete () {
    if (!this.checkedData.length) {
      this.$store.commit('alert/showSnackbar', {
        content: '값을 먼저 선택해주시기 바랍니다.',
        color: 'warning',
      } as SnackbarOption)
      return
    }

    this.$emit('handleDelete')
  }
}
</script>
