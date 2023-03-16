<template>
  <el-row :gutter="20">
    <el-col :xs="12" :sm="12" :lg="24">
      <Card class="mb-20">
        <template #header>今日转评赞统计</template>
        <BarChart v-bind="mockBarData" :height="'150px'" />
      </Card>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="24">
      <Card class="mb-20">
        <template #header>内容题材分布</template>
        <RadarChart :height="'150px'" />
      </Card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import Card from '@/base-ui/Card/Index.vue'
import BarChart from '@/components/Charts/BarChart/BarChart.vue'
import RadarChart from '@/components/Charts/RadarChart/RadarChart.vue'
import { computed } from 'vue'

const mockBarData = computed(() => {
  const xLabels: string[] = ['分享量', '评论量', '点赞量']
  const values: any[] = [1344, 576, 900]
  return { xLabels, values }
})
</script>

<style lang="less" scoped>
.bar,
.radar {
  height: 144px;
}
</style>
