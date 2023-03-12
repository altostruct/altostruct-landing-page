import React from "react";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

function Content(props: ContentProps) {
  const { children } = props;
  return (
    <div className="w-11/12 md:w-11/12 m-auto">{children}</div>
  );
}

export default Content;
