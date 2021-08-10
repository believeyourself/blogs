import React, { CSSProperties, useEffect, useState } from "react";

export default function ScrollFixed (props:any) {
  const [needFixed, setNeedFixed] = useState(false);
  const styleObj: CSSProperties = {
    width: "100%",
    position: needFixed ? "fixed" : "relative",
    top: 0
  };

  useEffect(() => {
    window.onscroll = function () {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 100 && !needFixed) {
        setNeedFixed(true);
      } else {
        setNeedFixed(false);
      }
    };
  }, []);

  return <div className={props.className} style={styleObj}>
    {props.children}
  </div>;
}
