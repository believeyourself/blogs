/*
 * @Date: 2021-09-22 08:59:01
 * @LastEditors: lzj
 * @LastEditTime: 2022-01-22 10:16:32
 * @FilePath: \qianduan.shop\front\.umirc.prod.ts
 */
import { defineConfig } from 'umi';
import blogs from "./data/blogs";
export default defineConfig({
  define: {
    'process.env.REACT_APP_ENV': 'production',
    'process.env.SITE_DOMAIN': 'https://izejun.com',
  },
  analytics: {
    // baidu: '926fb44514b1d81a809cb5380bf10511',
  },
  exportStatic: {
    extraRoutePaths: async () => {
     const routes = blogs.map(blog=>{
       return `/blogs/detail/${blog.id}`;
     });
    routes.push("/tools/jsonTree","/tools/timestamp",'/tools/md5','/tools/cron');
    return Promise.resolve(routes);
  },
  },

  ssr:{},
  dynamicImport: {},
  outputPath:"../docs",
  // publicPath:"/blogs/",
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
