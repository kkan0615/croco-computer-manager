
export interface CentralProcessingUnitInfo extends CentralProcessingUnit{
  cache: CentralProcessingUnitCache
  temperature: CentralProcessingUnitTemperature
  speedDetail: CentralProcessingUnitSpeedDetail
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
