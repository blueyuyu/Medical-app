import Request from 'luch-request'; // 使用npm
import { useUserStore } from '@/stores/index.js';
import { type } from '../uni_modules/uni-forms/components/uni-forms/utils';

const whiteList = ['/login/password'];

export const baseURL = 'https://consult-api.itheima.net/';
// baseUrl:https://t1ps66c7na.hk.aircode.run 此基地址不可使用，现更换h5端接口地址
const http = new Request({
  baseURL: 'https://consult-api.itheima.net/',
  custom: {
    loading: true
  }
});

// 配置请求拦截器
http.interceptors.request.use(
  (config) => {
    // 先出现加载
    if (config.custom.loading) {
      uni.utils.toast('加载中', 'loading');
    }

    const store = useUserStore();
    const defaultHeader = {
      'Content-Type': 'application/json'
    };
    if (store.token && !whiteList.includes(config.url)) {
      defaultHeader.authorization = 'Bearer ' + store.token;
    }
    // 后面覆盖前面
    config.header = {
      ...defaultHeader,
      ...config.header
    };

    return config;
  },
  (config) => {
    // 可使用async await 做异步操作
    return Promise.reject(config);
  }
);

// 配置响应拦截器
http.interceptors.response.use(
  (response) => {
    // 在响应拦截器里要关闭加载状态
    uni.hideToast();
    if (response.data.code === 401) {
      uni.switchTab({
        url: '/pages/login/login'
      });
    }
    return response;
  },
  (error) => {
    /*  对响应错误做点什么 （statusCode !== 200）*/
    uni.hideToast();
    console.log(error);
    return Promise.reject(error);
  }
);

export { http, baseURL };
