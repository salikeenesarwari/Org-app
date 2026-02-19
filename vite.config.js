import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg'],
      manifest: {
        name: 'Faizan-E-Sarwari',
        short_name: 'Faizan-E-Sarwari',
        description: 'Spiritual books, events, and guidance from Hazrat Sultan Sarwar Ali Shah',
        theme_color: '#10b981',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'logo-192.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: 'logo-512.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg}']
      }
    })
  ]
});
