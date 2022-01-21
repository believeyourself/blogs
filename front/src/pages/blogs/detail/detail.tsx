/*
 * @Date: 2021-12-21 11:05:17
 * @LastEditors: lzj
 * @LastEditTime: 2022-01-21 16:05:08
 * @FilePath: \qianduan.shop\front\src\pages\blogs\detail\detail.tsx
 */
import styles from './detail.less';
// import marked from 'marked';
import { Divider, Tag } from 'antd';
import blogs from '../../../../data/blogs';
import SiteHeader from '@/components/siteHeader';
import NavLink from '@/components/navLink';
import RowAd from '@/components/rowAd';
import {markdown} from "markdown";

// marked.setOptions({
//   // marked 设置
//   renderer: new marked.Renderer(),
//   gfm: true,
//   breaks: true,
//   pedantic: false,
//   sanitize: false,
//   smartLists: true,
//   smartypants: false,
// });

const tagColors = [
  'geekblue',
  'volcano',
  'error',
  'success',
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'magenta',
  'gold',
  'lime',
  'processing',
  'warning',
];

function BlogDetail(props: any) {
  const id = props.match.params.id;
  const blog = blogs.find((blog: any) => {
    return blog.id == id;
  });
  const tags = blog?.tags?.map((tag: string, index: number) => {
    const colorIndex = index % tagColors.length;
    return (
      <Tag icon={'#'} color={tagColors[colorIndex]} key={tag}>
        {tag}
      </Tag>
    );
  });

  const content = require(`../../../../data/blogs/${id}.md`);
  const keywords = blog && blog.tags?.join(',');
  return (
    <>
      <div className={styles.content}>
        <SiteHeader
          title={blog?.title || ''}
          keywords={`前端网,${keywords}`}
          description={`前端网,${keywords},${blog?.description}`}
        />
        <header>
          <NavLink className={styles.back} to="/">
            {' '}
            首页
          </NavLink>{' '}
          /
          <NavLink className={styles.back} to="/blogs">
            {' '}
            博客
          </NavLink>
        </header>
        <article
          dangerouslySetInnerHTML={{ __html: markdown.toHTML(content.default) }}
        />
        <div>{tags}</div>
        <Divider />
        <Divider />
        <RowAd />
      </div>
    </>
  );
}

export default BlogDetail;
