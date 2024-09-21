<template>
  <view class="payment-page">
    <uni-popup ref="popup" type="bottom" border-radius="20px 20px 0 0" background-color="#fff">
      <view class="popup-container" style="display: flex; flex-direction: column; align-items: center; position: relative; padding: 40rpx 60rpx 0">
        <view style="position: absolute; top: 20rpx; right: 10rpx" @click="closeFn"><uni-icons type="closeempty" size="24" color="#cfcfcf"></uni-icons></view>
        <view class="popup-title">选择支付方式</view>
        <view class="popup-price">￥{{ props.amount }}</view>
        <view
          class="popup-payment-item"
          v-for="(item, index) in paymentTypeList"
          :key="index"
          @click="choosePaymentFn(item.tag, item.value)"
          style="width: 100%; display: flex; justify-content: space-between; padding: 30rpx 0"
        >
          <view class="item--left">
            <image style="width: 42rpx; height: 42rpx; padding-right: 32rpx" :src="item.imgUrl"></image>
            {{ item.type }}
          </view>
          <view>
            <uni-icons type="checkbox" size="28" v-if="item.tag !== chooseTag" color="#d1d1d1"></uni-icons>
            <uni-icons type="checkbox-filled" size="28" color="#00c8ab" v-else></uni-icons>
          </view>
        </view>
        <view class="desc-btn" style="width: 90%; margin: 90rpx 0">
          <uv-button
            type="primary"
            :disabled="!nextStepEnable"
            text="立即支付"
            customStyle="margin-buttom: 20rpx"
            @click="PayNowFn"
            color="#00c8aa"
            :custom-style="{ borderRadius: '80rpx', height: '80rpx' }"
          ></uv-button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  name: 'custom-payment'
};
</script>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  orderId: String,
  amount: {
    type: [String, Number],
    value: '0.00'
  }
});

const paymentEmit = defineEmits(['comfirm', 'changePay']);

const popup = ref(null);
const paymentType = ref('');

const nextStepEnable = ref(false);

const paymentTypeList = [
  {
    type: '微信支付',
    imgUrl: '../../static/images/wechatpay-icon.png',
    tag: 'wx',
    value: 0
  },
  {
    type: '支付宝',
    imgUrl: '../../static/images/alipay-icon.png',
    tag: 'zfb',
    value: 1
  }
];

const chooseTag = ref('');

const choosePaymentFn = (tag, value) => {
  chooseTag.value = tag;
  nextStepEnable.value = true;
  paymentEmit('changePay', value);
};

const open = () => {
  popup.value.open('bottom');
};

const closeFn = () => {
  popup.value.close();
};

const PayNowFn = () => {
  paymentEmit('comfirm');
};

defineExpose({
  open
});
</script>

<style lang="scss" scoped>
.payment-page {
  background-color: #999;
}

.popup-title {
  font-size: 20px;
}
.popup-price {
  font-size: 24px;
  font-weight: 500;
  padding: 60rpx 0;
}
</style>
