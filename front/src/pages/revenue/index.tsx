/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-09 17:53:52
 */
import styles from './index.less';
import revenues from '../../../data/revenues';
import NavLink from '@/components/navLink';
import SiteHeader from '@/components/siteHeader';

export default function Blogs() {

  const records = revenues.map((item: any) => {
    return (
      <NavLink
        to={`/revenue/detail/${item.id}`}
        key={item.url || item.id}
        className={styles.category_list_item}
      >
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.tip}>
          来源: 本站 {'           '}
          时间: {item.date}
        </p>
      </NavLink>
    );
  });
  return (
    <>
      <SiteHeader
        title="技术变现，技术的目的是产生价值，如何变现才是根本。"
        keywords="技术变现，技术变现方式，技术变现渠道，变现优化"
        description="技术变现大全，教你如何变现，优化变现，实现持续的收入增长"
      />
      <div className={styles.content}>
        {records}
      </div>
    </>
  );
}
