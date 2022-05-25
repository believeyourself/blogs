import style from './index.less';
import { Divider, Space, Tag } from 'antd';
import SquareAd from '../squareAd';

function HotRank() {
  const host = process.env.SITE_DOMAIN;
  return (
    <div className={style.container}>
      <p className={style.title}>在线工具</p>
      <div className={style.tool_tags}>
        <Tag
          onClick={() => (window.location.href = host + '/tools')}
          className={style.tool_tag}
          color="blue"
        >
          JSON格式化
        </Tag>
        <Tag
          onClick={() => (window.location.href = host + '/tools/md5')}
          className={style.tool_tag}
          color="cyan"
        >
          MD5
        </Tag>
        <Tag
          onClick={() => (window.location.href = host + '/tools/timestamp')}
          className={style.tool_tag}
          color="error"
        >
          时间戳转换
        </Tag>
        <Tag
          onClick={() => (window.location.href = host + '/tools/cron')}
          className={style.tool_tag}
          color="green"
        >
          Cron表达式生成
        </Tag>
      </div>
      <Divider />
      <SquareAd />
      <Divider />
      <a href="https://s.qiniu.com/MJz2mi" target="_blank" style={{ display: "inline-block", width: "100%", textAlign: "center" }}>
        <img alt="七牛云主机" src="https://cloud.qianduan.shop/qiniu/CPS%E6%8E%A8%E5%B9%BF%E7%B4%A0%E6%9D%90180x460.jpg" />
      </a>
    </div>
  );
}

export default HotRank;
