/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-06-15 10:38:48
 * @LastEditors: lzj
 * @LastEditTime: 2022-01-22 10:19:11
 */
import React from 'react';
import HotRank from '@/components/hotRank';
import NavLink from '@/components/navLink';
import styles from './index.less';
import logo from '@/assets/images/logo.png';
import { BackTop } from 'antd';
import ScrollFixed from '@/components/scrollFixed';
import Footer from '@/components/footer';
import ErrorBoundary from '@/components/ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <header className={styles.header}>
          <img alt="farmerLZJ" className={styles.title} src={logo} />
          {/* <div className={styles.slogan}></div> */}
        </header>
        <ScrollFixed>
          <nav className={styles.nav}>
            {/* <NavLink
              activeClassName={styles.active}
              exact={true}
              to={'/'}
              className={styles.item}
            >
              首页
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={'/sites'}
              className={styles.item}
            >
              网址
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={'/resources'}
              className={styles.item}
            >
              教程
            </NavLink> */}
            <NavLink
              activeClassName={styles.active}
              to={'/blogs'}
              className={styles.item}
            >
              Blog
            </NavLink>
            {/* <NavLink
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
            </NavLink> */ }
          </nav>
        </ScrollFixed>
        <div className={styles.content}>
          {this.props.children}
          {/* <HotRank /> */}
        </div>
        <BackTop />
      </ErrorBoundary>
    );
  }
}

export default App;
