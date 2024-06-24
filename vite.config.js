import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
  export default defineConfig({
    server: {
      proxy: {
        '/api':{
          target: 'https://gcst-api.onrender.com/api/',
          changeOrigin: true,
          secure: false,
        }
      }
    },
  plugins: [react()],
})
