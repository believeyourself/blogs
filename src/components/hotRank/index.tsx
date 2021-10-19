import style from './index.less';
import blogs from '../../../data/blogs';
import NavLink from '../navLink';
import { Divider, Tag } from 'antd';
import SquareAd from '../squareAd';

const rank = blogs.slice(0, 5);

function HotRank() {
  const host = process.env.SITE_DOMAIN
  const listItems = rank.map((item: any, index: number) => {
    return (
      <li key={item.id}>
        <NavLink
          to={`${host}/blogs/detail/${item.id}`}
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
          onClick={() => (window.location.href = host + '/tools')}
          className={style.tool_tag}
          color="blue"
        >
          JSON格式化
        </Tag>
        <Tag
          onClick={() => (window.location.href = host + '/tools/md5')}
          className={style.tool_tag}
          color="cyan"
        >
          MD5
        </Tag>
        <Tag
          onClick={() => (window.location.href = host + '/tools/timestamp')}
          className={style.tool_tag}
          color="error"
        >
          时间戳转换
        </Tag>
      </div>
      <Divider />
      <SquareAd />
    </div>
  );
}

export default HotRank;
