<template>
  <view class="room-page">
    <scroll-view refresher-enabled refresher-background="#f2f2f2" scroll-y style="flex: 1; overflow: hidden">
      <view class="message-container">
        <!-- 处方信息 -->
        <template v-for="(item, index) in messageList" :key="index">
          <chat-info v-if="item.msgType === 1"></chat-info>
          <prescription-info v-if="item.msgType === 22"></prescription-info>
          <patient-info v-if="item.msgType === 21" :patientData="item.msg"></patient-info>
          <notify-info v-if="item.msgType === 31 || item.msgType === 32" :msgType="item.msgType"></notify-info>
          <rate-info v-if="item.msgType === 23 || item.msgType === 24"></rate-info>
        </template>
      </view>
    </scroll-view>

    <!-- 发送消息 -->
    <view class="message-bar">
      <template v-if="true">
        <uni-easyinput
          v-model="textMessage"
          @confirm="onInputConfirm"
          :clearable="false"
          :input-border="false"
          placeholder-style="font-size: 32rpx; color: #c3c3c5;"
          placeholder="问医生"
        />
        <view class="image-button">
          <uni-icons size="40" color="#979797" type="image"></uni-icons>
        </view>
      </template>
      <button v-else class="uni-button">咨询其它医生</button>
    </view>
  </view>
</template>

<script setup>
import { io } from 'socket.io-client';
import { baseURL } from '@/utils/http.js';
import { useUserStore } from '@/stores/index.js';
import { onMounted, ref } from 'vue';
import chatInfo from '@/subpkg_consult/room/components/chat-info.vue';
import notifyInfo from '@/subpkg_consult/room/components/notify-info.vue';
import patientInfo from '@/subpkg_consult/room/components/patient-info.vue';
import prescriptionInfo from '@/subpkg_consult/room/components/prescription-info.vue';
import rateInfo from '@/subpkg_consult/room/components/rate-info.vue';

// 引入消息组件

const userStore = useUserStore();
const { token, userInfo } = userStore;

const props = defineProps({
  orderId: String
});

// 消息列表
const messageList = ref([]);
// 文字信息
const textMessage = ref('');
// 问诊订单详情
const orderDetail = ref({});

const onInputConfirm = () => {
  console.log('[ textMessage.value ] => ', textMessage.value);
};

const getOrderDetail = () => {
  console.log('[ 222 ] => ', 222);
};

onMounted(() => {
  const socket = io(baseURL, {
    reconnectionDelayMax: 10000,
    auth: {
      token: 'Bearer ' + token
    },
    query: {
      orderId: props.orderId // 房间号
    },
    transports: ['websocket', 'polling']
  });

  // 获取历史消息;
  socket.on('chatMsgList', ({ code, data }) => {
    console.log('[ data ] => ', data);
    // 没有返回数据
    if (code !== 10000) return;
    // 提取列表数据
    data.forEach(({ items }) => {
      // 追加到消息列表中
      messageList.value.push(...items);
    });
    // console.log('[ messageList ] => ', messageList.value);
  });

  // 如何发送消息
  socket.on('statusChange', getOrderDetail);

  // 发送用户信息
  // socket.emit('sendChatMsg', {
  //   // 当前登录用户的ID
  //   from: userInfo.id,
  //   to: orderDetail.value?.docInfo?.id,
  //   msgType: 1,
  //   msg: {
  //     content: textMessage.value
  //   }
  // });
  // 清空表单
  textMessage.value = '';
});
</script>

<style lang="scss" scoped>
@import url('./index.scss');
</style>
