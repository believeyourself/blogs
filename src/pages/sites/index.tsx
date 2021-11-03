/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-05-27 13:14:11
 */
import { useState } from 'react';
import styles from './index.less';
import records from '../../../data/sites';
import Card from '@/components/card';
import SiteHeader from '@/components/siteHeader';
import { Row, Col, Card as AntCard } from 'antd';
import RowAd from '@/components/rowAd';

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

export default function Sites() {
  const [active, setActive] = useState(0);
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
    const categoryList = item.sites.map((site: any) => {
      return (
        <Col
          className={styles.category_list_item}
          key={site.url}
          lg={8}
          md={8}
          sm={12}
          xs={24}
        >
          <Card {...site} />
        </Col>
      );
    });
    resources.push(
      <AntCard
        key={item.id}
        style={{ marginBottom: 10 }}
        title={item.category}
        id={item.id}
      >
        <Row gutter={[10, 10]} className={styles.category_list}>
          {categoryList}
        </Row>
      </AntCard>,
    );
  });
  return (
    <section className={styles.container}>
      <SiteHeader
        title="网址导航"
        keywords="前端网，笔试面试，技术社区，游戏开发，调试工具，构建工具，站长工具，团队组织，图片素材"
        description="前端网，热门工具整合，笔试面试，技术社区，游戏开发，调试工具，构建工具，站长工具，团队组织，图片素材"
      />
      <div className={styles.nav}>
        <ul>{navs}</ul>
      </div>
      <div className={styles.content}>
        {resources}
        <RowAd />
      </div>
    </section>
  );
}
