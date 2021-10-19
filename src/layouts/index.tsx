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
import NavLink from '@/components/navLink';
import styles from './index.less';
import logo from '@/assets/images/logo.png';
import { BackTop } from 'antd';
import ScrollFixed from '@/components/scrollFixed';
import Exception500 from '@/pages/exception/500';
import Footer from '@/components/footer';
import { Helmet } from '@/.umi/plugin-helmet/exports';

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
    const host = window.location.origin;
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <Exception500 />;
    }

    return (
      <div>
        <Helmet>
          {process.env.REACT_APP_ENV === 'production' && (
            <script
              data-ad-client="ca-pub-2087076429727327"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
          )}
        </Helmet>
        <header className={styles.header}>
          <img alt="前端网" className={styles.title} src={logo} />
          <div className={styles.slogan}></div>
        </header>
        <ScrollFixed>
          <nav className={styles.nav}>
            <NavLink
              activeClassName={styles.active}
              to={host + "/sites"}
              className={styles.item}
            >
              网址导航
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={host + "/resources"}
              className={styles.item}
            >
              源码教程
            </NavLink>
            <NavLink
              isActive={(match, { pathname }) => {
                if (pathname === '/' || pathname === '/blogs') return true;
                return false;
              }}
              activeClassName={styles.active}
              to={host + "/blogs"}
              className={styles.item}
            >
              博客随笔
            </NavLink>
            {/* <NavLink
              activeClassName={styles.active}
              to="/library"
              className={styles.item}
            >
              实用库
            </NavLink> */}
            {/* <NavLink activeClassName={styles.active} to="/effects" className={styles.item}>css效果</NavLink> */}
            <NavLink
              activeClassName={styles.active}
              to={host + "/softwares"}
              className={styles.item}
            >
              软件下载
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={host + "/aboutUs"}
              className={styles.item}
            >
              关于我们
            </NavLink>
          </nav>
        </ScrollFixed>
        <div className={styles.content}>
          {this.props.children}
          <HotRank />
        </div>
        <Footer />
        <BackTop />
      </div>
    );
  }
}

export default App;
