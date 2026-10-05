import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL?.trim().replace(/\/$/, '') || 'https://molar360.invalid';
const base = process.env.PUBLIC_BASE_PATH?.trim() || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
});
