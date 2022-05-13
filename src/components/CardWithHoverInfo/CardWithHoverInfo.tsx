import React, { useState } from 'react';
import * as style2 from './CardWithHoverInfo.module.scss';

interface CardWithHoverInfoProps {
  date: string;
  content: string;
  url: string;
}

const CardWithHoverInfo = (props: CardWithHoverInfoProps) => {
  const redirect = () => {
    //Opens url in new tab
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = props.url;
    a.click();
  };

  return (
    <div className={style2.card} onClick={redirect}>
      <div className={style2.container}>
        <div className={style2.background}></div>
        <div className={style2.content}>
          <div>
            <h2 className={style2.date}>{props.date}</h2>
            <h2>{props.content}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithHoverInfo;
