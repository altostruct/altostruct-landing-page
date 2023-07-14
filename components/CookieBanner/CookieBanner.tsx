import useTranslation from "hooks/useTranslation";
import styles from "./CookieBanner.module.scss"
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

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
        <div className={styles.background}>
          <div className={styles.container}>
            <div className={styles.textContainer}>
              <p>{t("Denna webbplats använder cookies för att förbättra användarupplevelsen.")}
              <br></br>
                <span style={{ marginLeft: "0.5rem" }}>
                  <a className={styles.link} target="_blank" href="/Privacy_policy.pdf">{t("Läs mer!")}</a>
                </span>
              </p>
            </div>
            <br className={styles.breakLine}></br>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleAcceptCookie}>
                {t("Jag förstår!")}
              </button>
            </div>
          </div>
        </div>

        : <></>}
    </>)
}

export default CookieBanner;