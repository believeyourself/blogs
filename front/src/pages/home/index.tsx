/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-05-27 13:14:11
 */
import React, { useState } from "react";
import styles from "./index.less";
import records from "../../../data/data";
import Card from "../../components/card";

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
  const [active, setActive] = useState(0);
  let navs: any[] = [];
  let resources: any[] = [];
  records.forEach((item, index) => {
    navs.push(
      <li key={item.id} className={styles.nav_item}>
        <a
          className={index == active ? styles.active : ""}
          onClick={() => {
            setActive(index);
            scrollToAnchor(item.id);
          }}
        >
          {item.category}
        </a>
      </li>
    );
    let categoryList = item.sites.map((site: any) => {
      return (
        <Card className={styles.category_list_item} key={site.url} {...site} />
      );
    });
    resources.push(
      <React.Fragment key={item.id}>
        <p className={styles.category_title} id={item.id}>
          {item.category}
        </p>
        <section className={styles.category_list}>{categoryList}</section>
      </React.Fragment>
    );
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
