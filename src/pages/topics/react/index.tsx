/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-01 09:19:14
 */
import styles from './index.less';
import SiteHeader from '@/components/siteHeader';
import { Card as AntCard, Space, Row, Col } from 'antd';
import source from '../../../../data/topics/react';
import Card from '@/components/card';
import blogs from '../../../../data/blogs';
import reactComponents from '../../../../data/topics/react/components';
import NavLink from '@/components/navLink';
import UIComonent from '@/components/uiComonent';

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
        title="React文档，React组件，React教程，React开源项目"
        keywords="React文档，React教程，React开源项目,React组件"
        description="React文档、教程、开源项目,组件，助力学习掌握React,提升React开发效率"
      />
      <Space direction="vertical" className={styles.content}>
        <AntCard title="React 相关文档">
          <div className={styles.doc}>
            <a target="_blank" href="https://zh-hans.reactjs.org/">
              React中文
            </a>
            <a target="_blank" href="https://www.redux.org.cn/">
              Redux
            </a>
            <a
              target="_blank"
              href="https://react-guide.github.io/react-router-cn/"
            >
              React Router
            </a>
            <a
              target="_blank"
              href="https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html/"
            >
              redux-saga
            </a>
            <a target="_blank" href="https://dvajs.com/guide/">
              dva
            </a>
            <a
              target="_blank"
              href="https://create-react-app.dev/docs/getting-started"
            >
              create-react-app
            </a>
            <a target="_blank" href="https://umijs.org/zh-CN/docs">
              umi
            </a>
            <a
              target="_blank"
              href="https://ant.design/docs/react/introduce-cn"
            >
              ant-design
            </a>
            <a
              target="_blank"
              href="https://semi.design/zh-CN/start/introduction"
            >
              semi-design
            </a>
          </div>
        </AntCard>
        <AntCard title="React 组件">
          <div className={styles.components}>
            {reactComponents.map((item: any, index: number) => {
              return (
                <UIComonent
                  key={item.title}
                  color={index}
                  {...item}
                ></UIComonent>
              );
            })}
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
                <Col key={item.title} lg={6} md={6} sm={12} xs={24}>
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
