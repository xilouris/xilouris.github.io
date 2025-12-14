// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://xilouris.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false, // We apply our own base styles in global.css
    })
  ]
});