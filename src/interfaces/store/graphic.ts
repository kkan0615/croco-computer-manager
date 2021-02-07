import { GraphicInfo } from '@/interfaces/model/graphic'

export type GraphicState = GraphicInfo

export enum GraphicMutationType {
  SET_GRAPHIC = 'SET_GRAPHIC'
}

export enum GraphicActionType {
  INIT_GRAPHIC_INFO = 'INIT_GRAPHIC_INFO',
  OBSERVE_GRAPHIC_INFO = 'OBSERVE_GRAPHIC_INFO'
}
