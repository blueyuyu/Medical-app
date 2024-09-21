<template>
  <view class="patient-list">
    <view class="archivesTip">
      <slot name="tip"></slot>
    </view>
    <view class="archives-item" v-for="(item, index) in patientList" :key="item.id" style="padding-bottom: 40rpx">
      <uni-swipe-action>
        <uni-swipe-action-item :right-options="options2" @change="swipeChange($event, index)" @click="bindClick(item.id)">
          <view class="archives-box bd-box" :class="{ 'archives-box_select': item.id === selectId ? true : false }" @click="selectPatientFn(item.id)">
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
            <navigator :url="'/subpkg_archive/form/index?id=' + item.id + '&from=' + props.from" class="archives-edit">
              <uni-icons type="compose" size="28" color="#14c1a2" style="line-height: 150%"></uni-icons>
            </navigator>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
    <navigator url="/subpkg_archive/form/index?from=consult" class="addPatient" v-if="patientList.length < 6" style="display: flex; justify-content: center">
      <view style="display: flex; flex-direction: column">
        <uni-icons type="plusempty" size="28" color="#ccc"></uni-icons>
        <text class="textColor">添加患者</text>
      </view>
    </navigator>
  </view>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { getPatientList, delPatient } from '@/apis/patient.js';
import { onShow } from '@dcloudio/uni-app';

const props = defineProps({
  from: {
    type: String,
    default: 'consult'
  }
});

// 选择之后触发；
const emit = defineEmits(['isNextStep']);

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
  console.log('当前状态：' + e + '，下标：' + index);
};

const bindClick = async (index) => {
  const res = await delPatient(index);
  uni.utils.toast('删除成功');
  getPatientListFn();
};

const selectId = ref('');
const selectPatientFn = (id) => {
  selectId.value = id;
  emit('isNextStep', id);
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

.archives-box_select {
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
