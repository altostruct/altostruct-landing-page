import Button from "@components/Button/Button";
import Topbar from "@components/Topbar/Topbar";
import React, { useEffect, useRef, useState } from "react";

import useTranslation from "../../hooks/useTranslation";
import { useRouter } from "next/router";

function ReachedOut() {
  const { t } = useTranslation();
  const { push } = useRouter();
  const [email, setEmail] = useState<string>();
  useEffect(() => {
    if (!email) setEmail(new URLSearchParams(location.search).get("email")!);

    setTimeout(() => {
      push("/");
    }, 2000);
  }, [email]);

  return (
    <div>
      <Topbar></Topbar>
      <div className="w-screen flex h-screen">
        <div className="m-auto w-8/12 text-center">
          <h1 className="text-4xl">
            {t(
              "Tack för ditt meddelande! Vi svarar till din mejladress ({{email}}) så snart vi kan. 🎈",
              { email }
            )}
          </h1>
          <div className="flex justify-center mt-10 w-full">
            <Button link="/">{t("Gå tillbaka")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReachedOut;
