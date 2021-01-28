export interface NotificationOption {
  id: number
  title?: string
  message: string
  color?: string
  icon?: string
  type: NotificationType
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error'
