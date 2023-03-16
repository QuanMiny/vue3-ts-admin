<template>
  <div class="bar-echart">
    <base-echart
      :options="options"
      :width="width"
      :height="height"
    ></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import { ECOption } from '@/base-ui/BaseEchart/hooks/type'
import BaseEchart from '@/base-ui/BaseEchart/base-echart.vue'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    title?: string
    xLabels: string[]
    values: any[]
  }>(),
  {
    title: '',
    width: '100%',
    height: '360px'
  }
)

const options: ECOption = {
  grid: {
    left: '3%',
    right: '4%',
    top: '6%',
    bottom: '3%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    data: computed(() => props.xLabels).value
  },
  series: [
    {
      type: 'bar',
      barWidth: 14,
      itemStyle: {
        color: '#1e84f0',
        borderRadius: [30, 30, 30, 30]
      },
      data: computed(() => props.values).value
    }
  ]
}
</script>

<style scoped></style>
