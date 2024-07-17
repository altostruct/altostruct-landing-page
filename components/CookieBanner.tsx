import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Button from "./Button";


const CookieBanner = () => {
    const [show, setShow] = useState<Boolean>(Cookies.get("acceptedCookies") !== "true");

    const handleAcceptCookie = () => {
        Cookies.set("acceptedCookies", "true");
        setShow(false);
    }

    return (
        <>
            {show &&
                <div className="fixed bottom-[0vh] max-w-[40em] rounded-t-xl bg-white border-dashed border left-1/2 -translate-x-1/2  w-full p-3 z-50">
                    <div>
                        <div className="flex gap-10 items-center">
                            <div className="flex-1 text-sm ">
                                <p>Denna webbplats använder cookies för att förbättra användarupplevelsen.
                                    <span>
                                        <a target="_blank" href="/Privacy_policy.pdf">{" Läs mer!"}</a>
                                    </span>
                                </p>
                            </div>
                            <div className="flex-0">
                                <Button onClick={handleAcceptCookie} label="Jag förstår!" />
                            </div>
                        </div>
                    </div>
                </div>}
        </>)
}

export default CookieBanner;