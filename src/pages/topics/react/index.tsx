/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import styles from './index.less';
import SiteHeader from '@/components/siteHeader';
import { Card as AntCard, Space, Row, Col } from 'antd';
import SideAd from '@/components/sideAd';
import source from '../../../../data/topics/react';
import Card from '@/components/card';
import blogs from '../../../../data/blogs';
import NavLink from '@/components/navLink';

const reactBlogs = blogs.map((item: any) => {
  if (
    !Array.isArray(item.tags) ||
    (Array.isArray(item.tags) && !item.tags.includes('react'))
  ) {
    return null;
  }
  if (item.id) {
    return (
      <NavLink
        to={`/blogs/detail/${item.id}`}
        key={item.url || item.id}
        className={styles.blog}
      >
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
      </NavLink>
    );
  } else {
    return (
      <a
        href={item.url}
        target="_blank"
        key={item.url || item.id}
        className={styles.blog}
        rel="nofollow"
      >
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
      </a>
    );
  }
});

export default function Resources() {
  const { videos, codes } = source;

  return (
    <>
      <SiteHeader
        title="React文档，React教程，React开源项目"
        keywords="React文档，React教程，React开源项目"
        description="React学习路线、文档、教程、开源项目，助力学习掌握React,提升React开发效率"
      />
      <SideAd />
      <Space direction="vertical" className={styles.content}>
        <AntCard title="React 相关文档">
          <div className={styles.doc}>
            <a href="https://zh-hans.reactjs.org/">React</a>
            <a href="https://www.redux.org.cn/">Redux</a>
            <a href="https://react-guide.github.io/react-router-cn/">
              React Router
            </a>
            <a href="https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html/">
              redux-saga
            </a>
            <a href="https://dvajs.com/guide/">dva</a>
            <a href="https://create-react-app.dev/docs/getting-started">
              create-react-app
            </a>
            <a href="https://umijs.org/zh-CN/docs">umi</a>
            <a href="https://ant.design/docs/react/introduce-cn">ant-design</a>
          </div>
        </AntCard>
        <AntCard title="React 教程">
          <Row gutter={[10, 10]}>
            {videos.map((item: any) => {
              return (
                <Col key={item.title} lg={12} md={12} sm={24} xs={24}>
                  <Card className={styles.category_list_item} {...item} />
                </Col>
              );
            })}
          </Row>
        </AntCard>
        <AntCard title="React 开源项目">
          <Row gutter={[10, 10]}>
            {codes.map((item: any) => {
              return (
                <Col key={item.title} lg={12} md={12} sm={24} xs={24}>
                  <Card className={styles.category_list_item} {...item} />
                </Col>
              );
            })}
          </Row>
        </AntCard>
        <AntCard title="React 文章">{reactBlogs}</AntCard>
        <AntCard title="React PDF">制作中，敬请期待。。。</AntCard>
      </Space>
    </>
  );
}
