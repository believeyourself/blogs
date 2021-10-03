import styles from './detail.less';
import { Link } from 'react-router-dom';
import marked from 'marked';
import { Tag } from 'antd';
import blogs from '../../../../data/blogs';
import { Helmet } from '@/.umi/plugin-helmet/exports';

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
  return (
    <div className={styles.content}>
      <Helmet>
        <title>{blog?.title} - 文章详情</title>
      </Helmet>
      <header>
        <Link className={styles.back} to="/">
          {' '}
          首页
        </Link>{' '}
        /
        <Link className={styles.back} to="/blogs">
          {' '}
          博客
        </Link>
      </header>
      <article dangerouslySetInnerHTML={{ __html: marked(content.default) }} />
      <div style={{ paddingBottom: 40 }}>{tags}</div>
    </div>
  );
}

export default BlogDetail;
