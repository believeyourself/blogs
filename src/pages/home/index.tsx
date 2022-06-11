/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-15 17:05:01
 */
import styles from './index.less';
import blogs from '../../../data/blogs';
import resource from '../../../data/resource';
import NavLink from '@/components/navLink';
import Card from '@/components/card';
import SiteHeader from '@/components/siteHeader';
import { Card as AntdCard, Alert, Row, Col } from 'antd';

const someBlogs = blogs.slice(0, 10);
const someProjects = resource[0].list.slice(0, 4);
const blogRecords = someBlogs.map((item: any) => {
  if (item.id) {
    return (
      <NavLink
        to={`/blogs/detail/${item.id}`}
        key={item.url || item.id}
        className={styles.category_list_item}
      >
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.tip}>
          来源: 本站 {'           '}
          时间: {item.date}
        </p>
      </NavLink>
    );
  } else {
    return (
      <a
        href={item.url}
        target="_blank"
        key={item.url || item.id}
        className={styles.category_list_item}
        rel="nofollow"
      >
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.tip}>
          来源: {item.source} {'          '}
          时间: 未知
        </p>
      </a>
    );
  }
});
const projectRecords = someProjects.map((item) => {
  return (
    <Col key={item.title} md={6} sm={12}>
      <Card {...item}></Card>
    </Col>
  );
});

