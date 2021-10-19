import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.REACT_APP_ENV': 'development',
  },
  'process.env.SITE_DOMAIN': 'localhost:8000',
  ssr: {}
});
