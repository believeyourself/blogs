import AdSense from 'react-adsense';
import ErrorBoundary from '../ErrorBoundary';

export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return null;
  }

  return (
    <ErrorBoundary ignore={true}>
      <AdSense.Google
        client="ca-pub-2087076429727327"
        slot="9331479126"
        style={{
          display: 'block',
          textAlign: 'center',
          width: '100%',
          height: '90px',
        }}
      />
    </ErrorBoundary>
  );
};
