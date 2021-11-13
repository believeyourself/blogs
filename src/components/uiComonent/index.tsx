import { UnorderedListOutlined } from '@ant-design/icons';
import styles from './index.less';

const colors = [
  '#fb8228',
  '#2ab4ff',
  '#172027',
  '#3850e2',
  '#5d4236',
  '#d96a6a',
  '#3caab6',
];

export default (props: UIComponentProps) => {
  let color = colors[props.color % colors.length];

  return (
    <a
      target="_blank"
      rel="nofollow"
      href={props.github}
      className={styles.container}
    >
      <div className={styles.image} style={{ backgroundColor: color }}>
        <img
          alt={props.title + ', ' + props.category}
          src={props.image || '/static/images/components.jpg'}
        />
      </div>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.category}>
        <UnorderedListOutlined /> {props.category}
      </p>
      <div className={styles.operation}>www.qianduan.shop</div>
    </a>
  );
};

export type UIComponentProps = {
  title: string;
  description: string;
  category: string;
  image?: string;
  color: number;
  github: string;
};
