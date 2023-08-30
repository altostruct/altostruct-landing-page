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


const Underline = () => {
  return (
    <div className="border-t origin-bottom-left border-white scale-x-0 transition-all group-hover:scale-x-100"></div>
  );
};


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
          "bg-[#161616]": true,
          "bg-transparent": transparent,
          "border-black": transparent,
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
          <Link
            className={classNames(styles["button-spacing"], "group")}
            href={"/career"}
          >
            {t("Karriär")}
            <Underline></Underline>
          </Link>
          <div className={classNames(styles["button-spacing"], "group cursor-default relative")}>
            {t("Tjänster")}
            <div className="hidden group-hover:block right-0 pt-2 absolute">
              <div className=" w-96 bg-gray-800 p-2 rounded-md overflow-hidden">
                {getContentfulProducts().filter(word => word.sys.locale === "sv").map((product, index) => {
                  return <div className={"px-2 py-2"} key={index}>
                    <Link
                      href={`/services/${product.fields.slug}`}
                    >
                      <Fade delay={index * 100 + 50} >
                        {product.fields.name}
                      </Fade>

                    </Link>
                  </div>
                })}

              </div>

            </div>
          </div>
          <Link
            className={classNames(styles["button-spacing"], "group")}
            href={"/about"}
          >
            {t("Om oss")} <Underline></Underline>
          </Link>
          <Link
            className={classNames(styles["button-spacing"], "group")}
            href={"/blog"}
          >
            {t("Artiklar")}
            <Underline></Underline>
          </Link>

          <Dropdown title="Industrier" className={classNames(styles["button-spacing"])}>
            <Link
              className={classNames("group")}
              href={"/livsmedel"}
            >
              {t("Livsmedel")}
              <Underline></Underline>
            </Link>
            <Link
              className={classNames("group")}
              href={"/gaming"}
            >
              {t("Gaming")}
              <Underline></Underline>
            </Link>
            <Link
              className={classNames("group")}
              href={"/finans"}
            >
              {t("Finans")}
              <Underline></Underline>
            </Link>
            <Link
              className={classNames("group")}
              href={"/halsa"}
            >
              {t("hälsa")}
              <Underline></Underline>
            </Link>
          </Dropdown>

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
        <div className="md:hidden bg-[#292929] z-20 h-screen w-screen right-0 top-0 fixed flex">
          <div className="m-auto flex-col flex text-4xl max-h-96">
            <Fade delay={0}>
              <Link
                className="button-spacing text-white"
                href={"/"}
                onClick={() => setExpanded(!expanded)}
              >
                <div className="bg-red-200">

                  {t("Startsida")}
                </div>
              </Link>
            </Fade>
            <Fade delay={100}>
              <Link
                className="button-spacing text-white"
                href="/career"
                onClick={() => setExpanded(!expanded)}
              >
                {t("Karriär")}
              </Link>
            </Fade>
            <Fade delay={200}>
              <Link
                className="button-spacing text-white"
                href="/about"
                onClick={() => setExpanded(!expanded)}
              >
                {t("Om oss")}
              </Link>
            </Fade>
            <Fade delay={300}>
              <Link
                className="button-spacing text-white"
                href="/blog"
                onClick={() => setExpanded(!expanded)}
              >
                {t("Kunskapsbas")}
              </Link>
            </Fade>
            <Fade delay={400}>
              <div className="border-b my-3 text-white"></div>
            </Fade>
            <Fade delay={500}>
              <Link
                className="text-white"
                href={"/#kontakt"}
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