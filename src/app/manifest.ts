import { MetadataRoute } from 'next';

const APP_NAME = "pwa-offline-test";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    description: APP_NAME,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#fff',
    icons: [
      {
        src: '/icons/apple-touch-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/apple-touch-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/apple-touch-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/apple-touch-icon-76x76.png',
        sizes: '76x76',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/apple-touch-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/apple-touch-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/apple-touch-icon-144x144.png',
        sizes: '144x144',
        type: 'maskable/png',
        purpose: 'any',
      },
      {
        src: '/icons/apple-touch-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/favicon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/favicon-196x196.png',
        sizes: '196x196',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
