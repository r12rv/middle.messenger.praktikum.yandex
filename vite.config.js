import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        signin: resolve(__dirname, 'signin.html'),
        signup: resolve(__dirname, 'signup.html'),
        profile: resolve(__dirname, 'profile.html'),
        404: resolve(__dirname, '404.html'),
        500: resolve(__dirname, '500.html') 
      },
    },
  },
});
