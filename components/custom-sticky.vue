<template>
  <view class="sticky" :style="styleData" style="padding: 10px 0">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'custom-sticky'
};
</script>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  offsetTop: {
    type: [Number, String],
    default: 0
  },
  bgColor: {
    type: String
  },
  zIndex: {
    type: [Number, String],
    default: 999
  }
});

console.log('[ props.offsetTop ] => ', props.offsetTop, props.zIndex, props.bgColor);

const styleData = computed(() => {
  return {
    top: props.offsetTop,
    zIndex: props.zIndex,
    backgroundColor: props.bgColor
  };
});
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0;
}
</style>
