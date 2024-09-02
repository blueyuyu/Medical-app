<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  }
};
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/static/fonts/monoIcon/iconfont.css';
@import '@/static/fonts/multiIcon/iconfont.css';
@import './uni.scss';
@import './styles/global.scss';

/* 如果是小程序的话，这一行注释掉，因为tailwind base模块提供的一些样式选择器是基于,这在小程序中会报错 */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
