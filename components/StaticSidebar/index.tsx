import useTranslation from "hooks/useTranslation";
import Link from "next/link";

function StaticSidebar() {
  const { t } = useTranslation();

  return (
    <div className="rotate-90 bg-black backdrop-invert text-white text-xs origin-top-right flex fixed bottom-72 right-0 p-3 border-white border z-50">
      <img
        src="/images/icons/arrow-icon.svg"
        width="20"
        decoding="async"
        loading="lazy"
      ></img>
      <Link href={"/career"}>
        <p className="pl-2 backdrop-invert-0 text-right text-white ">
          {t("Är du vår nästa kollega?")}
        </p>
      </Link>
    </div>
  );
}

export default StaticSidebar;
