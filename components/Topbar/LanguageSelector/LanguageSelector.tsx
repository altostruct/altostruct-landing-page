import * as React from "react";
import styles from "./LanguageSelector.module.scss";
import swedishIcon from "./assets/swedishFlag.png";
import englishIcon from "./assets/usFlag.png";
import { useRouter } from "next/router";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import useTranslation from "hooks/useTranslation";

interface LanguageSelectorProps {
  expanded?: boolean;
  onSelect?: () => void;
}

interface Language {
  language: string;
  image: any;
  id: string;
}

interface LanguageInterface {
  [key: string]: Language;
}

const LanguageSelector = (props: LanguageSelectorProps) => {
  const { locale, locales } = useTranslation();
  const language = locale!;
  const { expanded, onSelect } = props;

  const iconMap: Record<string, StaticImageData> = {
    sv: swedishIcon,
    "en-US": englishIcon,
  };

  const selectableLanguages = locales!.filter((l) => l !== locale);

  if (expanded)
    return (
      <div className="flex h-48 justify-between gap-4">
        {locales!.map((selectableLanguage, index) => (
          <Link
            onClick={onSelect}
            key={index}
            href="/"
            locale={selectableLanguage}
          >
            <div className="w-12">
              <Image src={iconMap[selectableLanguage]} alt="Language icon" />
            </div>
          </Link>
        ))}
      </div>
    );

  return (
    <>
      <div className={styles.dropdown}>
        {!expanded && (
          <>
            <Image
              className={styles["front-icon"]}
              alt="Selected language"
              src={iconMap[language]}
            ></Image>
            <div className={styles["dropdown-content"]}>
              {selectableLanguages.map((selectableLanguage, index) => (
                <Link key={index} href="/" locale={selectableLanguage}>
                  <Image
                    className={styles["language-icon"]}
                    src={iconMap[selectableLanguage]}
                    alt="Language icon"
                  ></Image>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LanguageSelector;
