import useTranslation from "hooks/useTranslation";
import Link from "next/link";

function StaticSidebar() {
  const { t } = useTranslation();

  return (
    <div className="rotate-90 text-white text-xs origin-top-right flex absolute md:bottom-80 bottom-72 right-5">
      <img
        src="/images/icons/arrow-icon.svg"
        width="20"
        decoding="async"
        loading="lazy"
      ></img>
      <Link href={"/career"}>
        <p className="pl-2 text-right text-white">
          {t("Är du vår nästa kollega?")}
        </p>
      </Link>
    </div>
  );
}

export default StaticSidebar;
