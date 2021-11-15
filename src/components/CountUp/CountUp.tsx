import React, { useRef, useState } from "react";
import ReactCountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountUp = (props: {
  start: number;
  end: number;
  doneSuffix?: string;
}) => {
  const { start, end, doneSuffix = "" } = props;
  const [done, setDone] = useState<boolean>(false);

  return (
    <>
      <ReactCountUp
        duration={1}
        start={start}
        end={end}
        formattingFn={(value) => value + doneSuffix}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor
            onChange={(visible) => {
              if (!done && visible) {
                setDone(true);
                start();
              }
            }}
            delayedCall
          >
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </ReactCountUp>
    </>
  );
};
export default CountUp;
