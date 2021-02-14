import { DeviceInfo } from '@/interfaces/model/device'

export type DeviceState = DeviceInfo

export enum DeviceMutationType {
  SET_DEVICE_INFO = 'SET_DEVICE_INFO',
  SET_USB_INFO = 'SET_USB_INFO',
  SET_BLUETOOTH_DEVICE_INFO = 'SET_BLUETOOTH_DEVICE_INFO',
  SET_AUDIO_DEVICE_INFO = 'SET_AUDIO_DEVICE_INFO',
}

export enum DeviceActionType {
  setDeviceInfo = 'SET_DEVICE_INFO',
  setUsbInfo = 'SET_USB_INFO',
  setBluetoothDeviceInfo = 'SET_BLUETOOTH_DEVICE_INFO',
  setAudioDeviceInfo = 'SET_AUDIO_DEVICE_INFO',
}
