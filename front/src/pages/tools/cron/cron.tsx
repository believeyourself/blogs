import { useState } from 'react';
import { Button, Input, Space } from 'antd';
import ReactCron from 'qnn-react-cron';

export default () => {
  const [value, setValue] = useState('');
  let cronFn: { onParse: () => void; getValue: () => string };
  return (
    <Space
      direction="vertical"
      style={{ display: 'flex', maxWidth: 1200, margin: '0 auto' }}
    >
      <span>Cron表达式：</span>
      <Input
        placeholder="输入值会自动解析到下面的UI"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
      <ReactCron
        value={value}
        // 相当于 ref
        getCronFns={(fns: any) => {
          cronFn = fns;
        }}
        // 自定义底部按钮后需要自行调用方法来或者值
        footer={[
          <Button
            key="onOk"
            type="primary"
            onClick={() => setValue(cronFn.getValue())}
          >
            生成
          </Button>,
        ]}
      />
    </Space>
  );
};
