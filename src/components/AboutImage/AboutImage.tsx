import DefaultImage1 from "../../images/aboutTest.png";
// import PaintImage1 from ""
import React, { useEffect, useState } from "react";

interface ImageProps {
  id: number;
}
function AboutImage(props: ImageProps) {
  var defaultImage = DefaultImage1;
  switch (props.id) {
    case 1:
      defaultImage = DefaultImage1;
  }

  var flipped = false;
  const [image, setImage] = React.useState(defaultImage);

  function imageClick() {
    if (flipped) {
      setImage(defaultImage);
      flipped = false;
    } else {
      setImage(null);
      flipped = true;
    }
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
