<template>
  <view>
    <!-- 文字/图片消息 (1) -->
    <view class="message-item reverse">
      <image class="room-avatar" src="/static/uploads/doctor-avatar-2.png" />
      <view class="room-message">
        <view class="time">14:13</view>
        <view class="text">您好，我是医师王医生，已收到您的问诊信息，我会尽量及时、准确、负责的回复您的问题，请您稍等。</view>
        <image v-if="false" class="image" src="/static/uploads/feed-1.jpeg" mode="widthFix" />
      </view>
    </view>

    <view class="message-item">
      <image class="room-avatar" src="/static/uploads/doctor-avatar-2.png" />
      <view class="room-message">
        <view class="time">14:13</view>
        <view class="text">您好，我是医师王医生，已收到您的问诊信息，我会尽量及时、准确、负责的回复您的问题，请您稍等。</view>
        <image v-if="false" class="image" src="/static/uploads/feed-1.jpeg" mode="widthFix" />
      </view>
    </view>

    <view class="message-item">
      <image class="room-avatar" src="/static/uploads/doctor-avatar-2.png" />
      <view class="room-message">
        <view class="time">14:13</view>
        <view class="text">您好，我是医师王医生，已收到您的问诊信息，我会尽量及时、准确、负责的回复您的问题，请您稍等。</view>
        <image v-if="false" class="image" src="/static/uploads/feed-1.jpeg" mode="widthFix" />
      </view>
    </view>

    <view class="message-item">
      <image class="room-avatar" src="/static/uploads/doctor-avatar-2.png" />
      <view class="room-message">
        <view class="time">14:13</view>
        <view class="text">您好，我是医师王医生，已收到您的问诊信息，我会尽量及时、准确、负责的回复您的问题，请您稍等。</view>
        <image v-if="false" class="image" src="/static/uploads/feed-1.jpeg" mode="widthFix" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'chat-info'
};
</script>

<script setup></script>

<style lang="scss" scoped>
/* 文字图片信息 */
.message-item {
  display: flex;
  align-self: flex-start;
  margin-top: 60rpx;

  .room-avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }

  .room-message {
    margin-left: 20rpx;
  }

  .time {
    font-size: 26rpx;
    color: #979797;
  }

  .image {
    max-width: 420rpx;
    margin-top: 10rpx;
  }

  .text {
    max-width: 420rpx;
    line-height: 1.75;
    padding: 30rpx 40rpx;
    margin-top: 16rpx;
    border-radius: 20rpx;
    font-size: 30rpx;
    color: #3c3e42;
    background-color: #fff;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -25rpx;
      width: 26rpx;
      height: 52rpx;
      background-image: url(https://consult-patient.oss-cn-hangzhou.aliyuncs.com/static/images/im-arrow-1.png);
      background-size: contain;
    }
  }

  &.reverse {
    flex-direction: row-reverse;
    align-self: flex-end;

    .room-message {
      margin-left: 0;
      margin-right: 20rpx;
    }

    .time {
      text-align: right;
    }

    .text {
      background-color: #16c2a3;
      color: #fff;

      &::after {
        left: auto;
        right: -25rpx;
        background-image: url(https://consult-patient.oss-cn-hangzhou.aliyuncs.com/static/images/im-arrow-2.png);
      }
    }
  }
}
</style>
