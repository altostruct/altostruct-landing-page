/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import * as React from "react";
import style from "./Word.module.scss";
import useTranslation from "hooks/useTranslation";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary" | "shiny";
  formAction?: "submit" | "reset";
  link?: string;
  openNewTab?: boolean;
  color?: string;
  borderCircle?: boolean;
  filled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { children, borderCircle, filled, className, type = "primary" } = props;

  return (
    <span
      className={classNames(
        "whitespace-nowrap",
        style.circle,
        type === "primary" ? style.primaryColor : style.secondaryColor,
        borderCircle ? style.border : "",
        filled ? style.filled : "",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Button;
