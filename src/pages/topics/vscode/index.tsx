/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import styles from './index.less';
import SiteHeader from '@/components/siteHeader';
import { Card as AntCard, Space, Alert } from 'antd';
import SideAd from '@/components/sideAd';
import source from '../../../../data/topics/vscode';
import Card from '@/components/card';
import NavLink from '@/components/navLink';

export default function Resources() {
  return (
    <>
      <SiteHeader
        title="VS code必备前端插件，你值得拥有！"
        keywords="前端，IDE,VS code"
        description="React文档、教程、开源项目,组件，助力学习掌握React,提升React开发效率"
      />
      <SideAd />
      <Space direction="vertical" className={styles.content}>
        <Alert
          message={
            <p>
              vscode必备前端插件，你值得拥有！
              <NavLink target="_blank" to="/aboutUs">
                留言
              </NavLink>
              推荐收录新插件
            </p>
          }
          closable
          type="success"
        />
        <AntCard>
          <div className={styles.doc}></div>
        </AntCard>
      </Space>
    </>
  );
}
