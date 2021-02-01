import { ExtendedRouteConfig } from '@/interfaces/system/router'

export const mainRouter: Array<ExtendedRouteConfig> = [
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
]
