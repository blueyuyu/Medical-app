<template>
  <view class="payment-page">
    <uv-popup ref="popRef" mode="bottom" @change="change">
      <view style="height: 400rpx">
        <text>丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。 明月几时有？把酒问青天。</text>
      </view>
    </uv-popup>
    <button @click="open">打开</button>
  </view>
</template>

<script>
export default {
  name: 'custom-payment'
};
</script>
<script setup>
import { ref } from 'vue';
const popRef = ref(null);
const open = () => {
  popRef.value.open('top');
};
const change = (e) => {
  console.log('弹窗状态改变：', e);
};
</script>

<style lang="scss" scoped>
.payment-page {
  background-color: #999;
}
</style>
