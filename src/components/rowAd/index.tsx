import { Helmet } from 'umi';

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
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </Helmet>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2087076429727327"
        data-ad-slot="9331479126"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};
