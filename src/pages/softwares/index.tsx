import style from './style.less';
import data from '../../../data/softwares';
import { Divider } from 'antd';
import React from 'react';
const softwares = data.pc.concat(data.mobile);

export default () => {
  const host = process.env.SITE_DOMAIN
  const records = softwares.map((software) => {
    return (
      <React.Fragment key={software.id}>
        <div
          onClick={() => {
            window.location.href = `${host}/softwares/detail/${software.id}`;
          }}
          className={style.list_item}
        >
          <div
            className={style.img}
            style={{
              backgroundImage: `url("/static/softwares/${software.img}")`,
            }}
          ></div>
          <div className={style.list_item_content}>
            <h2>{software.title}</h2>
            <p>{software.description}</p>
            <p>最近更新：{software.date}</p>
          </div>
        </div>
        <Divider />
      </React.Fragment>
    );
  });

  return (
    <div className={style.container}>
      <div className={style.content}>{records}</div>
    </div>
  );
};
