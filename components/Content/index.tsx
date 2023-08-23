import classNames from "classnames";
import React from "react";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
  className?: string;
}

function Content(props: ContentProps) {
  const { children, className } = props;
  return (
    <div
      className={classNames("w-11/12 md:w-10/12 m-auto", className)}
      style={{ maxWidth: "1400px" }}
    >
      {children}
    </div>
  );
}

export default Content;
