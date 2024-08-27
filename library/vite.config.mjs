import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    react(),
    UnoCSS(),
    dts({
      outDir: 'dist',
      include: 'packages/*/src/**',
      compilerOptions: {
        jsxImportSource: 'react',
      }
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