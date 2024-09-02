import { resolve } from './getPath.js';

/** @type {import('tailwindcss').Config} */
module.exports = {
  separator: '__', // 如果是小程序项目需要设置这一项，将 : 选择器替换成 __，之后 hover:bg-red-500 将改为 hover__bg-red-500
  corePlugins: {
    // 预设样式
    preflight: false, // 一般uniapp都有预设样式，所以不需要tailwindcss的预设
    // 以下功能小程序不支持
    space: false, // > 子节点选择器
    divideWidth: false,
    divideColor: false,
    divideStyle: false,
    divideOpacity: false
  },
  // 不在content 包括的文件内，你编写的class,不生成对应的css工具类。
  content: [
    './pages/**/*.{html,ts,jsx,tsx,vue,js}',
    './main.js',
    './App.vue',
    './index.html',
    './pages/**/components/*.{html,ts,jsx,tsx,vue,js}',
    './subpkg_archive/**/*.(vue,js)'
  ].map(resolve),
  theme: {
    extend: {}
  },
  plugins: [],
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      divideColor: ['group-hover']
    }
  },
  presets: [
    require('tailwindcss-rem2px-preset').createPreset({
      // 32 意味着 1rem = 32rpx
      fontSize: 32,
      // 转化的单位,可以变成 px / rpx
      unit: 'rpx'
    })
  ]
};
