import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages will serve this project from /hu-teacher-chatroom/.
export default defineConfig({
  base: '/hu-teacher-chatroom/',
  plugins: [react()],
})
