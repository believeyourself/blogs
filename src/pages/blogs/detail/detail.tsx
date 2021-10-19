import styles from './detail.less';
import marked from 'marked';
import { Tag } from 'antd';
import blogs from '../../../../data/blogs';
import SiteHeader from "@/components/siteHeader"
import SideAd from '@/components/sideAd';

marked.setOptions({
  // marked 设置
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

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
  const keywords = blog && blog.tags?.join(",")
  return (
    <>
    <SideAd />
    <div className={styles.content}>
      <SiteHeader
        title={blog?.title || ""}
        keywords={`前端网,${keywords}`}
        description={`前端网,${keywords},${blog?.description}`}
      />
      <header>
        <a className={styles.back} href="/">
          {' '}
          首页
        </a>{' '}
        /
        <a className={styles.back} href="/blogs">
          {' '}
          博客
        </a>
      </header>
      <article dangerouslySetInnerHTML={{ __html: marked(content.default) }} />
      <div style={{ paddingBottom: 40 }}>{tags}</div>
    </div>
    </>
  );
}

export default BlogDetail;
