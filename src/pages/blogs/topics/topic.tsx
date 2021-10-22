/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import styles from './index.less';
import records from '../../../data/resource';
import Card from '@/components/card';
import SiteHeader from '@/components/siteHeader';
import { Card as AntCard, Row, Col, Space, Alert } from 'antd';
import SideAd from '@/components/sideAd';

export default function Resources() {
  const host = process.env.SITE_DOMAIN;
  const resources: any[] = [];

  return (
    <>
      <SiteHeader
        title="教程资源"
        keywords="前端网，视频教程，电子书，PDF，开源项目，源码分享"
        description="前端网，最新网上视频教程和开源项目分享，电子书在线预览，学习路线推荐"
      />
      <SideAd />
      <Space direction="vertical" className={styles.content}>
        <AntCard title="入门">官方稳点</AntCard>
        <AntCard title="进阶"></AntCard>
        <AntCard title="实战"></AntCard>
        <AntCard title="相关文章"></AntCard>
      </Space>
    </>
  );
}
