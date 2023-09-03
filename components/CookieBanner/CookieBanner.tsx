import useTranslation from "hooks/useTranslation";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Button from "@components/Button/Button";


const CookieBanner = () => {

  const [show, setShow] = useState<Boolean>(false);
  const handleAcceptCookie = () => {
    Cookies.set("acceptedCookies", "true");
    setShow(false);
  }

  const { t } = useTranslation();


  useEffect(() => {
    const bool = Cookies.get("acceptedCookies");
    console.log(bool);

    if (bool !== "true") {
      setShow(true);
    }

  }, [])
  return (
    <>
      {show ?
        <div className="fixed bottom-[0vh] max-w-[40em] rounded-t-xl bg-[#161616] left-1/2 -translate-x-1/2  w-full p-3 z-50">
          <div>
            <div className="flex gap-10 items-center">
              <div className="flex-1 text-sm ">
                <p>{t("Denna webbplats använder cookies för att förbättra användarupplevelsen. ")}
                  <span>
                    <a target="_blank" href="/Privacy_policy.pdf">{t("Läs mer!")}</a>
                  </span>
                </p>
              </div>
              <div className="flex-0">
                <Button className="text-xs h-5" type="secondary" onClick={handleAcceptCookie}>
                  {t("Jag förstår!")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        : <></>}
    </>)
}

export default CookieBanner;
