import { ExtendedRouteConfig } from '@/interfaces/system/router'

export const mainRouter: Array<ExtendedRouteConfig> = [

  {
    path: 'cpu',
    name: 'Cpu',
    meta:{
      icon: 'developer_board',
    },
    component: () => import('@/views/Cpu/index.vue'),
  },
]
