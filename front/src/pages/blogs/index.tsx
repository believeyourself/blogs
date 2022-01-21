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
import { Divider } from 'antd';
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
    return (
      <NavLink
        to={`/blogs/detail/${item.id}`}
        key={item.url || item.id}
        className={styles.category_list_item}
      >
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.tip}>
          from: FarmerLZJ {'           '}
          Date: {item.date}
        </p>
      </NavLink>
    );
  });
  return (
    <>
      <SiteHeader
        title="blogs - React,Node,JavaScript,SEO"
        keywords="React，JavaScript，SEO，css，node"
        description="JavaScript,css,React,vue,node,webpack,umi,antd"
      />
      <div className={styles.content}>
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
