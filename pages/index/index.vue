<template>
  <view class="index-page">
    <view class="index-search">
      <uv-search
        placeholder="搜索医生、疾病、健康百科"
        v-model="searchKeyword"
        :showAction="false"
        bgColor="#7fe3d4"
        searchIconColor="#fff"
        searchIconSize="24"
        placeholderColor="#fff"
      ></uv-search>
    </view>
    <view
      class="index-panel-one"
      style="margin-top: 80rpx; background-color: #ffffff; border-radius: 20rpx; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
    >
      <uv-grid :border="false">
        <uv-grid-item v-for="(item, index) in baseList" :key="index">
          <uv-icon :customStyle="{ paddingTop: 20 + 'rpx' }" :name="item.name" :size="44"></uv-icon>
          <text class="grid-text">{{ item.title }}</text>
          <text class="grid-desc">{{ item.desc }}</text>
        </uv-grid-item>
      </uv-grid>
    </view>
    <view class="index-panel-two">
      <uv-grid :col="4" :border="false">
        <uv-grid-item v-for="(item, index) in panelTwoList" :key="index">
          <uv-icon :customStyle="{ paddingTop: 20 + 'rpx' }" :name="item.name" :size="22"></uv-icon>
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
        <view class="item">
          <view class="item-doctor" style="display: flex; justify-content: space-between; margin-top: 20rpx">
            <view class="doctor-info" style="display: flex">
              <uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle" width="40" height="40"></uv-image>
              <view class="doctor-info-detail" style="margin-left: 20rpx">
                <view style="font-weight: 500">张清北</view>
                <view class="doctor-desc">
                  <text>北京协会医院</text>
                  <text>内分泌科</text>
                  <text>主任医师</text>
                </view>
              </view>
            </view>
            <view class="doctor-focus">
              <button
                size="mini"
                type="default"
                style="width: 120rpx; background-color: #fff; color: #16c2a3; border: 1px solid #16c2a3; border-radius: 24rpx"
                hover-class="is-hover"
              >
                关注
              </button>
            </view>
          </view>
          <view class="item-content">
            <h4>夏天不能光脚丫。不能吃冰淇淋？</h4>
            <view class="item-text">
              <view class="content-article two-ll">
                <navigator url="" style="" class="fullText">全文</navigator>
                一次，公社组织社员们卖菜，地里十颗捆的大白菜，别人扛一捆就被压得直喘粗气，爷爷却-
                -咬牙一次扛两捆。一次，公社组织社员们卖菜，地里十颗捆的大白菜，别人扛一捆就被压得直喘粗气，爷爷却- -咬牙一次扛两捆。
              </view>
            </view>

            <uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px" height="80px"></uv-image>
          </view>
          <view class="item-bottom" style="display: flex; justify-content: space-between">
            <view class="item-tag">
              <text class="tag">儿童健康</text>
            </view>
            <view class="item-collect">
              <text>95收藏</text>
              <text>34评论</text>
            </view>
          </view>
        </view>
      </view>

      <view class="content-item" v-if="contentShow == 2">
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
              <button
                size="mini"
                type="default"
                style="width: 120rpx; background-color: #fff; color: #16c2a3; border: 1px solid #16c2a3; border-radius: 24rpx"
                hover-class="is-hover"
              >
                关注
              </button>
            </view>
          </view>
        </uv-scroll-list>
      </view>
    </view>
    <button @click="getLogin"></button>
  </view>
</template>

<script setup>
import { http } from '@/utils/http.js';
import { useCounterStore } from '@/stores/index.js';
import customSection from '@/components/custom-section.vue';
import { ref } from 'vue';

const counterStore = useCounterStore();

const searchKeyword = ref('');
const baseList = [
  {
    name: 'photo',
    title: '问医生',
    desc: '按科室查找医生'
  },
  {
    name: 'lock',
    title: '极速问诊',
    desc: '20s医生极速回复'
  },
  {
    name: 'star',
    title: '开药门诊',
    desc: '足不出户送药上门'
  }
];

const panelTwoList = [
  {
    name: 'photo',
    title: '疾病查询'
  },
  {
    name: 'lock',
    title: '家庭档案'
  },
  {
    name: 'photo',
    title: '我的处方'
  },
  {
    name: 'lock',
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

const contentShow = ref(2);

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
// 医生名字与字体,关注按钮
.doctor-desc {
  font-size: $uni-font-size-sm;
  color: $uni-text-color-grey;
  padding-top: $uni-spacing-row-sm;
}

.doctor-desc text {
  padding-right: $uni-spacing-col-base;
}

.doctor-focus button {
  font-size: $uni-font-size-sm;
}

.is-hover {
  color: rgba(255, 255, 255, 0.6);
}

.grid-text {
  font-size: 14px;
  color: #909399;
}
.index-page {
  position: relative;
  padding: 80rpx 30rpx 10rpx;
}

.index-page::after {
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

.item-text {
  display: flex;
}

.content-article::before {
  content: '';
  display: inline-block;
  float: right;
  width: 10px;
  height: 20px; /*先随便设置一个高度*/
  background: red;
  margin-bottom: -24px;
}

.fullText {
  float: right;
  overflow: hidden;
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

.index-content {
  margin-top: 40rpx;
  h4 {
    padding: $uni-spacing-row-base 0;
  }
  .content-article {
    color: $uni-text-color-grey;
  }
  .content-article::after {
    content: '';
    margin-left: 100rpx;
  }
}

.item-collect {
  color: $uni-text-color-grey;
  text {
    padding-right: $uni-spacing-col-sm;
  }
}

.item-bottom {
  padding-top: $uni-spacing-row-base;
}

.tag {
  color: #00c8aa;
}
.tag::before {
  content: '#';
  color: #909399;
}
</style>
