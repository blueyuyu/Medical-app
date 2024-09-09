<template>
  <view class="department-page">
    <scroll-page class="depart-left">
      <view class="depart-leftItem" :class="[item.id == chooseID ? 'depart-choose' : '']" v-for="(item, index) in departData" :key="item.id" @click="chooseDepartFn(item)">
        {{ item.name }}
      </view>
    </scroll-page>
    <scroll-page class="depart-right">
      <view class="depart-rightItem" v-for="(item, index) in innerData" :key="item.id">
        <navigator :url="'/subpkg_consult/description/index' + quaryUrl + '&id=' + item.id">{{ item.name }}</navigator>
      </view>
    </scroll-page>
  </view>
</template>

<script setup>
import scrollPage from '@/components/scroll-page.vue';
import { getDepartAll } from '@/apis/department.js';
import { computed, reactive, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { ObjToUrl } from '@/utils/tools.js';

const departData = ref([]);
const innerData = ref([]);
const chooseID = ref('');
let quaryUrl = '';

const getDepartData = async () => {
  const res = await getDepartAll();
  departData.value = res;
  innerData.value = res[0].child;
  chooseID.value = res[0].id;
};
getDepartData();

const chooseDepartFn = (item) => {
  innerData.value = item.child;
  chooseID.value = item.id;
};

onLoad((option) => {
  quaryUrl = ObjToUrl(option);
});
</script>

<style lang="scss" scoped>
.department-page {
  display: flex;
  width: 100%;
}
.depart-left {
  flex: 1;
  background-color: #f2f2f2;
}
.depart-right {
  flex: 2;
}
.depart-leftItem,
.depart-rightItem {
  position: relative;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
}
.depart-choose {
  background-color: #fff;
  color: #00c8ab;
  font-weight: 600;
}
.depart-choose::before {
  content: '';
  width: 4px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #00c8ab;
}
</style>
