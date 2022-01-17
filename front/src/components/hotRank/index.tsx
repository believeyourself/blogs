import style from './index.less';
import { Divider, Tag } from 'antd';
import SquareAd from '../squareAd';

function HotRank() {
  const host = process.env.SITE_DOMAIN;
  return (
    <div className={style.container}>
      <p className={style.title}>Online Tools</p>
      <div className={style.tool_tags}>
        <Tag
          onClick={() => (window.location.href = host + '/tools')}
          className={style.tool_tag}
          color="blue"
        >
          JSON Formater
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
          timestamps
        </Tag>
        <Tag
          onClick={() => (window.location.href = host + '/tools/cron')}
          className={style.tool_tag}
          color="green"
        >
          Cron Expresstion
        </Tag>
      </div>
      <Divider />
      <SquareAd />
      <Divider />
      <SquareAd />
    </div>
  );
}

export default HotRank;
