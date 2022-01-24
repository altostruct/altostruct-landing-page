import "./ImageFlip.scss";
import React, { useEffect, useState } from "react";

interface ImageProps {
  frontImage: string;
  backImage?: string;
  link?: string;
}
function ImageFlip(props: ImageProps) {
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);
  function flipImage() {
    if (props.backImage) {
      setIsFlipped(!isFlipped);
    }
  }
  return (
    <div className="image">
      <div
        className={"image-inner" + " " + (isFlipped ? "image-flip-front" : "")}
      >
        <div className="image-front">
          <a href={props.link}>
            <img
              className="presentation-image"
              src={props.frontImage}
              alt="Portrait image"
              onClick={flipImage}
            ></img>
          </a>
        </div>
        <div className="image-back">
          <img
            className="presentation-image"
            src={props.backImage}
            alt="Paint portrait image"
            onClick={flipImage}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default ImageFlip;
