import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://hamimistimewa.github.io/web-resume-nurhamim',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
