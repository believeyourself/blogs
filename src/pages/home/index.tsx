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

const someBlogs = blogs.slice(0, 5);
const someProjects = resource[1].list.slice(0, 4);
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
      <NavLink to={props?.more}>{props?.description}</NavLink>
    </h2>
  );
};
export default function Blogs() {
  return (
    <>
      <SiteHeader
        title="首页 - React,Node,JavaScript,SEO"
        keywords="React，redux，react-router，JavaScript，js，SEO，css，node，前端开发，前端学习，前端博客，ant-design，dva"
        description="致力于React前端开发和Node开发相关领域技术研究，深入分析技术基础原理，教程资源，开源项目，开发工具分享，包括但不限于JavaScript,css,React,node,webpack,umi,ant-design,dav"
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
        <Title title="学习平台" more="/sites" />
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
          <AntdCard title="开源项目">
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
            </div>
          </AntdCard>
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
        <Title
          title="开源项目"
          more="/resources/originCode"
          description={'更多项目 >>'}
        />
        <Row gutter={[10, 10]}>{projectRecords}</Row>
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
            href="https://leetcode-cn.com/https://leetcode-cn.com/"
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
