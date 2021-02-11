export interface AudioInfo {
  audios: Array<Audio>
}

export interface Audio {
  id: number
  name: string
  manufacturer: string
  revision: any
  driver: any
  default: boolean
  channel: string
  type: string
  in: boolean
  out: boolean
  status: string
}
