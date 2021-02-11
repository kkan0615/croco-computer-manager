export interface GeneralInfo {
  current: number
  timezone: string
  timezoneName: string
  uptime: number
}

export interface SystemHardware {
  manufacturer: string
  model: string
  version: string
  serial: string
  uuid: string
  sku: string
  virtual: boolean
}

export interface SystemUUID {
  os: string
  hardware: string
  macs: Array<string>
}

export interface Bios {
  vendor: string
  version: string
  releaseDate: string
  revision: string
  langage: string
  features: Array<string>
}

export interface Motherboard {
  manufacturer: string
  model: string
  version: string
  serial: string
  assetTag: string
  memMax: number
  memSlots: number
}

export interface ChassisInfo {
  manufacturer: string
  model: string
  type: 'desktop' | string
  version: string
  serial: string
  assetTag: string
  sku: string
}

export interface OsInfo {
  platform: string
  distro: string
  release: string
  codename: string
  kernel: string
  arch: string
  hostname: string
  fqdn: string
  codepage: string
  logofile: string
  serial: string
  build: string
  servicepack: string
  uefi: boolean
}
