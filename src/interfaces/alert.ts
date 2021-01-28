import { SnackbarOption } from '@/interfaces/snackbar'
import { NotificationOption } from '@/interfaces/system/notification'

export interface AlertState {
  snackbar: SnackbarOption
  notifications: Array<NotificationOption>
}
