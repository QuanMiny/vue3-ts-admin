<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, withDefaults, watchEffect, watch } from 'vue'
import { ECOption } from './hooks/type'
import useEchart from './hooks/useEchart'

import { useAppStoreWithOut } from '@/store/app'

// 定义props
const props = withDefaults(
  defineProps<{
    options: ECOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

// 菜单折叠触发大小变化
const appStore = useAppStoreWithOut()
const menuCollapse = computed(() => appStore.menuCollapse)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions, updateSize } = useEchart(echartDivRef.value!)

  watchEffect(() => {
    setOptions(props.options)
  })

  watch(
    () => menuCollapse.value,
    () => {
      updateSize()
    }
  )
})
</script>

<style scoped></style>
