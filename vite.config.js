import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import Markdown from 'vite-plugin-md'
import link from '@yankeeinlondon/link-builder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    autoprefixer,
    Markdown({
      builders: [link()],
    }),
  ],
})
