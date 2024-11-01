import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: 'lib' }),
    libAssetsPlugin({
      include: ['**/*.svg', '**/*.css'],
      outputPath: './',
      name: '[name].[ext]',
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      formats: ['es'],
      entry: resolve(__dirname, 'lib/main.ts'),
    },
    rollupOptions: {
      // Option to not bundle these dependencies
      // although we may not want to do this, so we can verify that tree shaking is working
      external: ['react', 'react-dom'],
    }
  }
})
