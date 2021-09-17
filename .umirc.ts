import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [
        {
          path: '/',
          redirect: '/sites',
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
      ],
    },
  ],
  fastRefresh: {},
  ssr: {},
});
