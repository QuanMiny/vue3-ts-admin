import { createRouter, createWebHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('../layout/Index.vue'),
    children: [
      {
        path: '',
        redirect: '/dashboard'
      }
      // ---以下为动态引入
      // {
      //   path: '/dashboard',
      //   name: 'dashboard',
      //   component: () => import('../views/dashboard/Index.vue'),
      //   meta: {
      //     title: 'dashboard'
      //   }
      // },
      // {
      //   path: '/charts/bar',
      //   name: 'bar',
      //   component: () => import('../views/charts/bar/Index.vue'),
      //   meta: {
      //     title: 'bar'
      //   }
      // },
      // {
      //   path: '/charts/line',
      //   name: 'line',
      //   component: () => import('../views/charts/line/Index.vue'),
      //   meta: {
      //     title: 'line'
      //   }
      // },
      // {
      //   path: '/nested/menu1-1',
      //   name: 'menu1-1',
      //   component: () => import('../views/nested/menu1-1/Index.vue'),
      //   meta: {
      //     title: 'menu1-1'
      //   }
      // },
      // {
      //   path: '/nested/menu1-2/menu1-2-1',
      //   name: 'menu1-2-1',
      //   component: () => import('../views/nested/menu1-2/menu1-2-1/Index.vue'),
      //   meta: {
      //     title: 'menu1-2-1'
      //   }
      // }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/Index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  //设置site标题
  document.title = String(to.meta.title ?? 'admin')
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  // if (to.path === '/main') {
  //   return firstMenu.url
  // }
})

export default router
