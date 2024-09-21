<template>
  <uv-navbar leftText="支付" @leftClick="leftClick"></uv-navbar>
  <view class="payment-page">
    <scroll-page>
      <view style="margin: 44px 0 10px; font-weight: 600">
        <text>图文问诊</text>
        <text style="margin-left: 10rpx">{{ paymentData.payment }}元</text>
      </view>
      <uv-list padding="30rpx">
        <uv-list-item title="极速问诊" note="自动分配医生" thumb="../../static/uploads/doctor-avatar-2.png" thumb-size="lg">
          <template v-slot:footer>
            <view style="padding-top: 20rpx">￥{{ paymentData.payment }}元</view>
          </template>
        </uv-list-item>
        <uv-list-item title="优惠券" @click="">
          <template v-slot:footer>
            <view style="font-size: 14px; margin-right: 10rpx">{{ paymentData.couponId ? '￥' + paymentData.couponId + '元' : '-0元' }}</view>
            <uv-icon name="arrow-right"></uv-icon>
          </template>
        </uv-list-item>
        <uv-list-item title="积分抵扣" @click="">
          <template v-slot:footer>
            <view style="font-size: 14px; margin-right: 10rpx; color: #ff0000">{{ paymentData.pointDeduction ? '-￥' + paymentData.pointDeduction + '元' : '-0元' }}</view>
          </template>
        </uv-list-item>
        <uv-list-item title="实付款" @click="">
          <template v-slot:footer>
            <view style="font-size: 14px; margin-right: 10rpx">￥{{ paymentData.actualPayment }}元</view>
            <uv-icon name="arrow-right"></uv-icon>
          </template>
        </uv-list-item>
      </uv-list>
      <view style="margin: 44px 0 10px; font-weight: 600">
        <text>患者资料</text>
      </view>
      <uv-list padding="30rpx">
        <uv-list-item title="患者信息" @click="">
          <template v-slot:footer>
            <view class="desText" style="font-size: 14px; margin-right: 10rpx">{{ patientData.name }} | {{ patientData.genderValue }} | {{ patientData.age }}岁</view>
          </template>
        </uv-list-item>
        <uv-list-item>
          <template v-slot:body>
            <view style="display: flex; flex-direction: column">
              <view style="font-size: 14px">病情描述</view>
              <view style="padding-top: 24rpx" class="desText">{{ illnessDesc }}</view>
            </view>
          </template>
        </uv-list-item>
      </uv-list>

      <view class="payment-depart" style="overflow: hidden; position: fixed; bottom: 50rpx; width: 94%; display: flex; justify-content: space-between; align-items: flex-end">
        <view class="payment-count">
          合计
          <text style="color: #ff0000; font-weight: 600">￥{{ paymentData.actualPayment }}元</text>
        </view>
        <view class="desc-btn" style="width: 212rpx">
          <uv-button
            type="primary"
            :disabled="false"
            text="去支付"
            customStyle="margin-buttom: 20rpx;padding: 0 30rpx"
            @click="goPaymentFn"
            color="#00c8aa"
            :custom-style="{ borderRadius: '80rpx', height: '80rpx' }"
          ></uv-button>
        </view>
      </view>
    </scroll-page>
    <custom-payment :orderId="orderId" :amount="paymentData.actualPayment" ref="paymentRef" @comfirm="comfirmFn" @changePay="changePayFn"></custom-payment>
  </view>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import customPayment from '@/components/custom-payment.vue';
import { useConsultStore } from '@/stores/index.js';
import { getPatientInfo } from '@/apis/patient.js';
import { getOrderPre } from '@/apis/order.js';
import { postConsultOrder, postConsultPay } from '@/apis/order.js';

import { ref } from 'vue';

const { consultData, type, illnessType, patientId, id, resetAllConsultFn } = useConsultStore();
const leftClick = () => {
  console.log('[ 1 ] => ', 1);
};

const patientData = ref({});
const illnessDesc = ref('');
const paymentData = ref({});
let orderId = '';
const paymentRef = ref(null);
let payTypeValue = '';

const getAllData = async () => {
  const res = await getPatientInfo(patientId);
  patientData.value = res;
  illnessDesc.value = consultData.illnessDesc;

  const res2 = await getOrderPre(type, illnessType, 0);
  paymentData.value = res2;
};

getAllData();

const goPaymentFn = async () => {
  if (orderId == '') {
    const { renalFuntion: consultFlag, ...rest } = consultData;
    const illnessdData = { consultFlag, ...rest };
    const res = await postConsultOrder(type, paymentData.value.couponId, illnessType, patientId, id, illnessdData);
    console.log('[ res ] => ', res);
    orderId = res?.id;
    // 需要清空pinia 内数据
    resetAllConsultFn();
  }
  // 封装popover
  paymentRef.value.open();
};

const changePayFn = (tag) => {
  payTypeValue = tag;
};

const comfirmFn = async () => {
  console.log('[ payTypeValue ] => ', payTypeValue);
  const res = await postConsultPay(payTypeValue, orderId, 'http://localhost:5173/#/subpkg_consult/room/index');
  // #ifdef H5
  window.location.href = res.payUrl;
  // #endif
};
</script>

<style lang="scss" scoped>
.payment-page {
  padding: 0 30rpx 0;
}
.desText {
  color: $uni-text-color-grey;
  font-size: $uni-font-size-base;
}
</style>
