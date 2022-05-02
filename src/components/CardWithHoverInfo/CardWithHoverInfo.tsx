import React, { useState } from 'react';
import * as style2 from './CardWithHoverInfo.module.scss';

interface CardWithHoverInfoProps {
  img: string;
  description: string;
}

const CardWithHoverInfo = (props: CardWithHoverInfoProps) => {
  const image_source = props.img;
  const title = props.description;

  return (
    <div className={style2.card}>
      <div className={style2.container}>
        <div className={style2.background}>
          <img className={style2.image} src={image_source} />
        </div>
        <div className={style2.description + ' tooltip'}>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};
export default CardWithHoverInfo;
