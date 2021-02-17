export interface RamMemory {
  total: number
  free: number
  freePercentage: number
  used: number
  usedPercentage: number
  active: number
  available: number
  buffers: number
  cached: number
  slab: number
  buffcache: number
  swaptotal: number
  swapused: number
  swapfree: number
  layouts: Array<MemoryLayout>
}

export interface MemoryLayout {
  size: number
  bank: string
  type: string
  clockSpeed: number
  formFactor:  string
  manufacturer: string
  partNum: string
  serialNum: string
  voltageConfigured: number
  voltageMin: number
  voltageMax: number
}
