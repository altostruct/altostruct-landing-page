import * as React from "react";
import "./Button.scss";

interface ButtonProps {
  children: any;
}

const Button = (props: ButtonProps) => {
  return <button className="button">{props.children}</button>;
};

export default Button;
