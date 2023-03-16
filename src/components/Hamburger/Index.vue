<template>
  <div class="hamburger" @click="emitMenuCollapse">
    <el-icon
      class="iconfont"
      :class="props.collapse ? 'icon-s-unfold' : 'icon-s-fold'"
    ></el-icon>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { watchEffect } from 'vue'

const props = defineProps<{
  collapse: boolean
}>()

const emit = defineEmits(['emitMenuCollapse'])
const emitMenuCollapse = () => {
  emit('emitMenuCollapse', !props.collapse)
}

// 响应式折叠
const { width } = useWindowSize()

watchEffect(() => {
  if (width.value < 960) {
    emit('emitMenuCollapse', true)
  } else {
    emit('emitMenuCollapse', false)
  }
})
</script>

<style lang="less" scoped>
.hamburger {
  font-size: 20px;
  cursor: pointer;
}
</style>
