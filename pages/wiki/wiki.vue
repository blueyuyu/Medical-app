<template>
  <view>
    这是健康百科页面
    <button @click="getLogin">去登录</button>
    <!-- <navigator url="../login/login.vue" open-type="redirect">login</navigator> -->
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
