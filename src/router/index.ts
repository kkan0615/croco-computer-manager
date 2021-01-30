import Vue from 'vue'
import GeneralLayout from '@/layouts/general/index.vue'
import VueRouter from 'vue-router'
import { ExtendedRouteConfig } from '@/interfaces/system/router'
import AuthLayout from '@/layouts/Auth/index.vue'
import { mainRouter } from '@/router/modules/main'

Vue.use(VueRouter)

const routes: Array<ExtendedRouteConfig> = [
  {
    path: '/',
    name: 'GeneralLayout',
    meta: {
      hidden: true,
    },
    component: GeneralLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        meta:{
          icon: 'shop',
        },
        component: () => import('@/views/Home/index.vue'),
      },
      ...mainRouter
    ]
  },
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
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
