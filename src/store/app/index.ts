import { defineStore } from 'pinia'
import { store } from '@/store'
import { IAppState } from './type'
import { getMomentList } from '@/service/app'

export const useAppStore = defineStore({
  id: 'app',
  state: (): IAppState => ({
    menuCollapse: false,
    momentList: [],
    momentTotal: 0
  }),
  getters: {},
  actions: {
    toggleMenuCollapse(flag: boolean) {
      this.menuCollapse = flag
    },

    // 获取数据
    async getMomentListData(offset: number, size: number) {
      const result = await getMomentList(offset, size)
      if (result.data.code == 200) {
        this.momentList = result.data.data.momentList
        this.momentTotal = result.data.data.momentTotal
      }
    }
  }
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
