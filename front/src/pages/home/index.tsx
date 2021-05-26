import React from "react";
import styles from "./index.less";

export default function (props: any) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>前端网</h1>
        <p>聚合有值前端资源</p>
        <p>喜欢可以按Ctrl+D收藏哦</p>
      </header>
      <section>
        <div className={styles.nav}></div>
        <div className={styles.content}></div>
      </section>
    </React.Fragment>
  );
}
