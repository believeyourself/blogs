import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.REACT_APP_ENV': 'block',
    'process.env.SITE_DOMAIN': 'http://localhost:8000',
  }
});
