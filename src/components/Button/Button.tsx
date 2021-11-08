import * as React from "react";
import * as style from "./Button.module.scss";

interface ButtonProps {
  children?: string;
  className?: string;
  type?: "primary" | "secondary" | "shiny";
}

const Button = (props: ButtonProps) => {
  const { children, type = "primary", className } = props;

  return (
    <button
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
