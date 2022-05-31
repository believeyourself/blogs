/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import styles from './index.less';
import records from '../../../../data/resource';
import Card from '@/components/card';
import SiteHeader from '@/components/siteHeader';
import { Card as AntCard, Row, Col } from 'antd';
import { useParams } from 'umi';
import NavLink from '@/components/navLink';

export default function More() {
  const { id } = useParams<{ id: string }>();
  const resource: any = records.find((record) => {
    return record.id === id;
  });

  let categoryList: any[] = [];
  const list: any[] = resource.list || [];
  if (id === 'PDF') {
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
  } else if (id === 'video') {
    categoryList = list.map((item: any) => {
      item.description =
        '由于网盘易被封禁，请关注右侧公众号(qianduan_lzj)获取资源。';
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

  return (
    <section className={styles.container}>
      <SiteHeader
        title={resource.category}
        keywords="前端网，视频教程，电子书，PDF，开源项目，源码分享，React，Vue，Typescript，Egg，Node"
        description="前端网，视频教程，电子书，PDF，开源项目，源码分享，React，Vue，Typescript，Egg，Node"
      />
      <AntCard
        style={{ maxWidth: '100vw' }}
        extra={<NavLink to="/resources">返回</NavLink>}
        title={
          <h1 style={{ fontSize: '16px', fontWeight: 500 }}>
            {resource.category}
          </h1>
        }
        className={styles.content}
      >
        <Row gutter={[10, 10]}>{categoryList}</Row>
      </AntCard>
    </section>
  );
}
