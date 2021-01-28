import { ExtendedRouteConfig } from '@/interfaces/system/router'
import GeneralLayout from '@/layouts/general/index.vue'


export const TempRouter: Array<ExtendedRouteConfig> = [
  {
    path: '/general',
    name: 'GeneralLayout',
    component: GeneralLayout,
    meta: {
      icon: 'mdi-home'
    },
    children: [
      {
        path: 'playground',
        name: 'Playground',
        meta:{
          icon: 'shop',
        },
        component: () => import('@/views/temp/Playground/index.vue'),
      },
      {
        path: 'playground2',
        name: 'Playground2',
        meta:{
          icon: 'shop',
        },
        component: () => import('@/views/temp/Playground2/index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        meta: {
          icon: 'mdi-update',
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
    ]
  },
]
