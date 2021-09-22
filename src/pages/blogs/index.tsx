/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lizejun
 * @LastEditTime: 2021-06-15 10:55:30
 */
import styles from './index.less';
import blogs from '../../../data/blogs';
import NavLink from '@/components/navLink';

export default function Blogs() {
  const records = blogs.map((item: any) => {
    if (item.id) {
      return (
        <NavLink
          to={`/blogs/detail/${item.id}`}
          key={item.url || item.id}
          className={styles.category_list_item}
        >
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.description}>{item.description}</p>
        </NavLink>
      );
    } else {
      return (
        <a
          href={item.url}
          target="_blank"
          key={item.url || item.id}
          className={styles.category_list_item}
          rel="noreferrer"
        >
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.description}>{item.description}</p>
        </a>
      );
    }
  });
  return <div className={styles.content}>{records}</div>;
}
