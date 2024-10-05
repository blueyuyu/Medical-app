<template>
  <!-- 医生评价 -->
  <view class="doctor-rating">
    <view class="title">医生服务评价</view>
    <view class="subtitle">本次在线问诊服务您还满意吗？</view>
    <view class="rating">
      <uni-rate :size="28" margin="12" :value="0" />
    </view>
    <view class="text">
      <uni-easyinput
        type="textarea"
        maxlength="150"
        :input-border="false"
        :styles="{ backgroundColor: '#f6f6f6' }"
        placeholder-style="font-size: 28rpx; color: #979797"
        placeholder="请描述您对医生的评价或是在医生看诊过程中遇到的问题"
      />
      <text class="word-count">0/150</text>
    </view>
    <view class="anonymous">
      <uni-icons v-if="true" size="16" color="#16C2A3" type="checkbox-filled" />
      <uni-icons v-else size="16" color="#d1d1d1" type="circle" />
      <text class="label">匿名评价</text>
    </view>
    <button disabled class="uni-button">提交</button>
  </view>
</template>

<script>
export default {
  name: 'rate-info'
};
</script>

<script setup></script>

<style lang="scss" scoped>
.doctor-rating {
  padding: 30rpx 30rpx 40rpx;
  border-radius: 20rpx;
  background-color: #fff;
  margin-top: 60rpx;

  .title {
    text-align: center;
    font-size: 30rpx;
    color: #121826;
  }

  .subtitle {
    text-align: center;
    font-size: 24rpx;
    color: #6f6f6f;
    margin: 10rpx 0 20rpx;
  }

  .rating {
    display: flex;
    justify-content: center;
  }

  .text {
    padding: 20rpx 30rpx;
    margin-top: 20rpx;
    background-color: #f6f6f6;
    border-radius: 20rpx;
    position: relative;
  }

  :deep(.uni-easyinput__content-textarea) {
    font-size: 28rpx;
  }

  .word-count {
    position: absolute;
    bottom: 20rpx;
    right: 30rpx;
    line-height: 1;
    font-size: 24rpx;
    color: #6f6f6f;
  }

  .anonymous {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30rpx 0;
    color: #6f6f6f;
    font-size: 24rpx;

    .label {
      margin-left: 6rpx;
    }
  }

  .uni-button[disabled] {
    color: #a6dbd5;
    background-color: #eaf8f6;
  }
}
</style>
