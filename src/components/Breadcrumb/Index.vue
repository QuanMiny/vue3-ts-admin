<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadcrumbs" :key="item.name">
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IBreadcrumb } from './type'

defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.breadcrumb {
  padding-left: 10px;
}
</style>
