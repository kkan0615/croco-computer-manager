<template>
  <div>
    <!--    <confirm-dialog />-->
    <number-input
      v-model="testValue"
    />
    <!--    <setting-dialog-appbar-general-->
    <!--      v-model="testBool"-->
    <!--    />-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ConfirmDialog from '@/components/ConfirmDialog/index.vue'
import NumberInput from '@/components/input/Number/index.vue'
import SettingDialogAppbarGeneral
  from '@/layouts/general/components/appBar/components/SettingDialog.vue'

@Component({
  name: 'Home',
  components: { SettingDialogAppbarGeneral, NumberInput, ConfirmDialog }
})
export default class Home extends Vue {
  private testValue = '123455.34532645'
  private testBool = true

  // private test () {
  //   return toFormattedLocaleString(this.testValue)
  // }
}
</script>
