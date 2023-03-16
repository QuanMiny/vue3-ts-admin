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
import { withDefaults } from 'vue'
import { ECOption } from '@/base-ui/BaseEchart/hooks/type'
import BaseEchart from '@/base-ui/BaseEchart/base-echart.vue'
import { graphic } from 'echarts'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    title?: string
  }>(),
  {
    title: '',
    width: '100%',
    height: '360px'
  }
)

const options: ECOption = {
  color: ['#fd973f', '#8434e2', '#40c8ff'],
  tooltip: {
    show: true,
    textStyle: {
      fontSize: 12
    },
    position: ['50%', '0%']
  },
  grid: {
    left: '3%',
    right: '4%',
    top: '6%',
    bottom: '3%'
  },
  legend: {
    orient: 'vertical',
    right: '15%',
    top: '20%',
    icon: 'circle'
  },
  radar: {
    indicator: [
      { name: '国际' },
      { name: '财经' },
      { name: '娱乐' },
      { name: '体育' },
      { name: '科技' },
      { name: '其他' }
    ],
    axisNameGap: 4,
    center: ['30%', '50%'],
    axisName: {
      color: '#000'
    }
  },
  series: [
    {
      type: 'radar',
      data: [
        {
          value: [14, 15, 15, 11, 43, 8],
          name: '纯文本',
          symbol: 'none',
          areaStyle: {
            color: new graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(235, 151, 63, 0.1)',
                offset: 0
              },
              {
                color: 'rgba(235, 151, 63, 0.9)',
                offset: 1
              }
            ])
          }
        },
        {
          value: [14, 15, 17, 16, 7, 18],
          name: '图文类',
          symbol: 'none',
          areaStyle: {
            color: new graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(132, 52, 226, 0.1)',
                offset: 0
              },
              {
                color: 'rgba(132, 52, 226, 0.9)',
                offset: 1
              }
            ])
          }
        },
        {
          value: [11, 21, 25, 13, 36, 21],
          name: '视频类',
          symbol: 'none',
          areaStyle: {
            color: new graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(64, 200, 255, 0.1)',
                offset: 0
              },
              {
                color: 'rgba(64, 200, 255, 0.9)',
                offset: 1
              }
            ])
          }
        }
      ]
    }
  ]
}
</script>

<style scoped></style>
