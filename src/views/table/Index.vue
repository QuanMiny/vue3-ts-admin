<template>
  <div class="table">
    <Card>
      <template #header> 动态数据 </template>
      <el-table :data="momentList" :stripe="true">
        <el-table-column
          prop="id"
          label="ID"
          width="80"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="content"
          label="动态内容"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="author.name"
          label="作者"
          width="160"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="commentCount"
          label="评论数"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="200"
          align="center"
        >
          <template #default="scope">
            {{
              scope.row.createTime.slice(0, 10) +
              ' ' +
              scope.row.createTime.slice(11, 19)
            }}
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          v-model:page-size="state.page_size"
          v-model:currentPage="state.page_number"
          :page-sizes="[10, 20, 30]"
          layout="total,sizes, prev, pager, next"
          :total="momentTotal"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/base-ui/Card/Index.vue'
import { computed, reactive } from 'vue'
import { useAppStoreWithOut } from '@/store/app'

const appStore = useAppStoreWithOut()

appStore.getMomentListData(0, 10)
const momentList = computed(() => appStore.momentList)
const momentTotal = computed(() => appStore.momentTotal)

const state = reactive({
  page_size: 10,
  page_number: 1
})

const handleSizeChange = (size: number) => {
  state.page_size = size
  appStore.getMomentListData(
    (state.page_number - 1) * state.page_size,
    state.page_size
  )
}

const handleCurrentChange = (page: number) => {
  state.page_number = page
  appStore.getMomentListData(
    (state.page_number - 1) * state.page_size,
    state.page_size
  )
}
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: right;
  padding-top: 20px;
}
</style>
