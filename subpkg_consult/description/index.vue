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
              <desc-tag :tagValue="descForm.illnessTime" :tagArr="illnessTimeArr" @selected-tag="selectFn($event, 'illness')"></desc-tag>
            </view>
          </view>
          <view class="form-item">
            <view class="form-title">此次病情是否去医院就诊过？</view>
            <view class="button_class">
              <desc-tag :tagArr="renalArr" @selected-tag="selectFn($event, 'renal')"></desc-tag>
            </view>
          </view>
          <view style="display: flex; flex-direction: column; align-items: center; padding-bottom: 200rpx">
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
    <uv-modal
      ref="modalRef"
      title="温馨提示"
      content="是否恢复之前填写的病情信息"
      width="600rpx"
      showCancelButton
      confirmColor="#16C2A3"
      cancelColor="#848484"
      @confirm="modalConfirmFn"
      @cancel="modalCancelFn"
    ></uv-modal>
  </view>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import customButton from '@/components/custom-button.vue';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import { useConsultStore } from '@/stores/index.js';
import { storeToRefs } from 'pinia';
import { setValue } from '@/utils/tools.js';
import descTag from './component/desc-tag.vue';

const consultStore = useConsultStore();
// method 与 非响应式会被完全忽略
const { consultData } = storeToRefs(consultStore);

const descForm = reactive({
  illnessDesc: '',
  illnessTime: '',
  renalFuntion: '',
  pictures: []
});

const fileList1 = [];
let queryOption = {}; // 接收到的路径参数

// 此处是数据回显代码
const modalRef = ref('');
const descDataEcho = () => {
  if (consultData.value.illnessDesc) {
    modalRef.value.open();
  }
};

const modalCancelFn = () => {
  // 消除consultData，并且关闭
  consultStore.resetConsultDataFn();
  modalRef.value.close();
};

const modalConfirmFn = () => {
  // 数据回显，再关闭
  // console.log('[ consultData ] => ', consultData);
  descForm.illnessDesc = consultData.value.illnessDesc;
  descForm.illnessTime = consultData.value.illnessTime;
  descForm.renalFuntion = consultData.value.renalFuntion;
  descForm.pictures = consultData.value.pictures;
  modalRef.value.close();
};

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
  consultData.value = descForm;
  // 存储路径，再继续跳转到其他页面
  setValue(consultStore, queryOption, true);
  uni.navigateTo({
    url: '/subpkg_consult/selectPatient/index'
  });
};

const illnessTimeArr = reactive([
  {
    name: '一周内',
    value: 1,
    checked: false
  },
  {
    name: '一月内',
    value: 2,
    checked: false
  },
  {
    name: '半年内',
    value: 3,
    checked: false
  },
  {
    name: '大于半年',
    value: 4,
    checked: false
  }
]);
const renalArr = reactive([
  {
    name: '就诊过',
    value: 1,
    checked: false
  },
  {
    name: '没就诊过',
    value: 0,
    checked: false
  }
]);
const selectFn = (tagValue, type) => {
  if (type === 'illness') {
    descForm.illnessTime = tagValue;
  }
  if (type === 'renal') {
    descForm.renalFuntion = tagValue;
  }
};

// 这是回显时，两个按钮的高亮逻辑
// ？还有没有更好的思路啊
watch(
  () => descForm.illnessTime,
  (newValue, oldValue) => {
    illnessTimeArr.forEach((item) => {
      if (item.value == newValue) {
        item.checked = true;
      }
    });
  }
);

watch(
  () => descForm.renalFuntion,
  (newValue, oldValue) => {
    renalArr.forEach((item) => {
      if (item.value == newValue) {
        item.checked = true;
      }
    });
  }
);

onMounted(() => {
  descDataEcho();
});

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
