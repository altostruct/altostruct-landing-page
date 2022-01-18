import React, { useEffect, useState } from "react";
import PaintImage from "./aboutTest.png";

interface ImageProps {
  paintImage: string;
}

function AboutImage() {
  const [image, setImage] = React.useState(PaintImage);
  return (
    <div>
      <img src={image} alt="Paint image" />
    </div>
  );
}

export default AboutImage;
