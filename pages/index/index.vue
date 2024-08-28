<template>
  <view class="index">这是首屏首页</view>
  <text class="iconfont icon-done"></text>
  <text class="iconfont icon-tool-05"></text>
  <button @click="getData">发请求</button>
  <button @click="getLogin">去登录</button>
  <custom-section :showArrow="true" title="药品订单">全部订单</custom-section>
</template>

<script setup>
import { http } from '@/utils/http.js';
import { useCounterStore } from '@/stores/index.js';
import customSection from '@/components/custom-section.vue';
const counterStore = useCounterStore();
console.log(counterStore.count);
console.log(counterStore.double);
const getData = async () => {
  uni.utils.toast('请求');
  const res = await http.request({
    url: '/code',
    method: 'GET'
    // header: {
    //   customHeader: '22222222'
    // }
  });
};

const getLogin = () => {
  uni.reLaunch({
    url: '/pages/login/login'
  });
};
</script>

<style></style>
