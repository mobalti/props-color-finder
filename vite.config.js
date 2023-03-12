import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {

         "lang": "en-us",
         "name": "Props Color Finder",
         "short_name": "Props Color",
          "description": "A Progressive Web Application that helps users find the closest Open Props color.",
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
      },
    }),
  ],
});
