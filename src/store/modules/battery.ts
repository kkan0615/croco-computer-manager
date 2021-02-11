import { ActionTree, GetterTree, MutationTree } from 'vuex'
import {
  BatteryActionType,
  BatteryGetterType,
  BatteryMutationType,
  BatteryState
} from '@/interfaces/store/battery'
import si from 'systeminformation'

const state: BatteryState = {
  hasBattery: false,
  cycleCount: 0,
  isCharging: false,
  designedCapacity: 0,
  maxCapacity: 0,
  currentCapacity: 0,
  voltage: 0,
  capacityUnit: '',
  percent: 0,
  timeRemaining: 0,
  acConnected: false,
  type: '',
  model: '',
  manufacturer: '',
  serial: '',
}

const getters = {
  [BatteryGetterType.HAS_BATTERY] (state: BatteryState) {
    return state.hasBattery
  }
} as GetterTree<BatteryState, never>

const mutations = {
  [BatteryMutationType.SET_BATTERY] (state: BatteryState, payload: BatteryState) {
    state = Object.assign(state, payload)
  }
} as MutationTree<BatteryState>

const actions = {
  async [BatteryActionType.initBatteryInfo] ({ commit }) {
    const battery = await si.battery()
    commit(BatteryMutationType.SET_BATTERY, battery)
  },
  async [BatteryActionType.observeBatteryInfo] ({ commit }) {
    const battery = await si.battery()
    commit(BatteryMutationType.SET_BATTERY, battery)
  }
} as ActionTree<BatteryState, never>

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
