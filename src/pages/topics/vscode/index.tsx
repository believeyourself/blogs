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
import source from '../../../../data/topics/vscode';
import Card from '@/components/card';
import NavLink from '@/components/navLink';

const components = source.map((item: any) => {
  return (
    <Card key={item.title} title={item.title} description={item.description} />
  );
});

export default function Resources() {
  return (
    <>
      <SiteHeader
        title="VS Code 必备前端插件，你值得拥有！"
        keywords="前端，IDE,VS Code,插件"
        description="Visual Studio Code（简称“VS Code”）在前端开发的过程中必不可少，vscode作为代码编辑器，开源、免费、颜值高。更关键的是，丰富的插件，能够提高开发效率，你值得拥有。"
      />
      <Space direction="vertical" className={styles.content}>
        <Alert
          message={
            <p>
              VS Code 必备前端插件， 打开VS Code，点击插件图标（或 CTRL + SHIFT
              + X），在搜索框中输入“插件名”安装！
              <NavLink target="_blank" to="/aboutUs">
                留言
              </NavLink>
              推荐收录新插件。
            </p>
          }
          closable
          type="success"
        />
        <AntCard>
          <div className={styles.doc}>{components}</div>
        </AntCard>
      </Space>
    </>
  );
}
