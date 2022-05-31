const route: any = [
  {
    name: '404',
    path: '/404',
    component: './exception/404',
  },
  {
    path: '/tools/:type?',
    component: './tools',
  },
  {
    path: '/ebooks/:path',
    component: './resources/previewPdf',
  },
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        exact: true,
        path: '/',
        component: '@/pages/home',
      },
      {
        path: '/sites',
        component: '@/pages/sites',
      },
      {
        exact: true,
        path: '/resources',
        component: '@/pages/resources',
      },
      {
        path: '/resources/:id',
        component: '@/pages/resources/more',
      },
      {
        path: '/blogs',
        component: '@/pages/blogs',
      },
      {
        path: '/topics/node',
        component: '@/pages/topics/node',
      },
      {
        path: '/topics/react',
        component: '@/pages/topics/react',
      },
      {
        path: '/topics/vscode',
        component: '@/pages/topics/vscode',
      },
      {
        path: '/blogs/detail/:id',
        component: '@/pages/blogs/detail/detail',
      },
      {
        path: '/solution',
        component: '@/pages/solution',
      },
      {
        path: '/solution/detail/:id',
        component: '@/pages/solution/detail/detail',
      },
      {
        path: '/revenue',
        component: '@/pages/revenue',
      },
      {
        path: '/revenue/detail/:id',
        component: '@/pages/revenue/detail/detail',
      },
      {
        path: '/softwares',
        component: '@/pages/softwares',
      },
      {
        path: '/softwares/detail/:id',
        component: '@/pages/softwares/detail/detail',
      },
      {
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
