<template>
  <div class="line-echart">
    <base-echart
      :options="options"
      :width="width"
      :height="height"
    ></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue'
import BaseEchart from '@/base-ui/BaseEchart/base-echart.vue'
import { graphic } from 'echarts'
import { ECOption } from '@/base-ui/BaseEchart/hooks/type'

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

const colorList = ['#fd973f', '#8434e2', '#f34a4a', '#5e7cfb']

const options: ECOption = {
  title: {
    text: computed(() => props.title).value
  },
  tooltip: {
    trigger: 'axis'
  },
  toolbox: {},
  grid: {
    left: '3%',
    right: '4%',
    top: '6%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: computed(() => props.xLabels).value
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: computed(() => props.values[0].name).value,
      type: 'line',
      data: computed(() => props.values[0].data).value,
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 3,
        color: new graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: colorList[0]
          },
          {
            offset: 1,
            color: colorList[0]
          }
        ]),
        shadowColor: 'rgba(158,135,255, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        color: colorList[0],
        borderColor: colorList[0]
      }
    },
    {
      name: computed(() => props.values[1].name).value,
      type: 'line',
      data: computed(() => props.values[1].data).value,
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 3,
        color: new graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: colorList[1]
          },
          {
            offset: 1,
            color: colorList[1]
          }
        ]),
        shadowColor: 'rgba(115,221,255, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        color: colorList[1],
        borderColor: colorList[1]
      }
    },
    {
      name: computed(() => props.values[2].name).value,
      type: 'line',
      data: computed(() => props.values[2].data).value,
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 3,
        color: new graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: colorList[2]
          },
          {
            offset: 1,
            color: colorList[2]
          }
        ]),
        shadowColor: 'rgba(254,154,139, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        color: colorList[2],
        borderColor: colorList[2]
      }
    },
    {
      name: computed(() => props.values[3].name).value,
      type: 'line',
      data: computed(() => props.values[3].data).value,
      symbolSize: 1,
      symbol: 'circle',
      smooth: true,
      showSymbol: false,
      lineStyle: {
        width: 3,
        color: new graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: colorList[3]
          },
          {
            offset: 1,
            color: colorList[3]
          }
        ]),
        shadowColor: 'rgba(254,154,139, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        color: colorList[3],
        borderColor: colorList[3]
      }
    }
  ]
}
</script>

<style scoped></style>
