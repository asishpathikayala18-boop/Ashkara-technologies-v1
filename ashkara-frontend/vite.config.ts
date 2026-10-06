import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router', 'react-router-dom'],
          charts: ['chart.js', 'react-chartjs-2', 'recharts'],
          ui: ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
          utils: ['axios', '@tanstack/react-query', 'react-hot-toast']
        }
      }
    }
  },
  esbuild: {
    drop: ['console', 'debugger'],
  }
});
