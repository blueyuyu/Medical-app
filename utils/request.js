import { http } from './http.js';

/**
 * 封装 get 方法
 * @param {*} url
 * @param {*} params
 * @param {*} 响应类型
 * @returns {Promise}
 */
export async function get(url, params) {
  try {
    const response = await http.get(url, { params });
    return response.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * 封装 post 方法
 * @param {string} url
 * @param {*} data
 * @param {boolean} errorHandler
 * @returns {Promise}
 */
export async function post(url, data = {}, errorHandler) {
  try {
    const response = await http.post(url, data);
    if (errorHandler) {
      return response.data;
    } else {
      return response.data.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * 封装 delete 方法
 * @param {*} url
 * @param {*} data
 * @returns {Promise}
 */
export async function del(url, data = {}) {
  try {
    const response = await http.delete(url, data);
    return response.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

/**
 * 封装 put 方法
 * @param {*} url
 * @param {*} data
 * @returns {Promise}
 */
export async function put(url, data = {}) {
  try {
    const response = await http.put(url, data);
    return response.data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
