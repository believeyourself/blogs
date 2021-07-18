import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.less";
import blogs from "../../../data/blogs";

const rank = blogs.slice(0, 10);

function HotRank () {
  const listItems = rank.map((item: any, index:number) => {
    if (item.id) {
      return (
        <Link key={item.id} to={`/blogs/detail/${item.id}`} className={styles.rank_item} rel="noreferrer">
           {index + 1}.{item.title}
        </Link>
      );
    } else {
      return (
        <a href={item.url} target="_blank" key={item.url} className={styles.rank_item} rel="noreferrer">
          {index + 1}.{item.title}
        </a>
      );
    }
  });
  return <div className={styles.container}>
      <p className={styles.title}>热门排行</p>
      <ul className={styles.rank_list}>
        {listItems}
      </ul>
  </div>;
}

export default HotRank;
