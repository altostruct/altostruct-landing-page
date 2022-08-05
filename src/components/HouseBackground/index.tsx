import React, { ReactNode } from "react";
import svg from "./newHouse.svg";

interface HouseBackgroundProps {
  children: ReactNode;
}

function HouseBackground(props: HouseBackgroundProps) {
  const { children } = props;

  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
        }}
      >
        <img src={svg}></img>
      </div>

      <div style={{ zIndex: 0 }}>{children}</div>
    </>
  );
}

export default HouseBackground;
