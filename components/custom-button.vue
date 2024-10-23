<!-- // 内容字体 // 边框弧度 // 边框颜色 // 字体颜色// 点击按钮触发的事件 -->
<template>
  <button
    size="mini"
    type="default"
    :style="{ borderColor: props.borderColor, borderRadius: props.borderRadius, color: props.color, margin: props.margin, fontWeight: props.fontWeight }"
    class="btn"
    hover-class="is-hover"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  borderColor: {
    type: String,
    default: '#00c8aa'
  },
  borderRadius: {
    type: String,
    default: '24rpx'
  },
  color: {
    type: String,
    default: '#00c8aa'
  },
  // #00c8aa  #16c2a3
  width: {
    type: String,
    default: '140rpx'
    // 四个字的 ， 170rpx
  },
  margin: {
    type: String,
    default: '0 0'
  },
  fontWeight: {
    type: String,
    default: '500'
  }
});
</script>

<style lang="scss" scoped>
.is-hover {
  color: rgba(255, 255, 255, 0.6);
}
.btn {
  // width: 120rpx;
  background-color: #fff;
  // color: #16c2a3;
  border: 1px solid;
  // border-radius: 24rpx;
}
</style>
