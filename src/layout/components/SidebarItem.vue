<template>
  <template v-for="item in props.list" :key="item.id">
    <el-menu-item v-if="item.type == 1" :index="item.url">
      <el-icon v-if="props.isFirst" class="iconfont" :class="item.icon" />
      <template #title>
        <span>{{ item.name }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else-if="item.type == 2" :index="item.url">
      <template #title>
        <el-icon v-if="props.isFirst" class="iconfont" :class="item.icon" />
        <span>{{ item.name }}</span>
      </template>
      <SidebarItem :list="item.children" :is-first="false" />
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { IAsyncMenus } from '@/router/asyncMenus'

const props = defineProps<{
  list?: IAsyncMenus[] //路由列表
  isFirst: boolean //是否是第一级
}>()
</script>

<style lang="less" scoped></style>
