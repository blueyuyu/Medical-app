<template>
  <!-- 处方消息（22） -->
  <view class="e-prescription">
    <view class="prescription-content">
      <view class="list-title">
        <view class="label">电子处方</view>
        <view class="extra">
          原始处方
          <uni-icons size="16" color="#848484" type="right" />
        </view>
      </view>
      <view class="list-item">李富贵 男 31岁 血管性头痛</view>
      <view class="list-item">开方时间：2022-01-15 14:21:42</view>

      <view class="dividing-line"></view>

      <view class="list-title">
        <view class="label">
          <text class="name">优赛明 维生素E乳</text>
          <text class="unit">85ml</text>
          <text class="quantity">x1</text>
        </view>
      </view>
      <view class="list-item">口服，每次1袋，每天3次，用药3天</view>
    </view>
    <navigator class="uni-link" hover-class="none" url="/subpkg_medicine/payment/index">购买药品</navigator>
  </view>
</template>

<script>
export default {
  name: 'prescription-info'
};
</script>

<script setup></script>

<style lang="scss" scoped>
/* 处方信息样式 */
.e-prescription {
  width: 100%;
  margin-top: 60rpx;
  border-radius: 20rpx;
  background-color: #eaf8f6;

  .prescription-content {
    padding: 30rpx;
    border-radius: 20rpx;
    background-color: #fff;
  }

  .list-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10rpx;
  }

  .list-item {
    margin-bottom: 10rpx;
    font-size: 26rpx;
    color: #848484;
  }

  .label {
    display: flex;
    justify-content: space-between;
    flex: 1;
    font-size: 32rpx;
    color: #121826;

    &.medicine {
      font-size: 30rpx;
      color: #666;
    }
  }

  .unit {
    width: 200rpx;
  }

  .extra {
    display: flex;
    align-items: center;
    font-size: 26rpx;
    color: #848484;
  }

  :deep(.uniui-right) {
    margin-top: 4rpx;
  }

  .dividing-line {
    padding-bottom: 20rpx;
    margin-bottom: 20rpx;
    border-bottom: 1rpx solid #ededed;
  }

  .uni-link {
    text-align: center;
    line-height: 1;
    padding: 30rpx 0;
    color: #16c2a3;
    font-size: 32rpx;
  }
}
</style>
