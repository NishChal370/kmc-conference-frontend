import { defineConfig } from "vite"
import path from 'path';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    //SEE: https://github.com/vitejs/vite/discussions/9440
    chunkSizeWarningLimit: 1600
  }
})
