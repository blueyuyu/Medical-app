import { get, post, del } from '@/utils/request.js';

// 用户个人信息列表
export const getDepartAll = () => {
  return get('/dep/all');
};
