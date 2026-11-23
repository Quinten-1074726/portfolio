// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The live address. Used for absolute links, e.g. the Open Graph image (link previews on LinkedIn etc.)
  site: 'https://quintenvdvlies.nl',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});