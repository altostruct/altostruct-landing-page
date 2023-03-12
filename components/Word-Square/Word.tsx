/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import * as React from "react";
import style from "./Word.module.scss";

interface ButtonProps {
  children?: string;
  className?: string;
  type?: "primary" | "secondary" | "shiny";
  formAction?: "submit" | "reset";
  link?: string;
  openNewTab?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    type = "primary",
    className,
    formAction,
  } = props;

  return (
    <button
      type={formAction}
      className={classNames(
        className,
        style.button,
        style[type],
        "rounded-4xl"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
