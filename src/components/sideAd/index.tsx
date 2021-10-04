export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return null;
  }

  return (
    <div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2087076429727327"
        crossOrigin="anonymous"
      ></script>
      {/* <!-- side --> */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2087076429727327"
        data-ad-slot="5545640106"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
};
