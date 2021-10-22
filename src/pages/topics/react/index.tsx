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
import { Card as AntCard, Space } from 'antd';
import SideAd from '@/components/sideAd';
import NavLink from '@/components/navLink';

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
        <AntCard title="React入门">
          <div></div>
        </AntCard>
        <AntCard title="React进阶"></AntCard>
        <AntCard title="React实战"></AntCard>
        <AntCard title="相关文章"></AntCard>
      </Space>
    </>
  );
}
