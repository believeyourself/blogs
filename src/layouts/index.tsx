/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-06-15 10:38:48
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:54:56
 */
import React from 'react';
import HotRank from '@/components/hotRank';
import { NavLink } from 'react-router-dom';
import styles from './index.less';
import noticeIcon from '@/assets/images/notice.svg';
import logo from '@/assets/images/logo.png';
import { BackTop } from 'antd';
import ScrollFixed from '@/components/scrollFixed';
import Exception500 from '@/pages/exception/500';

class App extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log('UI ERROR:', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <Exception500 />;
    }

    return (
      <div>
        {/* <SiteHeader /> */}
        <header className={styles.header}>
          <img className={styles.title} src={logo} />
          <div className={styles.slogan}></div>
          <p className={styles.tip}>♡ 喜欢可以按 Ctrl+D 收藏哦!</p>
        </header>
        <ScrollFixed>
          <nav className={styles.nav}>
            <NavLink
              activeClassName={styles.active}
              to="/sites"
              className={styles.item}
            >
              网址导航
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to="/resources"
              className={styles.item}
            >
              教程资源
            </NavLink>
            <NavLink
              isActive={(match, { pathname }) => {
                if (pathname === '/' || pathname === '/blogs') return true;
                return false;
              }}
              activeClassName={styles.active}
              to="/blogs"
              className={styles.item}
            >
              优质好文
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to="/library"
              className={styles.item}
            >
              实用库
            </NavLink>
            {/* <NavLink activeClassName={styles.active} to="/effects" className={styles.item}>css效果</NavLink> */}
            <NavLink
              activeClassName={styles.active}
              to="/aboutUs"
              className={styles.item}
            >
              关于我们
            </NavLink>
          </nav>
        </ScrollFixed>
        <div className={styles.notice}>
          <img width={20} src={noticeIcon} />
          内容持续更新中！！！如遇链接打不开，可能需要科学上网工具！
        </div>
        <div className={styles.content}>
          {this.props.children}
          <HotRank />
        </div>
        <BackTop />
      </div>
    );
  }
}

export default App;
