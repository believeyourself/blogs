export default [
  {
    id: 42,
    title: 'Typescript 类型声明工具函数一览',
    description:
      '记录Typescript 类型声明工具函数及作用',
    tags: ['js', 'ts'],
    date: '2022-02-10',
  },
  {
    id: 41,
    title: 'AWS EC2 安装 NodeJs，使用 nvm 管理 NodeJs 版本',
    description:
      'AWS EC2 中管理 NodeJs 环境',
    tags: ['node', 'AWS','EC2'],
    date: '2022-01-22',
  },
  {
    id: 40,
    title: 'egg mysql 查询 Date 类型数据时区不对，时间减了 8 个小时',
    description:
      '日志表里存储了写入时间，时间存的是 Date 类型的数据，直接 select 出来的数据比存储的实际数据要少 8 个小时，数据库格式：2018-03-12 14:46:31, 通过egg-mysql查询出来的格式：2018-03-12T06:46:31.000Z, 自动加上了时区而且还是错误的时区。',
    tags: ['node', 'egg','mysql'],
    date: '2022-01-13',
  },
  {
    id: 39,
    title: 'React 中 useEffect 和 useLayoutEffect 作用和区别',
    description:
      '日常开发中的大部分情况下，使用 useEffect 就可以帮我们处理组件的副作用，但是如果想要同步调用一些副作用，比如对 DOM 的操作，就需要使用 useLayoutEffect，useLayoutEffect 中的副作用会在 DOM 更新之后同步执行,useLayoutEffect 与原来 class 组件原来的 componentDidMount & componentDidUpdate 一样，会在 react 完成 DOM 更新后马上同步调用的代码，会阻塞页面渲染。',
    tags: ['react', 'useEffect','useLayoutEffect'],
    date: '2022-01-13',
  },
  {
    id: 38,
    title: '升级 egg-socket.io 到 4.4.0 ',
    description:
      '阿里这个框架已经很久没更新了，连插件模块都没有人维护。本来想着用 egg-socket.io 的 2.1.1 版本就行了，但是用起来发现很多的 api 都用不了了，于是有了升级的想法，重写配置。',
    tags: ['node', 'egg','socket.io',"版本升级"],
    date: '2022-01-06',
  },
  {
    id: 37,
    title: 'nodejs PM2 延时退出',
    description:
      '在日常开发过程中，我们经常会用到 pm2 来起到服务，甚至会用 watch 来实现热更新。这种模式并不适合用在生产环境中，因为 pm2 零延时重启，会导致正在处理的请求直接被销毁，如果数据库没加事务，可能会导致数据库的数据不完整，我们可以利用--kill-timeout 参数延时退出，保证正在处理的请求正常结束',
    tags: ['node', 'pm2','优雅退出'],
    date: '2022-01-06',
  },
  {
    id: 36,
    title: 'Doris 用户操作语句速览',
    description:
      'Doris 常用 SQL 语句快速浏览，记录常用SQL，方便阅读查询。',
    tags: ['doris', '操作手册'],
    date: '2022-01-05',
  },
  {
    id: 35,
    title: 'umi SSR 打包配置优化',
    description:
      '我这里有 SEO 的需求，所以需要做 SSR ,本文主要记录 umi ssr(服务端渲染)配置如何优化，仅记录本人实践过程中所用到的配置优化，仅供参考。',
    tags: ['umi', 'ssr'],
    date: '2022-01-03',
  },
  {
    id: 34,
    title: 'Doris be 日志大量警告：/brpc/src/brpc/socket.cpp:1196] Fail to wait EPOLLOUT of fd=187: Connection timed out',
    description:
      '采用 stream load 方式导入数据，一段时间后大量警告日志：/brpc/src/brpc/socket.cpp:1196] Fail to wait EPOLLOUT of fd=187: Connection timed out',
    tags: ['doris', 'aws', 'EC2'],
    date: '2021-12-28',
  },
  {
    id: 33,
    title: 'Doris Stream Load 导入数据',
    description:
      '批量从 Kineses 中获取数据，选用 Stream Load 的导入方式向 Doris导入数据。',
    tags: ['doris', 'aws', 'EC2'],
    date: '2021-12-24',
  },
  {
    id: 32,
    title: 'Doris 启动 BE 报错：file descriptors limit is too small',
    description: '错误提示：file descriptors limit is too small',
    tags: ['doris', 'be', 'file descriptors limit'],
    date: '2021-12-17',
  },
  {
    id: 31,
    title: 'Doris be运行一段时间后异常断开连接',
    description:
      '错误提示：terminate called after throwing an instance of "std::bad_alloc"',
    tags: ['doris', 'be', 'OOM'],
    date: '2021-12-16',
  },
  {
    id: 30,
    title: 'Doris-1.4.2 Linux 直接编译问题记录',
    description:
      '在 AWS 上的 EC2 直接编译 Doris，本文主要记录按官方文档操作直接编译过程中遇到的问题，方便查询。',
    tags: ['doris', 'aws', 'EC2'],
    date: '2021-12-14',
  },
  {
    id: 29,
    title: 'Doris 部署，启动 FE 报错：',
    description:
      '错误提示：java.io.IOException: the self host 172.31.26.7 does not equal to the host in ROLE file 172.17.0.1. You need to set “priority_networks” config in fe.conf to match the host 172.17.0.1',
    tags: ['doris', 'fe', 'aws', 'EC2'],
    date: '2021-12-14',
  },
  {
    id: 28,
    title: 'AWS EC2 扩展 EBS 文件系统',
    description:
      'AWS EC2 磁盘空间不够用，常常被日志占满导致服务中断，此文记录 EC2 扩展 EBS 文件系统的操作步骤。',
    tags: ['aws', 'EC2', '磁盘', 'EBS'],
    date: '2021-12-10',
  },
  {
    id: 27,
    title: 'React 父组件如何调用子组件方法',
    description: '介绍父组件通过 Refs 引用子组件，在不同情况下的用法。',
    tags: ['react', 'refs'],
    date: '2021-12-09',
  },
  {
    id: 26,
    title:
      'umi antd中报错 load component failed Error: Module "./antd/es/drawer/style" does not exist in container',
    description:
      '第一次引入antd Drawer组件出错，提示 load component failed Error: Module "./antd/es/drawer/style" does not exist in container',
    tags: ['react', 'umi', 'JSX', 'MDX'],
    date: '2021-12-07',
  },
  {
    id: 25,
    title: '使用MDX在md文件中解析React组件',
    description: '使用 MDX 实现 md 与 React JSX结合来丰富我们的展现形式',
    tags: ['react', 'markdown', 'JSX', 'MDX'],
    date: '2021-12-04',
  },
  {
    id: 24,
    title: 'http强缓存和协商缓存',
    description: '重温http缓存的基本原理及浏览器缓存流程。',
    tags: ['http缓存', '强缓存', '协商缓存'],
    date: '2021-11-29',
  },
  {
    id: 23,
    title: 'husky7 add hook命令不起作用问题',
    description: '配置husky7时，husky add hook不起作用，没有正常添加hook',
    tags: ['git', 'hook', 'husky-v7', 'node', 'npm', 'add'],
    date: '2021-11-24',
  },
  {
    id: 22,
    title: '如何从零开始实现一个cli命令行工具',
    description:
      '我们已经习惯了使用各种开源cli工具，协助我们进行日常开发，本文将从零开始构建我们自己的cli命令行工具。',
    tags: ['node', 'cli', '命令行工具'],
    date: '2021-11-22',
  },
  {
    id: 21,
    title: 'React 实现 PDF 预览',
    description: '使用 embed 标签 和 react-pdf 组件实现PDF预览',
    tags: ['React', 'PDF 预览'],
    date: '2021-11-20',
  },
  {
    id: 20,
    title: 'node + mysql保存Emoji失败乱码问题',
    description: 'mysql保存Emoji表情，字符串直接存进去会变编码问题',
    tags: ['mysql', 'Emoji', 'node'],
    date: '2021-11-20',
  },
  {
    id: 19,
    title:
      '2021年中国开发者755万全球第二，Javascript最受欢迎您，数据来源：GitHub',
    description:
      '2021年11月17 日，GitHub发布2021年度报告：全球GitHub开发者用户超过7300万 ，其中 56.8% 来自北美之外的地区。美国开发者最多，共有1355万，中国开发者占 10%，有 755 万，位居全球第二。',
    tags: ['GitHub', '2021编程语言', 'js'],
    date: '2021-11-17',
  },
  {
    id: 18,
    title: 'mysql添加索引后导致cpu飙升问题记录',
    description:
      '生产环境中给某个表（三百多万1.4G数据）加索引导致cpu飙升至95+%，问题排查及解决',
    tags: ['mysql', '索引'],
    date: '2021-11-14',
  },
  {
    id: 17,
    title: 'node事件循环（Event loop）',
    description:
      '本文将简述浏览器中的js事件循环机制，帮助我们理解Node中代码是如何运行的。Javascript的一大特点是单线程，也就意味着同一时间他只能做一件事。那Node是如何支撑高并发呢？',
    tags: ['node', '事件循环'],
    date: '2021-11-06',
  },
  {
    id: 16,
    title: '浏览器中的js事件循环（Event loop）',
    description:
      '本文将简述浏览器中的js事件循环机制，帮助我们理解浏览器环境js代码是如何运行的。Javascript的一大特点是单线程，也就意味着同一时间他只能做一件事。事件循环（Event Loop）是为了协调事件，用户交互，UI渲染，网络处理等行为，防止线程阻塞而诞生的。',
    tags: ['js', '事件循环', '宏任务', '微任务'],
    date: '2021-11-06',
  },
  {
    id: 15,
    title: 'GitHub上如何发现优秀开源项目',
    description:
      'GitHub上无数的开源项目供我们学习，那么在如此多的项目中，如何找到你想要的，有价值的优秀开源项目呢？本站每个月都会更新以前前端开源项目给大家参考学习，但授人以鱼不如授人以渔，本文将介绍如何在github发现优秀项目，节约我们的时间。',
    tags: ['GitHub', '开源项目'],
    date: '2021-11-02',
  },
  {
    id: 14,
    title: 'SEO系列之快速排名方法',
    description: '新站，老站，单个页面，移动端快速排名的一些方法介绍',
    tags: ['SEO', '快速排名'],
    date: '2021-11-02',
  },
  {
    id: 13,
    title: 'react cron表达式生成组件qnn-react-cron',
    description:
      '介绍react实现的cron表达式生成组件qnn-react-cron以及其前身组件react-cron-antd',
    tags: ['react', 'antd', 'cron表达式'],
    date: '2021-10-27',
  },
  {
    id: 12,
    title: 'antd的carousel走马灯组件在flex布局下会出现无限宽度的BUG，显示异常',
    description:
      '记录antd的carousel走马灯组件在flex布局下会出现无限宽度的BUG及其解决办法',
    tags: ['react', 'antd', 'carousel', '走马灯'],
    date: '2021-10-22',
  },
  {
    id: 11,
    title: 'Node定时任务怎么做',
    description: 'linux有crontab定时任务，那么在Node中，定时任务该如何实现?',
    tags: ['node', 'egg', '定时任务', 'node-schedule'],
    date: '2021-10-20',
  },
  {
    id: 10,
    title: 'SEO系列之站内优化',
    description: '介绍在网站内容，排版、用户体验等方面优化SEO及注意事项',
    tags: ['SEO'],
    date: '2021-10-12',
  },
  {
    id: 9,
    title: '原型与原型链、继承',
    description: '原型与原型链、继承简单实现',
    tags: ['js'],
    date: '2021-10-08',
  },
  {
    id: 8,
    title: 'SEO系列之搜索引擎工作原理',
    description: '了解搜索引擎工作原理。',
    tags: ['SEO'],
    date: '2021-10-07',
  },
  {
    id: 7,
    title: 'SEO系列之基础概念',
    description:
      'SEO是什么，SEO对我们来说有什么用，SEO能用在哪里,什么是黑帽，白帽，灰帽，绿帽SEO',
    tags: ['SEO'],
    date: '2021-10-05',
  },
  {
    id: 6,
    title: '移动端适配方案',
    description: '常用的移动端适配方案,包括：媒体查询，rem布局，vw&vh',
    tags: ['移动适配', '布局'],
    date: '2021-09-28',
  },
  {
    id: 5,
    title: 'NodeJs发起https请求报错:certificate has expired',
    description:
      '在egg中发起https请求时提示证书过期错误（certificate has expired）问题记录',
    tags: ['node', 'https'],
    date: '2021-09-26',
  },
  {
    id: 4,
    title: 'React 团队开源新的性能分析工具 - Scheduling Profiler !',
    description:
      '最近，React 团队开源了一款新的性能分析工具 —— Scheduling Profiler',
    tags: ['react', '性能分析'],
    date: '2021-09-20',
  },
  {
    id: 3,
    title: 'umi实践问题汇总--持续更新',
    description: '在使用umi的过程中所遇到问题的记录汇总',
    tags: ['react', 'umi', '脚手架'],
    date: '2021-09-19',
  },
  {
    id: 2,
    title: 'react中实现markdown文件读取展示',
    description: 'react中实现markdown文件读取展示',
    tags: ['react', 'markdown'],
    date: '2021-09-15',
  },
  {
    id: 1,
    title: '登录状态之cookies、session、token',
    description: '登录状态之cookies、session、token',
    tags: ['登录状态', 'cookies', 'session', 'token'],
    date: '2021-09-13',
  },
  {
    title: '文件上传，搞懂这8种场景就够了',
    description: '总结一下 8 种文件上传场景场景',
    url: 'https://juejin.cn/post/6980142557066067982',
    source: '掘金',
  },
  {
    title: 'React 并发功能体验-前端的并发模式已经到来',
    description:
      '简要说明， Concurrent Mode 和Suspense 可以使用户无缝处理数据加载，加载状态，用户界面操作更加平滑和无缝切换。 在Concurrent Mode 下，React可以暂停高消耗的，非紧急的组件的渲染，并聚焦在更加紧迫的任务处理，如UI 渲染，始终保持应用为可响应式，避免白屏，卡顿等现象。',
    url: 'https://segmentfault.com/a/1190000040272535',
    tags: ['react'],
    source: 'segmentfault',
  },
  {
    title: 'CSS 奇思妙想 | 全兼容的毛玻璃效果',
    description:
      '最基本的使用 CSS backdrop-filter 实现磨砂玻璃(毛玻璃)的效果,在至今不兼容 backdrop-filter 的 firefox 浏览器，如何利用一些技巧性的操作，巧妙的同样实现毛玻璃效果，让这个效果真正能运用在业务当中',
    url: 'https://juejin.cn/post/6979391400844460068',
    tags: ['css'],
    source: '掘金',
  },
  {
    title: '深入setState机制',
    description: '详细分析setState更新机制',
    url: 'https://github.com/sisterAn/blog/issues/26',
    tags: ['react'],
    source: 'github',
  },
  {
    title: 'Vuex、Flux、Redux、Redux-saga、Dva、MobX',
    description: '详解常见状态管理设计模式',
    url: 'https://zhuanlan.zhihu.com/p/53599723',
    tags: ['react'],
    source: 'github',
  },
  {
    title: 'js算法和数据结构',
    description: '包含了多种基于 JavaScript 的算法与数据结构',
    url:
      'https://github.com/believeyourself/JavaScript-algorithms/blob/master/README.zh-CN.md',
    tags: ['js'],
    source: 'github',
  },
  {
    title: '前端项目负责人需要具有的能力',
    description: '不知道如何才能做前端项目负责人？这篇文章告诉你！',
    url: 'https://juejin.cn/post/6946210273061502990',
    source: '掘金',
  },
  {
    title: '移动端适配',
    description: '移动端适配原理与方案详解！',
    url: 'https://juejin.cn/post/6959047144065990663',
    source: '掘金',
  },
  {
    title: 'REACT合成事件',
    description: '由浅到深的React合成事件',
    url: 'https://juejin.cn/post/6844903988794671117',
    tags: ['react'],
    source: '掘金',
  },
  {
    title: '谈谈React Fiber与分片',
    description: '谈谈React Fiber与分片',
    url: 'https://juejin.cn/post/6958995912957886500',
    tags: ['react'],
    source: '掘金',
  },
];
