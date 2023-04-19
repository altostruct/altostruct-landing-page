import classNames from "classnames";
import { PropsWithChildren } from "react";
import tailwindConfig from "tailwind.config";

function TransitionSquares(props: PropsWithChildren) {
  const { children } = props;
  const lightBg = tailwindConfig.theme.light;
  const darkBg = tailwindConfig.theme.dark;

  return (
    <div
      className={classNames(lightBg, "absolute left-full -translate-x-full")}>
      <div className={`flex place-content-end`}>
        <div className={`md:w-28 md:h-28 h-14 w-14 ${darkBg}`}></div>
      </div>
      <div className={`flex place-content-end md:pr-28 pr-14`}>
        <div className={`md:w-28 md:h-28 h-14 w-14 ${darkBg}`}></div>
      </div>
      <div className={`flex place-content-end ${lightBg}`}>
        <div className={`md:w-28 md:h-28 h-14 w-14 ${darkBg}`}></div>
      </div>
    </div>
  );
}

export default TransitionSquares;
