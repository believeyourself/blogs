import { Helmet } from 'umi';
import AdSense from 'react-adsense';

export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return null;
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AdSense.Google
          client="ca-pub-2087076429727327"
          slot="9331479126"
          style={{ display: 'inline-block', height: '90px' }}
        />
      </div>
    </>
  );
};
