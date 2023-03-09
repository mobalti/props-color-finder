import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [
    VitePWA({
      icons: [
        {
          src: '/image/icons-192.png',
          type: 'image/png',
          sizes: '192x192',
        },
        {
          src: '/image/icons-512.png',
          type: 'image/png',
          sizes: '512x512',
        },
      ],
    }),
  ],
});
