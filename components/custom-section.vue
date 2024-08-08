<template>
  <view class="custom-section" :style="{ ...props.customStyle }">
    <view class="topTitle">
      <view class="section-left">
        <text class="title">{{ props.title }}</text>
      </view>
      <view class="section-right">
        <slot name="rightName"></slot>
        <uni-icons class="section-right-icon" type="forward" color="#c3c3c5" size="16" style="margin-right: 10rpx" v-if="props.showArrow"></uni-icons>
      </view>
    </view>
    <slot></slot>
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
  },
  title: String
});
</script>

<style type="scss">
.custom-section {
  margin-bottom: 20rpx;
  padding: 40rpx 24rpx 20rpx;
  border-radius: 20rpx;
  background-color: #fff;
}
.topTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
}
.section-left {
  font-size: $uni-font-size-lg;
  font-weight: 500;
}
.section-right {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #c3c3c5;
  .section-right-icon {
    margin-left: 8rpx;
  }
}
</style>
