import { NetworkInfo } from '@/interfaces/model/network'

export type NetworkState = NetworkInfo

export enum NetworkGetterType {
  NETWORK_INTERFACES = 'NETWORK_INTERFACES',
  NETWORK_STATS = 'NETWORK_STATS',
  NETWORK_CONNECTIONS = 'NETWORK_CONNECTIONS'
}

export enum NetworkMutationType {
  SET_NETWORKINFO = 'SET_NETWORKINFO',
  SET_NETWORK_INTERFACES = 'SET_NETWORK_INTERFACES',
  SET_NETWORK_STATS = 'SET_NETWORK_STATS',
  SET_NETWORK_CONNECTIONS= 'SET_NETWORK_CONNECTIONS'
}

export enum BatteryActionType {
  initNetworkInfo = 'INIT_NETWORKINFO',
  observeNetworkInfo = 'OBSERVE_NETWORKINFO',
  observeNetworkInterfaces = 'OBSERVE_NETWORK_INTERFACES',
  observeNetworkStats = 'OBSERVE_NETWORK_STATS',
  observeNetworkConnections = 'OBSERVE_NETWORK_CONNECTIONS',
}
