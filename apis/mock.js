import { get, post, del } from '@/utils/request.js';

// mock用例的测试
export const getMockAddress = (params) => {
  return get('/mock/address', params);
};

export const postMockData = (data) => {
  return post('/mock/test', data);
};

export const postMockValid = (data) => {
  return post('/mock/valid', data);
};
