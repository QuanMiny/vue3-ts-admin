<template>
  <div class="navbar">
    <div class="left">
      <Hamburger
        :collapse="menuCollapse"
        @emit-menu-collapse="handleMenuCollapse"
      />
      <Breadcrumb :breadcrumbs="breadcrumbs" />
    </div>
    <div class="right">
      <Screenfull />
      <HeaderAvatar />
      <HeaderIcon
        :icon="'icon-setting'"
        :title="'设置'"
        @emit-click="drawerFlag = true"
      />
    </div>
    <el-drawer v-model="drawerFlag" title="自定义主题颜色" size="350px">
      <SkinTheme style="padding-left: 20px" />
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import Hamburger from '@/components/Hamburger/Index.vue'
import Breadcrumb from '@/components/Breadcrumb/Index.vue'
import Screenfull from '@/components/Screenfull/Index.vue'
import HeaderAvatar from '@/components/HeaderAvatar/Index.vue'
import HeaderIcon from '@/components/HeaderIcon/Index.vue'
import SkinTheme from '@/components/SkinTheme/Index.vue'

import { ref, computed } from 'vue'
import { useAppStoreWithOut } from '@/store/app'
import { useLoginStoreWithOut } from '@/store/login'
import { mapPathToBreadcrumb } from '@/utils/mapMenus'
import { useRoute } from 'vue-router'

// 菜单折叠
const appStore = useAppStoreWithOut()
const menuCollapse = computed(() => appStore.menuCollapse)
const handleMenuCollapse = (flag: boolean) => {
  appStore.toggleMenuCollapse(flag)
}

const breadcrumbs = computed(() => {
  const loginStore = useLoginStoreWithOut()
  const userMenus = loginStore.getUserMenus
  const currentPath = useRoute().path

  return mapPathToBreadcrumb(userMenus, currentPath)
})

const drawerFlag = ref<boolean>(false)
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  > .left {
    display: flex;
    align-items: center;
  }
  > .right {
    display: flex;
    align-items: center;
  }
}
</style>
