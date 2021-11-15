import React, { useEffect, useState } from "react";
import Typist from "react-typist";

interface TextAnimationProps {
  children: string[];
  repeat?: boolean;
}

function TextAnimation(props: TextAnimationProps) {
  const { repeat = true, children } = props;
  const delay = 200;
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (repeat && done) {
      setDone(false);
    }
  }, [done]);

  return (
    <>
      <noscript>{children[0]}</noscript>

      {!done ? (
        <Typist
          onTypingDone={() => {
            setDone(true);
          }}
        >
          {children.map((child, index, list) => {
            const prevLength = child?.length;
            return [
              child,
              <Typist.Backspace count={prevLength} delay={delay} />,
            ];
          })}
        </Typist>
      ) : (
        <>&nbsp;</>
      )}
    </>
  );
}

export default TextAnimation;
