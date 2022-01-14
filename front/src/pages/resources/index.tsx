/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-14 09:01:45
 */
import styles from './index.less';
import records from '../../../data/resource';
import Card from '@/components/card';
import SiteHeader from '@/components/siteHeader';
import { Card as AntCard, Row, Col, Space, Alert } from 'antd';
import NavLink from '@/components/navLink';

export default function Resources() {
  const resources: any[] = [];
  records.forEach((item) => {
    let categoryList: any[] = [];
    const list: any[] = item.list?.slice(0, 6) || [];
    if (item.id === 'PDF') {
      categoryList = list.map((pdf: any) => {
        return (
          <NavLink
            className={styles.pdf}
            key={pdf.title}
            target="_blank"
            // href={`https://cloud.qianduan.shop/${pdf.title}`}
            to={`/ebooks/${pdf.title}`}
          >
            {pdf.title}
          </NavLink>
        );
      });
    } else if (item.id === 'video') {
      categoryList = list.map((item: any) => {
        item.description =
          '由于网盘易被封禁，请关注右侧公众号(qianduan_lzj)后台回复教程名称获取资源。';
        return (
          <Col key={item.title} lg={12} md={12} sm={24} xs={24}>
            <Card className={styles.category_list_item} {...item} />
          </Col>
        );
      });
    } else {
      categoryList = list.map((item: any) => {
        return (
          <Col key={item.title} lg={12} md={12} sm={24} xs={24}>
            <Card className={styles.category_list_item} {...item} />
          </Col>
        );
      });
    }

    resources.push(
      <AntCard
        id={item.id}
        key={item.id}
        title={item.category}
        extra={
          <NavLink className={styles.download_url} to={`/resources/${item.id}`}>
            查看更多
          </NavLink>
        }
      >
        <Row gutter={[10, 10]}>{categoryList}</Row>
      </AntCard>,
    );
  });

  return (
    <>
      <SiteHeader
        title="教程资源"
        keywords="前端网，视频教程，电子书，PDF，开源项目，源码分享"
        description="前端网，最新网上视频教程和开源项目分享，电子书在线预览，学习路线推荐"
      />
      <Space direction="vertical" className={styles.content}>
        <Alert
          closable
          type="warning"
          message="视频教程请到微信公众号回复教程名称获取！2021-12-24"
        />
        {resources}
      </Space>
    </>
  );
}