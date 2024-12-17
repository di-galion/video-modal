import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/platform/apps/games/',
    build: {
        rollupOptions: {
            treeshake: false,
        },
    },
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
    server: {
        host: true,
        strictPort: true,
        port: 8009,
    },
});
