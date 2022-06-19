import { Spin } from 'antd';

function Loading() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin size="large" tip="努力加载中，请稍后..." />
    </div>
  );
}

export default Loading;
