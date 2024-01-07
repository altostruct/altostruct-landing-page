import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";


import Link from "next/link";
import Dropdown from "./Dropdown";



const AnimatedLine = (props: { expanded: boolean }) => {
  const { expanded } = props
  const [isExpanded, setIsExpanded] = React.useState(expanded)
  const ref = React.useRef<SVGLineElement>(null)



  if (ref.current) {
    const length = ref.current.getTotalLength();

    if (expanded) {
      ref.current.animate([{
        strokeDashoffset: 0
      }], { duration: 400, easing: "ease-out", iterations: 1, fill: "forwards" })
    } else {
      ref.current.animate([{
        strokeDashoffset: length
      }], { duration: 400, easing: "ease-out", iterations: 1, fill: "forwards" })
    }


  }




  return <svg className="left-0 bottom-0 absolute" width="100%" preserveAspectRatio="none" height="1px" viewBox="0 0 100 1" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line strokeDasharray={100} strokeDashoffset={100 + ""} ref={ref} x1="0" y1="0" x2="100" y2="0" stroke="black" />
  </svg>

}
const Topbar = (props: { transparent?: boolean; fixed?: boolean }) => {
  const { transparent = false, fixed = true } = props;
  const [expanded, setExpanded] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const threshold = 100;
  const [isAtTop, setIsAtTop] = React.useState(true);



  React.useEffect(() => {
    const onScoll = () => {
      if (window.scrollY > threshold) setIsAtTop(false);
      if (window.scrollY < threshold) setIsAtTop(true);
    };

    if (window.scrollY > threshold) setIsAtTop(false);

    window.addEventListener("scroll", () => {
      onScoll();
    });

    return window.removeEventListener("scroll", onScoll);
  }, []);

  React.useEffect(() => {
    if (!ref.current) return;
    if (expanded) {
      ref.current.className = "expandedHambuger";
    } else {
      ref.current.className = "notExpandedHambuger";
    }
  }, [expanded]);



  return (
    <>
      <header className="flex bg-white z-10 justify-between w-screen fixed top-0">
        <div className="m-auto max-w-[1048px] w-11/12 md:w-8/12 flex justify-between items-center  py-4">
          <Link href="/">
            <img src="/v2/alto_logo.png" width={60}></img>
          </Link>
          <div>
            {/* <GiHamburgerMenu /> */}
          </div>
          <AnimatedLine expanded={!isAtTop}></AnimatedLine>
        </div>

      </header >
    </>
  );
};

export default Topbar;
