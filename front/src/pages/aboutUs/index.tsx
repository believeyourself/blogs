import React from "react";
import styles from "./index.less"
import tilteImg from "@/assets/images/aboutUs.jpg";

export default class AboutUs extends React.Component {
    render() {
        return <div className={styles.container}>
            <div className={styles.content}>
                <img src={tilteImg} />
                <div className={styles.description}>
                    <p>前端网 是分享自学前端开发教程，资料，文章的前端网站，每个前端学习者和WEB前端开发工程师的前端大学。</p>
                    <p>前端网 的 Slogan 为：聚合优质前端资源！</p>
                    <p>记住：再牛逼的梦想也抵不住傻逼似的坚持！</p>
                    <p>本站域名为 <a href="https://www.qianduan.shop" target="_blank">https://www.qianduan.shop</a>,我们要做web前端开发技术学习交流分享的专业前端网站！</p>
                    <p>本站包括了HTML、CSS、Javascript、vue.js，react.js，angular.js等各种编程教程。
                        同时本站中也提供了大量的在线实例，通过实例，您可以更好地学习如何编程开发。</p>
                    <p>本站致力于推广各种编程语言技术，所有资源是完全免费的，并且会根据当前互联网的变化实时更新本站内容。
                        同时本站内容如果有不足的地方，也欢迎广大编程爱好者在本站留言提供意见。</p>
                    <p>专注前端开发技术学习，资源分享，编程技术交流！</p>
                </div>
            </div>
        </div>;
    }
}