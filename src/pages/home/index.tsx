/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import styles from './index.less';
import blogs from '../../../data/blogs';
import resource from '../../../data/resource';
import NavLink from '@/components/navLink';
import Card from '@/components/card';
import SiteHeader from '@/components/siteHeader';
import { Divider, Card as AntCard, Row, Col } from 'antd';

const someBlogs = blogs.slice(0, 10);
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
    <Col key={item.url} md={12} sm={24}>
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
        keywords="React，JavaScript，js，SEO，css，node，前端开发，前端学习，前端博客，ant-design，dva，redux"
        description="致力于前端开发领域技术研究，深入分析技术基础原理，教程资源，开源项目，开发工具分享，包括但不限于JavaScript,css,React,vue,node,webpack,umi,ant-design,dav"
      />
      <div className={styles.content}>
        <Title title="常用网址" more="/sites" description={'更多网址 >>'} />
        <div className={styles.sites}>
          <a href="" target="_blank" rel="nofollow">
            Chrome插件
          </a>
          <a href="" target="_blank" rel="nofollow">
            图片压缩
          </a>
          <a href="https://www.tutieshi.com/" target="_blank" rel="nofollow">
            gif制作
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
          <a href="https://tool.lu/markdown/" target="_blank" rel="nofollow">
            在线Markdown
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
          <a href="https://juejin.cn/" target="_blank" rel="nofollow">
            掘金
          </a>
        </div>
        <Title
          title="开源项目"
          more="/resources/originCode"
          description={'更多项目 >>'}
        />
        <Row gutter={[10, 10]}>{projectRecords}</Row>
        <Title title="专题汇总" />
        <div style={{ display: 'flex', gap: 20 }}>
          <NavLink className={styles.topic} to={'/topics/react'}>
            React 专题
          </NavLink>
          <NavLink className={styles.topic} to={'/topics/node'}>
            Node 专题
          </NavLink>
        </div>
        <Title title="博客随笔" more="/blogs" description={'更多文章 >>'} />
        {blogRecords}
      </div>
    </>
  );
}
