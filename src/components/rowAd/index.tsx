import { Helmet } from 'umi';
import AdSense from 'react-adsense';

export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return null;
  }

  return (
    <>
      <Helmet>
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087076429727327"
          crossOrigin="anonymous"
        ></script> */}
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      <AdSense.Google
        client='ca-pub-2087076429727327'
        slot='9331479126'
        style={{ display: 'block' }}
        format='auto'
        responsive="true"
      />
      {/* <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2087076429727327"
        data-ad-slot="9331479126"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins> */}
    </>
  );
};
