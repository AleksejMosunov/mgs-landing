// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mgs.pp.ua',
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
      filter: (page) => page !== 'https://mgs.pp.ua/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
