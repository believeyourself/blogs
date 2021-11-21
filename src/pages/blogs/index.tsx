/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import styles from './index.less';
import allBlogs from '../../../data/blogs';
import NavLink from '@/components/navLink';
import TagSelect from '@/components/tagSelect';
import SiteHeader from '@/components/siteHeader';
import { Divider, Carousel, Pagination } from 'antd';
import { useParams } from 'react-router';

type UrlParams = {
  page: string | undefined;
  filter: string | undefined;
};

export default function Blogs() {
  let { page = 1, filter } = useParams<UrlParams>();
  page = Number(page);

  const filterBlogs: any[] = allBlogs.filter((blog: any) => {
    if (!filter) {
      return true;
    }
    return Array.isArray(blog.tags) && blog.tags.includes(filter);
  });

  if (page > Math.ceil(filterBlogs.length / 10)) {
    page = 1;
  }
  const blogs = filterBlogs.slice((page - 1) * 10, page * 10);

  const records = blogs.map((item: any) => {
    if (item.id) {
      return (
        <NavLink
          to={`/blogs/detail/${item.id}`}
          key={item.url || item.id}
          className={styles.category_list_item}
        >
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.description}>{item.description}</p>
          <p className={styles.tip}>
            来源: 本站 {'           '}
            时间: {item.date}
          </p>
        </NavLink>
      );
    } else {
      return (
        <a
          href={item.url}
          target="_blank"
          key={item.url || item.id}
          className={styles.category_list_item}
          rel="nofollow"
        >
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.description}>{item.description}</p>
          <p className={styles.tip}>
            来源: {item.source} {'          '}
            时间: 未知
          </p>
        </a>
      );
    }
  });
  return (
    <>
      <SiteHeader
        title="博客随笔 - React,Node,JavaScript,SEO"
        keywords="前端网，前端开发，前端学习，前端博客，React，JavaScript，SEO，css，node"
        description="前端网，致力于前端开发领域技术研究，深入分析技术基础原理，包括但不限于JavaScript,css,React,vue,node,webpack,umi,antd"
      />
      <div className={styles.content}>
        <Carousel autoplay>
          <NavLink className={styles.topic} to={'/topics/react'}>
            React 专题
          </NavLink>
          <NavLink className={styles.topic} to={'/topics/node'}>
            Node 专题
          </NavLink>
        </Carousel>
        <Divider />
        <TagSelect
          hideCheckAll={true}
          multi={false}
          value={filter ? [filter] : []}
          onChange={(values) => {
            if (values[0]) {
              location.href = `/blogs/${page}/${values[0].toString()}`;
            } else {
              location.href = `/blogs/1`;
            }
          }}
          expandable
        >
          <TagSelect.Option value="react">React</TagSelect.Option>
          <TagSelect.Option value="css">CSS</TagSelect.Option>
          <TagSelect.Option value="node">NodeJs</TagSelect.Option>
          <TagSelect.Option value="js">JS</TagSelect.Option>
          <TagSelect.Option value="SEO">SEO</TagSelect.Option>
          <TagSelect.Option value="mysql">Mysql</TagSelect.Option>
        </TagSelect>
        <Divider />
        {records}
        <div>
          <Pagination
            style={{ float: 'right' }}
            current={page}
            total={filterBlogs.length}
            onChange={(page: number) => {
              location.href = `/blogs/${page}`;
            }}
          />
        </div>
      </div>
    </>
  );
}
