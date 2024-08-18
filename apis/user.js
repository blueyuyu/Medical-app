import { get, post, del } from '@/utils/request.js';

// 用户登录
export const userLogin = (mobile, password) => {
  return post('/login/password', {
    mobile,
    password
  });
};

// 用户注册
export const userRegiter = (mobile, code, password) => {
  return post('/register', {
    mobile,
    code,
    password
  });
};

// 用户登出
export const userLogout = () => {
  return get('/logout');
};

// 用户个人信息获取
export const getUserInfo = () => {
  return get('/patient/myUser');
};

// 用户关注操作
export const postUserLike = (type, id) => {
  return post('/like', {
    type,
    id
  });
};

// 用户个人信息列表
export const getUserLike = (type, id) => {
  return post('/like', {
    type,
    id
  });
};
