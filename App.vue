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
</style>
