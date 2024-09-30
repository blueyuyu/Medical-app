/*
 * @Author: blueyuyu ublueyuyuyu@gmail.com
 * @Date: 2024-09-30 07:58:39
 * @LastEditors: blueyuyu ublueyuyuyu@gmail.com
 * @LastEditTime: 2024-09-30 08:48:32
 * @FilePath: \medical-consultation\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
  plugins: [uni()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://consult-api.itheima.net/', // 目标服务
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});