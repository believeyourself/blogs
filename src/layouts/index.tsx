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
import Footer from '@/components/footer';
import { Helmet } from 'umi';
import ErrorBoundary from '@/components/ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
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
              exact={true}
              isActive={(match, { pathName }) => {
                console.log(match, pathName);
                return false;
              }}
              to={'/'}
              className={styles.item}
            >
              首页
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={'/resources'}
              className={styles.item}
            >
              教程
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={'/blogs'}
              className={styles.item}
            >
              博客
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={'/softwares'}
              className={styles.item}
            >
              软件
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={'/aboutUs'}
              className={styles.item}
            >
              关于
            </NavLink>
          </nav>
        </ScrollFixed>
        <div className={styles.content}>
          {this.props.children}
          <HotRank />
        </div>
        <Footer />
        <BackTop />
      </ErrorBoundary>
    );
  }
}

export default App;
