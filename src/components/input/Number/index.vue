<template>
  <!--  number field-->
  <v-text-field
    v-if="isNumberField"
    ref="numberFieldRef"
    class="hidden-number-spinner"
    type="number"
    :value="numberValue"
    :outlined="outlined"
    :label="label"
    :disabled="disabled"
    :readonly="readonly"
    :clearable="clearable"
    :filled="filled"
    :dense="dense"
    :rounded="rounded"
    :hide-details="hideDetails"
    :rules="innerRules"
    @blur="onBlurNumberField"
    @input="onInputNumberField"
    @keydown="onKeydown"
  />
  <!--  text field-->
  <v-text-field
    v-else
    :value="formattedStringNumber"
    :outlined="outlined"
    :label="label"
    :disabled="disabled"
    :readonly="readonly"
    :clearable="clearable"
    :filled="filled"
    :dense="dense"
    :rounded="rounded"
    :hide-details="hideDetails"
    :rules="innerRules"
    @focus="onFocusTextField"
  />
</template>

<script lang="ts">
import { Component, Emit, Prop, Ref, Vue } from 'vue-property-decorator'
import VueI18n from 'vue-i18n'
import { getFixedNumber, toFormattedLocaleString } from '@/utils/number'
import { DEFAULT_FIXED_NUMBER, DEFAULT_MAX_FRACTION_DIGITS } from '@/interfaces/system/number'

@Component({
  name: 'NumberInput'
})
export default class NumberInput extends Vue {
  /* Label */
  @Prop({ default: '', required: false, type: String })
  private readonly label !: string
  /* Hide details css */
  @Prop({ default: false, required: false, type: Boolean })
  private readonly hideDetails !: boolean
  /* Rules */
  @Prop({ default: () => [], required: false, type: Array })
  private readonly rules!: Array<(v: string) => boolean | string | VueI18n.TranslateResult>
  @Prop({ default: false, required: false, type: Boolean })
  private readonly readonly !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly disabled !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly outlined !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly clearable !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly filled !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly dense !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly rounded !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly required !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly solo !: boolean
  @Prop({ default: false, required: false, type: Boolean })
  private readonly singleLine !: boolean
  /* Suffix */
  @Prop({ default: '', required: false, type: String })
  private readonly suffix !: string
  @Prop({ default: DEFAULT_FIXED_NUMBER, required: false, type: Number })

  /******************* Custom values ***********************************/
  private readonly fixed !: number
  @Prop({ default: DEFAULT_MAX_FRACTION_DIGITS, required: false, type: Number })
  private readonly maximumFractionDigits !: number
  /* Value 부분 */
  @Prop({ required: true, type: [Number, String] })
  private readonly value !: number | string

  /**
   * Number field Ref
   * */
  @Ref('numberFieldRef')
  private readonly numberFieldRef!: HTMLInputElement

  private isNumberField = false
  /* Lazy binding을 하기 위한 variable */
  private innerRules: Array<(v: string) => boolean | string | VueI18n.TranslateResult> = []

  public get formattedStringNumber () {
    const formatted = toFormattedLocaleString(this.numberValue, this.maximumFractionDigits, this.fixed)
    return formatted === 'NaN' ? '' : formatted
  }

  public get numberValue (): number {
    return typeof this.value === 'string' ? getFixedNumber(parseFloat(this.value), this.fixed) : getFixedNumber(this.value, this.fixed)
  }

  /************************************* Method *************************************************/

  private async onFocusTextField () {
    await this.setCurrentField(true)
    this.numberFieldRef.focus()
  }

  private async onBlurNumberField () {
    if (!this.innerRules.length) this.innerRules = this.rules
    await this.setCurrentField(false)
  }

  private onInputNumberField (num: number) {
    this.$emit('update:value', num)
    this.$emit('input', num)
  }

  private setCurrentField (bool: boolean) {
    this.isNumberField = bool
    this.$emit('change:field', bool)
    return Promise.resolve(bool)
  }

  @Emit('keydown')
  private onKeydown (event: KeyboardEvent) {
    return event
  }
}
</script>
