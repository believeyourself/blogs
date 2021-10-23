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
import { Card as AntCard, Space, Row, Col } from 'antd';
import SideAd from '@/components/sideAd';
import source from '../../../../data/topics/node';
import Card from '@/components/card';
import blogs from '../../../../data/blogs';
import NavLink from '@/components/navLink';

const reactBlogs = blogs.map((item: any) => {
  if (
    !Array.isArray(item.tags) ||
    (Array.isArray(item.tags) && !item.tags.includes('node'))
  ) {
    return null;
  }
  if (item.id) {
    return (
      <NavLink
        to={`/blogs/detail/${item.id}`}
        key={item.url || item.id}
        className={styles.blog}
      >
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
      </NavLink>
    );
  } else {
    return (
      <a
        href={item.url}
        target="_blank"
        key={item.url || item.id}
        className={styles.blog}
        rel="nofollow"
      >
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
      </a>
    );
  }
});

export default function Resources() {
  const { videos, codes } = source;

  return (
    <>
      <SiteHeader
        title="NodeJs文档，NodeJs教程，NodeJs开源项目"
        keywords="NodeJs开发，NodeJs文档，NodeJs教程，NodeJs开源项目"
        description="NodeJs学习路线、文档、教程、开源项目，助力学习掌握NodeJs,提升NodeJs开发效率"
      />
      <SideAd />
      <Space direction="vertical" className={styles.content}>
        <AntCard title="NodeJs 相关文档">
          <div className={styles.doc}>
            <a target="_blank" href="http://nodejs.cn/">
              NodeJs
            </a>
            <a
              target="_blank"
              href="https://expressjs.com/zh-cn/starter/installing.html"
            >
              Express
            </a>
            <a target="_blank" href="https://koa.bootcss.com/">
              Koa
            </a>
            <a
              target="_blank"
              href="https://chenshenhai.github.io/koa2-note/note/start/quick.html"
            >
              Koa2
            </a>
            <a target="_blank" href="https://eggjs.org/zh-cn/intro/">
              egg
            </a>
            <a target="_blank" href="https://pinus.io/">
              pinus
            </a>
          </div>
        </AntCard>
        <AntCard title="NodeJs 教程">
          <Row gutter={[10, 10]}>
            {videos.map((item: any) => {
              return (
                <Col key={item.title} lg={12} md={12} sm={24} xs={24}>
                  <Card className={styles.category_list_item} {...item} />
                </Col>
              );
            })}
          </Row>
        </AntCard>
        <AntCard title="NodeJs 开源项目">
          <Row gutter={[10, 10]}>
            {codes.map((item: any) => {
              return (
                <Col key={item.title} lg={12} md={12} sm={24} xs={24}>
                  <Card className={styles.category_list_item} {...item} />
                </Col>
              );
            })}
          </Row>
        </AntCard>
        <AntCard title="NodeJs 文章">{reactBlogs}</AntCard>
        <AntCard title="NodeJs PDF">制作中，敬请期待。。。</AntCard>
      </Space>
    </>
  );
}
