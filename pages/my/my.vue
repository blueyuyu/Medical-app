<template>
  <scroll-page backgroundColor="#f6f7f9">
    <div class="my-page">
      <!-- 用户资料 -->
      <div class="user-profile">
        <image class="user-avatar" :src="userInfo.avatar || '../../static/uploads/doctor-avatar-2.png'" mode=""></image>
        <text class="user-name">{{ userInfo.account || '用户001' }}</text>
        <text class="iconfont icon-edit"></text>
      </div>
      <!-- 用户数据 -->
      <div class="user-data">
        <uv-row justify="space-between" gutter="10">
          <uv-col span="3">
            <navigator url="" hover-class="navigator-hover" class="user-col">
              <text class="data-num">{{ userInfo.collectionNumber || '0' }}</text>
              <text class="data-text">收藏</text>
            </navigator>
          </uv-col>
          <uv-col span="3">
            <navigator url="" hover-class="navigator-hover" class="user-col">
              <text class="data-num">{{ userInfo.likeNumber || '0' }}</text>
              <text class="data-text">关注</text>
            </navigator>
          </uv-col>
          <uv-col span="3">
            <navigator url="" hover-class="navigator-hover" class="user-col">
              <text class="data-num">{{ userInfo.score || '0' }}</text>
              <text class="data-text">积分</text>
            </navigator>
          </uv-col>
          <uv-col span="3">
            <navigator url="" hover-class="navigator-hover" class="user-col">
              <text class="data-num">{{ userInfo.couponNumber }}</text>
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
            to="/subpkg_archive/form/index"
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
      <view class="logout" @click="logout">退出登录</view>
    </div>
  </scroll-page>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import customSection from '@/components/custom-section.vue';
import { useUserStore } from '@/stores/index.js';
import { getUserInfo } from '@/apis/user.js';
import { reactive, ref } from 'vue';
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
const store = useUserStore();
const userInfo = ref({});

const setUserInfo = async () => {
  const res = await getUserInfo();
  userInfo.value = res;-
  store.setUser(res);
};
setUserInfo();

const logout = () => {
  // 退出登录
  // 清空用户pinia
  store.delUser();
  store.delToken();
  // 退出到登录页，不可返回其他栈的
  uni.reLaunch({
    url: '/pages/login/login'
  });
};

const onClick = () => {
  console.log('[ 2 ] => ', 2);
};
</script>

<style lang="scss" scoped>
@import './my.scss';
</style>
