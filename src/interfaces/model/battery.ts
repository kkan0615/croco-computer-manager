export interface BatteryInfo {
  hasBattery: boolean
  cycleCount: number
  isCharging: boolean
  designedCapacity: number
  maxCapacity: number
  currentCapacity: number
  voltage: number
  capacityUnit: string
  percent: number
  timeRemaining: number
  acConnected: boolean
  type: string
  model: string
  manufacturer: string
  serial: string
}

export const DEFAULT_BATTERY_INTERVAL_TIMEOUT = 1000
