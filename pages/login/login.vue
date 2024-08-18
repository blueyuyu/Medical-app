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
import { useUserStore } from '@/stores/index.js';
const formData = reactive({
  mobile: '13230000001',
  password: 'abc12345'
});

const store = useUserStore();

const submitForm = async () => {
  if (formData.mobile !== '' && formData.mobile !== '') {
    const res = await userLogin(formData.mobile, formData.password);
    console.log('[ res ] => ', res);
    console.log('[ userStore ] => ', store);
    // 注意事项1： 如果使用自动存储的那个，就不用自己把对象设置成序列化的形式
    store.setUser(res);
    store.setToken(res.token);

    // 跳转到tab栏页面首页
    uni.switchTab({
      url: '/pages/my/my'
    });
  }
};
</script>

<style lang="scss"></style>
