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
    values: any[]
  }>(),
  {
    title: '',
    width: '100%',
    height: '360px'
  }
)

const options: ECOption = {
  color: ['#18A8FF', '#1848D8', '#18D8FF', '#9060D8', '#90D860'],
  title: {
    text: computed(() => props.title).value,
    show: true,
    left: 'center',
    top: '42%',
    textStyle: {
      fontWeight: 600,
      fontSize: 14
    }
  },
  grid: {
    top: '5%'
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '75%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        formatter: '{d}%' //自定义显示格式(b:name, c:value, d:百分比)
      },
      data: computed(() => props.values).value
    }
  ]
}
</script>

<style scoped></style>
