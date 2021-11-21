import { Helmet } from 'umi';
import AdSense from 'react-adsense';

export default (props: any) => {
  if (process.env.REACT_APP_ENV === 'development') {
    return null;
  }

  const { width = 250, height = 300 } = props;

  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087076429727327"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'center', width, height }}>
        <AdSense.Google
          client="ca-pub-2087076429727327"
          slot="7022357395"
          style={{ display: 'inline-block', width, height }}
        />
      </div>
    </>
  );
};
