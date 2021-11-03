import SiteHeader from '@/components/siteHeader';
import { useParams } from 'umi';

export default () => {
  const { path } = useParams<{ path: string }>();
  const name = path.split('.')[0];
  return (
    <>
      <SiteHeader
        title={name}
        keywords={`${name},前端`}
        description={`${name},前端`}
      >
        <title>{path.split('.')[0]}</title>
      </SiteHeader>
      <embed
        src={`/static/ebooks/${path}`}
        type="application/pdf"
        style={{ width: '100vw', height: '100vh' }}
      ></embed>
    </>
  );
};
