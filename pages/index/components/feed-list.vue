<template>
  <view class="item">
    <view class="item-doctor" style="display: flex; justify-content: space-between; margin-top: 20rpx">
      <view class="doctor-info" style="display: flex">
        <uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle" width="40" height="40"></uv-image>
        <view class="doctor-info-detail" style="margin-left: 20rpx">
          <view style="font-weight: 500">张清北</view>
          <view class="doctor-desc">
            <text>北京协会医院</text>
            <text>内分泌科</text>
            <text>主任医师</text>
          </view>
        </view>
      </view>
      <view class="doctor-focus">
        <button size="mini" type="default" style="width: 120rpx; background-color: #fff; color: #16c2a3; border: 1px solid #16c2a3; border-radius: 24rpx" hover-class="is-hover">
          关注
        </button>
      </view>
    </view>
    <view class="item-content">
      <h4>夏天不能光脚丫。不能吃冰淇淋？</h4>
      <view>
        <view class="two-ll">
          一次，公社组织社员们卖菜，地里十颗捆的大白菜，别人扛一捆就被压得直喘粗气，爷爷却-
          -咬牙一次扛两捆。一次，公社组织社员们卖菜，地里十颗捆的大白菜，别人扛一捆就被压得直喘粗气，爷爷却- -咬牙一次扛两捆。
        </view>
        <navigator url="" style="" class="fullText">全文</navigator>
      </view>

      <uv-image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px" height="80px"></uv-image>
    </view>
    <view class="item-bottom" style="display: flex; justify-content: space-between">
      <view class="item-tag">
        <text class="tag">儿童健康</text>
      </view>
      <view class="item-collect">
        <text>95收藏</text>
        <text>34评论</text>
      </view>
    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  feedData: Array
});
</script>

<style lang="scss" scoped>
.doctor-desc {
  font-size: $uni-font-size-sm;
  color: $uni-text-color-grey;
  padding-top: $uni-spacing-row-sm;
}

.doctor-desc text {
  padding-right: $uni-spacing-col-base;
}

.doctor-focus button {
  font-size: $uni-font-size-sm;
}

.is-hover {
  color: rgba(255, 255, 255, 0.6);
}

/* float */
// .item-text {
//   display: flex;
// }
// .content-article::before {
//   content: '';
//   display: inline-block;
//   float: right;
//   width: 10px;
//   height: 20px; /*先随便设置一个高度*/
//   background: red;
//   margin-bottom: -24px;
// }

.fullText {
  color: $uni-text-color-placeholder;
  font-size: $uni-font-size-base;
}

.index-content {
  margin-top: 40rpx;
  h4 {
    padding: $uni-spacing-row-base 0;
  }
  .content-article {
    color: $uni-text-color-grey;
  }
  .content-article::after {
    content: '';
    margin-left: 100rpx;
  }
}

.item-collect {
  color: $uni-text-color-grey;
  text {
    padding-right: $uni-spacing-col-sm;
  }
}

.item-bottom {
  padding-top: $uni-spacing-row-base;
}

.tag {
  color: #00c8aa;
}
.tag::before {
  content: '#';
  color: #909399;
}
</style>
