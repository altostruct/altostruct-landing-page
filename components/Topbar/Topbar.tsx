import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";


import Link from "next/link";
import Dropdown from "./Dropdown";
import Image from "next-image-export-optimizer";
import classNames from "classnames";


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

function Hamburger(props: { expanded: boolean, onClick: () => void }) {
  const { expanded, onClick } = props

  return <svg  onClick={onClick} className="cursor-pointer w-6 " width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* <path d="M10 34H38M10 24H38M10 14H38" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> */}
    {/* <path className={classNames("transition-all origin-center",{
      "-rotate-45": expanded,
    })} d="M2 34H48 " stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /> */}
    
    <path className={classNames("origin-bottom-right bg-blue-700 transition-all",{
      "scale-x-[141.1%] rotate-45": expanded,
      "-translate-y-1": !expanded,
    })}
  d="M6 50H44" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  
    <path  className={classNames(" transition-all",{
      "opacity-0": expanded,
    })} d="M6 24H44" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />

    <path className={classNames("origin-top-right bg-blue-700 transition-all",{
      "scale-x-[141.1%] -rotate-45": expanded,
      "translate-y-1": !expanded,
    })}
  d="M6 0H44" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
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
     {expanded && <div className="flex h-screen fixed z-10 w-screen bg-white top-0 left-0">
          <div className="m-auto cursor-pointer text-6xl text-center flex flex-col gap-4">
            <a href="/positions">
              <p className="hover:underline">Jobba hos oss</p>
            </a>
            <a href="/blog">
              <p className="hover:underline">Kunskapsbas</p>
            </a>
            <a href="/contact">
              <p className="hover:underline">Kontakt</p>
            </a>
          </div>
      </div>}
      <header className="flex z-10 bg-white justify-between w-screen fixed top-0">
        <div className="m-auto max-w-[1048px] w-11/12 md:w-8/12 flex justify-between items-center  py-4">
          <Link href="/" className="w-16">
            <Image placeholder="empty" fetchPriority="high" className="w-full max-w-full max-h-full" alt="logo" src="/images/v2/alto_logo.png" width={64} height={64} />
          </Link>
          <div>
           
            <Hamburger expanded={expanded} onClick={() => setExpanded(!expanded)} />
          </div>
          <AnimatedLine expanded={!expanded && !isAtTop}></AnimatedLine>
        </div>
      </header >
     
    </>
  );
};

export default Topbar;
