import { Spin } from 'antd';

function Loading({ style = {} }: { style?: Record<string, string> }) {
  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
    >
      <Spin size="large" tip="正在努力加载中，请稍后..." />
    </div>
  );
}

export default Loading;
