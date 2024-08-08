import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    react(),
    dts({
      outDir: 'dist',
      include: 'packages/*/src/**',
    }),
  ],
  build: {
    lib: {
      entry: {
        react: 'packages/react/src/index.ts',
        vue: 'packages/vue/src/index.ts',
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'vue'],
    }
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        jsxImportSource: 'react',
      }
    }
  }
})