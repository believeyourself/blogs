import { Helmet } from 'umi';
import AdSense from 'react-adsense';

export default (props: any) => {
  const { width = 250, height = 300 } = props;
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
      <div style={{ textAlign:"center" }}>
        <AdSense.Google
          client="ca-pub-2087076429727327"
          slot="7022357395"
          style={{ display: 'inline-block', width,maxWidth:width, height,maxHeight:height }}
        />
      </div>
    </>
  );
};
