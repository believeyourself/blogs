import RowAd from '@/components/rowAd';
import { Helmet, useParams } from 'umi';
import { Divider, Tabs } from 'antd';
import { useState } from 'react';
import JsonTree from './jsonTree/jsonTree';
import MD5 from './md5/md5';
import Cron from './cron/cron';
import Timestamp from './timestamp/timestamp';
import logo from '../../assets/images/logo.png';
import style from './style.less';
import NavLink from '@/components/navLink';

enum ToolType {
  jsonTree = 'jsonTree',
  md5 = 'md5',
  interface = 'interface',
  timestamp = 'timestamp',
  cron = 'cron',
}

export default () => {
  const { type = ToolType.jsonTree } = useParams<{
    type: string | undefined;
  }>();
  console.log(type);
  return (
    <>
      <Helmet>
        <title>在线工具 - 前端网</title>
        <meta
          name="keywords"
          content="web前端,在线工具，JSON格式化，MD5加密，时间戳转换,cron表达式生成"
        />
        <meta
          name="description"
          content="web前端在线工具，在线JSON格式化，在线MD5加密，在线时间戳转化，在线cron表达式生成，帮助您在线完成诸多工作.
          "
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
      <Tabs animated={false} centered activeKey={type}>
        <Tabs.TabPane
          tab={<NavLink to="/tools/jsonTree">JSON视图树</NavLink>}
          key={ToolType.jsonTree}
          tabKey={ToolType.jsonTree}
        >
          <JsonTree />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<NavLink to="/tools/md5">加密</NavLink>}
          key={ToolType.md5}
          tabKey={ToolType.md5}
        >
          <MD5 />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<NavLink to="/tools/timestamp">时间戳转换</NavLink>}
          key={ToolType.timestamp}
          tabKey={ToolType.timestamp}
        >
          <Timestamp />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<NavLink to="/tools/cron">Cron表达式生成</NavLink>}
          key={ToolType.cron}
          tabKey={ToolType.cron}
        >
          <Cron />
        </Tabs.TabPane>
      </Tabs>
      <Divider />
      <RowAd />
    </>
  );
};
