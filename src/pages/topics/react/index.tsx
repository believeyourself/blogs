/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-01 09:19:14
 */
import './index.less';
import SiteHeader from '@/components/siteHeader';
import { Card as AntCard, Space, Row, Col } from 'antd';
import source from '../../../../data/topics/react';
import Card from '@/components/card';
import blogs from '../../../../data/blogs';
import reactComponents from '../../../../data/topics/react/components';
import NavLink from '@/components/navLink';
import UIComonent from '@/components/uiComonent';
import 'react-photo-view/dist/index.css';

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
        className="blog"
      >
        <h4 className="title">{item.title}</h4>
        <p className="description">{item.description}</p>
      </NavLink>
    );
  } else {
    return (
      <a
        href={item.url}
        target="_blank"
        key={item.url || item.id}
        className="blog"
        rel="nofollow"
      >
        <h4 className="title">{item.title}</h4>
        <p className="description">{item.description}</p>
      </a>
    );
  }
});

export default function Resources() {
  const { videos, codes, frames, mobiles } = source;

  return (
    <>
      <SiteHeader
        title="React文档，React组件，React教程，React开源项目,React面试题"
        keywords="React文档，React教程，React开源项目,React组件"
        description="React文档、教程、开源项目,组件，助力学习掌握React,提升React开发效率"
      />
      <Space direction="vertical" className="react_content">
        <AntCard title="React 基础文档">
          <div className="doc">
            <a
              target="_blank"
              href="https://zh-hans.reactjs.org/"
              rel="nofollow"
            >
              React
            </a>
            <a target="_blank" href="https://www.redux.org.cn/" rel="nofollow">
              Redux 状态管理
            </a>
            <a target="_blank" href="https://cn.mobx.js.org/" rel="nofollow">
              mobx 状态管理
            </a>
            <a
              target="_blank"
              href="https://github.com/nanxiaobei/flooks"
              rel="nofollow"
            >
              flooks 状态管理
            </a>
            <a
              target="_blank"
              href="https://react-guide.github.io/react-router-cn/"
              rel="nofollow"
            >
              React Router
            </a>
          </div>
        </AntCard>
        <AntCard title="Redux 中间件">
          <div className="doc">
            <a
              target="_blank"
              href="https://redux-saga-in-chinese.js.org/"
              rel="nofollow"
            >
              redux-saga
            </a>
            <a target="_blank" href="https://dvajs.com/guide/" rel="nofollow">
              dva
            </a>
            <a
              target="_blank"
              href="https://github.com/reduxjs/redux-thunk"
              rel="nofollow"
            >
              redux-thunk
            </a>
            <a target="_blank" href="redux-promise" rel="nofollow">
              redux-promise
            </a>
          </div>
        </AntCard>
        <AntCard title="React 脚手架">
          <div className="doc">
            <a
              target="_blank"
              href="https://create-react-app.dev/docs/getting-started"
              rel="nofollow"
            >
              create-react-app
            </a>
            <a
              target="_blank"
              href="https://umijs.org/zh-CN/docs"
              rel="nofollow"
            >
              umi
            </a>

            <a
              target="_blank"
              href="https://remix.run/docs/en/v1"
              rel="nofollow"
            >
              remix
            </a>
          </div>
        </AntCard>
        <AntCard title="React UI库">
          <div className="doc">
            {frames.map((item) => {
              return (
                <a target="_blank" href={item.url} rel="nofollow">
                  {item.name}
                </a>
              );
            })}
          </div>
        </AntCard>
        <AntCard title="React 跨端开发框架">
          <div className="doc">
            {mobiles.map((item) => {
              return (
                <a target="_blank" href={item.url} rel="nofollow">
                  {item.name}
                </a>
              );
            })}
          </div>
        </AntCard>
        <AntCard title="React 组件">
          <div className="components">
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
                  <Card className="category_list_item" {...item} />
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
                  <Card className="category_list_item" {...item} />
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
