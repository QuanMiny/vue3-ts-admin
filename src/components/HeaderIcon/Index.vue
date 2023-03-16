<template>
  <el-tooltip
    class="item"
    effect="dark"
    :content="props.title"
    placement="bottom"
  >
    <div class="header-icon" @click="emitClick">
      <el-icon class="iconfont" :class="props.icon"></el-icon>
    </div>
  </el-tooltip>
</template>
<script lang="ts" setup>
const props = defineProps<{
  title: string
  icon: string
}>()
const emit = defineEmits(['emitClick'])
const emitClick = () => {
  emit('emitClick')
}
</script>
<style lang="less">
.header-icon {
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
