import { Helmet } from 'umi';
import AdSense from 'react-adsense';

export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return null;
  }

  return (
    <>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087076429727327"
     crossOrigin="anonymous"></script>
      </Helmet>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <AdSense.Google
          client='ca-pub-2087076429727327'
          slot='9331479126'
          style={{display:"inline-block",width:"728px",height:"90px"}}
          format='auto'
          responsive="true"
        />
      </div>
    </>
  );
};
