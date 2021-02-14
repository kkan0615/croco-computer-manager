import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { DeviceActionType, DeviceMutationType, DeviceState } from '@/interfaces/store/device'
import { AudioInfo, BluetoothDeviceInfo, UsbInfo } from '@/interfaces/model/device'
import si from 'systeminformation'

const state: DeviceState = {
  usbs: [],
  bluetoothDevice: [],
  audios: [],
}

const getters = {
} as GetterTree<DeviceState, never>

const mutations = {
  [DeviceMutationType.SET_DEVICE_INFO] (state: DeviceState, payload: DeviceState) {
    state = Object.assign(state, payload)
  },
  [DeviceMutationType.SET_USB_INFO] (state: DeviceState, payload: Array<UsbInfo>) {
    state.usbs = Object.assign(state.usbs, payload)
  },
  [DeviceMutationType.SET_BLUETOOTH_DEVICE_INFO] (state: DeviceState, payload: Array<BluetoothDeviceInfo>) {
    state.bluetoothDevice = Object.assign(state.bluetoothDevice, payload)
  },
  [DeviceMutationType.SET_AUDIO_DEVICE_INFO] (state: DeviceState, payload: Array<AudioInfo>) {
    state.audios = Object.assign(state.audios, payload)
  }
} as MutationTree<DeviceState>

const actions = {
  async [DeviceActionType.setDeviceInfo] ({ commit }) {
    const usbs = (await si.usb()) as Array<UsbInfo>
    // @TODO: 현재 BlockDevicesData를 return하는 버그가 있음, 풀리퀘 하기
    const bluetoothDevices = (await si.bluetoothDevices()) as Array<any>
    const audios = (await si.audio()) as Array<AudioInfo>
    commit(DeviceMutationType.SET_DEVICE_INFO, {
      usbs,
      bluetoothDevices,
      audios
    })
  }
} as ActionTree<DeviceState, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
