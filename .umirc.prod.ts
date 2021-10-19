import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.REACT_APP_ENV': 'production',
    'process.env.SITE_DOMAIN': 'https://qianduan.shop',
  },
  analytics: {
    baidu: '926fb44514b1d81a809cb5380bf10511',
  },
  ssr: {},
});
