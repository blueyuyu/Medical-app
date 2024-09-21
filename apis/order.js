import { get, post, del, put } from '@/utils/request.js';

// 计算就诊信息和抵扣信息
export const getOrderPre = (type, illnessType, useCoupon, couponId, docId) => {
  const params = { type, illnessType, useCoupon };
  if (couponId) {
    params.couponId = couponId;
  }
  if (docId) {
    params.docId = docId;
  }
  return get('/patient/consult/order/pre', params);
};

// 保存、修改问诊订单订单id
// illnessDesc,
// illnessTime,
// consultFlag,
// liverFunction,
// renalFunction,
// allergicHistory,
// fertilityStatus,
// docId,
// medicines,
// pictures
export const postConsultOrder = (type, couponId, illnessType, patientId, depId, illnessInfo = {}) => {
  return post('/patient/consult/order', {
    type,
    couponId,
    illnessType,
    patientId,
    depId,
    ...illnessInfo
  });
};

/**
 * 支付功能接口
 * @param {paymentMethod}  = [1 zfb |2 wsf |0 wx]
 * @param {orderId}  订单id
 * @param {payCallback}  测试返回地址
 **/
export const postConsultPay = (paymentMethod, orderId, payCallback) => {
  return post('/patient/consult/pay', {
    paymentMethod,
    orderId,
    payCallback
  });
};
