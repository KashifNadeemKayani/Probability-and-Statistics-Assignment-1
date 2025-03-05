import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/StatsA1/',
  server: {
    host: true, // Allows access from the local network
    port: 5173, // Default Vite port, you can change if needed
  },
});
