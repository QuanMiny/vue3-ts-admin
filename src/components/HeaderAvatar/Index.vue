<template>
  <div class="header-avatar">
    <el-dropdown>
      <img
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        style="height: 36px; outline: none"
      />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            ><span @click="handleExitClick">退出登录</span></el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import localCache from '@/utils/cache'
import { useRouter } from 'vue-router'
const router = useRouter()

const handleExitClick = () => {
  localCache.deleteCache('token')
  localCache.deleteCache('userMenus')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
