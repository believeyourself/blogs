/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import React, { useState } from "react";
import styles from "./index.less";
import records from "../../../data/resource";
import Card from "@/components/card";
import { trackEvent } from "@/common/baidu";

const scrollToAnchor = (anchorName: string) => {
  if (anchorName) {
    trackEvent(["_trackEvent", "nav", "click", anchorName, ""]);
    // 找到锚点
    const anchorElement = document.getElementById(anchorName);
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }
};

export default function Resources () {
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
    let categoryList: any[] = [];
    const list:any[] = item.list || [];
    if (item.category === "PDF") {
      categoryList = list.map((pdf: any) => {
        return (
          <a
            className={styles.pdf}
            key={pdf.title}
            download
            href={`${window.origin}/${pdf.path}`}
          >
            {pdf.title}
          </a>
        );
      });

      resources.push(
        <React.Fragment key={item.id}>
          <p className={styles.category_title} id={item.id}>
            {item.category}
            <span className={styles.download_url}>
              下载缓慢？ 网盘下载：
              <a
                target="_blank"
                href="https://pan.baidu.com/s/1xvVf3FlyN0gPMxlZJvqnlw" rel="noreferrer"
              >
                https://pan.baidu.com/s/1xvVf3FlyN0gPMxlZJvqnlw
              </a>{" "}
              提取码：belf
            </span>
          </p>
          <section className={styles.category_list}>{categoryList}</section>
        </React.Fragment>
      );
    } else {
      const categoryList = list.map((item: any) => {
        return (
          <Card className={styles.category_list_item} key={item.title} {...item} />
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
    }
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
