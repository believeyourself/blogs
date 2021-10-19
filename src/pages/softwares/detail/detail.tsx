import styles from './detail.less';
import marked from 'marked';
import softwares from '../../../../data/softwares';
import SiteHeader from '@/components/siteHeader';

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

const records = softwares.pc.concat(softwares.mobile);

function BlogDetail(props: any) {
  const host = window.location.origin;
  const id = props.match.params.id;
  const software = records.find((software: any) => {
    return software.id == id;
  });

  const content = require(`../../../../data/softwares/${id}.md`);
  const keywords = software && software.tags?.join(',');
  return (
    <div className={styles.content}>
      <SiteHeader
        title={software?.title || ''}
        keywords={`前端网,${keywords}`}
        description={`前端网,${keywords},${software?.description}`}
      />
      <header>
        <a className={styles.back} href={host}>
          {' '}
          首页
        </a>{' '}
        /
        <a className={styles.back} href={host + "/softwares"}>
          {' '}
          软件下载
        </a>
      </header>
      <article dangerouslySetInnerHTML={{ __html: marked(content.default) }} />
    </div>
  );
}

export default BlogDetail;
