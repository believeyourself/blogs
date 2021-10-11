import style from './index.less';
import blogs from '../../../data/blogs';
import NavLink from '../navLink';
import { Tag } from 'antd';

const rank = blogs.slice(0, 5);

function HotRank() {
  const listItems = rank.map((item: any, index: number) => {
    return (
      <li key={item.id}>
        <NavLink
          to={`/blogs/detail/${item.id}`}
          className={style.rank_item}
          rel="nofollow"
        >
          {index + 1}.{item.title}
        </NavLink>
      </li>
    );
  });
  return (
    <div className={style.container}>
      <p className={style.title}>热门排行</p>
      <ul className={style.rank_list}>{listItems}</ul>
      <p className={style.title}>常用工具</p>
      <div className={style.tool_tags}>
        <Tag
          onClick={() => (window.location.href = '/tools')}
          className={style.tool_tag}
          color="blue"
        >
          JSON格式化
        </Tag>
        <Tag
          onClick={() => (window.location.href = '/tools')}
          className={style.tool_tag}
          color="cyan"
        >
          MD5
        </Tag>
        <Tag
          onClick={() => (window.location.href = '/tools')}
          className={style.tool_tag}
          color="error"
        >
          时间戳转换
        </Tag>
        <Tag
          onClick={() => (window.location.href = '/tools')}
          data-type="imageCompress"
          className={style.tool_tag}
          color="geekblue"
        >
          图片压缩
        </Tag>
      </div>
    </div>
  );
}

export default HotRank;
