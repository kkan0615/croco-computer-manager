import si from 'systeminformation'

export interface DeviceInfo {
  usbs: Array<UsbInfo>
  bluetoothDevice: Array<BluetoothDeviceInfo>
  audios: Array<AudioInfo>
}

export type UsbInfo = si.Systeminformation.UsbData

export type BluetoothDeviceInfo = si.Systeminformation.BluetoothDeviceData

export type AudioInfo = si.Systeminformation.AudioData

// @TODO: 정리되면 사용하기.
export type DeviceType = 'Mouse' | 'Keyboard'
