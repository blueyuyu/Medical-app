// #ifdef H5
import Mock from 'better-mock';
// #endif

// #ifdef MP-WEIXIN
const Mock = require('better-mock/dist/mock.mp.js');
// #endif

import baseURL from '@/utils/http.js';
Mock.mock('url', function () {
  return {
    ok: true,
    data: {},
    msg: ''
  };
});
