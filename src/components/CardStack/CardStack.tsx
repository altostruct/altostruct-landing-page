import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import Swipe from "../../images/swipe.png";

import * as style from "./CardStack.module.scss";
import { graphql, useStaticQuery } from "gatsby";

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (i: number) => ({ x: 0, rot: 0 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

interface IProps {
  className?: string;
  cards: { title: string; description: string; image: string }[];
}

function CardStack(p: IProps) {
  const { cards, className } = p;
  const [showGesture, setShowGesture] = useState(true);

  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i: number) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          set((i) => to(i));
        }, 600);
    }
  );

  return (
    <>
      <div
        id={style["root"]}
        onMouseDown={() => {
          setShowGesture(false);
        }}
        onTouchMove={() => {
          setShowGesture(false);
        }}
        className={className}
      >
        {showGesture && (
          <img alt="swipehand" className={style.swipe} src={Swipe}></img>
        )}
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div
            key={i}
            style={{
              // TODO fix deprecated function
              transform: interpolate(
                [x, y],
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
                cursor: "grab",
              }}
              className="flex"
            >
              <div className={style.content}>
                <div className="flex">
                  <img
                    className="unselectable m-auto"
                    src={cards[i].image}
                    alt={cards[i].title}
                    style={{
                      height: "100%",
                      objectFit: "contain",
                    }}
                  ></img>
                </div>

                <p className="pb-1 unselectable font-mono">
                  {cards[i].description}
                </p>
              </div>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </>
  );
}

export default CardStack;
