import React from "react";
import Sites from "./pages/sites";
import Resources from "./pages/resources";
import { HashRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import styles from "./app.less";
import "./common/baidu";
import noticeIcon from "./assets/images/notice.svg";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className={styles.header}>
          <h1 className={styles.title}>前端网</h1>
          <div className={styles.slogan}></div>
          <p className={styles.tip}>♡ 喜欢可以按 Ctrl+D 收藏哦!</p>
        </header>
        <nav className={styles.nav}>
          <Router>
            <NavLink isActive={(match, { pathname }) => { if (pathname === "/" || pathname === "/sites") return true; return false }} activeClassName={styles.active} to="/" className={styles.item}>网址导航</NavLink>
            {/* <NavLink activeClassName={styles.active} to="/solutions" className={styles.item}>解决方案</NavLink> */}
            <NavLink activeClassName={styles.active} to="/resources" className={styles.item}>学习资源</NavLink>
            {/* <NavLink activeClassName={styles.active} to="/resources" className={styles.item}>实用库</NavLink> */}
            {/* <NavLink activeClassName={styles.active} to="/aboutUs" className={styles.item}>关于我们</NavLink> */}
          </Router>
        </nav>
        <div className={styles.notice}>
          <img width={20} src={noticeIcon} />
          内容持续更新中！！！如遇链接打不开，可能需要科学上网工具！
        </div>

        <Router>
          <Switch>
            <Route exact path="/" component={Sites}></Route>
            <Route path="/sites" component={Sites}></Route>
            <Route path="/resources" component={Resources}></Route>
            <Route path="/aboutUs" component={Sites}></Route>
            <Route path="/solutions" component={Sites}></Route>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
