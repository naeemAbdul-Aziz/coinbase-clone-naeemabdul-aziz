import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiTarget = env.VITE_API_URL || 'http://localhost:5001';

  const proxyEntry = () => ({
    target: apiTarget,
    changeOrigin: true,
    secure: false,
  });

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    server: {
      proxy: {
        '/api':      proxyEntry(),
        '/register': proxyEntry(),
        '/login':    proxyEntry(),
        '/profile':  proxyEntry(),
        '/crypto':   proxyEntry(),
        '/uploads':  proxyEntry(),
      },
    },
  };
})
