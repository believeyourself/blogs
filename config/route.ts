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
        exact: true,
        title: '首页',
        path: '/',
        component: '@/pages/home',
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
        title: '全部教程',
        path: '/resources/:id',
        component: '@/pages/resources/more',
      },
      {
        title: '博客',
        path: '/blogs/:page?/:filter?',
        component: '@/pages/blogs',
      },
      {
        title: 'NodeJs专题',
        path: '/topics/node',
        component: '@/pages/topics/node',
      },
      {
        title: 'React专题',
        path: '/topics/react',
        component: '@/pages/topics/react',
      },
      {
        title: 'vscode插件',
        path: '/topics/vscode/:page',
        component: '@/pages/topics/vscode',
      },
      {
        title: '文章详情',
        path: '/blogs/detail/:id',
        component: '@/pages/blogs/detail/detail',
      },
      {
        title: '软件分享',
        path: '/softwares',
        component: '@/pages/softwares',
      },
      {
        title: '软件分享',
        path: '/softwares/detail/:id',
        component: '@/pages/softwares/detail/detail',
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
