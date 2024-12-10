import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        lang: 'en-us',
        name: 'Props Color Finder',
        short_name: 'Props Color',
        description: 'A Progressive Web Application Color Picker.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/images/icon-192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: '/images/icon-512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
});
