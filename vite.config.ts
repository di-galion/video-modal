import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/platform/apps/',
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler', // or "modern"
            },
        },
    },
    optimizeDeps: {
        exclude: ['js-big-decimal'],
    },
});
