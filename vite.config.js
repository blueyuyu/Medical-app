import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { resolve } from './getPath.js';
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite';

export default defineConfig({
  plugins: [uni(), uvwt()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss')({
          config: resolve('./tailwind.config.js')
        }),
        require('autoprefixer')()
      ]
    }
  }
});
