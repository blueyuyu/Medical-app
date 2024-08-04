// 封装弹窗
// icon值说明 success: 显示成功图标，error: 显示错误图标； fail: 显示错误图标，此时title文本无长度显示；
// exception: 显示异常图标，此时title文本无长度显示； loading: 显示加载图标；none: 不显示图标。

// TODO question1：为啥这种写法挂载不上去呢？？？
// uni.utils.toast = (title, icon = 'success', mask = true, duration = 3000) => {
//   uni.showToast({
//     title,
//     icon,
//     mask,
//     duration,
//     success: (res) => {
//       // this.exeRet = "success:" + JSON.stringify(res)
//     },
//     fail: (res) => {
//       // this.exeRet = "fail:" + JSON.stringify(res)
//     }
//   });
// };

uni.utils = {
  toast(title, icon = 'success', mask = true, duration = 3000) {
    uni.showToast({
      title,
      icon,
      mask,
      duration,
      success: (res) => {
        // this.exeRet = "success:" + JSON.stringify(res)
      },
      fail: (res) => {
        // this.exeRet = "fail:" + JSON.stringify(res)
      }
    });
  }
};
