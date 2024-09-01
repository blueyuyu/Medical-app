<!-- 滚动组件的封装，内部计算了安全距离 -->
<!-- 1. 页面可以滚动
2. 适配安全区域
3. 自定义底部 tabBar 边框线
4. 支持下拉刷新和上拉加载 -->
<template>
  <scroll-view
    scroll-y
    :style="{ height: windowHeight + 'px', backgroundColor: props.backgroundColor, borderBottom: props.bottomStyle }"
    style="box-sizing: border-box"
    refresher-enabled="props.refresherEnabled"
    :refresher-triggered="props.refresherTriggered"
    @refresherrefresh="$emit('onRefresh', $event)"
    @scrolltolower="$emit('scrolltolower', $event)"
    @scroll="$emit('scroll', $event)"
  >
    <view class="scroll_con">
      <slot></slot>
    </view>
  </scroll-view>
</template>

<script setup>
// 获取
const { windowHeight } = uni.getSystemInfoSync();

const props = defineProps({
  bottomStyle: {
    type: [String, Boolean],
    default: false
  },
  refresherEnabled: {
    type: Boolean,
    default: false
  },
  refresherTriggered: {
    type: Boolean,
    default: false
  },
  backgroundColor: String
});

defineEmits(['onRefresh', 'scrolltolower', 'scroll']);
</script>

<style lang="scss">
.scroll_con {
  // 使用CSS 的环境变量函数 env()，safe-area-inset-bottom 表示安全区域底部的偏移量
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
