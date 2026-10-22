import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://erickrdze.github.io',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
