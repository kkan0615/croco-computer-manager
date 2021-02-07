export interface GraphicInfo {
  controllers: Array<Graphic>
  displays: Array<GraphicDisplay>
}

export interface Graphic {
  bus: string
  clockCore: number
  clockMemory: number
  driverVersion: string
  memoryFree: number
  memoryTotal: number
  memoryUsed: number
  model: string
  name: string
  pciBus: string
  powerDraw: number
  powerLimit: number
  subDeviceId: string
  temperatureGpu: number
  utilizationGpu: number
  utilizationMemory: number
  vendor: string
  vram: number
  vramDynamic: boolean
}

export interface GraphicDisplay {
  builtin: boolean
  connection: string
  currentResX: number
  currentResY: number
  deviceName: string
  main: boolean
  model: string
  pixelDepth: string
  positionX: boolean
  positionY: boolean
  resolutionX: number
  resolutionY: number
  sizeX: number
  sizeY: number
  vendor: string
}
