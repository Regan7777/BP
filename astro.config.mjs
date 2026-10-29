import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://baipiaojc.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});
