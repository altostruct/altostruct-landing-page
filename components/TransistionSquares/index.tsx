import classNames from "classnames";
import { PropsWithChildren } from "react";
import tailwindConfig from "tailwind.config";

interface ContentProps {
  color?: string
}


function TransitionSquares(props: ContentProps) {
  const {color} = props;
  var theme;
  const lightBg = tailwindConfig.theme.light;
  const darkBg = tailwindConfig.theme.dark;
  if (color == "grey") {
    theme = lightBg
    } else{
    theme = darkBg
    }
  return (
    <div
      className={"left-full"}>
      <div className={`flex place-content-end`}>
        <div className={`md:w-28 md:h-28 h-14 w-14 ${theme}`}></div>
      </div>
      <div className={`flex place-content-end md:pr-28 pr-14`}>
        <div className={`md:w-28 md:h-28 h-14 w-14 ${theme}`}></div>
      </div>
      
    </div>
  );
}




export default TransitionSquares;
