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
  dynamicImport: {},
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js',
  ],
  chainWebpack: function (config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
});
