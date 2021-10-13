import React from 'react';
import styles from './index.less';
import titleImg from '@/assets/images/aboutUs.jpg';
import SiteHeader from "@/components/siteHeader";
import {Button, message} from "antd";

export default class AboutUs extends React.Component {
  message: React.RefObject<HTMLTextAreaElement>;

  constructor(props:any){
    super(props);
    this.message = React.createRef<HTMLTextAreaElement>();
    this.sendMessage = this.sendMessage.bind(this);
  }

  async sendMessage(){
    if(this.message.current && this.message.current.value){
      (window as any)._hmt?.push(
        [
          '_trackEvent',
          'message',
          this.message.current?.value
        ]
      );
      this.message.current.value = "";
      message.success("感谢您的宝贵意见！");
    }else{
      message.error("留言内容不能为空");
    }
  }

  render() {
    return (
      <div className={styles.content}>
        <SiteHeader
          title="关于我们"
          keywords="前端网，web前端，vue，react，面试笔试，网址导航，教程资源，前端网"
          description="前端网，前端工具网址导航，在线工具，视屏教程和开源源码分享，一个免费的前端及node技术学习平台。"
         />
        <div className={styles.des}>
          <div className={styles.site}>
            <img src={titleImg} alt="html,js,css" />
            <p>
              前端网
              是分享前端开发教程，资料，文章的前端网站，每个前端学习者和WEB前端开发工程师的前端大学。
            </p>
            <p>我们要做web前端开发技术学习交流分享的专业前端网站！</p>
            <p>
              本站包括了HTML、CSS、Javascript、vue.js，react.js，angular.js等各种编程教程。同时本站中也提供了大量的在线实例，通过实例，您可以更好地学习如何编程开发。
            </p>
            <p>
              本站所有资源是完全免费的，并且会根据当前互联网的变化实时更新本站内容。同时本站内容如果有不足的地方，也欢迎广大编程爱好者留言提供意见。
            </p>
          </div>
        </div>
        <div className={styles.des}>
          <h3 className={styles.title}>关于每个栏目的内容说明：</h3>
          <p>网址导航：分享实用的学习网站，工具。</p>
          <p>教程资源：电子书，教学视频以及项目源码收集分享。</p>
          <p>优质好文：优秀博客收集分享。</p>
          <p>软件下载：常用开发软件下载。</p>
          <p>库分享：常用的功能库，效果库分享。</p>
        </div>
        <div className={styles.des}>
          <h3 className={styles.title}>联系我们：</h3>
          <p>
            如果您有什么好的建议或好的资源分享，可以联系我们
            <a href="mailto:farmerlzj@163.com">farmerlzj@163.com</a>.
          </p>
        </div>
        <div className={styles.des}>
          <h3 className={styles.title}>留言板：</h3>
          <textarea ref={this.message} rows={8} className={styles.input}></textarea>
          <Button onClick={this.sendMessage} type="primary" >留言</Button>
        </div>
      </div>
    );
  }
}
