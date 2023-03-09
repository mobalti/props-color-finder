import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [
    VitePWA({
      icons: [
        {
          src: '/main-logo.png',
          size: '512x512',
          type: 'image/png',
        },
      ],
    }),
  ],
});
