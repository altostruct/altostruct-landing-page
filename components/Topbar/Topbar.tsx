import * as React from "react";
import styles from "./Topbar.module.scss";

//@ts-ignore
import Fade from "react-reveal/Fade";

import classNames from "classnames";
// import LanguageSelector from "./LanguageSelector/LanguageSelector";

import Link from "next/link";
import Brand from "components/Brand/Brand";
import LanguageSelector from "./LanguageSelector/LanguageSelector";
import useTranslation from "hooks/useTranslation";
import { getContentfulProducts } from "utils/contentful";
import Dropdown from "./Dropdown";
import ml from 'components/Topbar/icons/ml.svg'

// export const Underline = () => {
//   return (
//     <div className="border-t origin-bottom-left border-red-400 scale-x-0 transition-all group-hover:scale-x-100"></div>
//   );
// };


const Topbar = (props: { transparent?: boolean; fixed?: boolean }) => {
  const { transparent = false, fixed = true } = props;
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState(false);
  const [industries, setIndustries] = React.useState(false);

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
      <header
        className={classNames(styles.topbar, {
          "bg-[#161616]": !isAtTop,
          "bg-transparent": isAtTop,
          fixed: fixed,
          absolute: !fixed,
        })}
      >

        <nav style={{ float: "right" }}>
          <Link href={"/"}>
            <Brand />
          </Link>
        </nav>




        <nav className="hidden md:flex invisible md:visible ">



          <Dropdown icon={<svg className="rotate-180" width="8px" height="8px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#c3eec3" d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z" /></svg>}
          title="Tjänster" className={classNames(styles["button-spacing"], "text-lg")}>
          {getContentfulProducts().map(v=>{
            return <div className="flex">
            <svg className="rotate-90 mt-[7px] mr-2" width="8px" height="8px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#c3eec3" d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z" /></svg>
            <Link
              className={classNames("group")}
              href={"/services/"+v.fields.slug}
            >
              {v.fields.name}
            </Link>
            </div>
          })}

              
            
          </Dropdown>

          <Dropdown 
            // id={styles["industry-tab"]} icon={
            //   <div id={styles["industry-animations"]}  className="relative">
            //     <svg id={styles["industry-cloud"]} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //       <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            //     </svg>
            //     <svg id={styles["industry-cloud"]}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //       <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            //     </svg>
            //     <svg id={styles["industry-cloud"]}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //       <path d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            //     </svg>
            //     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //       <path id={styles["industry-icon"]} d="M7 16H8M11.5 16H12.5M16 16H17M18.4 20H5.6C5.03995 20 4.75992 20 4.54601 19.891C4.35785 19.7951 4.20487 19.6422 4.10899 19.454C4 19.2401 4 18.9601 4 18.4V4.8C4 4.51997 4 4.37996 4.0545 4.273C4.10243 4.17892 4.17892 4.10243 4.273 4.0545C4.37996 4 4.51997 4 4.8 4H7.2C7.48003 4 7.62004 4 7.727 4.0545C7.82108 4.10243 7.89757 4.17892 7.9455 4.273C8 4.37996 8 4.51997 8 4.8V9.06863C8 9.67445 8 9.97735 8.1198 10.1176C8.22374 10.2393 8.37967 10.3039 8.53923 10.2914C8.72312 10.2769 8.93731 10.0627 9.36569 9.63431L12.6343 6.36569C13.0627 5.93731 13.2769 5.72312 13.4608 5.70865C13.6203 5.69609 13.7763 5.76068 13.8802 5.88238C14 6.02265 14 6.32556 14 6.93137V9.06863C14 9.67445 14 9.97735 14.1198 10.1176C14.2237 10.2393 14.3797 10.3039 14.5392 10.2914C14.7231 10.2769 14.9373 10.0627 15.3657 9.63431L18.6343 6.36569C19.0627 5.93731 19.2769 5.72312 19.4608 5.70865C19.6203 5.69609 19.7763 5.76068 19.8802 5.88238C20 6.02265 20 6.32556 20 6.93137V18.4C20 18.9601 20 19.2401 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.2401 20 18.9601 20 18.4 20Z" stroke="white" stroke-width="1" stroke-linecap="round" />
            //     </svg>
            // </div>
            // } 
            icon={<svg className="rotate-180" width="8px" height="8px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#c3eec3" d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z" /></svg>}
            title="Industrier" className={classNames(styles["button-spacing"], "text-lg")}>
            <div className="flex">
            <svg className="rotate-90 mt-[7px] mr-2" width="8px" height="8px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#c3eec3" d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z" /></svg>
              <Link
                className={classNames("group")}
                href={"/livsmedel"}
              >
                {t("Livsmedel")}
              </Link>
            </div>

            <div className="flex">
              <svg className="rotate-90 mt-[7px] mr-2" width="8px" height="8px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#c3eec3" d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z" /></svg>
              <Link
                className={classNames("group")}
                href={"/gaming"}
              >
                {t("Underhållning")}
              </Link>
            </div>

            <div className="flex">
              <svg className="rotate-90 mt-[7px] mr-2" width="8px" height="8px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#c3eec3" d="M8 1.25a2.101 2.101 0 00-1.785.996l.64.392-.642-.388-5.675 9.373-.006.01a2.065 2.065 0 00.751 2.832c.314.183.67.281 1.034.285h11.366a2.101 2.101 0 001.791-1.045 2.064 2.064 0 00-.006-2.072L9.788 2.25l-.003-.004A2.084 2.084 0 008 1.25z" /></svg>
              <Link
                className={classNames("group")}
                href={"/halsa"}
              >
                {t("Hälsa")}
              </Link>
            </div>
          </Dropdown>


          <Link
            className={classNames(styles["button-spacing"], "group", "text-lg")}
            href={"/blog"}
          >
            {t("Artiklar")}
            {/* <Underline></Underline> */}
          </Link>

          <Link
            className={classNames(styles["button-spacing"], "group", "text-lg")}
            href={"/about"}
          >
            {t("Om oss")} 
            {/* <Underline></Underline>*/}
          </Link> 

          {/*<LanguageSelector></LanguageSelector>*/}
        </nav>

        <nav
          className="flex md:hidden text-xl cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div ref={ref}>
            <svg viewBox="0 0 100 100" width="20" height="20">
              <rect
                className="stroke-1	fill-white"
                y="0"
                width="100"
                height="20"
              ></rect>
              <rect
                className="stroke-1	fill-white"
                y="40"
                width="100"
                height="20"
              ></rect>
              <rect
                className="stroke-1	fill-white"
                y="80"
                width="100"
                height="20"
              ></rect>
            </svg>
          </div>
        </nav>
      </header>

      {expanded && (
        <div className="md:hidden bg-[#292929] z-20 h-screen w-screen right-0 top-0 fixed flex text-lg">
          <div className="mx-4 my-32 gap-2 flex-col flex text-4xl max-h-96">
            <Fade delay={100}>
              <Link
                className="button-spacing text-white"
                href="/about"
                onClick={() => setExpanded(!expanded)}
              >
                {t("Om oss")}
              </Link>
            </Fade>
            <Fade delay={200}>
              <Link
                className="button-spacing text-white"
                href="/blog"
                onClick={() => setExpanded(!expanded)}
              >
                {t("Artiklar")}
              </Link>
            </Fade>

            <div className="">
              <Fade delay={300}>
                <p className="text-gray-white text-4xl font-bold"> Industrier </p>
              </Fade>

              <Fade delay={400}>
                <Link
                  className="text-white text-3xl pl-4"
                  href={"/livsmedel"}
                  onClick={() => setExpanded(!expanded)}
                >
                  - Livsmedel
                </Link>
              </Fade>
              <Fade delay={500}>
                <Link
                  className="text-white text-3xl pl-4"
                  href={"/gaming"}
                  onClick={() => setExpanded(!expanded)}
                >
                  - Underhållning
                </Link>
              </Fade>

              <Fade delay={600}>
                <Link
                  className="text-white text-3xl pl-4"
                  href={"/halsa"}
                  onClick={() => setExpanded(!expanded)}
                >
                  - Hälsa
                </Link>
              </Fade>

            </div>


            <div className="">
              <Fade delay={700}>
                <p className="text-white text-4xl font-bold"> Tjänster </p>
              </Fade>

              <Fade delay={800}>
                <Link
                  className="text-white text-3xl pl-4"
                  href={"/services/ai"}
                  onClick={() => setExpanded(!expanded)}
                >
                  - AWS Machine learning
                </Link>
              </Fade>

              <Fade delay={900}>
                <Link
                  className="text-white text-3xl pl-4"
                  href={"/services/aws"}
                  onClick={() => setExpanded(!expanded)}
                >
                  - AWS Optimering
                </Link>
              </Fade>



            </div>

            <Fade delay={1000}>
              <div className="border-b my-3 text-white"></div>
            </Fade>

            <Fade delay={1100}>
              <Link
                className="text-white"
                href={"/contact"}
                onClick={() => setExpanded(!expanded)}
              >
                {t("Kontakta oss")}
              </Link>
            </Fade>

            {/* <Fade delay={600}>
              <div className="mx-10 h-36 md:m-10">
                <LanguageSelector
                  onSelect={() => setExpanded(false)}
                  expanded
                ></LanguageSelector>
              </div>
            </Fade> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
