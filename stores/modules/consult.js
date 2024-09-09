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
      consultData.value.illnessDesc = '';
      consultData.value.illnessTime = '';
      consultData.value.renalFuntion = '';
      consultData.value.picture = [];
    };

    // 把路径存起来
    const type = ref('');
    const illnessType = ref('');
    const id = ref('');

    // 千万不要忘记这里要 return
    return { consultData, resetConsultDataFn, type, illnessType, id };
  },
  {
    persist: {
      pick: ['consultData']
    }
  }
);
