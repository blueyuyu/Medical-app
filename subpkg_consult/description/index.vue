<template>
  <view class="desc-page">
    <scroll-page>
      <view class="desc-top">
        <view class="desc-doctor" style="display: flex">
          <uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="40px" height="40px" shape="circle"></uv-image>
          <view class="doctor-des">
            <view class="desc-header">极速图文（自动分配医生）</view>
            <view class="desc-body">请描述你的疾病或症状、是否用药、就诊经历，需要我提供什么样的帮助。</view>
            <view class="desc-tip" style="display: flex">
              <uv-icon name="info-circle" size="20" color="#999"></uv-icon>
              <text style="padding-left: 10rpx">内容仅医生可见</text>
            </view>
          </view>
        </view>
      </view>
      <uv-line color="#f2f2f2" margin="0 0 20rpx 0"></uv-line>
      <view class="des-form">
        <uv-form labelPosition="left">
          <uv-form-item>
            <uv-textarea v-model="descForm.illnessDesc" placeholder="请详细描述您的病情" height="180" border="none"></uv-textarea>
          </uv-form-item>
          <view class="form-item">
            <view class="form-title">本次患病多久了？</view>
            <view class="button_class">
              <custom-button borderRadius="12rpx" margin="0 20rpx 0 0" @click="chooseTimeFn(1)">一周内</custom-button>
              <custom-button borderRadius="12rpx" margin="0 20rpx 0 0" @click="chooseTimeFn(2)">一月内</custom-button>
              <custom-button borderRadius="12rpx" margin="0 20rpx 0 0" @click="chooseTimeFn(3)">半年内</custom-button>
              <custom-button borderRadius="12rpx" width="170rpx" @click="chooseTimeFn(4)">大于半年</custom-button>
            </view>
          </view>
          <view class="form-item">
            <view class="form-title">此次病情是否去医院就诊过？</view>
            <view class="button_class">
              <custom-button borderRadius="12rpx" margin="0 20rpx 0 0" @click="chooseConsultFn(1)">就诊过</custom-button>
              <custom-button borderRadius="12rpx" width="170rpx" @click="chooseConsultFn(0)">没就诊过</custom-button>
            </view>
          </view>
          <view style="display: flex; flex-direction: column; align-items: center; padding-bottom: 200rpx">
            <!-- <uv-upload width="80" height="80" :fileList="fileList1" name="1" multiple :maxCount="9" @afterRead="afterRead" @delete="deletePic"></uv-upload>-->
            <uni-file-picker
              v-model="descForm.pictures"
              fileMediatype="image"
              :limit="9"
              file-extname="png,jpg,gif,webp"
              :image-styles="{ width: '200rpx', height: '200rpx' }"
              :autoUpload="true"
              mode="grid"
              @select="select"
            />
            <view class="item-hint">上传检查报告或患处照片（最多9张）</view>
          </view>
        </uv-form>
      </view>
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
import { computed, reactive } from 'vue';
import customButton from '@/components/custom-button.vue';
import { useConsultStore } from '@/stores/index.js';
import { storeToRefs } from 'pinia';
import { onLoad } from '@dcloudio/uni-app';
import { setValue } from '@/utils/tools.js';

const consultStore = useConsultStore();
const { consultData, resetConsultDataFn } = storeToRefs(consultStore);

const descForm = reactive({
  illnessDesc: '',
  illnessTime: '',
  renalFuntion: '',
  pictures: []
});

const fileList1 = [];
let queryOption = {}; // 接收到的路径参数对象

const chooseTimeFn = (value) => {
  descForm.illnessTime = value;
};

const chooseConsultFn = (value) => {
  descForm.renalFuntion = value;
};

const select = (e) => {
  console.log('选择文件：', e);
};

const nextStepEnable = computed(() => {
  return descForm.illnessDesc !== '' && descForm.illnessTime !== '' && descForm.renalFuntion !== '';
});
const nextStepFn = () => {
  console.log('[ 进行下一步 descForm] => ', descForm);
  consultData.value = descForm;
  // 存储路径，再继续跳转到其他页面
  setValue(consultStore, queryOption, true);
  console.log('[ consultStore ] => ', consultStore.id, consultStore.type, consultStore.illnessType);
  uni.navigateTo({
    url: '/subpkg_archive/list/index'
  });
};

onLoad((option) => {
  Object.assign(queryOption, option);
});

// 思考？ 一定要等到下一步才触发存储嘛？ 步骤提前一点应该也可以？
</script>

<style lang="scss" scoped>
.desc-page {
  margin: 34rpx 30rpx 0;
}
.doctor-des {
  padding-left: $uni-spacing-col-base;
}
.desc-header {
  font-size: $uni-font-size-lg;
  font-weight: 500;
}
.desc-body {
  margin: $uni-spacing-row-base 0;
  padding: $uni-spacing-row-base;
  background-color: #f2f2f2;
  font-size: $uni-font-size-base;
  color: $uni-text-color-placeholder;
  border-radius: $uni-spacing-row-sm;
}
.desc-tip {
  font-size: $uni-font-size-sm;
  color: #999;
  margin-bottom: $uni-spacing-row-base;
}
.is-hover {
  color: rgba(255, 255, 255, 0.6);
}
.form-item {
  box-sizing: border-box;
  height: 180rpx;
  .form-title {
    padding-bottom: $uni-spacing-row-base;
  }
}
.item-hint {
  color: $uni-text-color-grey;
}
</style>
