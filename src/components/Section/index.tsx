import classNames from "classnames";
import React, { ReactNode } from "react";
import * as style from "./style.module.scss";

interface SectionProps {
  children: ReactNode;
  dark?: boolean;
  backgroundImage?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
  position?: "left" | "right" | "center" | "full";
}

const Section = (props: SectionProps) => {
  const {
    children,
    className,
    style: _style,
    dark = false,
    backgroundImage,
    position = "left",
  } = props;
  return (
    <div
      className={classNames(
        style.section,
        {
          [style.dark]: dark,
        },
        className,
        "px-5 md:px-20 py-32"
      )}
      style={_style}
    >
      {backgroundImage && (
        <div
          className={classNames(style.backgroundImage, {
            [style[position]]: true,
          })}
        >
          {backgroundImage}
        </div>
      )}
      <div className={classNames(style.content, { [style[position]]: true })}>
        {children}
      </div>
    </div>
  );
};

export default Section;
