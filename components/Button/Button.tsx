/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import Link from "next/link";
import * as React from "react";
import style from "./Button.module.scss";

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
    openNewTab,
    type = "primary",
    link,
    className,
    formAction,
  } = props;

  const LinkWrapper = (cmp: JSX.Element) => {
    if (link) {
      return (
        <Link target={openNewTab ? "_blank" : undefined} href={link}>
          {cmp}
        </Link>
      );
    } else {
      return cmp;
    }
  };

  return LinkWrapper(
    <button
      type={formAction}
      className={classNames(
        className,
        style.button,
        style[type],
        "rounded-3xl"
      )}
    >
      {children} {">"}
    </button>
  );
};

export default Button;
