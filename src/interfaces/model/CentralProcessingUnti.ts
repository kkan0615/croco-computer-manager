
export interface CentralProcessingUnitInfo extends CentralProcessingUnit{
  cache: CentralProcessingUnitCache
  temperature: CentralProcessingUnitTemperature
  speedDetail: CentralProcessingUnitSpeedDetail
  load: CentralProcessingUnitLoad
}

export interface CentralProcessingUnit {
  manufacturer: string
  brand: string
  vendor: string
  family: string
  model: string
  stepping: string
  revision: string
  voltage: string
  speed: number
  speedMin: number
  speedMax: number
  governor: string
  cores: number
  physicalCores: number
  processors: number
  socket: string
  flags: string
  virtualization: boolean
}

export interface CentralProcessingUnitCache {
  l1d: number
  l1i: number
  l2: number
  l3: number
}

export interface CentralProcessingUnitSpeedDetail {
  min: number
  max: number
  avg: number
  cores: Array<number>
}

export interface CentralProcessingUnitTemperature {
  main: number
  cores: Array<any>
  max: number
}

export interface CentralProcessingUnitLoad {
  fullLoad: number
  avgLoad: number
  cpus: Array<any>
  currentLoad: number
  currentLoadIdle: number
  currentLoadIrq: number
  currentLoadNice: number
  currentLoadSystem: number
  currentLoadUser: number
  rawCurrentLoad: number
  rawCurrentLoadIdle: number
  rawCurrentLoadIrq: number
  rawCurrentLoadNice: number
  rawCurrentLoadSystem: number
  rawCurrentLoadUser: number
}

export interface CentralProcessingUnitCheck {
  check: boolean // if it's false, only check in the page
  timeout: number // seconds
  usageCheck: boolean
  usageWarn: number // percentage between 0 and 100
  temperatureCheck: boolean
  temperatureWarn: number // int between 0 and 100
  speedCheck: boolean
  speedWarn: number // float GHz
}
