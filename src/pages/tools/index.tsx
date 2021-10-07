import RowAd from '@/components/rowAd';
import { Helmet } from 'umi';
import { Divider, Tabs } from 'antd';
import { useState } from 'react';
import JsonTree from './jsonTree/jsonTree';
import logo from '../../assets/images/logo.png';
import style from './style.less';

enum ToolType {
  jsonTree = 'jsonTree',
  md5 = 'md5',
  interface = 'interface',
  timestamp = 'timestamp',
  imageCompression = 'imageCompression',
}

export default () => {
  const [activeKey, setActiveKey] = useState<string>(ToolType.jsonTree);
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
          <Tabs.TabPane tab="MD5" key={ToolType.md5} tabKey={ToolType.md5}>
            开发中。。。。
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="AJAX"
            key={ToolType.interface}
            tabKey={ToolType.interface}
          >
            开发中。。。。
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="时间戳"
            key={ToolType.timestamp}
            tabKey={ToolType.timestamp}
          >
            开发中。。。。
          </Tabs.TabPane>
          <Tabs.TabPane
            tab="图片压缩"
            key={ToolType.imageCompression}
            tabKey={ToolType.imageCompression}
          >
            开发中。。。。
          </Tabs.TabPane>
        </Tabs>
      </div>
      <Divider />
      <RowAd />
    </>
  );
};
