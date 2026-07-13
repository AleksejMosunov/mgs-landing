// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before launch
  site: 'https://mgs-avtoservice.od.ua',
  i18n: {
    defaultLocale: 'uk',
    locales: ['ru', 'uk'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://mgs-avtoservice.od.ua/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
