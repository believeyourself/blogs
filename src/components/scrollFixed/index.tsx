import { CSSProperties, useEffect, useState } from 'react';

export default function ScrollFixed(props: any) {
  const [needFixed, setNeedFixed] = useState(false);
  const styleObj: CSSProperties = {
    width: '100%',
    position: needFixed ? 'fixed' : 'relative',
    top: 0,
  };

  useEffect(() => {
    window.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 110 && !needFixed) {
        setNeedFixed(true);
      } else if(scrollTop <= 100) {
        setNeedFixed(false);
      }
    };
  }, []);
  return (
    <div className={props.className} style={styleObj}>
      {props.children}
    </div>
  );
}
