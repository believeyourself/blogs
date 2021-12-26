import { useRef,useState } from "react"
import {Button, Select,Space,Typography} from "antd"
import style from "./style.less"
import md5 from "js-md5";

export default () =>{
  const [value,setValue] = useState<string | null>();
  const [encryptType,setEncryptType] = useState<string>("big_md5");
  const textarea = useRef<HTMLTextAreaElement>(null);
  const encrypt = () => {
    const content = textarea.current?.value;
    if(content){
      switch(encryptType){
        case "big_md5":{
          setValue(md5(content).toUpperCase());
          break;
        }
        case "small_md5":{
          setValue(md5(content).toLowerCase());
          break;
        }
        case "base64_encode":{
          setValue(md5.base64(content));
          break;
        }
      }
      
    }
  }
  const clear = ()=>{
    setValue(null);
    if(textarea.current){
      textarea.current.value = "";
    }
  }

  return <div className={style.container}>
    <textarea ref={textarea}
      placeholder="请把你需要加密的内容粘贴在这里"
      className={style.left}></textarea>
    <div className={style.center}>
      <Select value={encryptType} onChange={(value)=>setEncryptType(value)} className={style.select}>
        <Select.Option value="big_md5">MD5(大写)</Select.Option>
        <Select.Option value="small_md5">MD5(小写)</Select.Option>
        <Select.Option value="base64_encode">BASE64</Select.Option>
      </Select>
      <Space>
        <Button type="primary" onClick={encrypt}>加密</Button>
        <Button type="primary" onClick={clear}>清空</Button>
      </Space>
    </div>
    <div className={style.right}>
      {
        value && 
        <Typography.Text copyable>
        {value}
      </Typography.Text>
      }
    </div>
  </div>
}