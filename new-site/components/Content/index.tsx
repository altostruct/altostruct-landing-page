import React from "react";
import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

function Content(props: ContentProps) {
  const { children } = props;
  return (
    <div className="w-11/12 md:w-4/5 m-auto max-w-screen-2xl">{children}</div>
  );
}

export default Content;
