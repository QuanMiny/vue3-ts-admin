<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :lg="6">
        <Card class="mb-20">
          <template #header>用户留存趋势</template>
          <div class="panel"></div>
        </Card>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <Card class="mb-20">
          <template #header>用户留存量</template>
          <div class="panel"></div>
        </Card> </el-col
      ><el-col :xs="12" :sm="12" :lg="6">
        <Card class="mb-20">
          <template #header>内容消费趋势</template>
          <div class="panel"></div>
        </Card> </el-col
      ><el-col :xs="12" :sm="12" :lg="6">
        <Card class="mb-20">
          <template #header>内容消费量</template>
          <div class="panel"></div>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Card from '@/base-ui/Card/Index.vue'
</script>

<style lang="less" scoped>
.panel {
  height: 100px;
}
</style>
