<template>
  <view class="quickAsk-page">
    <view class="top-bar">
      <view style="font-size: 24px; font-weight: 700">极速问诊</view>
      <navigator url="" style="font-size: 16px; color: #999">问诊记录</navigator>
    </view>
    <uv-line color="#e2e1e6"></uv-line>
    <view class="quickAsk-page">
      <view style="display: flex; justify-content: center; padding-top: 40rpx; padding-bottom: 110rpx">
        <uv-image src="../../static/images/quickly-consult.png" mode="widthFix"></uv-image>
      </view>
      <!-- 这里可以用cell -->
      <uv-list :border="true" border-color="#f9f9f9">
        <uv-list-item
          title="三甲图文问诊"
          note="三甲主治及以上级别医生"
          :to="'/subpkg_consult/department/index?type=' + type + '&illnessType=1'"
          thumb="../../static/images/consult-type-1.png"
          thumb-size="lg"
          :customStyle="{
            padding: '20rpx'
          }"
          :border="true"
          border-color="#f9f9f9"
          show-arrow
        >
          <template v-slot:body>
            <view style="display: flex; flex-direction: column">
              <view class="quick-header">三甲图文问诊</view>
              <view class="quick-des">三甲主治及以上级别的医生</view>
            </view>
          </template>
        </uv-list-item>
        <uv-list-item
          :to="'/subpkg_consult/department/index?type=' + type + '&illnessType=0'"
          :customStyle="{
            padding: '20rpx'
          }"
          :border="true"
          border-color="#f9f9f9"
          thumb="../../static/images/consult-type-2.png"
          thumb-size="lg"
          show-arrow
        >
          <template v-slot:body>
            <view style="display: flex; flex-direction: column">
              <view class="quick-header">普通图文问诊</view>
              <view class="quick-des">二甲主治及以上级别医生</view>
            </view>
          </template>
        </uv-list-item>
      </uv-list>
    </view>
  </view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const type = ref('');

onLoad((option) => {
  type.value = option.type;
});
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 60rpx 30rpx 0;
  height: 50px;
  line-height: 50px;
}
.quickAsk-page {
  padding: 0 30rpx 10rpx;
}
.quick-header {
  font-size: 20px;
  font-weight: 600;
}
.quick-des {
  padding-top: $uni-spacing-row-base;
  font-size: 14px;
  color: #c0c0c0;
}
</style>
