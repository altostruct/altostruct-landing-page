import React, { ReactNode, useEffect, useRef, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

interface StrokedSvgProps {
  children?: ReactNode;
}

function StrokedSvg(props: StrokedSvgProps) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || !visible) return;
    if (!ref.current?.childNodes[0]) return;
    const svg = ref.current?.childNodes[0] as SVGAElement;
    const path = svg.childNodes[0] as SVGPathElement;
    const length = path.getTotalLength() * 0.01;

    path.style.strokeDasharray = length + "px";
    path.style.strokeDashoffset = length + "px";
    path.style.fill = "transparent";
    path.style.stroke = "white";

    if (path.animate !== undefined) {
      path.animate(
        [
          {
            strokeDashoffset: length + "px",
          },
          {
            strokeDashoffset: "0px",
          },
        ],
        {
          duration: 3000,
          fill: "forwards",
        }
      );
    }
  }, [ref.current]);

  return (
    <ReactVisibilitySensor partialVisibility active>
      {({ isVisible }) => {
        if (isVisible) setVisible(isVisible);
        return (
          <>
            <div ref={ref} key="1">
              {children}
            </div>
          </>
        );
      }}
    </ReactVisibilitySensor>
  );
}

export default StrokedSvg;
