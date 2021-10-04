import { defineConfig } from 'umi';
export default defineConfig({
  favicon: 'favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  routes: [
    {
      name: '404',
      path: '/404',
      component: './exception/404',
    },
    {
      name: 'PDF预览',
      path: '/ebooks/:path',
      component: './resources/previewPdf',
    },
    {
      path: '/',
      component: '@/layouts',
      routes: [
        // {
        //   name: '实用库',
        //   path: '/library',
        //   component: './library',
        // },
        {
          exact: true,
          title: '博客',
          path: '/',
          component: '@/pages/blogs',
        },
        {
          path: '/sites',
          title: '导航',
          component: '@/pages/sites',
        },
        {
          title: '教程',
          exact: true,
          path: '/resources',
          component: '@/pages/resources',
        },
        {
          title: '教程',
          path: '/resources/:id',
          component: '@/pages/resources/more',
        },
        {
          title: '博客',
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
