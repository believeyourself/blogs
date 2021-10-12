import RowAd from '@/components/rowAd';
import { Helmet,useParams } from 'umi';
import { Divider, Tabs } from 'antd';
import { useState } from 'react';
import JsonTree from './jsonTree/jsonTree';
import MD5 from './md5/md5';
import Timestamp from './timestamp/timestamp';
import logo from '../../assets/images/logo.png';
import style from './style.less';

enum ToolType {
  jsonTree = 'jsonTree',
  md5 = 'md5',
  interface = 'interface',
  timestamp = 'timestamp',
}

export default () => {
  const {type} = useParams<{type:string | undefined}>();
  const [activeKey, setActiveKey] = useState<string>( type || ToolType.jsonTree);
  return (
    <>
      <Helmet>
        <title>在线工具 - 前端网</title>
        <meta
          name="keywords"
          content="web前端,在线工具，JSON格式化，MD5加密，Ajax请求，时间戳转换，图片压缩"
        />
        <meta
          name="description"
          content="web前端在线工具，在线JSON格式化，在线MD5加密，在线Ajax请求，在线时间戳转化，在线图片压缩"
        />
      </Helmet>
      <header className={style.header}>
        <img
          onClick={() => (window.location.href = '/')}
          title="前端网"
          src={logo}
          alt="前端网"
        />
      </header>
      <div>
        <Tabs
          centered
          activeKey={activeKey}
          onChange={(activeKey: string) => setActiveKey(activeKey)}
        >
          <Tabs.TabPane
            tab="JSON视图树"
            key={ToolType.jsonTree}
            tabKey={ToolType.jsonTree}
          >
            <JsonTree />
          </Tabs.TabPane>
          <Tabs.TabPane tab="加密" key={ToolType.md5} tabKey={ToolType.md5}>
            <MD5 />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="时间戳"
            key={ToolType.timestamp}
            tabKey={ToolType.timestamp}
          >
            <Timestamp />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <Divider />
      <RowAd />
    </>
  );
};
