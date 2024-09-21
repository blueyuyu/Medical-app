import App from './App';
import { createPinia } from 'pinia';
// 该插件是调用的 localstorage
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPersistedState } from 'pinia-plugin-persistedstate';
import '@/utils/utils.js';

// #ifndef VUE3
import Vue from 'vue';
import './uni.promisify.adaptor';
Vue.config.productionTip = false;
App.mpType = 'app';

const pinia = createPinia();
pinia.use(
  // 自定义 Pinia 插件
  createPersistedState({
    // 自定义本地存储的逻辑
    // 自定义本地存数据的名称
    key: (id) => `__${id}`,
    storage: {
      setItem(key, value) {
        uni.setStorageSync(key, value);
      },
      getItem(key) {
        return uni.getStorageSync(key);
      }
    }
  })
);

const app = new Vue({
  ...App
});
app.use(pinia);
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
export function createApp() {
  const pinia = createPinia();
  pinia.use(
    // 自定义 Pinia 插件
    createPersistedState({
      // 自定义本地存储的逻辑
      // 自定义本地存数据的名称
      key: (id) => `__${id}`,
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
        getItem(key) {
          return uni.getStorageSync(key);
        }
      }
    })
  );

  const app = createSSRApp(App);
  app.use(pinia);

  return {
    app
  };
}
// #endif
