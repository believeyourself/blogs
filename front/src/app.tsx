/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-06-15 10:38:48
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:54:56
 */
import React from "react";
import Sites from "@/pages/sites";
import Resources from "@/pages/resources";
import AboutUs from "@/pages/aboutUs";
import Blogs from "@/pages/blogs";
import BlogDetail from "@/pages/blogs/detail/detail";
import HotRank from "@/components/hotRank";
// import Effects from "@/pages/Effects";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import styles from "./app.less";
import "@/common/baidu";
import noticeIcon from "@/assets/images/notice.svg";
import logo from "@/assets/images/logo.png";
import blogs from "../data/blogs";
import sites from "../data/sites";

const rankBlogs = blogs.slice(0, 10);
const rankSite = sites[0].sites;

class App extends React.Component {
  render () {
    return (
      <div className={styles.site}>
        <header className={styles.header}>
          <img className={styles.title} src={logo} />
          <div className={styles.slogan}></div>
          <p className={styles.tip}>♡ 喜欢可以按 Ctrl+D 收藏哦!</p>
        </header>
        <nav className={styles.nav}>
          <Router>
            <NavLink
              isActive={(match, { pathname }) => {
                if (pathname === "/" || pathname === "/sites") return true;
                return false;
              }}
              activeClassName={styles.active}
              to="/"
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
              activeClassName={styles.active}
              to="/blogs"
              className={styles.item}
            >
              优质好文
            </NavLink>
            {/* <NavLink activeClassName={styles.active} to="/library" className={styles.item}>实用库</NavLink> */}
            {/* <NavLink activeClassName={styles.active} to="/effects" className={styles.item}>css效果</NavLink> */}
            {/* <NavLink activeClassName={styles.active} to="/interview" className={styles.item}>面试指南</NavLink> */}
            <NavLink activeClassName={styles.active} to="/aboutUs" className={styles.item}>关于我们</NavLink>
          </Router>
        </nav>
        <div className={styles.notice}>
          <img width={20} src={noticeIcon} />
          内容持续更新中！！！如遇链接打不开，可能需要科学上网工具！
        </div>
        <div className={styles.content}>
          <Router>
            <Switch>
              <Route exact path="/" component={Sites}></Route>
              <Route path="/sites" component={Sites}></Route>
              <Route path="/resources" component={Resources}></Route>
              <Route exact path="/blogs" component={Blogs}></Route>
              <Route path="/blogs/detail/:id" component={BlogDetail}></Route>
              {/* <Route path="/effects" component={Effects}></Route> */}
              <Route path="/aboutUs" component={AboutUs}></Route>
            </Switch>
            <div>
              <HotRank title="文章推荐" data={rankBlogs}/>
              <HotRank title="实用网址" data={rankSite}/>
            </div>
          </Router>
        </div>
        <footer className={styles.footer}>
        © 2021 <span className={styles.author}>famerlzj</span> 提供技术支持</footer>
      </div>
    );
  }
}

export default App;
