import { Helmet } from 'umi';
import AdSense from 'react-adsense';

export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return null;
  }

  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087076429727327"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <div
        style={{ width: '280px', display: 'flex', justifyContent: 'center' }}
      >
        <AdSense.Google
          client="ca-pub-2087076429727327"
          slot="7022357395"
          style={{ display: 'inline-block', width: '220px', height: '1000px' }}
        />
      </div>
    </>
  );
};
