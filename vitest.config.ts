import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.spec.ts']
  },
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url))
    }
  },
  esbuild: {
    include: /src\/.*\.ts$/,
    exclude: []
  }
})
