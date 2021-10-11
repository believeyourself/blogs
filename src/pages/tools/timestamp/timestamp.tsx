import { Input,Select,message, Divider } from "antd";
import { useState } from "react"
import dayjs, { Dayjs } from "dayjs"
import style from "./style.less"
import utc from "dayjs/plugin/utc"
import DatePicker from "@/components/DatePicker"

dayjs.extend(utc);



export default () =>{
  const [date,setDate] = useState(dayjs());
  const [timestamp,setTimestamp] = useState(dayjs.utc(date).valueOf());
  const [timeType,setTimeType] = useState(1);

  return <div className={style.container}>
    <div className={style.input}>
      <Input onChange={
        (evt) => {
          const timeNumber = Number(evt.target.value)
          if(!isNaN(timeNumber)){
            setTimestamp(timeNumber);
            setDate(dayjs(timeNumber));
            
          }else{
            message.error("输入时间戳格式不正确");
          }
          
        }
      } value={(timestamp / timeType).toFixed(0)} addonBefore="UNIX时间戳" addonAfter={
        <Select value={timeType} onChange={
          (value) => {
            setTimeType(value);
          }
        }>
          <Select.Option value={1000}>
            毫秒
          </Select.Option>
          <Select.Option value={1}>
            秒
          </Select.Option>
        </Select>
      } />
      <DatePicker showTime value={date} onChange={
        (curDate:Dayjs | null)=>{
          if(curDate){
            setDate(curDate);
            setTimestamp(dayjs.utc(curDate).valueOf())
          }
        }
      } />
    </div>
    <Divider />
  </div>
}