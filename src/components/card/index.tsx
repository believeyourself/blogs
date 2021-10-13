import style from "./index.less";
export default function Card (props: CardTypes) {
  return (
    <div className={`${style.card} ${props.className}`} onClick={props.onClick}>
      <a className={style.title} target="_blank" href={props.url} rel="nofollow">
        {props.title}
      </a>
      <p className={style.description}>{props.description}</p>
    </div>
  );
}
export interface CardTypes {
  title: string;
  description?: string;
  url?: string;
  className?: string;
  onClick?: any;
}
