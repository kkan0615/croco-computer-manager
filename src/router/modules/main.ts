import { ExtendedRouteConfig } from '@/interfaces/system/router'

export const mainRouter: Array<ExtendedRouteConfig> = [
  {
    path: 'general',
    name: 'general',
    meta:{
      icon: 'business',
    },
    component: () => import('@/views/General/index.vue'),
  },
  {
    path: 'cpu',
    name: 'Cpu',
    meta:{
      icon: 'memory',
    },
    component: () => import('@/views/Cpu/index.vue'),
  },
  {
    path: 'memory',
    name: 'Memory',
    meta:{
      icon: 'straighten',
    },
    component: () => import('@/views/Memory/index.vue'),
  },
  {
    path: 'graphic',
    name: 'Graphic',
    meta:{
      icon: 'monitor',
    },
    component: () => import('@/views/Graphic/index.vue'),
  },
  {
    path: 'battery',
    name: 'Battery',
    meta:{
      icon: 'battery_charging_full',
    },
    component: () => import('@/views/Battery/index.vue'),
  },
  {
    path: 'process',
    name: 'Process',
    meta:{
      icon: 'show_chart',
    },
    component: () => import('@/views/Process/index.vue'),
  },
]
