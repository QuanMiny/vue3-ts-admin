<template>
  <div class="sidebar">
    <!-- router="true" 启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu
      mode="vertical"
      :background-color="menuBg"
      :text-color="menuTextColor"
      :active-text-color="menuTextActiveColor"
      :default-active="currentPath"
      :collapse="collapse"
      :router="true"
    >
      <SidebarItem :list="userMenus" :is-first="true"></SidebarItem>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLoginStoreWithOut } from '@/store/login'
import { useThemeStoreWithOut } from '@/store/theme'

defineProps({
  collapse: {
    type: Boolean,
    default: false
  }
})

const userLoginStore = useLoginStoreWithOut()
const userMenus = userLoginStore.getUserMenus
// 刷新页面可获取当前路径
const currentPath = useRoute().path

// 配置颜色
const themeStore = useThemeStoreWithOut()
const menuBg = computed(() => themeStore.styles.menuBg)
const menuTextColor = computed(() => themeStore.styles.menuTextColor)
const menuTextActiveColor = computed(
  () => themeStore.styles.menuTextActiveColor
)
</script>

<style lang="less" scoped>
.el-menu {
  border-right: 0 !important;
}
</style>
