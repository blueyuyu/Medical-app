<template>
  <scroll-page backgroundColor="#f6f7f9">
    <div class="my-page">
      <!-- 用户资料 -->
      <div class="user-profile">
        <image class="user-avatar" src="../../static/uploads/doctor-avatar-2.png" mode=""></image>
        <text class="user-name">用户001</text>
        <text class="iconfont icon-edit"></text>
      </div>
      <!-- 用户数据 -->
      <div class="user-data">
        <uv-row justify="space-between" gutter="10">
          <uv-col span="3">
            <navigator url="" hover-class="navigator-hover" class="user-col">
              <text class="data-num">150</text>
              <text class="data-text">收藏</text>
            </navigator>
          </uv-col>
          <uv-col span="3">
            <navigator url="" hover-class="navigator-hover" class="user-col">
              <text class="data-num">150</text>
              <text class="data-text">关注</text>
            </navigator>
          </uv-col>
          <uv-col span="3">
            <navigator url="" hover-class="navigator-hover" class="user-col">
              <text class="data-num">150</text>
              <text class="data-text">积分</text>
            </navigator>
          </uv-col>
          <uv-col span="3">
            <navigator url="" hover-class="navigator-hover" class="user-col">
              <text class="data-num">150</text>
              <text class="data-text">优惠券</text>
            </navigator>
          </uv-col>
        </uv-row>
      </div>
      <!-- 问诊板块 -->
      <custom-section title="问诊中" :showArrow="false" :customStyle="{ marginTop: '100rpx' }">
        <div class="myDoctor">
          <swiper class="swiper" circular indicator-dots indicator-color="#eaf8f6" indicator-active-color="#2cb5a5" style="height: 100%">
            <swiper-item>
              <view class="swiper-item uni-bg-red" style="display: flex; align-items: center">
                <image class="doctor-img" src="../../static/uploads/doctor-avatar.jpg" mode=""></image>
                <div class="doctor-info">
                  <div class="info-top">
                    <text class="name">王医生</text>
                    <text class="title">内分泌科 | 主任医师</text>
                  </div>
                  <div class="info-bottom" style="display: flex">
                    <uv-tags class="tag" text="三甲" bgColor="#6780ff" size="mini"></uv-tags>
                    <text class="hospital">积水潭医院</text>
                  </div>
                </div>
                <div class="doctor-enter">
                  <button size="mini" type="default" style="color: #16c2a3; border-color: #fff; border-radius: 20rpx" hover-class="is-hover">进入咨询</button>
                </div>
              </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item uni-bg-green">B</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item uni-bg-blue">C</view>
            </swiper-item>
          </swiper>
        </div>
      </custom-section>
      <!-- 药品板块 -->
      <custom-section title="药品订单" :showArrow="true">
        <template v-slot:rightName>
          <view>全部订单</view>
        </template>
        <template v-slot:default>
          <div class="order" style="background-color: #fff">
            <uv-grid :border="false" col="4">
              <uv-grid-item v-for="(item, index) in baseList" :key="index">
                <navigator url="" style="display: flex; flex-direction: column; align-items: center">
                  <image :src="item.src" style="width: 60rpx; height: 60rpx"></image>
                  <text class="grid-text">{{ item.title }}</text>
                </navigator>
              </uv-grid-item>
            </uv-grid>
          </div>
        </template>
      </custom-section>

      <custom-section title="快捷工具" :showArrow="false">
        <uni-list :border="false">
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="{ customPrefix: 'iconfont', type: 'icon-tool-01' }"
            title="我的问诊"
            link
            to="/pages/vue/index/index"
            @click="onClick($event, 1)"
            :border="false"
          ></uni-list-item>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="{ customPrefix: 'iconfont', type: 'icon-tool-02' }"
            title="我的处方"
            link
            to="/pages/vue/index/index"
            @click="onClick($event, 1)"
            :border="false"
          ></uni-list-item>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="{ customPrefix: 'iconfont', type: 'icon-tool-03' }"
            title="家庭档案"
            link
            to="/pages/vue/index/index"
            @click="onClick($event, 1)"
            :border="false"
          ></uni-list-item>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="{ customPrefix: 'iconfont', type: 'icon-tool-04' }"
            title="地址管理"
            link
            to="/pages/vue/index/index"
            @click="onClick($event, 1)"
            :border="false"
          ></uni-list-item>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="{ customPrefix: 'iconfont', type: 'icon-tool-05' }"
            title="我的评价"
            link
            to="/pages/vue/index/index"
            @click="onClick($event, 1)"
            :border="false"
          ></uni-list-item>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="{ customPrefix: 'iconfont', type: 'icon-tool-06' }"
            title="官方客服"
            link
            to="/pages/vue/index/index"
            @click="onClick($event, 1)"
            :border="false"
          ></uni-list-item>
          <uni-list-item
            :show-extra-icon="true"
            :extra-icon="{ customPrefix: 'iconfont', type: 'icon-tool-07' }"
            title="设置"
            link
            to="/pages/vue/index/index"
            @click="onClick($event, 1)"
            :border="false"
          ></uni-list-item>
        </uni-list>
      </custom-section>
      <!-- list导航栏 -->

      <!-- 退出登录 -->
      <view class="logout">退出登录</view>
    </div>
  </scroll-page>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import customSection from '@/components/custom-section.vue';
