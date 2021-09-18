import styles from './detail.less';
import { Link } from 'react-router-dom';
import marked from "marked";

marked.setOptions({ // marked 设置
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

function BlogDetail(props: any) {
  const id = props.match.params.id;
  const content = require(`../../../../data/blogs/${id}.md`);
  return (
    <div className={styles.content}>
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
      <article dangerouslySetInnerHTML={{ __html: marked(content.default) }}></article>
    </div>
  );
}

export default BlogDetail;
