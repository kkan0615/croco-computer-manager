import { getCurrentLocale } from '@/utils/locale'
import { DEFAULT_FIXED_NUMBER, DEFAULT_MAX_FRACTION_DIGITS } from '@/interfaces/system/number'

/**
 * 123,32352.323 같이 자를때 사용하는 함수
 * @param number - changing target number
 * @param maximumFractionDigits - splice digits by it
 */
export const toFormattedLocaleString = (number: number, maximumFractionDigits = DEFAULT_MAX_FRACTION_DIGITS, fixed = DEFAULT_FIXED_NUMBER) => {
  number = parseFloat(number.toFixed(fixed))
  console.log(number)
  return number.toLocaleString(getCurrentLocale(), { maximumFractionDigits })
}

export const getFixedNumber = (number: number, fixed = DEFAULT_FIXED_NUMBER) => {
  return number = parseFloat(number.toFixed(fixed))
}
