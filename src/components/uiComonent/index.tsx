import { UnorderedListOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { PhotoSlider } from 'react-photo-view';
import { dataType } from 'react-photo-view/dist/types';
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
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState<dataType[]>([]);
  const color = colors[props.color % colors.length];
  const imgUrl = props.image || '/static/images/components.jpg';

  return (
    <>
      <a
        target="_blank"
        rel="nofollow"
        href={props.github}
        className={styles.container}
      >
        <div className={styles.image} style={{ backgroundColor: color }}>
          <img
            onClick={(evt) => {
              setVisible(true);
              setImages([{ src: imgUrl }]);
              evt.preventDefault();
            }}
            alt={props.title + ', ' + props.category}
            src={imgUrl}
          />
        </div>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.category}>
          <UnorderedListOutlined /> {props.category}
        </p>
        <div className={styles.operation}>www.qianduan.shop</div>
      </a>
      <PhotoSlider
        images={images}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
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
