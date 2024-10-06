'use strict';
exports.main = async (event, context) => {
  // 路线规划
  const { data } = await uniCloud.request({
    url: 'https://apis.map.qq.com/ws/direction/v1/walking/',
    data: {
      key: 'OCVBZ-6BM3B-AMPUJ-NJZOX-7KIP3-VDBSJ',
      from: '40.060539,116.343847',
      to: '40.086757,116.328634'
    }
  });
  //返回数据给客户端
  return data;
};
