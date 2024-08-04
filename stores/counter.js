// stores/counter.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore(
  'counter',
  () => {
    // 定义 state
    const count = ref(122);

    // 定义 getters
    const double = computed(() => count.value * 2);

    // 定义 actions
    function increment() {
      count.value++;
    }
    function decrement() {
      count.value--;
    }

    // 千万不要忘记这里要 return
    return { count, double, increment, decrement };
  },
  {
    persist: {
      paths: ['count']
    }
  }
);
