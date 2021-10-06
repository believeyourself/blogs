import { Helmet, useParams } from 'umi';

export default () => {
  const { path } = useParams<{ path: string }>();
  return (
    <>
      <Helmet>
        <title>{path.split('.')[0]}</title>
      </Helmet>
      <embed
        src={`/static/ebooks/${path}`}
        type="application/pdf"
        style={{ width: '100vw', height: '100vh' }}
      ></embed>
    </>
  );
};
