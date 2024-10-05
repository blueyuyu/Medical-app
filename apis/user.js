/*
 * @Author: blueyuyu ublueyuyuyu@gmail.com
 * @Date: 2024-09-30 15:10:29
 * @LastEditors: blueyuyu ublueyuyuyu@gmail.com
 * @LastEditTime: 2024-09-30 15:10:53
 * @FilePath: \medical-consultation\apis\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
