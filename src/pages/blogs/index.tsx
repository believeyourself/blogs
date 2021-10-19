/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import styles from './index.less';
import blogs from '../../../data/blogs';
import NavLink from '@/components/navLink';
import TagSelect from '@/components/tagSelect';
import SiteHeader from '@/components/siteHeader';
import { Divider } from 'antd';
import { useState, useMemo } from 'react';

export default function Blogs() {
  const host = window.location.origin;
  const [tag, setTag] = useState<string | null>(null);
  const targetBlogs: any[] = useMemo(() => {
    return blogs.filter((blog: any) => {
      if (!tag) {
        return true;
      }
      return Array.isArray(blog.tags) && blog.tags.includes(tag);
    });
  }, [tag]);

  const records = targetBlogs.map((item: any) => {
    if (item.id) {
      return (
        <NavLink
          // onClick={() => {
          //   (window as any)._hmt?.push([
          //     '_trackEvent',
          //     'blog',
          //     'detail',
          //     item.id,
          //   ]);
          // }}
          to={`${host}/blogs/detail/${item.id}`}
          key={item.url || item.id}
          className={styles.category_list_item}
        >
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.description}>{item.description}</p>
          <p className={styles.tip}>
            来源: 本站 {"           "}
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
            来源: {item.source} {"          "}
            时间: 未知
          </p>
        </a>
      );
    }
  });
  return (
    <div className={styles.content}>
      <SiteHeader
        title="博客随笔"
        keywords="前端网，React，javascript，SEO，css，node，前端优质文章分享"
        description="前端网，致力于前端领域技术研究，深入分析技术基础原理，包括但不限于javascript,css,React,vue,node,webpack,umi,antd"
      />
      <TagSelect
        hideCheckAll={true}
        multi={false}
        onChange={(values) => {
          setTag(values[0]?.toString() || null);
        }}
        expandable
      >
        <TagSelect.Option value="react">React</TagSelect.Option>
        {/* <TagSelect.Option value="vue">vue</TagSelect.Option>
          <TagSelect.Option value="angular">angularJs</TagSelect.Option>
          <TagSelect.Option value="canvas">canvas</TagSelect.Option>
          <TagSelect.Option value="jqery">jquery</TagSelect.Option> */}
        <TagSelect.Option value="css">CSS</TagSelect.Option>
        <TagSelect.Option value="node">NodeJs</TagSelect.Option>
        <TagSelect.Option value="js">JS</TagSelect.Option>
        <TagSelect.Option value="SEO">SEO</TagSelect.Option>
      </TagSelect>
      <Divider />
      {records}
    </div>
  );
}
