import moment from 'moment'
import { getCurrentLocale } from '@/utils/locale'

moment.locale(getCurrentLocale())

export const setMomentToCurrentLocale = () => {
  moment.locale(getCurrentLocale())
}
