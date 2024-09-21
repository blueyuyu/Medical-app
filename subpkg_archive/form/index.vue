<template>
  <view class="addPatient">
    <uv-form labelPosition="left" :model="form" :rules="rules" ref="formRef">
      <uv-form-item label="患者姓名" prop="name" labelWidth="100" customStyle="margin-top: 10rpx">
        <uv-input v-model="form.name" border="none" placeholder="请填写真实姓名"></uv-input>
      </uv-form-item>
      <uv-form-item label="患者身份证号" prop="idCard" labelWidth="100" customStyle="margin-top: 20rpx">
        <uv-input v-model="form.idCard" border="none" placeholder="请填写身份证号"></uv-input>
      </uv-form-item>
      <uv-form-item label="患者性别" prop="gender" labelWidth="100" customStyle="margin-top: 20rpx">
        <uv-radio-group v-model="form.gender">
          <uv-radio activeColor="#20c5b2" :customStyle="{ margin: '8px' }" v-for="(item, index) in genderlist" :key="index" :label="item.name" :name="item.value"></uv-radio>
        </uv-radio-group>
      </uv-form-item>
      <uv-form-item label="默认就诊人" prop="form.defaultFlag" labelWidth="100" customStyle="margin-top: 20rpx">
        <uv-switch v-model="form.defaultFlag" size="20" activeColor="#20c5b2"></uv-switch>
      </uv-form-item>
      <uv-button type="primary" text="保存" customStyle="margin-top: 60rpx;font-color:#fff;background-color:#20c5b2;border-radius:40rpx" @click="submit"></uv-button>
    </uv-form>
  </view>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { postPatientInfo, putPatientInfo, getPatientInfo } from '@/apis/patient.js';
import { onLoad } from '@dcloudio/uni-app';
const form = ref({
  id: '',
  name: '',
  idCard: '',
  defaultFlag: false,
  gender: ''
});
const formRef = ref(null);
const rules = {
  name: [
    {
      type: 'string',
      required: true,
      message: '请填写真实姓名',
      trigger: ['blur', 'change']
    },
    {
      pattern: /^[\u4e00-\u9fa5]{2,6}$/g,
      transform(value) {
        return String(value);
      },
      message: '只能填写中文',
      trigger: ['blur', 'change']
    }
  ],
  idCard: [
    {
      type: 'string',
      required: true,
      message: '请填写身份证号码',
      trigger: ['blur', 'change']
    },
    {
      pattern: /^([1-9]\d{5})(\d{4})(\d{2})(\d{2})(\d{3})(\d|X)$/g,
      transform(value) {
        return String(value);
      },
      message: '身份证号格式不正确',
      trigger: ['blur', 'change']
    }
  ],
  gender: [
    {
      type: 'number',
      required: true,
      message: '请选择性别',
      trigger: ['blur', 'change']
    },
    {
      validator: (rule, value, callback) => {
        // 通过身份证校验性别并且判断
        const card = form.value.idCard;
        const gender = parseInt(card.charAt(card.length - 1), 10) % 2 == 0 ? 0 : 1;
        if (value !== gender) {
          return false;
        }
        return true;
      },
      message: '请选择正确的性别',
      trigger: ['blur', 'change']
    }
  ]
};
const genderlist = [
  {
    name: '男',
    value: 1
  },
  {
    name: '女',
    value: 0
  }
];
const isEdit = ref(false);
let goToUrl = '/subpkg_archive/list/index';
const submit = async () => {
  await formRef.value.validate();
  const flag = form.value.defaultFlag ? 1 : 0;
  if (isEdit.value) {
    const res = await putPatientInfo(form.value.id, form.value.name, form.value.idCard, flag, form.value.gender);
    uni.utils.toast('修改信息成功');
  } else {
    const res = await postPatientInfo(form.value.name, form.value.idCard, flag, form.value.gender);
    uni.utils.toast('添加患者成功');
  }
  await formRef.value.resetFields();
  uni.navigateTo({
    url: goToUrl
  });
};

onLoad(async (option) => {
  if (option.from) {
    // from=consult
    // console.log('[ option.from ] => ', option.from);
    goToUrl = '/subpkg_consult/selectPatient/index';
  }
  if (option.id) {
    isEdit.value = true;
    const res = await getPatientInfo(option.id);
    form.value = res;
    form.value.defaultFlag = res?.defaultFlag == 1 ? true : false;
  }
});
</script>

<style lang="scss" scoped>
.addPatient {
  padding: 40rpx;
}
</style>
