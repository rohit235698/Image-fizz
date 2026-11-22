import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: "/Image-fizz",
  server: {
    open: true,
  },
  resolve: {
    alias: {
      jimp: 'node_modules/jimp/dist/esm/index.js'
    }
  }
})
