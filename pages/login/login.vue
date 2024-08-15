<template>
  <view class="login">
    <uni-forms :modelValue="formData">
      <uni-forms-item required label="手机号" name="mobile">
        <uni-easyinput type="text" v-model="formData.mobile" placeholder="请输入电话号" />
      </uni-forms-item>
      <uni-forms-item required name="password" label="密码">
        <uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
      </uni-forms-item>
    </uni-forms>
    <button @click="submitForm">Submit</button>
  </view>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { userLogin } from '@/apis/user.js';
const formData = reactive({
  mobile: '',
  password: ''
});

const submitForm = async () => {
  if (formData.mobile !== '' && formData.mobile !== '') {
    const res = await userLogin(formData.mobile, formData.password);
    console.log('[ res ] => ', res);
  }
};
</script>

<style lang="scss"></style>
