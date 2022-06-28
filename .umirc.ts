import { defineConfig } from 'umi';
import routes from './config/route';
export default defineConfig({
  favicon: 'favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  styleLoader: {},
  routes,
  fastRefresh: {},
  // webpack5这样添加会报错，this.getOptions is not function
  // chainWebpack(config){
  //    config.module
  //     .rule('compile-md')
  //     .test(/\.md$/)
  //       .use("html-loader")
  //         .loader("html-loader")
  //         .end()
  //       .use("markdown-loader")
  // },
  // webpack5:false
});
