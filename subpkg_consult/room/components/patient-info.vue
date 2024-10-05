<template>
  <!-- 患者信息 type=21 -->
  <view class="patient-info">
    <view class="header">
      <view class="title">
        {{ patientData.consultRecord.patientInfo.name }} {{ patientData.consultRecord.patientInfo.genderValue }} {{ patientData.consultRecord.patientInfo.age }}岁
      </view>
      <view class="note">{{ illnessTime }}| {{ patientData.consultRecord.consultFlag == 0 ? '未就诊' : '就诊过' }}</view>
    </view>
    <view class="content">
      <view class="list-item">
        <text class="label">病情描述</text>
        <text class="note">{{ patientData.consultRecord.illnessDesc }}</text>
      </view>
      <view class="list-item">
        <text class="label">图片</text>
        <text class="note">点击查看</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'patient-info'
};
</script>
<script setup>
import { computed } from 'vue';
const props = defineProps({
  patientData: Object
});

const { patientData } = props;

const illnessTime = computed(() => {
  const illnessNum = patientData.consultRecord.illnessTime;
  if (illnessNum == 1) {
    return '一周内';
  }
  if (illnessNum == 2) {
    return '一月内';
  }
  if (illnessNum == 3) {
    return '半年内';
  }
  if (illnessNum == 4) {
    return '半年以上';
  }
});
</script>

<style lang="scss" scoped>
.patient-info {
  padding: 30rpx;
  margin-top: 60rpx;
  border-radius: 20rpx;
  box-sizing: border-box;
  background-color: #fff;

  .header {
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid #ededed;

    .title {
      font-size: 32rpx;
      color: #121826;
      margin-bottom: 10rpx;
    }

    .note {
      font-size: 26rpx;
      color: #848484;
    }
  }

  .content {
    margin-top: 20rpx;
    font-size: 26rpx;

    .list-item {
      display: flex;
      margin-top: 10rpx;
    }

    .label {
      width: 130rpx;
      color: #3c3e42;
    }

    .note {
      flex: 1;
      line-height: 1.4;
      color: #848484;
    }
  }
}
</style>
