import classNames from "classnames";
import React, { ReactNode } from "react";
import * as style from "./style.module.scss";

interface SectionProps {
  children: ReactNode;
  dark?: boolean;
  backgroundImage?: ReactNode;
  bottomImage?: ReactNode;
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
    bottomImage,
    position = "left",
  } = props;

  console.log("bottomImage", bottomImage);
  return (
    <div
      className={classNames(
        style.section,
        {
          [style.dark]: dark,
          [style.light]: !dark,
        },
        className
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
        {bottomImage && (
          <div className={classNames(style.bottomImage, {})}>{bottomImage}</div>
        )}
      </div>
    </div>
  );
};

export default Section;
