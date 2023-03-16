<template>
  <el-tooltip
    class="item"
    effect="dark"
    :content="state.isScreenfull ? '退出全屏' : '全屏'"
    placement="bottom"
  >
    <div class="screenfull" @click="handleScreenfull">
      <el-icon
        class="iconfont"
        :class="state.isScreenfull ? 'icon-fullscreen-exit' : 'icon-fullscreen'"
      ></el-icon>
    </div>
  </el-tooltip>
</template>
<script lang="ts" setup>
import screenfull from 'screenfull'
import { reactive } from 'vue'

const state = reactive({
  isScreenfull: false as boolean
})
/**
 * @desc:设置||退出全屏
 * @param {*}
 * @return {*}
 */
const handleScreenfull = () => {
  screenfull.toggle()
  if (!state.isScreenfull) {
    return false
  }
  screenfull.toggle()
}
/**
 * @desc: 监听浏览器全屏变化
 * @param {*}
 * @return {*}
 */
const handleScreenfullChange = () => {
  state.isScreenfull = !state.isScreenfull
}
screenfull.on('change', handleScreenfullChange)
</script>

<style lang="less">
.screenfull {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.025);
  }
  i {
    font-size: 20px;
    color: #666;
  }
}
</style>
