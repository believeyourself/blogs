const route: any = [
  {
    name: '404',
    path: '/404',
    component: './exception/404',
  },
  {
    name: '在线工具',
    path: '/tools/:type?',
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
        redirect: '/404',
      },
    ],
  },
];

export default route;
