/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-09 17:53:52
 */
import styles from './index.less';
import blogs from '../../../data/blogs';
import NavLink from '@/components/navLink';
import TagSelect from '@/components/tagSelect';
import SiteHeader from '@/components/siteHeader';
import { Divider, Carousel } from 'antd';
import { useState, useMemo } from 'react';

export default function Blogs() {
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
          <NavLink className={styles.topic} to={'/topics/vscode'}>
            VS Code 插件
          </NavLink>
        </Carousel>
        <Divider />
        <TagSelect
          hideCheckAll={true}
          multi={false}
          onChange={(values) => {
            setTag(values[0]?.toString() || null);
          }}
          expandable
        >
          <TagSelect.Option value="react">React</TagSelect.Option>
          <TagSelect.Option value="css">CSS</TagSelect.Option>
          <TagSelect.Option value="node">NodeJs</TagSelect.Option>
          <TagSelect.Option value="js">JS</TagSelect.Option>
          <TagSelect.Option value="git">git</TagSelect.Option>
          <TagSelect.Option value="mobile">移动端</TagSelect.Option>
          <TagSelect.Option value="chrome">谷歌插件</TagSelect.Option>
          <TagSelect.Option value="SEO">SEO</TagSelect.Option>
          <TagSelect.Option value="mysql">Mysql</TagSelect.Option>
          <TagSelect.Option value="aws">AWS</TagSelect.Option>
          <TagSelect.Option value="doris">Doris</TagSelect.Option>
        </TagSelect>
        <Divider />
        {records}
      </div>
    </>
  );
}
