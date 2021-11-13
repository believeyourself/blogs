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
import { Card as AntCard, Space, Alert } from 'antd';
import SideAd from '@/components/sideAd';
import source from '../../../../data/topics/react';
import Card from '@/components/card';
import reactComponents from '../../../../data/topics/react/components';
import NavLink from '@/components/navLink';

export default function Resources() {
  const { videos, codes } = source;

  return (
    <>
      <SiteHeader
        title="React文档，React组件，React教程，React开源项目"
        keywords="React文档，React教程，React开源项目,React组件"
        description="React文档、教程、开源项目,组件，助力学习掌握React,提升React开发效率"
      />
      <SideAd />
      <Space direction="vertical" className={styles.content}>
        <Alert
          message={
            <p>
              vscode插件，持续更新中，欢迎向我们
              <NavLink target="_blank" to="/aboutUs">
                留言
              </NavLink>
              推荐收录新插件
            </p>
          }
          closable
          type="success"
        />
        <AntCard title="全部插件">
          <div className={styles.doc}></div>
        </AntCard>
      </Space>
    </>
  );
}
