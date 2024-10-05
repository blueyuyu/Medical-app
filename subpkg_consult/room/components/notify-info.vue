<template>
  <view>
    <!-- 普通通知（31） -->
    <view class="message-tips" v-if="msgType == 31">
      <view class="wrapper">医护人员正在赶来，请耐心等候</view>
    </view>

    <!-- 温馨提示（32） -->
    <view class="message-tips" v-if="msgType == 32">
      <view class="wrapper">
        <text class="label">温馨提示:</text>
        在线咨询不能代替面诊，医护人员建议仅供参考
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'notify-info'
};
</script>

<script setup>
const props = defineProps({
  msgType: Number
});

const { msgType } = props;
</script>

<style lang="scss" scoped>
.message-tips {
  display: flex;
  justify-content: center;
  margin-top: 30rpx;
  &:first-child {
    margin-top: 30rpx;
  }
}

.wrapper {
  padding: 10rpx 30rpx;
  font-size: 24rpx;
  border-radius: 70rpx;
  color: #848484;
  background-color: #f2f2f2;
  text-align: center;
  .label {
    color: #16c2a3;
  }
}
</style>
