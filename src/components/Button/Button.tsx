import * as React from "react";
import * as style from "./Button.module.scss";

interface ButtonProps {
  children?: string;
  className?: string;
  type?: "primary" | "secondary" | "shiny";
  formAction?: "submit" | "reset";
  link?: string;
}

const Button = (props: ButtonProps) => {
  const { children, type = "primary", link, className, formAction } = props;

  const LinkWrapper = (cmp: JSX.Element) => {
    if (link) {
      return <a href={link}>{cmp}</a>;
    } else {
      return cmp;
    }
  };

  return LinkWrapper(
    <button
      type={formAction}
      className={[
        className,
        style.button,
        (() => {
          if (type === "primary") return style.primary;
          if (type === "secondary") return style.secondary;
          if (type === "shiny") return style.shiny;
        })(),
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;