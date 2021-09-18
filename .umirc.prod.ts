import { defineConfig } from 'umi';

export default defineConfig({
  define:{
    "process.env.REACT_APP_ENV": "production"
  },
  analytics: {
    baidu: '926fb44514b1d81a809cb5380bf10511',
  },
});
