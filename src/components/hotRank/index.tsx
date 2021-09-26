import style from "./index.less";
import blogs from "../../../data/blogs";
import NavLink from "../navLink";

const rank = blogs.slice(0, 5);

function HotRank () {
  const listItems = rank.map((item: any, index:number) => {
    return (
      <NavLink to={`/blogs/detail/${item.id}`} key={item.id} className={style.rank_item} rel="nofollow">
        {index + 1}.{item.title}
      </NavLink>
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
