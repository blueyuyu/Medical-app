<template>
  <scroll-page @scroll="scrollFn">
    <view class="index-page" :class="[hasbg ? 'indexbg-page' : '']">
      <custom-sticky offsetTop="20px" :bgColor="scrollbg">
        <view class="index-search">
          <uv-search
            placeholder="搜索医生、疾病、健康百科"
            v-model="searchKeyword"
            :showAction="false"
            :bgColor="scrollInput.bg"
            :searchIconColor="scrollInput.holderColor"
            searchIconSize="24"
            :borderColor="scrollInput.borderColor"
            :placeholderColor="scrollInput.holderColor"
          ></uv-search>
        </view>
      </custom-sticky>
      <view
        class="index-panel-one"
        style="margin-top: 80rpx; background-color: #ffffff; border-radius: 20rpx; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      >
        <uv-grid :border="false">
          <uv-grid-item v-for="(item, index) in baseList" :key="index">
            <uv-image :src="item.url" width="44px" height="44px" style="padding-top: 26rpx"></uv-image>
            <text class="grid-text">{{ item.title }}</text>
            <text class="grid-desc">{{ item.desc }}</text>
          </uv-grid-item>
        </uv-grid>
      </view>
      <view class="index-panel-two">
        <uv-grid :col="4" :border="false">
          <uv-grid-item v-for="(item, index) in panelTwoList" :key="index">
            <uv-image :src="item.url" width="36px" height="36px" style="padding-top: 26rpx"></uv-image>
            <text class="grid-text2">{{ item.title }}</text>
          </uv-grid-item>
        </uv-grid>
      </view>
      <view class="index-ad">
        <uv-swiper :list="list" indicator indicatorMode="dot" circular imgMode radius="20"></uv-swiper>
      </view>
      <view class="index-content">
        <uv-tabs :list="contentList" @click="click" lineColor="#00c8aa" lineWidth="24" activeStyle="color:#00c8aa;font-weight: 700"></uv-tabs>
        <view class="content-item" v-if="contentShow == 1">
          <feed-list v-for="item in 4"></feed-list>
        </view>

        <view class="content-item" v-if="contentShow == 2">
          <doctor-list></doctor-list>
        </view>
      </view>
      <button @click="getLogin"></button>
    </view>
  </scroll-page>
</template>

<script setup>
import { http } from '@/utils/http.js';
import { useCounterStore } from '@/stores/index.js';
import customSection from '@/components/custom-section.vue';
import scrollPage from '@/components/scroll-page.vue';
import customSticky from '@/components/custom-sticky.vue';
import feedList from './components/feed-list.vue';
import doctorList from './components/doctor-list.vue';
import { reactive, ref } from 'vue';

const counterStore = useCounterStore();

const searchKeyword = ref('');
const baseList = [
  {
    url: '../../static/images/quick-entry-1.png',
    title: '问医生',
    desc: '按科室查找医生'
  },
  {
    url: '../../static/images/quick-entry-2.png',
    title: '极速问诊',
    desc: '20s医生极速回复'
  },
  {
    url: '../../static/images/quick-entry-3.png',
    title: '开药门诊',
    desc: '足不出户送药上门'
  }
];

const panelTwoList = [
  {
    url: '../../static/images/quick-view-1.png',
    title: '疾病查询'
  },
  {
    url: '../../static/images/quick-view-2.png',
    title: '家庭档案'
  },
  {
    url: '../../static/images/quick-view-3.png',
    title: '我的处方'
  },
  {
    url: '../../static/images/quick-view-4.png',
    title: '药瓶订单'
  }
];

const list = ['../../static/images/banner-1.png', 'https://cdn.uviewui.com/uview/swiper/swiper2.png', 'https://cdn.uviewui.com/uview/swiper/swiper1.png'];

const contentList = [
  {
    name: '推荐',
    value: 1
  },
  {
    name: '关注',
    value: 2
  },
  {
    name: '饮食健康',
    value: 3
  },
  {
    name: '减脂',
    value: 4
  }
];
const contentShow = ref(1);

// 滚动控制
const hasbg = ref(true);
const scrollbg = ref('');
const scrollInput = reactive({
  bg: '#7fe3d4',
  holderColor: '#fff',
  borderColor: 'transparent'
});
// 滚动的时候，背景颜色改变，边框的边距也改变，按钮背景色也改变；
const scrollFn = (e) => {
  console.log('[ e.detail ] => ', e.detail);
  if (e.detail.scrollTop > 100) {
    hasbg.value = false;
    scrollbg.value = '#fff';
    scrollInput.bg = '#fff';
    scrollInput.holderColor = '#999';
    scrollInput.borderColor = '#f2f2f2';
  } else {
    hasbg.value = true;
    scrollbg.value = '';
    scrollInput.bg = '#7fe3d4';
    scrollInput.holderColor = '#fff';
    scrollInput.borderColor = 'transparent';
  }
};

const click = (item) => {
  contentShow.value = item.value;
};

const getLogin = () => {
  uni.reLaunch({
    url: '/pages/login/login'
  });
};
</script>

<style lang="scss" scoped>
.grid-text {
  font-size: 14px;
  color: #909399;
}
.index-page {
  padding: 0 30rpx 10rpx;
}

.indexbg-page {
  position: relative;
}

.indexbg-page::after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  content: '';
  width: 100%;
  height: 300rpx;
  background-color: #00c8aa;
}

.index-panel-two {
  padding: $uni-spacing-col-base 0;
}

.grid-text {
  padding: $uni-spacing-col-base 0;
  font-size: $uni-font-size-lg;
  color: $uni-text-color;
  font-weight: 600;
}

.grid-desc {
  padding-bottom: 20rpx;
  font-size: $uni-font-size-sm;
  color: $uni-text-color-disable;
}

.grid-text2 {
  padding: $uni-spacing-col-lg 0;
  font-size: $uni-font-size-base;
  color: $uni-text-color;
}
</style>
