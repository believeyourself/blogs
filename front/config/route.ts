/*
 * @Date: 2022-01-20 14:27:07
 * @LastEditors: lzj
 * @LastEditTime: 2022-01-20 15:06:38
 * @FilePath: \qianduan.shop\front\config\route.ts
 */
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
        redirect: '/blogs',
      },
    ],
  },
];

export default route;
