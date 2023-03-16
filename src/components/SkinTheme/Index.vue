<template>
  <div class="skin-theme">
    <!-- <div class="theme-color">
      <div class="theme-color-label">是否显示logo</div>
      <div><el-switch v-model="styles.isLogo" /></div>
    </div> -->
    <div class="theme-color">
      <div class="theme-color-label">头部背景颜色</div>
      <div><el-color-picker v-model="styles.headerBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">主体内容背景颜色</div>
      <div><el-color-picker v-model="styles.mainBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">侧边栏背景颜色</div>
      <div><el-color-picker v-model="styles.asideBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">菜单栏背景颜色</div>
      <div><el-color-picker v-model="styles.menuBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">菜单栏字体颜色</div>
      <div><el-color-picker v-model="styles.menuTextColor" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">菜单栏选中字体颜色</div>
      <div><el-color-picker v-model="styles.menuTextActiveColor" /></div>
    </div>
    <!-- <div class="theme-color">
      <div class="theme-color-label">子菜单栏背景颜色</div>
      <div><el-color-picker v-model="styles.subMenuBg" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">子菜单栏悬浮背景颜色</div>
      <div><el-color-picker v-model="styles.subMenuHover" /></div>
    </div>
    <div class="theme-color">
      <div class="theme-color-label">子菜单栏选中背景颜色</div>
      <div><el-color-picker v-model="styles.subMenuActive" /></div>
    </div> -->
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useThemeStoreWithOut } from '@/store/theme'

const themeStore = useThemeStoreWithOut()
const styles = computed(() => themeStore.styles)
</script>
<style lang="less" scoped>
.skin-theme {
  .theme-color {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    &-label {
      min-width: 150px;
    }
  }
}
</style>
