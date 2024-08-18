// stores/counter.js
import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref(null);
    const token = ref(null);

    // 设置用户
    const setUser = (val) => {
      userInfo.value = val;
    };

    // 删除用户
    const delUser = () => {
      userInfo.value = null;
    };

    // 设置token
    const setToken = (val) => {
      token.value = val;
    };

    // 删除用户
    const delToken = () => {
      token.value = null;
    };

    return { userInfo, setUser, delUser, token, setToken, delToken };
  },
  {
    persist: true
  }
);
