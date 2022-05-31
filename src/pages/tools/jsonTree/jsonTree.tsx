import { useRef } from 'react';
import { Button, Space } from 'antd';
import { useState } from 'react';
import JsonViewer from 'react-json-view';
import style from './style.less';

enum OpType {
  none,
  format,
  compress,
}

export default () => {
  const [json, setJson] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [opType, setOpType] = useState<OpType>(OpType.none);

  const inputJson = useRef<HTMLTextAreaElement>(null);

  const format = () => {
    setError(null);
    setOpType(OpType.format);
    setJson(inputJson.current ? inputJson.current.value : '');
  };

  const compress = () => {
    setError(null);
    setOpType(OpType.compress);
    setJson(inputJson.current ? inputJson.current.value : '');
  };

  let content = null;
  switch (opType) {
    case OpType.format: {
      let jsonObj = null;
      if (!error && json) {
        try {
          jsonObj = JSON.parse(json);
        } catch (error: any) {
          console.log(error);
          setOpType(OpType.none);
          setError(new Error('JSON格式错误'));
        }
      }
      console.log(jsonObj);
      content = jsonObj && (
        <JsonViewer
          onDelete={(del) => {
            console.log(del);
          }}
          onAdd={(add) => {
            console.log(add);
          }}
          onEdit={(edit) => {
            console.log(edit);
          }}
          name={false}
          src={jsonObj}
        />
      );
      break;
    }
    case OpType.compress: {
      if (!error && json) {
        try {
          content = JSON.stringify(JSON.parse(json));
        } catch (error: any) {
          console.log(error);
          setOpType(OpType.none);
          setError(new Error('JSON格式错误'));
        }
      }
      break;
    }
  }
  return (
    <div className={style.container}>
      <div className={style.operation}>
        <Space>
          <Button onClick={compress} type="primary">
            压缩
          </Button>
          <Button onClick={format} type="primary">
            格式化
          </Button>
        </Space>
      </div>
      <textarea
        autoFocus
        placeholder="在此输入JSON字符串"
        onChange={format}
        ref={inputJson}
        className={style.input_json}
      ></textarea>
      <div className={style.output_json}>{error ? error.message : content}</div>
    </div>
  );
};
