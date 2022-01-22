// import PaintImage1 from ""
import React, { useEffect, useState } from "react";

interface ImageProps {
  frontImage: string;
  backImage: string;
}
function AboutImage(props: ImageProps) {
  const [isFlipped, setIsFlipped] = React.useState<boolean>(false);
  let image = props.frontImage;
  if (isFlipped) {
    image = props.backImage;
  }
  function imageClick() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div>
      <img
        className="presentation-image"
        src={image}
        alt="Paint image"
        onClick={imageClick}
      />
    </div>
  );
}

export default AboutImage;
