<template>
  <view class="selectPatient-page">
    <scroll-page>
      <view class="selectTitle">
        <view class="title-top">请选择患者信息</view>
        <view class="title-desc">以便医生给出更加准确的治疗，信息仅医生可见</view>
      </view>
      <patient-list from="consult" @isNextStep="isNextFn"></patient-list>
      <view class="desc-btn" style="position: fixed; width: 90%; left: 0rpx; top: 1520rpx; margin-left: 30rpx">
        <uv-button
          type="primary"
          :disabled="!nextStepEnable"
          text="下一步"
          customStyle="margin-buttom: 20rpx"
          @click="nextStepFn"
          color="#00c8aa"
          :custom-style="{ borderRadius: '80rpx', height: '80rpx' }"
        ></uv-button>
      </view>
    </scroll-page>
  </view>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import patientList from '@/components/patient-list.vue';
import customPayment from '@/components/custom-payment.vue';
import { useConsultStore } from '@/stores/index.js';
import { ref } from 'vue';

const nextStepEnable = ref(false);
const selectedPatientId = ref('');

const consultStore = useConsultStore();

const isNextFn = (data) => {
  nextStepEnable.value = true;
  consultStore.patientId = data;
  selectedPatientId.value = data;
};

const nextStepFn = () => {
  uni.navigateTo({
    url: '/subpkg_consult/payment/index'
  });
};
</script>

<style lang="scss" scoped>
.selectPatient-page {
  padding: 40rpx 30rpx 10rpx;
}

.title-top {
  font-size: $uni-font-size-lg;
  font-weight: 600;
  padding-bottom: $uni-spacing-row-base;
}

.title-desc {
  font-size: $uni-font-size-base;
  color: $uni-text-color-grey;
}
</style>
