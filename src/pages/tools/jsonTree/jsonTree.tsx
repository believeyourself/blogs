import { useRef } from 'react';
import { Button } from 'antd';
import { useState } from 'react';
import JsonViewer from 'react-json-view';
import style from './style.less';

export default () => {
  const [json, setJson] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const inputJson = useRef<HTMLTextAreaElement>(null);

  let jonsonObj = {};
  if (!error && json) {
    try {
      jonsonObj = JSON.parse(json);
    } catch (error: any) {
      console.log(error);
      setError(new Error('JSON格式错误'));
    }
  }

  const run = () => {
    setError(null);
    setJson(inputJson.current ? inputJson.current.value : '');
  };

  return (
    <div className={style.container}>
      <div className={style.operation}>
        <Button onClick={run} type="primary">
          格式化
        </Button>
      </div>
      <textarea
        autoFocus
        placeholder="在此输入JSON字符串"
        ref={inputJson}
        className={style.input_json}
      ></textarea>
      <div className={style.output_json}>
        {error ? error.message : <JsonViewer name={false} src={jonsonObj} />}
      </div>
    </div>
  );
};
