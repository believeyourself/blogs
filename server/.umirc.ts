import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path:"/",
      component:"@/layouts",
      routes:[
        { 
          path: '/', 
          redirect: '/sites'
        },
        { 
          path: '/sites', 
          component: '@/pages/sites'
        },
        { 
          path: '/resources', 
          component: '@/pages/resources'
        },
        { 
          path: '/blogs', 
          component: '@/pages/blogs'
        },
        { 
          path: '/aboutUs', 
          component: '@/pages/aboutUs'
        },
      ]
    }
  ],
  fastRefresh: {},
  ssr: {},
});
