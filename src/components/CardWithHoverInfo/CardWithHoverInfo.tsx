import React, { useState } from "react";
import * as style2 from "./CardWithHoverInfo.module.scss";

interface CardWithHoverInfoProps {
  date: string;
  content: string;
  url: string;
}

const CardWithHoverInfo = (props: CardWithHoverInfoProps) => {
  const redirect = () => {
    //Opens url in new tab
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = props.url;
    a.click();
  };

  return (
    <div className={style2.card} onClick={redirect}>
      <div className={style2.container}>
        <div className={style2.background}></div>
        <div className={style2.content}>
          <div>
            <pre className={style2.date}>{props.date}</pre>
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithHoverInfo;
