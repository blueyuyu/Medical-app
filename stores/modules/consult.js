// stores/consult.js 这是用户问诊相关的仓库，涉及多个页面的数据传输
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useConsultStore = defineStore(
  'consult',
  () => {
    // 定义 state
    const consultData = ref({
      illnessDesc: '',
      illnessTime: '',
      renalFuntion: '',
      picture: []
    });

    // 重置数据
    const resetConsultDataFn = () => {
      consultData.value.illnessDesc = ''; // 描述病情
      consultData.value.illnessTime = ''; // 患病多久
      consultData.value.renalFuntion = ''; // 是否就诊
      consultData.value.picture = []; // 就诊图片
    };

    // 把路径存起来
    const type = ref(''); // 极速问诊
    const illnessType = ref(''); // 三甲问诊
    const id = ref(''); // 选择科室

    const patientId = ref(''); // 选择患者的id

    const initailizeData = () => {
      const consultStore = localStorage.getItem('__consult') ? JSON.parse(localStorage.getItem('__consult')) : null;
      if (consultStore) {
        if (consultStore.consultData) {
          consultData.value = consultStore.consultData;
        }
        if (consultStore.id && consultStore.type && consultStore.illnessType) {
          type.value = consultStore.type;
          id.value = consultStore.id;
          illnessType.value = consultStore.illnessType;
        }
        if (consultStore.patientId) {
          patientId.value = consultStore.patientId;
        }
      }
    };
    initailizeData();

    // 清空全部数据
    function resetAllConsultFn() {
      resetConsultDataFn();
      type.value = '';
      illnessType.value = '';
      id.value = '';
      patientId.value = '';
    }

    // 千万不要忘记这里要 return
    return { consultData, resetConsultDataFn, type, illnessType, id, patientId, resetAllConsultFn };
  },
  {
    persist: {
      pick: ['consultData', 'type', 'illnessType', 'id', 'patientId']
    }
  }
);
