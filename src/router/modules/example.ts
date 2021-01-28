import { ExtendedRouteConfig } from '@/interfaces/system/router'
import GeneralLayout from '@/layouts/general/index.vue'

export const ExampleRouter: Array<ExtendedRouteConfig> = [
  {
    path: '/example',
    name: 'Example',
    meta: {
      icon: 'mdi-cog-outline',
    },
    component: GeneralLayout,
    children:[
      {
        path: 'post',
        name: 'PostExample',
        meta: {
          icon: 'mdi-account-multiple-outline',
          hidden: true
        },
        component: () => import('@/views/example/Post/index.vue')
      },
      {
        path: 'dev',
        name: 'DevExample',
        meta: {
          icon: 'mdi-account-multiple-outline',
          hidden: true
        },
        component: () => import('@/views/example/Dev/index.vue')
      },
      {
        path: 'listWithForm',
        name: 'ListWithFormExample',
        meta: {
          icon: 'mdi-account-multiple-outline',
        },
        component: () => import('@/views/example/ListWithForm/index.vue')
      },
      {
        path: 'echart',
        name: 'echartExample',
        meta: {
          icon: 'insert_chart',
        },
        component: () => import('@/views/example/ListWithForm/index.vue')
      }
    ],
  },
]
