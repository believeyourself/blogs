import style from "./index.less";
import blogs from "../../../data/blogs";

const rank = blogs.slice(blogs.length - 5, blogs.length);

function HotRank () {
  const listItems = rank.map((item: any, index:number) => {
    return (
      <a href={item.url} target="_blank" key={item.url} className={style.rank_item} rel="noreferrer">
        {index + 1}.{item.title}
      </a>
    );
  });
  return <div className={style.container}>
      <p className={style.title}>热门排行</p>
      <ul className={style.rank_list}>
        {listItems}
      </ul>
  </div>;
}

export default HotRank;
