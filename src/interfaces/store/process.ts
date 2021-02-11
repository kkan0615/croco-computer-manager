import { ProcessInfo } from '@/interfaces/model/process'

/* 필요시 interface로 변경하기 */
export type ProcessState = ProcessInfo


export enum ProcessGetterType {
  HAS_BATTERY = 'HAS_BATTERY'
}

export enum ProcessMutationType {
  SET_BATTERY = 'SET_BATTERY'
}

export enum ProcessActionType {
  initBatteryInfo = 'INIT_BATTERY_INFO',
  observeBatteryInfo = 'OBSERVE_BATTERY_INFO'
}
