/*
 * @Description:
 * @version:
 * @Author: lizejun
 * @Date: 2021-05-26 13:27:33
 * @LastEditors: lzj
 * @LastEditTime: 2021-12-09 17:53:52
 */
import './index.less';
import blogs from '../../../data/solution';
import NavLink from '@/components/navLink';
import SiteHeader from '@/components/siteHeader';
import { useState, useMemo } from 'react';

export default function Blogs() {
  const [tag, setTag] = useState<string | null>(null);
  const targetBlogs: any[] = useMemo(() => {
    return blogs.filter((blog: any) => {
      if (!tag) {
        return true;
      }
      return Array.isArray(blog.tags) && blog.tags.includes(tag);
    });
  }, [tag]);

  const records = targetBlogs.map((item: any) => {
    return (
      <NavLink
        to={`/solution/detail/${item.id}`}
        key={item.url || item.id}
        className="category_list_item"
      >
        <h4 className="title">{item.title}</h4>
        <p className="description">{item.description}</p>
        <p className="tip">时间: {item.date}</p>
      </NavLink>
    );
  });
  return (
    <>
      <SiteHeader
        title="解决方案 - 开发、部署、打包各个方面解决方案汇总"
        keywords="前端开发解决方案，前端部署方案，前端打包方案"
        description="各种前端开发解决方案，前端部署方案，前端打包方案介绍，给前端开发者开发实践提供参考."
      />
      <div className="solution_content">{records}</div>
    </>
  );
}
