export interface NetworkInfo {
  networkInterfaces: Array<NetworkInterface>
  networkStats: Array<NetworkStat>
  networkConnections: Array<NetworkConnection>
}

export interface NetworkInterface {
  iface: string
  ifaceName: string
  ip4: string
  ip4subnet: string
  ip6: string
  ip6subnet: string
  mac: string
  internal: boolean
  virtual: boolean
  operstate: string
  type: string
  duplex: string
  mtu: number
  speed: any
  dhcp: boolean
  dnsSuffix: string
  ieee8021xAuth: string
  ieee8021xState: string
  carrierChanges: number
}

export interface NetworkConnection {
  protocol: string
  localAddress: string
  localPort: string
  peerAddress: string
  peerPort: string
  state: string
  pid: number
  process: string
}

/**
 * Should get every seconds to get speed
 * */
export interface NetworkStat {
  iface: string
  operstate: string
  rx_bytes: number
  rx_dropped: number
  rx_errors: number
  tx_bytes: number
  tx_dropped: number
  tx_errors: number
  rx_sec: any
  tx_sec: any
  ms: number
}