const Title = (props: any) => {
  return (
    <h2 className={styles.part}>
      <span>{props.title}</span>
      {props?.more ? (
        <NavLink to={props.more}>{props?.description}</NavLink>
      ) : null}
    </h2>
  );
};
export default function Blogs() {
  return (
    <>
      <SiteHeader
        title="React前端开发聚合平台"
        keywords="React前端学习教程，React前端开发，React前端工具，React前端开源项目,React前端网址导航，node学习，node开发,node学习教程，node开源项目,node工具，node网址导航"
        description="React前端学习和React前端开发，node学习和node开发常用工具，学习网址，开源项目聚合平台，为 前端开发 和 node 开发者提供免费资源分享。"
      />
      <div className={styles.content}>
        <Title title="常用网址" more="/sites" description={'更多网址 >>'} />
        <div className={styles.sites}>
          <a href="https://s.qiniu.com/JzIJFv" target="_blank" rel="nofollow">
            七牛云
          </a>
          <NavLink to="/tools/timestamp" target="_blank">
            时间戳转换
          </NavLink>
          <a href="https://www.extfans.com/" target="_blank" rel="nofollow">
            Chrome插件
          </a>
          <a href="https://tinypng.com/" target="_blank" rel="nofollow">
            图片压缩
          </a>
          <NavLink to="/tools/jsonTree" target="_blank" rel="nofollow">
            JSON格式转换
          </NavLink>
          <a
            href="https://vjyd1gg9jl.feishu.cn/base/app4Dlc49N1Z9e4LrAoZ36lPMNi?from=from_copylink"
            target="_blank"
            rel="nofollow"
          >
            前端面试真题
          </a>
          <a href="https://cli.im/" target="_blank" rel="nofollow">
            二维码生成器
          </a>
          <a
            href="https://color.uisdc.com/pick.html"
            target="_blank"
            rel="nofollow"
          >
            配色导航
          </a>
          <a href="https://h5.bce.baidu.com/" target="_blank" rel="nofollow">
            百度H5在线制作
          </a>
          <a
            href="https://developer.aliyun.com/graph/frontend"
            target="_blank"
            rel="nofollow"
          >
            阿里前端开发技术图谱
          </a>
          <a
            href="https://zijian.aliyun.com/?spm=a2c1d.8251892.content.2.39d55b76A9OHww"
            target="_blank"
            rel="nofollow"
          >
            网站诊断分析
          </a>
        </div>
        <Title title="React 跨端开发" />
        <div className={styles.sites}>
          <a
            className={styles.job}
            href="https://taro-docs.jd.com/taro/docs/"
            target="_blank"
            rel="nofollow"
          >
            <span>taro</span>
            <p>
              开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发
              微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 /
              RN 等应用!
            </p>
          </a>
          <a
            className={styles.job}
            href="https://rax.js.org/docs/guide/about"
            target="_blank"
            rel="nofollow"
          >
            <span>rax</span>
            <p>
              Rax 是阿里巴巴应用最广泛的跨端解决方案，支持开发者通过类 React DSL
              编写 Web、小程序、Flutter 等不同容器的跨端应用。
            </p>
          </a>
          <a
            className={styles.job}
            href="https://www.electronjs.org/zh/docs/latest/"
            target="_blank"
            rel="nofollow"
          >
            <span>Electron</span>
            <p>可以让你使用纯 JavaScript 调用丰富的原生 APIs 来创造桌面应用</p>
          </a>
          <a
            className={styles.job}
            href="https://reactnative.dev/"
            target="_blank"
            rel="nofollow"
          >
            <span>React Native</span>
            <p>使用 JS 和 React 来构建原生 APP。</p>
          </a>
        </div>
        <Title title="专题汇总" />
        <div style={{ display: 'flex', gap: 20 }}>
          <NavLink className={styles.topic} to={'/topics/react'}>
            React
          </NavLink>
          <NavLink className={styles.topic} to={'/topics/node'}>
            Node
          </NavLink>
          <NavLink className={styles.topic} to={'/topics/vscode'}>
            VS Code 插件
          </NavLink>
        </div>
        <Title title="学习平台" />
        <div className={styles.sites}>
          <a
            className={styles.job}
            href="https://www.runoob.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>菜鸟教程</span>
            <p>写的不仅是技术，更是梦想！</p>
          </a>
          <a
            className={styles.job}
            href="https://www.yiibai.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>易百教程</span>
            <p>专注IT教程与实例</p>
          </a>
          <a
            className={styles.job}
            href="https://www.w3school.com.cn/"
            target="_blank"
            rel="nofollow"
          >
            <span>W3School</span>
            <p>全球最大的中文 WEB 技术教程！</p>
          </a>
          <a
            className={styles.job}
            href="https://www.imooc.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>GitChat</span>
            <p>IT知识分享平台</p>
          </a>
          <a
            className={styles.job}
            href="https://www.github.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>Github</span>
            <p>全球最大的开源代码共享社区</p>
          </a>
          <a
            className={styles.job}
            href="https://gitee.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>Gitee</span>
            <p>中国最大的开源代码共享社区</p>
          </a>
          <a
            className={styles.job}
            href="https://www.twle.cn/"
            target="_blank"
            rel="nofollow"
          >
            <span>简单教程</span>
            <p>简单教程，简单编程</p>
          </a>
          <a
            className={styles.job}
            href="https://wiki.jikexueyuan.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>极客学院</span>
            <p>中国专业的IT职业在线教育平台</p>
          </a>
        </div>
        <Title title="开箱即用" />
        <Alert message="收集免费或有免费额度的资源！" closable />
        <div className={styles.free_resource}>
          <AntdCard title="API接口">
            <div className={styles.resource_item}>
              <a href="https://www.juhe.cn/docs" target="_blank" rel="nofollow">
                聚合数据 - 部分接口数据免费
              </a>
              <a
                href="https://open.saintic.com/openapi"
                target="_blank"
                rel="nofollow"
              >
                saintic - OpenApi
              </a>
              <a href="https://www.juhe.cn/docs" target="_blank" rel="nofollow">
                开放API - 热搜，生活，安全类免费接口
              </a>
            </div>
          </AntdCard>
          <AntdCard title="埋点统计">
            <div className={styles.resource_item}>
              <a
                href="https://analytics.google.com/"
                target="_blank"
                rel="nofollow"
              >
                Google分析 - 网站统计分析
              </a>
              <a
                href="https://www.aldwx.com/index"
                target="_blank"
                rel="nofollow"
              >
                阿拉丁 - 小程序智能数据平台
              </a>
              <a
                href="https://tongji.baidu.com/"
                target="_blank"
                rel="nofollow"
              >
                百度统计 - 网站、移动统计，用户行为分析
              </a>
              <a href="https://www.umeng.com/" target="_blank" rel="nofollow">
                友盟+ - 统计分析、社会化分享、性能监控、消息推送
              </a>
            </div>
          </AntdCard>
          <AntdCard title="云服务">
            <div className={styles.resource_item}>
              <a
                href="https://s.qiniu.com/JzIJFv"
                target="_blank"
                rel="nofollow"
              >
                七牛云 - 每月10个G的免费对象存储
              </a>
              <a href="https://amazonaws.cn" target="_blank" rel="nofollow">
                亚马逊中国 - 新用户多种服务一年免费套餐
              </a>
            </div>
          </AntdCard>
          <AntdCard title="自建博客">
            <div className={styles.resource_item}>
              <a
                href="https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html"
                target="_blank"
                rel="nofollow"
              >
                strapi - 自托管、免费、开源CMS管理系统
              </a>
              <a
                href="https://github.com/styxlab/next-cms-ghost"
                target="_blank"
                rel="nofollow"
              >
                next-cms-ghost - 发布快速的博客
              </a>
              <a
                href="https://github.com/facebook/docusaurus/tree/main/website"
                target="_blank"
                rel="nofollow"
              >
                docusaurus - 构建以内容为核心、Markdown 驱动的网站。
              </a>
              <a
                href="https://hexo.io/zh-cn/docs/index.html"
                target="_blank"
                rel="nofollow"
              >
                hexo - 静态博客生成器。
              </a>
            </div>
          </AntdCard>
        </div>
        <Title
          title="开源项目"
          more="/resources/originCode"
          description={'更多项目 >>'}
        />
        <Row gutter={[10, 10]}>{projectRecords}</Row>
        <Title title="零代码" />
        <div className={styles.sites}>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/grid/"
            target="_blank"
            rel="nofollow"
          >
            <span>Grid 网格在线拖拽布局</span>
            <p>只需简单拖拽即可完成复杂的Grid布局</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/table/"
            target="_blank"
            rel="nofollow"
          >
            <span>Table 布局 | Excel转HTML</span>
            <p>Excel转HTML，自动优化代码</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/shadow/"
            target="_blank"
            rel="nofollow"
          >
            <span>在线生成CSS阴影效果</span>
            <p>使用分层箱形阴影实现更平滑、更锐利</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/#e0e0e0"
            target="_blank"
            rel="nofollow"
          >
            <span>在线生成CSS新拟态风格效果</span>
            <p>国外超过的新拟态风格，设计师福利</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/glass/"
            target="_blank"
            rel="nofollow"
          >
            <span>在线生成CSS玻璃形态效果</span>
            <p>在线制作玻璃形态效果，实时预览</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/cssbutton/"
            target="_blank"
            rel="nofollow"
          >
            <span>CSS按钮在线设计</span>
            <p>在线设计按钮样式，并实时预览效果</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/typeset/"
            target="_blank"
            rel="nofollow"
          >
            <span>CSS文本排版工具</span>
            <p>可视化对文本排版，并生成CSS代码</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/cssbg/"
            target="_blank"
            rel="nofollow"
          >
            <span>CSS背景生成器</span>
            <p>以像素为单位绘制任何CSS背景</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lingdaima.com/svgwave/"
            target="_blank"
            rel="nofollow"
          >
            <span>SVG波浪背景生成器</span>
            <p>快速制作波浪背景</p>
          </a>
        </div>
        <Title title="求职招聘" />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <a
            className={styles.job}
            href="https://www.zhipin.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>Boss直聘</span>
            <p>专业的计算机人才招聘平台</p>
          </a>
          <a
            className={styles.job}
            href="https://www.lagou.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>拉勾网</span>
            <p>一家专为互联网从业者提供工作机会的招聘网站</p>
          </a>
          <a
            className={styles.job}
            href="https://www.nowcoder.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>牛客网</span>
            <p>集笔面试系统、题库、社群交流于一体</p>
          </a>
          <a
            className={styles.job}
            href="https://leetcode-cn.com/"
            target="_blank"
            rel="nofollow"
          >
            <span>LeetCode 力扣</span>
            <p>全球极客挚爱的技术成长平台官方</p>
          </a>
        </div>
        <Title title="博客随笔" more="/blogs" description={'更多文章 >>'} />
        {blogRecords}
      </div>
    </>
  );
}
