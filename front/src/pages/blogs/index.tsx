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
import blogs from "../../../data/blogs";
import Card from "@/components/card";
import { trackEvent } from "@/common/baidu";

export default function (props: any) {
  let records = blogs.map((item: any) => {
    return (
      <div key={item.url} className={styles.category_list_item}>
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
      </div>
    );
  });
  return (
    <section className={styles.container}>
      <div className={styles.content}>{records}</div>
    </section>
  );
}
