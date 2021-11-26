import ErrorBoundary from '../ErrorBoundary';
import AdSense from 'react-adsense';
import style from './style.less';

export default () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return <div className={style.container}></div>;
  }

  return (
    <ErrorBoundary ignore={true}>
      <div className={style.container}>
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
