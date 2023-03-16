<template>
  <div>
    <Card>
      <template #header>内容发布来源</template>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :lg="8">
          <PieChart
            :title="'纯文本'"
            :values="mockValues"
            :height="'160px'"
            class="mb-20"
          />
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8">
          <PieChart
            :title="'图文类'"
            :values="mockValues"
            :height="'160px'"
            class="mb-20"
          />
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8">
          <PieChart
            :title="'视频类'"
            :values="mockValues"
            :height="'160px'"
            class="mb-20"
          />
        </el-col>
      </el-row>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/base-ui/Card/Index.vue'
import PieChart from '@/components/Charts/PieChart/PieChart.vue'

const mockValues: any[] = [
  { value: 1048, name: 'UGC原创' },
  { value: 735, name: '国外网站' },
  { value: 580, name: '转载资源' },
  { value: 484, name: '行业报告' },
  { value: 300, name: '其他' }
]
</script>

<style lang="less" scoped>
.pie {
  height: 200px;
}
</style>
