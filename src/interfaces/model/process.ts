export interface ProcessInfo {
  all: number
  running: number
  blocked: number
  sleeping: number
  unknown: number
  list: Array<ProcessDetail>
}

export interface ProcessDetail {
  pid: number
  parentPid: number
  name: string
  cpu: number
  cpuu: number
  cpus: number
  mem: number
  priority: number
  memVsz: number
  memRss: number
  nice: number
  started: string
  state: string
  tty: string
  user: string
  command: string
  params: string
  path: string
}
