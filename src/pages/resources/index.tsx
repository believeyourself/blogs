/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import { useState } from 'react';
import styles from './index.less';
import records from '../../../data/resource';
import Card from '@/components/card';
import SiteHeader from '@/components/siteHeader';
import { Modal, Card as AntCard, Row, Col, Typography } from 'antd';

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    // 找到锚点
    const anchorElement = document.getElementById(anchorName);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }
};

export default function Resources() {
  const [active, setActive] = useState(0);
  const [showDownload, setShowDownload] = useState(false);
  const navs: any[] = [];
  const resources: any[] = [];
  records.forEach((item, index) => {
    navs.push(
      <li key={item.id} className={styles.nav_item}>
        <a
          className={index === active ? styles.active : ''}
          onClick={() => {
            setActive(index);
            scrollToAnchor(item.id);
          }}
        >
          {item.category}
        </a>
      </li>,
    );
    let categoryList: any[] = [];
    const list: any[] = item.list || [];
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

      resources.push(
        <AntCard
          extra={
            <a
              className={styles.download_url}
              onClick={() => {
                setShowDownload(true);
              }}
            >
              下载
              <Modal
                title="PDF下载"
                visible={showDownload}
                footer={false}
                onCancel={(evt) => {
                  setShowDownload(false);
                  evt.stopPropagation();
                }}
              >
                百度网盘：
                <a
                  target="_blank"
                  href="https://pan.baidu.com/s/1xvVf3FlyN0gPMxlZJvqnlw"
                  rel="noreferrer"
                >
                  https://pan.baidu.com/s/1xvVf3FlyN0gPMxlZJvqnlw
                </a>
                <p>
                  提取码：<Typography.Text copyable>belf</Typography.Text>
                </p>
              </Modal>
            </a>
          }
          id={item.id}
          key={item.id}
          title={item.category}
        >
          <section className={styles.category_list}>{categoryList}</section>
        </AntCard>,
      );
    } else {
      const categoryList = list.map((item: any) => {
        return (
          <Col key={item.title} lg={12} md={12} sm={24} xs={24}>
            <Card className={styles.category_list_item} {...item} />
          </Col>
        );
      });
      resources.push(
        <AntCard
          className={styles.category_list}
          key={item.id}
          title={item.category}
        >
          <Row gutter={[10, 10]}>{categoryList}</Row>
        </AntCard>,
      );
    }
  });
  return (
    <section className={styles.container}>
      <SiteHeader>
        <meta name="baiduspider" content="nofollow" />
      </SiteHeader>
      <div className={styles.nav}>
        <ul>{navs}</ul>
      </div>
      <div className={styles.content}>{resources}</div>
    </section>
  );
}
