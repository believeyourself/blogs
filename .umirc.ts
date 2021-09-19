import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      name: '404',
      path: '/404',
      component: './Exception404',
    },
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          exact: true,
          title: '优质好文',
          path: '/',
          component: '@/pages/blogs',
        },
        {
          path: '/sites',
          title: '网址导航',
          component: '@/pages/sites',
        },
        {
          title: '教程资源',
          path: '/resources',
          component: '@/pages/resources',
        },
        {
          title: '优质好文',
          path: '/blogs',
          component: '@/pages/blogs',
        },
        {
          title: '文章详情',
          path: '/blogs/detail/:id',
          component: '@/pages/blogs/detail/detail',
        },
        {
          title: '关于我们',
          path: '/aboutUs',
          component: '@/pages/aboutUs',
        },
        {
          redirect: '/404',
        },
      ],
    },
  ],
  fastRefresh: {}, // webpack5这样添加会报错，this.getOptions is not function
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
