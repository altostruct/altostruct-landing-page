import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Calendar.module.css";

const DynamicPopupWidget = dynamic(() => import("react-calendly").then((module) => module.PopupButton), {
  ssr: false, // Ensure component is not rendered on the server-side
});

const Calendar = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("empty"));
  }, []);

  return (
    <>
    <div id="empty"></div>
    {rootElement ? <DynamicPopupWidget
          url="https://calendly.com/william-redgard"
          rootElement={rootElement}
          text="Schedule here!"
          className={styles.bookMeeting_button}
        /> : <div></div>}
    </>
  );
};

export default Calendar;
