const route: any = [
  {
    name: '404',
    path: '/404',
    component: './exception/404',
  },
  {
    name: '在线工具',
    path: '/tools',
    component: './tools',
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
];

export default route;
