import React from "react";
import styles from "./detail.less";
import { Link } from "react-router-dom";

function BlogDetail (props:any) {
  const id = props.match.params.id;
  const content = require(`../../../../data/blogs/${id}.md`);
  return <div className={styles.content}>
    <header>
    <Link className={styles.back} to="/"> 首页</Link> /
      <Link className={styles.back} to="/blogs"> 博客</Link>
    </header>
    <article dangerouslySetInnerHTML={{ __html: content.default }}></article>
  </div>;
}

export default BlogDetail;
