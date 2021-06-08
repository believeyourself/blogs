import React from "react";
import style from "./index.less";
export default function Card(props: CardTypes) {
  return (
    <div className={`${style.card} ${props.className}`}>
      <a className={style.title} target="_blank" href={props.url}>
        {props.title}
      </a>
      <p className={style.description}>{props.description}</p>
    </div>
  );
}
export interface CardTypes {
  title: string;
  description: string;
  url: string;
  className?: string;
}
