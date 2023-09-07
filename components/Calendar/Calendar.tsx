import { useEffect, useState } from "react";
import styles from "./Calendar.module.css";
import useTranslation from "hooks/useTranslation";
import { PopupModal } from "react-calendly";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const { t } = useTranslation();
  useEffect(() => {
    setRootElement(document.getElementById("__next"));
  }, []);

  return (
    <>
      <button
        style={{ display: "block", margin: "0" }}
        onClick={() => { setIsOpen(true) }}
        className={styles.bookMeeting_button}
      >
        Book a meeting!
      </button>
      {rootElement ? <PopupModal
        url="https://calendly.com/erik-rehn"
        rootElement={rootElement}
        onModalClose={() => setIsOpen(false)} open={isOpen} /> : <></>}
    </>
  );
};

export default Calendar;