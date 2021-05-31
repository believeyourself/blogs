/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-05-27 13:14:11
 */
import React from "react";
import styles from "./index.less";
import records from "../../../data/data";

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    // 找到锚点
    let anchorElement = document.getElementById(anchorName);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};

export default function (props: any) {
  let navs: any[] = [];
  let resources: any[] = [];
  records.forEach((item, index) => {
    navs.push(
      <li key={item.id} className={styles.nav_item}>
        <a
          className={index == 0 && styles.active}
          onClick={() => scrollToAnchor(item.id)}
        >
          {item.category}
        </a>
      </li>
    );
    resources.push([]);
  });
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1 className={styles.title}>前端网</h1>
        <div className={styles.slogan}></div>
        <p className={styles.tip}>♡ 喜欢可以按 Ctrl+D 收藏哦!</p>
      </header>
      <section className={styles.container}>
        <div className={styles.nav}>
          <ul>{navs}</ul>
        </div>
        <div className={styles.content}>{resources}</div>
      </section>
    </React.Fragment>
  );
}
