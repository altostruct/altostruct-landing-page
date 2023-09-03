/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import Link from "next/link";
import * as React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children?: string;
  title?: string;
  className?: string;
  type?: "primary" | "secondary" | "shiny";
  formAction?: "submit" | "reset";
  link?: string;
  openNewTab?: boolean;
  onClick?: VoidFunction;
  icon?: React.ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    children,
    openNewTab,
    onClick,
    type = "primary",
    link,
    className,
    formAction,
    icon,
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
      onClick={onClick}
      className={classNames(
        style.button,
        style[type],
        "font-black",
        className,
      )}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
