/**
 *  @param {option} obj  接收到的option对象
 * 把 onload 接收到的 option 转化为路径url
 * ?id = 1& name='lili'
 ***/
export const ObjToUrl = (option) => {
  let url = '?';
  let flag = 0;
  for (let key in option) {
    if (option.hasOwnProperty(key)) {
      if (flag != 0) {
        url += '&';
      }
      url += key + '=' + option[key];
      flag++;
    }
  }
  // console.log('[ url ] => ', url);
  return url;
};

// 这是工具方法的初代版本，仅以此留作纪念
// export function setValue(obj, valueObj, reverseCopy = false) {
//   if (reverseCopy) {
//     for (const key in valueObj) {
//       if (obj[key] != undefined && obj.hasOwnProperty(key)) {
//         obj[key] = valueObj[key];
//       }
//     }
//   } else {
//     for (const key in obj) {
//       if (valueObj[key] != undefined && valueObj.hasOwnProperty(key)) {
//         obj[key] = valueObj[key];
//       }
//     }
//   }
// }

/**
 * 遍历的目标对象 的 复制方法,不可对响应式使用？
 * @param {object} obj 目标对象,
 * @param {object} valueObj 有值的对象
 * @param {boolean} reverseCopy 反转被复制对象，设置为 true ,则遍历 有值的对象
 */
export function setValue(obj, valueObj, reverseCopy = false) {
  const keysToIterate = reverseCopy ? Object.keys(valueObj) : Object.keys(obj);
  keysToIterate.forEach((key) => {
    if ((reverseCopy && obj[key] !== undefined) || (!reverseCopy && valueObj[key] !== undefined)) {
      obj[key] = valueObj[key];
    }
  });
}

/**
 * 置空对象
 * @param {obj} obj
 */
export function clearObj(obj) {
  Object.keys(obj).forEach((item) => {
    obj[item] = '';
  });
}
