<template>
  <div class="card">
    <div v-if="$slots.header || header" class="card-header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
.card {
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  padding: 20px;
  .card-header {
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
