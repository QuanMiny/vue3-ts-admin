<template>
  <div class="layout">
    <el-container class="main-container">
      <el-aside
        class="page-aside aside-bg"
        :width="menuCollapse ? '63px' : '200px'"
      >
        <Sidebar :collapse="menuCollapse"></Sidebar>
      </el-aside>
      <el-container class="page-container">
        <el-header class="page-header header-bg">
          <Navbar />
        </el-header>
        <el-main class="page-main main-bg">
          <div class="page-box">
            <router-view v-slot="props">
              <transition name="fade" mode="out-in" appear>
                <keep-alive>
                  <component :is="props.Component"></component>
                </keep-alive>
              </transition>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

import { computed } from 'vue'
import { useAppStoreWithOut } from '@/store/app'

const appStore = useAppStoreWithOut()
const menuCollapse = computed(() => appStore.menuCollapse)
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
}

.main-container,
.page-container {
  height: 100%;
}

.page-aside {
  overflow-x: hidden;
  transition: width 0.3s linear;
}

.page-header {
  height: 48px !important;
}

.page-main {
  width: 100%;
  height: calc(100% - 48px);
  overflow-x: hidden; // 动画移动超出边界滚动条显示处理
  .page-box {
    // background-color: #fff;
    // border-radius: 5px;
  }
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
