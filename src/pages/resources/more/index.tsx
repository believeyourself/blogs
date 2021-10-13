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
import SideAd from '@/components/sideAd';
import { useParams } from 'umi';

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
        <a
          className={styles.pdf}
          key={pdf.title}
          target="_blank"
          href={`/ebooks/${pdf.path}`}
        >
          {pdf.title}
        </a>
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
      <div className={styles.nav}>
        <SideAd />
      </div>
      <AntCard
        extra={<a href="/resources">返回</a>}
        title={resource.category}
        className={styles.content}
      >
        <Row gutter={[10, 10]}>{categoryList}</Row>
      </AntCard>
    </section>
  );
}
