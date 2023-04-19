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
}

const Button = (props: ButtonProps) => {
  const { children, color, borderCircle } = props;

  return (
    <span
      className={classNames(
        style.circle,
        props.type == "primary" ? style.secondaryColor : style.primaryColor,
        borderCircle ? style.border : ""
      )}
    >
      {children}
    </span>
  );
};

export default Button;
