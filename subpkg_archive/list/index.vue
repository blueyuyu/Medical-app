<template>
  <scroll-page style="padding: 40rpx">
    <view class="archivesTip">最多可添加6人</view>
    <view class="archives-item" v-for="(item, index) in patientList" :key="item.id" style="padding-bottom: 40rpx">
      <uni-swipe-action>
        <uni-swipe-action-item :right-options="options2" @change="swipeChange($event, index)" @click="bindClick(item.id)">
          <view class="archives-box bd-box">
            <div class="archives-left">
              <div class="archives-name">
                <text>{{ item.name }}</text>
                <text>{{ item.idCard }}</text>
                <uv-tags v-if="item.defaultFlag === 1" text="默认" size="mini" bgColor="#15c1a3" style="display: inline-block; line-height: 60rpx"></uv-tags>
              </div>
              <view class="archives-gender">
                <text>{{ item.genderValue }}</text>
                <text>{{ item.age }}岁</text>
              </view>
            </div>
            <navigator :url="'/subpkg_archive/form/index?id=' + item.id" class="archives-edit">
              <uni-icons type="compose" size="28" color="#14c1a2" style="line-height: 150%"></uni-icons>
            </navigator>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
    <navigator url="/subpkg_archive/form/index" class="addPatient" v-if="patientList.length < 6" style="display: flex; justify-content: center">
      <view style="display: flex; flex-direction: column">
        <uni-icons type="plusempty" size="28" color="#ccc"></uni-icons>
        <text class="textColor">添加患者</text>
      </view>
    </navigator>
  </scroll-page>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import { onMounted, reactive, ref } from 'vue';
import { getPatientList, delPatient } from '@/apis/patient.js';
import { onShow } from '@dcloudio/uni-app';

const options2 = [
  {
    text: '删除',
    style: {
      backgroundColor: '#F56C6C'
    }
  }
];

const patientList = ref([]);

const addText = 'color:$uni-text-color-disable';

const getPatientListFn = async () => {
  const res = await getPatientList();
  patientList.value = res;
};

const swipeChange = (e, index) => {
  // console.log('当前状态：' + e + '，下标：' + index);
};

const bindClick = async (index) => {
  const res = await delPatient(index);
  uni.utils.toast('删除成功');
  getPatientListFn();
};

onShow(() => {
  getPatientListFn();
});
</script>

<style lang="scss" scoped>
.archivesTip {
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  color: $uni-text-color-grey;
  font-size: $uni-font-size-base;
}

.archives-box {
  flex: 1;
  display: flex;
  justify-content: space-between;
  /* #ifdef APP-NVUE */
  justify-content: center;
  /* #endif */
  height: 96px;
  padding: 20px 15px;
  position: relative;
  background-color: #f6f6f6;
  border-bottom-color: #f5f5f5;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-radius: 10rpx;
}

.archives-box:hover {
  background-color: #e8f8f7;
}

.archives-text {
  font-size: 15px;
}

.archives-left {
  padding-bottom: 44rpx;
}

.archives-name text:first-child,
.archives-name text:nth-child(2),
.archives-gender text:first-child {
  padding-right: 20rpx;
}

.textColor {
  color: #ccc;
}
</style>