const baseList = [
  {
    src: '../../static/images/order-status-1.png',
    title: '待支付'
  },
  {
    src: '../../static/images/order-status-2.png',
    title: '待发货'
  },
  {
    src: '../../static/images/order-status-3.png',
    title: '待收货'
  },
  {
    src: '../../static/images/order-status-4.png',
    title: '全部订单'
  }
];
</script>

<style lang="scss" scoped>
$padding: 40rpx;
$small-pding: 20rpx;
$font-l: 20px;
.my-page {
  padding: 150rpx 30rpx 10rpx;
  // 背景颜色可以设置长度
  background: linear-gradient(180deg, rgba(44, 181, 165, 0.46) 0, rgba(44, 181, 165, 0) 500rpx);
}

.user-profile {
  display: flex;
  align-items: center;
  padding-left: $padding;
  .user-avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }
  .user-name {
    font-size: $uni-font-size-base;
    font-weight: 700;
    padding-left: $small-pding;
  }
  .icon-edit {
    padding-left: 6rpx;
  }
}
.user-data {
  padding-top: $padding;
  .user-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    .data-num {
      font-size: $font-l;
      color: $uni-text-color;
    }
    .data-text {
      font-size: $uni-font-size-sm;
      color: $uni-text-color-grey;
    }
  }
}

.myDoctor {
  box-sizing: border-box;
  height: 210rpx;
  padding-left: 5rpx;
  padding-top: $small-pding;
  background-color: $uni-bg-color;
  .doctor-img {
    width: 100rpx;
    height: 100rpx;
    border-radius: 100rpx;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
  }
  .title {
    padding-left: 10rpx;
    font-size: $uni-font-size-sm;
    color: $uni-text-color-grey;
  }
  .doctor-info,
  .hospital {
    font-size: 14px;
    padding-left: $small-pding;
  }
  .info-bottom {
    padding-top: 10rpx;
  }
  .doctor-enter {
    padding-left: $small-pding;
  }
  .doctor-enter button {
    background-color: #e6f9f7;
    font-size: $uni-font-size-sm;
  }
  .is-hover {
    color: rgba(255, 255, 255, 0.6);
    background-color: #179b16;
    border-color: #179b16;
  }
}

uni-button:after {
  border: none;
}

.order {
  background-color: $uni-bg-color;
  padding: $padding 0;
  .grid-text {
    font-size: $uni-font-size-sm;
    color: $uni-text-color-grey;
    padding-top: 10rpx;
  }
}

.logout {
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  background-color: $uni-bg-color;
  font-size: $uni-font-size-base;
}
</style>
