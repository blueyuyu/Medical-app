<template>
  <scroll-page style="padding: 40rpx">
    <view class="archivesTip">最多可添加6人</view>
    <view class="archives-item">
      <uni-swipe-action>
        <uni-swipe-action-item :left-options="options2" :right-options="options2" :show="isOpened" :auto-close="false" @change="change" @click="bindClick">
          <view class="archives-box bd-box">
            <div class="archives-left">
              <div class="archives-name">
                <text>李明</text>
                <text>3210******000006162</text>
              </div>
              <view class="archives-gender">
                <text>女</text>
                <text>63岁</text>
              </view>
            </div>
            <div class="archives-edit">编辑</div>
          </view>
        </uni-swipe-action-item>
      </uni-swipe-action>
    </view>
  </scroll-page>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import { reactive, ref } from 'vue';

const options2 = [
  {
    text: '取消',
    style: {
      backgroundColor: '#007aff'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#F56C6C'
    }
  }
];

const isOpened = ref('none'); // left right

const change = (e) => {
  isOpened.value = e;
  console.log('返回：', e);
};

const bindClick = (e) => {
  console.log(e);
  uni.showToast({
    title: `点击了${e.position === 'left' ? '左侧' : '右侧'} ${e.content.text}按钮`,
    icon: 'none'
  });
};
</script>

<style lang="scss">
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
}

.archives-text {
  font-size: 15px;
}
</style>
