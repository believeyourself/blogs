import ErrorBoundary from '../ErrorBoundary';
import AdSense from 'react-adsense';
import './style.less';

export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return <div className="site_ad"></div>;
  }

  return (
    <ErrorBoundary ignore={true}>
      <div className="site_ad">
        <AdSense.Google
          client="ca-pub-2087076429727327"
          slot="5545640106"
          style={{ display: 'inline-block', width: '220px', height: '1000px' }}
          format="auto"
          responsive="true"
        />
      </div>
    </ErrorBoundary>
  );
};
