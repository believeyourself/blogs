/*
 * @Date: 2021-09-22 08:59:01
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-14 09:14:24
 * @FilePath: \qianduan.shop\.umirc.prod.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  define: {
    'process.env.REACT_APP_ENV': 'production',
    'process.env.SITE_DOMAIN': 'https://qianduan.shop',
  },
  analytics: {
    // baidu: '926fb44514b1d81a809cb5380bf10511',
  },
  mpa:{},
  exportStatic: {},
  outputPath:"../docs",
  publicPath:"/blogs/",
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://cloud.qianduan.shop/react.min.js',
    'https://cloud.qianduan.shop/react-dom.min.js',
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
