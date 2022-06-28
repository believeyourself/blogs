import './style.less';
import data from '../../../data/softwares';
import { Divider } from 'antd';
import React from 'react';

const softwares = data.pc.concat(data.mobile).sort((pre, next) => {
  return pre.date > next.date ? -1 : 1;
});

export default () => {
  const host = process.env.SITE_DOMAIN;
  const records = softwares.map((software) => {
    return (
      <React.Fragment key={software.id}>
        <div
          onClick={() => {
            window.location.href = `${host}/softwares/detail/${software.id}`;
          }}
          className="list_item"
        >
          <div
            className="img"
            style={{
              backgroundImage: `url("/static/softwares/${software.img}")`,
            }}
          ></div>
          <div className="list_item_content">
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
    <div className="software_container">
      <div className="content">{records}</div>
    </div>
  );
};
