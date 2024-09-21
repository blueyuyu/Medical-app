<template>
  <view>
    测试popover的页面
    <button @click="paymentRef.open()">11</button>
    <custom-payment amount="39.00" ref="paymentRef"></custom-payment>
  </view>
</template>

<script setup>
import customPayment from '@/components/custom-payment.vue';
import { ref } from 'vue';
const paymentRef = ref('');
</script>

<style></style>
