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
import { Card as AntCard, Row, Col, Space } from 'antd';
import SideAd from '@/components/sideAd';

export default function Resources() {
  const resources: any[] = [];
  records.forEach((item) => {
    let categoryList: any[] = [];
    const list: any[] = item.list?.splice(0, 4) || [];
    if (item.category === 'PDF') {
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

    resources.push(
      <AntCard
        id={item.id}
        key={item.id}
        title={item.category}
        extra={
          <a className={styles.download_url} href={`/resources/${item.id}`}>
            查看更多
          </a>
        }
      >
        <Row gutter={[10, 10]}>{categoryList}</Row>
      </AntCard>,
    );
  });

  return (
    <section className={styles.container}>
      <SiteHeader>
        <meta name="baiduspider" content="nofollow" />
      </SiteHeader>
      <div className={styles.nav}>
        <SideAd />
      </div>
      <Space direction="vertical" className={styles.content}>
        {resources}
      </Space>
    </section>
  );
}
