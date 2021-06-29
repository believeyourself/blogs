import React from "react";
import styles from "./index.less"
import tilteImg from "@/assets/images/aboutUs.jpg";

export default class AboutUs extends React.Component {
    render() {
        return <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.des}>
                    <div className={styles.site}>
                        <img src={tilteImg} />
                        <p>前端网 是分享自学前端开发教程，资料，文章的前端网站，每个前端学习者和WEB前端开发工程师的前端大学。</p>
                        <p>我们要做web前端开发技术学习交流分享的专业前端网站！</p>
                        <p>本站包括了HTML、CSS、Javascript、vue.js，react.js，angular.js等各种编程教程。同时本站中也提供了大量的在线实例，通过实例，您可以更好地学习如何编程开发。</p>
                        <p>本站所有资源是完全免费的，并且会根据当前互联网的变化实时更新本站内容。同时本站内容如果有不足的地方，也欢迎广大编程爱好者留言提供意见。</p>
                    </div>
                </div>
                <div className={styles.des}>
                    <h3 className={styles.title}>关于每个栏目的内容说明：</h3>
                    <p>网址导航：分享实用的学习网站，工具。</p>
                    <p>教程资源：电子书，教学视频以及项目源码收集分享。</p>
                    <p>优质好文：优秀博客收集分享。</p>
                    {/* <p>css效果：css实用技巧分享，通过简单的小例子帮助大家理解css的妙用。</p> */}
                </div>
                <div className={styles.des}>
                    <h3 className={styles.title}>联系我们：</h3>
                    <p>如果您有什么好的建议或好的资源分享，可以联系我们.</p>
                </div>
            </div>
        </div>
    }
}