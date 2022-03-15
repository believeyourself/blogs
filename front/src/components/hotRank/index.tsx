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
      <Space>
        <span className={style.qq_label}>Node交流群:</span>
        <a
          rel="nofollow"
          target="_blank"
          href="https://qm.qq.com/cgi-bin/qm/qr?k=AzXgep7P0kzB_-TIxBDDNFILZFxh4BdS&jump_from=webapi"
        >
          <img
            src="//pub.idqqimg.com/wpa/images/group.png"
            alt="Node交流群"
            title="Node交流群"
          />
        </a>
      </Space>
      <Space>
        <span className={style.qq_label}>前端交流群:</span>
        <a
          rel="nofollow"
          target="_blank"
          href="https://qm.qq.com/cgi-bin/qm/qr?k=R-am4ZcuufvTEuyilwZgihmk2Fp_lQsy&jump_from=webapi"
        >
          <img
            src="//pub.idqqimg.com/wpa/images/group.png"
            alt="前端技术交流"
            title="前端技术交流"
          />
        </a>
      </Space>
      <Divider />
      <p className={style.title}>微信公众号</p>
      <img alt="前端微信公众号" src="/static/images/weixin.jpg" />
      <Divider />
      <SquareAd />
    </div>
  );
}

export default HotRank;
