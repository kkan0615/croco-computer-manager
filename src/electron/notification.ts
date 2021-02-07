import { ipcMain, Notification, NotificationConstructorOptions } from 'electron'

export enum SystemNotificationChanel {
  SHOW_SYSTEM_NOTIFICATION = 'show-system-notification'
}

export const setNotificationIpcMain = () => {
  try {
    ipcMain.on(SystemNotificationChanel.SHOW_SYSTEM_NOTIFICATION, ((event, args: NotificationConstructorOptions) => {
      showSystemNotification(args)
    }))
  } catch (e) {
    console.error(e)
  }
}

export const showSystemNotification = (notification: NotificationConstructorOptions) => {
  new Notification(notification).show()
}
