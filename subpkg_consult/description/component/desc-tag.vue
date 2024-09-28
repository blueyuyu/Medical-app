<template>
  <uv-transition :show="props.show" mode="fade">
    <view class="tags">
      <view
        class="tag"
        v-for="item in tagData"
        :key="item.value"
        :class="[item.checked ? 'active' : '', props.type, props.size, props.shape]"
        :style="{
          color: props.textColor,
          borderColor: props.borderColor,
          bgColor: props.backgroundColor
        }"
        @click="selectedFn(props.chooseType, item)"
      >
        {{ item.name }}
      </view>
    </view>
  </uv-transition>
</template>
<script>
export default {
  name: 'desc-tag'
};
</script>

<script setup>
// 对封装组件props的一些解释
import { computed, reactive, ref, watch } from 'vue';

/**
 * @property {String} type = [info,primary]
 *
 * **/

const props = defineProps({
  tagArr: {
    type: Array,
    default: []
  },
  tagValue: {
    type: [Array, Number, String],
    default: ''
  },
  type: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'medium'
  },
  shape: {
    type: String,
    default: 'square' // square
  },
  textColor: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  bgColor: {
    type: String,
    default: ''
  },
  chooseType: {
    type: String,
    default: 'radio' //  'checkboxs'
  },
  show: {
    type: Boolean,
    default: true
  }
});

const tagData = reactive(props.tagArr);

const emit = defineEmits(['selected-tag', 'update:tagValue']);
let selectValue = props.chooseType === 'radio' ? null : [];

const selectedFn = (type, item) => {
  if (type == 'radio') {
    // TODO 思考一个问题： 为什么item.checked 触发更新，而使用 map 进行的遍历操作，却没有触发页面的样式更新呢？
    // 能使用 watch 或者 compued 来实现吗？
    // 理论上父组件传来的数据不应该被子组件修改
    item.checked = true;
    props.tagArr.forEach((mapItem) => {
      mapItem.checked = mapItem.name === item.name ? true : false;
    });
    selectValue = item.value;
  } else {
    // 需要考虑反选问题
    if (item.checked) {
      item.checked = false;
      const delIndex = selectValue.findIndex((el) => el === item.value);
      if (delIndex >= 0) {
        selectValue.splice(delIndex, 1);
      }
    } else {
      item.checked = true;
      selectValue.push(item.value);
      selectValue = [...new Set(selectValue)];
    }
  }
  emit('selected-tag', selectValue);
};
</script>

<style lang="scss" scoped>
// TODO 思考一个问题，关于如果使用justify-content : 只有两个三个元素，间距设置
.tags {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
}

.tag {
  text-align: center;
  border: 1px solid;
  background-color: #fff;
  // color: #16c2a3;
  font-weight: 500;
  margin: 0 30rpx 0 0;
  &.active {
    color: #fff !important;
    background-color: #16c2a3 !important;
    border: 1px solid transparent !important;
  }
  &.primary {
    border-color: #16c2a3;
    color: #16c2a3;
  }
  &.success {
    border-color: #5ac725;
    color: #5ac725;
  }
  &.info {
    border-color: #3c9cff;
    color: #3c9cff;
  }
  &.warning {
    border-color: #f9ae3d;
    color: #f9ae3d;
  }
  &.error {
    border-color: #f56c6c;
    color: #f56c6c;
  }
  &.medium {
    padding: 10rpx 30rpx;
    font-size: 13px;
  }
  &.large {
    padding: 15rpx 40rpx;
    font-size: 16px;
  }

  &.square {
    border-radius: 10rpx;
  }
  &.circle {
    border-radius: 24rpx;
  }
}

// 圆弧怎么实现的
</style>
