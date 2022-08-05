import React, { ReactNode } from "react";

interface ThreeImagesProps {
  images: [ReactNode, ReactNode, ReactNode];
}

function ThreeImages(props: ThreeImagesProps) {
  const { images } = props;
  const [a, b, c] = images;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>{a}</div>
      <div>
        {b}
        {c}
      </div>
    </div>
  );
}

export default ThreeImages;
