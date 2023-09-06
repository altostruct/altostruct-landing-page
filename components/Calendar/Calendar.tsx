import { Ref, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./Calendar.module.css";
import { InlineWidget } from "react-calendly";


const DynamicPopupWidget = dynamic(() => import("react-calendly").then((module) => module.PopupButton), {
  ssr: false, // Ensure component is not rendered on the server-side
});

const Calendar = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setRootElement(document.getElementById('empty'));
  }, []);

  return (
    <>
    <div id="empty"></div>
      {rootElement ? <InlineWidget
          url="https://calendly.com/erik-rehn"
        /> : <div></div>}
    </>
  );
};

export default Calendar;
