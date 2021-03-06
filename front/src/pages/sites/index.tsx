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
import records from "../../../data/sites";
import Card from "@/components/card";

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    // _hmt.push(["_trackEvent", "nav", "click", anchorName, ""])
    // 找到锚点
    const anchorElement = document.getElementById(anchorName);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};

export default function Sites () {
  const [active, setActive] = useState(0);
  const navs: any[] = [];
  const resources: any[] = [];
  records.forEach((item, index) => {
    navs.push(
      <li key={item.id} className={styles.nav_item}>
        <a
          className={index === active ? styles.active : ""}
          onClick={() => {
            setActive(index);
            scrollToAnchor(item.id);
          }}
        >
          {item.category}
        </a>
      </li>
    );
    const categoryList = item.sites.map((site: any) => {
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
    <section className={styles.container}>
      <div className={styles.nav}>
        <ul>{navs}</ul>
      </div>
      <div className={styles.content}>{resources}</div>
    </section>
  );
}
