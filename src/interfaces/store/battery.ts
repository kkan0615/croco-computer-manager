import { BatteryInfo } from '@/interfaces/model/battery'

export type BatteryState = BatteryInfo

export enum BatteryGetterType {
  HAS_BATTERY = 'HAS_BATTERY'
}

export enum BatteryMutationType {
  SET_BATTERY = 'SET_BATTERY'
}

export enum BatteryActionType {
  initBatteryInfo = 'INIT_BATTERY_INFO',
  observeBatteryInfo = 'OBSERVE_BATTERY_INFO'
}
