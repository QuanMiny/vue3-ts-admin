<template>
  <div>
    <Card class="mb-20">
      <template #header>数据总览</template>
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :lg="6">
          <div class="info">
            <div class="info-title">内容生产量</div>
            <div class="info-content">
              <img class="color-icon" src="@/assets/images/编写.svg" />
              <span class="count">1169</span>
            </div>
          </div></el-col
        >
        <el-col :xs="12" :sm="12" :lg="6"
          ><div class="info">
            <div class="info-title">内容点击量</div>
            <div class="info-content">
              <img class="color-icon" src="@/assets/images/点赞.svg" />
              <span class="count">1901</span>
            </div>
          </div></el-col
        >
        <el-col :xs="12" :sm="12" :lg="6">
          <div class="info">
            <div class="info-title">内容曝光量</div>
            <div class="info-content">
              <img class="color-icon" src="@/assets/images/爱心.svg" />
              <span class="count">1881</span>
            </div>
          </div></el-col
        >
        <el-col :xs="12" :sm="12" :lg="6">
          <div class="info">
            <div class="info-title">活跃用户量</div>
            <div class="info-content">
              <img class="color-icon" src="@/assets/images/用户.svg" />
              <span class="count">1671</span>
            </div>
          </div></el-col
        >
      </el-row>
      <LineChart v-bind="mockLineData" :height="'332px'" />
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/base-ui/Card/Index.vue'
import LineChart from '@/components/Charts/LineChart/LineChart.vue'
import { computed } from 'vue'

const mockLineData = computed(() => {
  const xLabels: string[] = [
    '03-01',
    '03-02',
    '03-03',
    '03-04',
    '03-05',
    '03-06',
    '03-07'
  ]
  const values: any[] = [
    {
      name: '内容生产量',
      color: '#fd973f',
      data: [31, 52, 13, 24, 75, 46, 67]
    },
    {
      name: '内容点击量',
      color: '#5e7cfb',
      data: [11, 72, 33, 14, 55, 66, 37]
    },
    {
      name: '内容曝光量',
      color: '#5e7cfb',
      data: [71, 52, 53, 64, 15, 56, 17]
    },
    {
      name: '活跃用户量',
      color: '#298df7',
      data: [51, 32, 63, 74, 15, 26, 47]
    }
  ]
  return { xLabels, values }
})
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  height: 60px;
  .info-title {
    padding-bottom: 10px;
  }
  .info-content {
    .color-icon {
      width: 24px;
      vertical-align: middle;
    }
    .count {
      font-size: 18px;
      vertical-align: middle;
      padding-left: 20px;
    }
  }
}

.chart {
  height: 322px;
}
</style>
