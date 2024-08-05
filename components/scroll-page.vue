<template>
  <scroll-view
    scroll-y
    :style="{ height: windowHeight + 'px', backgroundColor: props.backgroundColor, borderBottom: props.bottomStyle }"
    style="box-sizing: border-box"
    refresher-enabled="props.refresherEnabled"
    :refresher-triggered="props.refresherTriggered"
    @refresherrefresh="$emit('onRefresh', $event)"
    @scrolltolower="$emit('scrolltolower', $event)"
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

defineEmits(['onRefresh', 'scrolltolower']);
</script>

<style lang="scss">
.scroll_con {
  // 使用CSS 的环境变量函数 env()，safe-area-inset-bottom 表示安全区域底部的偏移量
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
