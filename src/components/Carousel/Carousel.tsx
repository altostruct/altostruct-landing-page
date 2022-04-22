import React, { useState } from "react";
import * as style from "./Carousel.module.scss";
import { Transition } from "react-transition-group";

interface CarouselChildProps {
  children: JSX.Element | JSX.Element[];
}

function CarouselChild(props: CarouselChildProps) {
  const { children } = props;
  return <div className={style.child}>{children}</div>;
}

interface CarouselProps {
  children: JSX.Element | JSX.Element[];
}

function Carousel(props: CarouselProps) {
  const { children } = props;
  const [index, setIndex] = useState<number>(0);
  const l = (children as JSX.Element[]).length || 1;

  return (
    <div className={style.wrapper}>
      <div className={style.carousel}>
        <Transition addEndListener={() => {}} in ontimeout={100}>
          {(props) => {
            const offset = props === "entered" ? index : index - 1;
            return (
              <div
                style={{
                  transition: "all 0.4s",
                  transform: `translate(calc(-100% / ${l} * ${offset}), 0)`,
                }}
                className={style.children}
              >
                {children}
              </div>
            );
          }}
        </Transition>
        <div className={style.arrows}>
          <button onClick={() => setIndex((index - 1 + l) % l)}>&#60;</button>
          <button onClick={() => setIndex((index + 1) % l)}>&#62;</button>
        </div>
      </div>
    </div>
  );
}

export default Object.assign(Carousel, { CarouselChild });
