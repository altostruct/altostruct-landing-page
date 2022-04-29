import * as React from "react";

import AnimatedLogo from "@components/AnimatedLogo";
import useTranslation from "../hooks/useTranslation";
import Icon from "@components/Icon";

function TVPage(props: any) {
  const { t } = useTranslation(props.location.pathname);
  return (
    <>
      <div style={{ position: "absolute", top: "-50%" }}>
        <Icon.Square className="top-image" />
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <AnimatedLogo scale={10} repeat />
      </div>
      <p
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {t(
          "Webbutvecklare i Stockholm med skräddarsydda lösningar för startups."
        )}
      </p>
    </>
  );
}

export default TVPage;
