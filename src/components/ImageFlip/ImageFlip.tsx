import "./imageFlip.scss";
import React, { useEffect, useState } from "react";

interface ImageProps {
  frontImage: string;
  backImage: string;
}
function ImageFlip(props: ImageProps) {
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);
  let image = props.frontImage;
  function flipImage() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div className="image">
      <div
        className={"image-inner" + " " + (isFlipped ? "image-flip-front" : "")}
      >
        <div className="image-front">
          <img
            className="presentation-image"
            src={props.frontImage}
            alt="Portrait image"
            onClick={flipImage}
          ></img>
        </div>
        <div className="image-back">
          <img
            className="presentation-image"
            src={props.backImage}
            alt="Portrait image"
            onClick={flipImage}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ImageFlip;
