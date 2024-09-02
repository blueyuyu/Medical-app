<template>
  <view>
    这是健康百科页面
    <button @click="getLogin">去登录</button>
    <view class="h-[100rpx] w-[200rpx] bg-[#fa00fa]">测试</view>
  </view>
</template>

<script setup>
const getLogin = () => {
  uni.reLaunch({
    url: '/pages/login/login'
  });
};
</script>

<style lang="scss"></style>
