import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  base: "/Image-fizz",
  plugins: [nodePolyfills()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      jimp: 'node_modules/jimp/dist/esm/index.js'
    }
  }
})
