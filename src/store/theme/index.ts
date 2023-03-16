import { defineStore } from 'pinia'
import { store } from '@/store'
import { IThemeState } from './type'

export const useThemeStore = defineStore({
  id: 'theme',
  state: (): IThemeState => ({
    styles: {
      isLogo: true,
      asideBg: '#001529',
      headerBg: '#ffffff',
      mainBg: '#f0f2f5',
      menuBg: '#001529',
      menuTextColor: '#e2e2e2',
      menuActiveBg: '#121212',
      menuTextActiveColor: '#0a60bd',
      subMenuBg: '#1f2d3d',
      subMenuHover: '#001528',
      subMenuActive: '#001528'
    }
  }),
  getters: {},
  actions: {}
})

export function useThemeStoreWithOut() {
  return useThemeStore(store)
}
