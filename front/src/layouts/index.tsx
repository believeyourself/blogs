/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-06-15 10:38:48
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:54:56
 */
import React, { ChangeEvent } from 'react';
import HotRank from '@/components/hotRank';
import NavLink from '@/components/navLink';
import styles from './index.less';
import logo from '@/assets/images/logo.png';
import { BackTop,Button } from 'antd';
import ScrollFixed from '@/components/scrollFixed';
import Footer from '@/components/footer';
import ErrorBoundary from '@/components/ErrorBoundary';

const EngineURL:Record<string,string> = {
  google:"https://www.google.com/search?q=",
  bandu:"https://www.baidu.com/s?ie=UTF-8&wd=",
  bing:"https://cn.bing.com/search?q=",
  github:"https://github.com/search?q=",
  csdn:"https://so.csdn.net/so/search?q=",
  zhihu:"https://www.zhihu.com/search?type=content&q=",
  jianshu:"https://www.jianshu.com/search?page=1&type=note&q=",
}

type AppState = {
  engine: string,
  search: string
}

class App extends React.Component<any,AppState> {
  constructor(props:any){
    super(props);
  
    this.state = {
      engine: "google",
      search: ""
    }
    this.handleEngineChange = this.handleEngineChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleEngineChange(evt:ChangeEvent<HTMLSelectElement>){
    localStorage.setItem("default_engine",evt.target.value);
    this.setState({engine:evt.target.value});
  }

  handleSearch(){
    if(this.state.search){
      window.open(EngineURL[this.state.engine] + this.state.search);
    }
  }

  handleInput(evt: ChangeEvent<HTMLInputElement>){
    this.setState({search:evt.target.value})
  }

  componentDidMount(){
    const default_engine = localStorage.getItem("default_engine");
    if(default_engine){
      this.setState({engine:default_engine});
    }
  }

  render() {
    return (
      <ErrorBoundary>
        <header className={styles.header}>
          <img alt="前端网" className={styles.title} src={logo} />
          <div className={styles.search}>
            <select className={styles.engine} value={this.state.engine} onChange={this.handleEngineChange}>
              <option value="google">谷歌</option>
              <option value="baidu">百度</option>
              <option value="bing">必应</option>
              <option value="github">github</option>
              <option value="csdn">CSDN</option>
              <option value="jianshu">简书</option>
            </select>
            <input value={this.state.search} onChange={this.handleInput} className={styles.input} placeholder='设置为浏览器默认首页使用更便捷' />
            <Button onClick={this.handleSearch} type="ghost" className={styles.btn}>搜索</Button>
          </div>
        </header>
        <ScrollFixed>
          <nav className={styles.nav}>
            <NavLink
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
              to={'/solution'}
              className={styles.item}
            >
              方案
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={'/revenue'}
              className={styles.item}
            >
              变现
            </NavLink>
            <NavLink
              activeClassName={styles.active}
              to={'/softwares'}
              className={styles.item}
            >
              软件
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
