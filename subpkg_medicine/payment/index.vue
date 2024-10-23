<template>
  <scroll-page>
    <view class="medicine-payment">
      <uv-navbar bg-color="#00c8aa" height="140rpx" @leftClick="leftClick">
        <template v-slot:center>
          <view class="nav-slot">
            <view class="nav-header">订单待支付</view>
            <view class="nav-desc">等待支付，15分钟后自动订单自动关闭</view>
          </view>
        </template>
      </uv-navbar>
      <view class="medicine-content" style="padding-top: 140rpx">
        <view class="meicine-addressInfo">
          <view class="info-item info_name">
            <text class="info_title">收货人:</text>
            <text style="padding-right: 10rpx">李小花</text>
            <text>1898888</text>
          </view>
          <view class="info-item info_address">
            <text class="info_title">收货地址:</text>
            <text>广东省广州市大话1111111号</text>
          </view>
        </view>
        <view class="medicine-type">
          <view class="type-header">
            <text class="title">优医药房</text>
            <text class="desc">优医质保 假一赔十</text>
          </view>
          <view class="type-list">
            <view class="medicine-item" v-for="item in 2">
              <uv-list>
                <uv-list-item :border="true" border-color="#f9f9f9">
                  <template v-slot:header>
                    <uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="140rpx" height="140rpx" shape="square"></uv-image>
                  </template>
                  <template v-slot:body>
                    <view style="height: 140rpx; flex: 1; padding: 0 20rpx; display: flex; flex-direction: column; justify-content: space-between">
                      <view>优赛明 维生素E乳</view>
                      <view style="font-size: 14px; color: #999">85ml</view>
                      <view class="money">￥25.00</view>
                    </view>
                  </template>
                  <template v-slot:footer>
                    <view style="display: flex; align-items: center">x1</view>
                  </template>
                </uv-list-item>
              </uv-list>
              <view class="desc" style="padding-top: 30rpx">用法用量：口服，每次1袋，每日3</view>
            </view>
          </view>
          <view style="display: flex; justify-content: center; padding-bottom: 40rpx">
            <navigator url="" style="color: #00c8aa; font-size: 14px">查看沟通记录</navigator>
          </view>
        </view>
        <view class="info-item">
          <text class="info_title">药品金额</text>
          <text style="padding-right: 10rpx">￥50.00</text>
        </view>
        <view class="info-item">
          <text class="info_title">运费</text>
          <text style="padding-right: 10rpx">￥5.00</text>
        </view>
        <view class="info-item">
          <text class="info_title">优惠券</text>
          <text style="padding-right: 10rpx">-￥5.00</text>
        </view>
      </view>
    </view>
  </scroll-page>
  <!-- 合计 -->
  <view
    class="payment-depart"
    style="overflow: hidden; position: fixed; bottom: 50rpx; width: 94%; display: flex; justify-content: space-between; align-items: flex-end; padding: 0 20rpx"
  >
    <view class="payment-count">
      合计
      <text style="color: #ff0000; font-weight: 600">￥11元</text>
    </view>
    <view class="desc-btn">
      <custom-button borderColor="#fafafa" color="#c0c0c0" style="margin-right: 40rpx">取消订单</custom-button>
      <custom-button>继续支付</custom-button>
    </view>
  </view>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import customButton from '@/components/custom-button.vue';

const leftClick = () => {};
</script>

<style lang="scss">
.nav-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-header {
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}
.nav-desc {
  padding-top: $uni-spacing-row-base;
  font-size: $uni-font-size-base;
  color: #fff;
}
.medicine-content {
  margin: 0 40rpx;
}
.meicine-addressInfo {
  padding: 40rpx 0;
}
.info_title {
  display: inline-block;
  width: 160rpx;
  color: $uni-text-color-grey;
}
.info-item {
  padding-bottom: $uni-spacing-row-base;
}

.title {
  font-size: $uni-font-size-lg;
  padding-right: $uni-spacing-col-base;
}
.desc {
  font-size: $uni-font-size-base;
  color: $uni-text-color-grey;
}

.type-header {
  padding: 20rpx 0;
}

.money {
  color: #ff4343;
  font-weight: 600;
}

.medicine-item {
  padding: 40rpx 0;
}
</style>
