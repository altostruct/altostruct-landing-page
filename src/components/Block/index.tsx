import React from "react";
import { ReactNode } from "react";

interface BlockProps {
  children: ReactNode;
}

function Block(props: BlockProps) {
  const { children } = props;
  return <div>{children}</div>;
}

export default Block;
