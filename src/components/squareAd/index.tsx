import AdSense from 'react-adsense';
import ErrorBoundary from '../ErrorBoundary';

export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return null;
  }

  return (
    <ErrorBoundary ignore={true}>
      <div style={{ textAlign: 'center' }}>
        <AdSense.Google
          client="ca-pub-2087076429727327"
          slot="7022357395"
          style="display:inline-block;width:250px;height:300px"
        />
      </div>
    </ErrorBoundary>
  );
};
