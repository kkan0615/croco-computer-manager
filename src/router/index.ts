import Vue from 'vue'
import GeneralLayout from '@/layouts/general/index.vue'
import VueRouter from 'vue-router'
import { ExtendedRouteConfig } from '@/interfaces/system/router'
import AuthLayout from '@/layouts/Auth/index.vue'
import { ExampleRouter } from '@/router/modules/example.ts'
import { TempRouter } from '@/router/modules/temp.ts'

Vue.use(VueRouter)

const routes: Array<ExtendedRouteConfig> = [
  {
    path: '/',
    name: 'GeneralLayout',
    meta:{
      hidden: true,
    },
    //Todo: home component 만들어서 bind
    component: GeneralLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        meta: {
          hidden: true,
        },
        component: () => import('@/views/Home/index.vue'),
      }
    ]
  },
  ...TempRouter,
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      hidden: true,
    },
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        meta: {
          icon: 'mdi-help-box',
        },
        component: () => import('@/views/Login/index.vue'),
      }
    ]
  },
  {
    path: '*',
    name: 'NotFound',
    meta: {
      hidden: true,
    },
    component: () => import('../views/error/NotFound/index.vue'),
  },
  ...ExampleRouter,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
