import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  base: "/Image-fizz",
  plugins: [nodePolyfills()],
  server: {
    open: true
  }
})
