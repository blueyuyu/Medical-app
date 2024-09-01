<template>
  <view style="display: flex; justify-content: space-between; padding: 20rpx; font-size: 14px">
    <text style="font-weight: 700">推荐关注</text>
    <navigator url="">查看更多</navigator>
  </view>
  <uv-scroll-list :indicator="false">
    <view class="content" v-for="(item, index) in 4">
      <view
        class="doctor-card"
        style="
          width: 250rpx;
          padding: 60rpx 20rpx 20rpx 20rpx;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 6px 20px;
        "
      >
        <uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle" width="44" height="44"></uv-image>
        <text style="padding: 10rpx 0; font-weight: 500">张清北</text>
        <text style="padding-bottom: 10rpx; font-size: 14px; color: #999">北京协和医院 儿科副主任医师</text>
        <button size="mini" type="default" style="width: 120rpx; background-color: #fff; color: #16c2a3; border: 1px solid #16c2a3; border-radius: 24rpx" hover-class="is-hover">
          关注
        </button>
      </view>
    </view>
  </uv-scroll-list>
</template>

<script setup></script>

<style lange="scss" scoped></style>
