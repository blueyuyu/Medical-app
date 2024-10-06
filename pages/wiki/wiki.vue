<template>
  <view>
    这是健康百科页面
    <button @click="getLogin">去登录</button>
    <navigator url="/pages/login/login">login</navigator>

    <!-- 统一支付 uni-pay -->
    <uni-pay ref="uniPayRef"></uni-pay>

    <!-- 支付渠道 -->
    <custom-payment @close="onPaymentClose" @confirm="onPaymentConfirm" :amount="preOrderInfo?.actualPayment" :order-id="orderId" ref="paymentRef" />
  </view>
</template>

<script setup>
import { ref } from 'vue';
const getLogin = () => {
  uni.reLaunch({
    url: '/pages/login/login'
  });
};

// uniCloud
//   .callFunction({
//     name: 'uni-test',
//     data: { a: 1 }
//   })
//   .then((res) => {
//     console.log('[ res ] => ', res);
//   });

// 支付组件引用
const paymentRef = ref();
const uniPayRef = ref();

// 立即支付（生成待支付订单）
async function onPaymentButtonClick() {
  // 省略前面小节的代码...

  // 检测接口是否计用成功
  if (code !== 10000) return uni.utils.toast(message);
  // 获取待支付订单ID
  orderId.value = data.id;

  // 选择支付渠道
  // paymentRef.value.open()

  uniPayRef.value.open({
    total_fee: 1, // 支付金额，单位分 100 = 1元
    order_no: data.id, // 业务系统订单号（即你自己业务系统的订单表的订单号）
    description: '问诊订单', // 支付描述
    type: 'consult' // 支付回调类型，可自定义,
  });
}
</script>

<style lang="scss"></style>
