<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { computed } from 'vue'
import { useThemeStoreWithOut } from '@/store/theme'

const themeStore = useThemeStoreWithOut()
const asideBg = computed(() => themeStore.styles.asideBg)
const headerBg = computed(() => themeStore.styles.headerBg)
const mainBg = computed(() => themeStore.styles.mainBg)

const menuActiveBg = computed(() => themeStore.styles.menuActiveBg)
</script>

<style lang="less">
.app {
  height: 100%;
}

.aside-bg {
  background-color: v-bind(asideBg);
}

.header-bg {
  background-color: v-bind(headerBg);
}

.main-bg {
  background-color: v-bind(mainBg);
}

.el-menu-item.is-active {
  background-color: v-bind(menuActiveBg);
}
</style>
