import * as React from "react";
import * as style from "./Button.module.scss";

interface ButtonProps {
  children?: string;
  className?: string;
  type?: "primary" | "secondary" | "shiny";
  formAction?: "submit" | "reset";
}

const Button = (props: ButtonProps) => {
  const { children, type = "primary", className, formAction } = props;

  return (
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
