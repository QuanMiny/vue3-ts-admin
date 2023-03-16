<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="16">
        <Dataview />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <BarAndRadar />
      </el-col>
    </el-row>
    <!-- <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="24">
        <DataPanel />
      </el-col>
    </el-row> -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="24"> <Pie /> </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import BarAndRadar from './cpns/BarAndRadar.vue'
// import DataPanel from './cpns/DataPanel.vue'
import Dataview from './cpns/Dataview.vue'
import Pie from './cpns/Pie.vue'
</script>
<style lang="less">
.dashboard {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
}
</style>
