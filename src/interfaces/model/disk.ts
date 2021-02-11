export interface DiskInfo {
  device: string
  type: string
  name: string
  vendor: string
  size: number
  bytesPerSector: any
  totalCylinders: any
  totalHeads: any
  totalSectors: any
  totalTracks: any
  tracksPerCylinder: any
  sectorsPerTrack: any
  firmwareRevision: ''
  serialNum: string
  interfaceType: string
  smartStatus: string
  smartData: any
}

export interface BlockDevices {
  name: string
  type: string
  fsType: string
  mount: string
  size: number
  physical: string
  uuid: string
  label: string
  model: string
  serial: string
  removable: boolean
  protocol: string
  group?: any
}

export interface FileSystemStat {
  fs: string
  type: string
  size: number
  used: number
  available: number
  use: number
  mount: string
}
