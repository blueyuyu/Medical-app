import { get, post, del, put } from '@/utils/request.js';

// 患者列表的增删改查
export const getPatientInfo = (id) => {
  return get(`/patient/info/${id}`);
};

export const postPatientInfo = (name, idCard, defaultFlag, gender) => {
  return post(`/patient/add`, {
    name,
    idCard,
    defaultFlag,
    gender
  });
};

export const getPatientList = () => {
  return get(`/patient/mylist`);
};

export const delPatient = (id) => {
  return del(`/patient/del/${id}`);
};

export const putPatientInfo = (id, name, idCard, defaultFlag, gender) => {
  return put(`/patient/update`, {
    id,
    name,
    idCard,
    defaultFlag,
    gender
  });
};
