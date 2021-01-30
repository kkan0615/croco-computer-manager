import { CentralProcessingUnitInfo } from '../model/CentralProcessingUnti'

export interface CpuState extends CentralProcessingUnitInfo {
  histories: number
}

export type CpuMutation = 'SET_CPU_INFO' | 'SET_CPU' | 'SET_CPU_TEMPERATURE' | 'SET_CPU_SPEED_DETAIL' | 'SET_CPU_CACHE'
