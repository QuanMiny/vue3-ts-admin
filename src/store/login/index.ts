import { defineStore } from 'pinia'
import { store } from '@/store'
import { ILoginState } from './type'
import {
  IAsyncMenus,
  mockMenus,
  adminMenus,
  vistorMenus
} from '@/router/asyncMenus'

import router from '@/router'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/mapMenus'

import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

export const useLoginStore = defineStore({
  id: 'login',
  state: (): ILoginState => ({
    userMenus: []
  }),
  getters: {
    getUserMenus(): IAsyncMenus[] {
      return this.userMenus
    }
  },
  actions: {
    /**
     *
     * @description 账号登录
     */
    accountLoginAction(payload: any) {
      let allMenus: IAsyncMenus[] = []
      // 模拟登录
      if (payload.name == 'admin' && payload.password == '123456') {
        localCache.setCache('token', 'admin')
        allMenus = mockMenus.concat(adminMenus)
      } else if (payload.name == 'vistor' && payload.password == '123456') {
        localCache.setCache('token', 'vistor')
        allMenus = mockMenus.concat(vistorMenus)
      } else {
        ElMessage({
          message: '无此账号~',
          type: 'error'
        })
        return
      }

      // http请求得到模拟路由数据
      const userMenusData = allMenus
      this.changeUserMenus(userMenusData)

      router.push('/dashboard')
    },
    /**
     * @description 动态生成路由表
     */
    changeUserMenus(menus: IAsyncMenus[]) {
      // pinia保存路由
      this.userMenus = menus
      // 生成动态路由映射表
      const asyncRoutes = mapMenusToRoutes(menus)
      // 加入 router.Layout.children 子路由
      asyncRoutes.forEach((route) => {
        router.addRoute('Layout', route)
      })

      // 设置菜单缓存缓存
      localCache.setCache('userMenus', menus)
    },
    /**
     *
     * @description 缓存信息加载
     */
    loadLocalLogin() {
      const token = localCache.getCache('token')
      if (token) {
        // token验证
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        this.changeUserMenus(userMenus)
      }
    }
  }
})

export function useLoginStoreWithOut() {
  return useLoginStore(store)
}
