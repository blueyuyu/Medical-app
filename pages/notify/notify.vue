<template>
  <view>
    <view class="timeline-page">
      <map latitude="40.0586531" longitude="116.3385867" :markers="markers" :polyline="polyline" scale="14" class="uni-map" />
      <cover-view :style="{ paddingTop: top }" class="navigator-bar">
        <cover-view @click="onBackClick" class="icon-back">
          <cover-image src="/static/images/icon-back.png" />
        </cover-view>
        <cover-view class="title">派送中</cover-view>
      </cover-view>
      <cover-view class="timeline-meta">
        <cover-view class="status">订单派送中</cover-view>
        <cover-view class="extra">预计明天送达 申通快递 7511266366963366</cover-view>
      </cover-view>
      <view class="timeline-detail">
        <view class="title">物流详情</view>
        <view class="timeline">
          <view class="line">
            <view class="badge text">收</view>
            <view class="content">收货地址：广东省广州市大华区明离路科技园880号</view>
          </view>
          <view class="line">
            <view class="badge icon">
              <uni-icons custom-prefix="iconfont" color="#2cb5a5" size="15" type="icon-checked" />
            </view>
            <view class="label">已签收</view>
            <view class="content">您的订单已由本人签收。如有疑问请联系配送员【赵赵，18332566962】确认。感谢您在优医购用，欢迎再次光临。</view>
            <view class="time">今天 10：25</view>
          </view>
          <view class="line">
            <view class="badge icon">
              <uni-icons color="#2cb5a5" custom-prefix="iconfont" type="icon-truck" />
            </view>
            <view class="label">派送中</view>
            <view class="content">您的订单正在派送中【深圳市】科技园派送员宋平正在为您派件</view>
            <view class="time">今天 10：25</view>
          </view>
          <view class="line">
            <view class="badge dot"></view>
            <view class="label">运输中</view>
            <view class="content">在广东深圳公司进行发出扫描</view>
            <view class="time">今天 10：25</view>
          </view>
          <view class="line">
            <view class="badge dot"></view>
            <view class="content">在分拨中心广东深圳公司进行卸车扫描</view>
            <view class="time">今天 10：25</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue';

// 胶囊距离顶部的距离
let top = 0;

// #ifdef MP-WEIXIN
const menuButton = uni.getMenuButtonBoundingClientRect();
top = menuButton.top - (50 - menuButton.height) / 2 + 'px';
// #endif

function onBackClick() {
  uni.navigateBack({ delta: 1 });
}

// 使用地图的话，地图组件的经纬度，范围标记都要；
// 地图路线
const polyline = ref([]);
// 起点终点标记
const markers = ref([
  {
    id: 1,
    latitude: 40.060539,
    longitude: 116.343847,
    iconPath: '/static/images/start.png',
    width: 25,
    height: 30
  },
  {
    id: 2,
    latitude: 40.086757,
    longitude: 116.328634,
    iconPath: '/static/images/end.png',
    width: 25,
    height: 30
  },

  {
    id: 3,
    latitude: 40.083465,
    longitude: 116.332938,
    iconPath: '/static/images/car.png',
    width: 50,
    height: 30
  }
]);

// 调用云函数，需要对官方内容进行解压缩
uniCloud.callFunction({
  name: 'qq-map',
  data: {
    from: '40.060539,116.343847',
    to: '40.086757,116.328634'
  },
  success({ result }) {
    console.log('[ result ] => ', result);
    // 腾讯地图返回的数据, polyline 折线的意思，返回两点之间的每一个坐标
    const coords = result.result.routes[0].polyline;
    const points = [];

    //坐标解压（返回的点串坐标，通过前向差分进行压缩）
    for (let i = 2; i < coords.length; i++) {
      coords[i] = Number(coords[i - 2]) + Number(coords[i]) / 1000000;
    }

    //将解压后的坐标放入点串数组points中
    for (let i = 0; i < coords.length; i += 2) {
      points.push({ latitude: coords[i], longitude: coords[i + 1] });
    }
    // 处理后的经纬度坐标
    // console.log(points);
    // 运输路线轨迹
    polyline.value.push({
      points,
      color: '#16c2a3',
      width: 5
    });
  },
  fail(error) {
    console.log('[ error ] => ', error);
  }
});
</script>

<style lang="scss" scoped>
.timeline-page {
  padding-bottom: calc(env(safe-area-inset-bottom) + 60rpx);
}

.uni-map {
  width: 100%;
  height: 470px;
}

.navigator-bar {
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 4px;
  background-color: #fff;

  /* #ifdef APP */
  top: 25px;
  /* #endif */

  /* #ifdef MP-WEIXIN */
  height: 50px;
  top: 0;
  left: 0px;
  right: 0px;
  border-radius: 0;
  /* #endif */

  .icon-back {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0;
    padding: 14px;
  }
}

.timeline-meta {
  position: absolute;
  top: 380px;
  left: 10px;
  right: 10px;

  line-height: 1;
  padding: 15px 20px;
  border-radius: 4px;
  background-color: #fff;

  .status {
    font-size: 15px;
    color: #121826;
    font-weight: 500;
  }

  .extra {
    font-size: 14px;
    color: #6f6f6f;
    margin-top: 10px;

    // white-space: wrap;
  }
}

.timeline-detail {
  padding: 0 30rpx;

  .title {
    line-height: 1;
    padding: 40rpx 0;
    font-size: 30rpx;
    color: #121826;
    font-weight: 500;
  }

  .timeline {
    min-height: 300rpx;
    margin-left: 30rpx;
    margin-top: 20rpx;

    padding: 10rpx 60rpx 1rpx;
    border-left: 4rpx solid #16c2a3;
  }

  .line {
    margin-bottom: 30rpx;
    position: relative;
  }

  .badge {
    position: absolute;
    left: -92rpx;
    top: -10rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;

    &.text {
      color: #2cb5a5;
      font-size: 24rpx;
      background-color: #eaf8f6;
    }

    &.icon {
      background-color: #f6f7f9;
    }

    &.dot::before {
      content: '';
      display: block;
      width: 24rpx;
      height: 24rpx;
      background-color: #16c2a3;
      border-radius: 50%;
    }
  }

  .label {
    font-size: 32rpx;
    font-weight: 500;
    color: #6f6f6f;
    margin-bottom: 10rpx;
  }

  .content {
    color: #848484;
    font-size: 28rpx;
    margin-bottom: 10rpx;
  }

  .time {
    font-size: 28rpx;
    font-weight: 500;
    color: #6f6f6f;
  }
}
</style>
