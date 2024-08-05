<template>
  <view class="topTitle" :style="{ ...props.customStyle }">
    <uni-icons type="left" size="24" style="margin-right: 10rpx" v-if="props.showArrow"></uni-icons>
    <text class="title" style="line-height: 42rpx">
      <slot></slot>
    </text>
  </view>
</template>

<script setup>
const props = defineProps({
  showArrow: {
    type: Boolean,
    default: true
  },
  customStyle: {
    type: Object,
    default: {}
  }
});
</script>

<style type="scss">
.topTitle {
  display: flex;
  align-items: center;
  margin: 20rpx 0rpx 20rpx 20rpx;
}
</style>
