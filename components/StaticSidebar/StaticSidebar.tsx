import useTranslation from "hooks/useTranslation";
import Link from "next/link";
import style from "./StaticSidebar.module.scss";

function StaticSidebar() {
  const { t } = useTranslation();

  return (
    <div>
      <Link href={"/career"}>
        <div className={style.rotate}>
          <img
            src="/images/icons/arrow-icon.svg"
            width="20"
            decoding="async"
            loading="lazy"
            alt="small-arrow"
          ></img>
          <p className="pl-2 text-right text-white text-xs">
            {t("Är du vår nästa kollega?")}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default StaticSidebar;
