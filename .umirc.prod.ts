/*
 * @Date: 2021-09-22 08:59:01
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-09 15:31:51
 * @FilePath: \qianduan.shop\.umirc.prod.ts
 */
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
  dynamicImport:{}
});
