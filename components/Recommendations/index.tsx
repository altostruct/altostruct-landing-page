import Cite from "@components/Cite";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import { useRef, useState } from "react";

function Recommendations() {
  const { t } = useTranslation();
  const [visibleCitation, setVisibleCitation] = useState(0);

  const refCite1 = useRef<HTMLDivElement>(null);
  const refCite2 = useRef<HTMLDivElement>(null);

  const refs = [
    {
      author: "Peter Vesterberg / CEO Inference Labs AB",
      text: t("Med hjälp av Altostruct har vi kunnat utveckla vår lösning med hjälp av en svensk molnleverantör som har en hög grad av säkerhet, tillförlitlighet och regelefterlevnad."),
    },
    {
      author: "Erik Strandin Pers / Founder Foodfacts",
      text: t("Vi har samarbetat med Altostruct i två år. De har hjälpt oss med allting från infrastruktur till apputveckling för att bygga en skalbar och modern lösning."),
    },
  ];

  return (
    <Content>
      <div className="md:mt-52 mt-32">
        <pre>{t("KUNDER")} / 02.</pre>
        <h1 className="mb-16">{t("Så här tycker våra kunder")}</h1>
        <div className="overflow-scroll w-full snap-x relative scrollable">
          <div className="absolute bg-gradient-to-t right-0 z-50 h-full w-48"></div>
          <div className="flex gap-12 w-fit">
            {refs.map((ref, index) => {
              return (
                <Cite
                  key={index}
                  author={ref.author}
                  cite={ref.text}
                  citeIcon="/images/icons/citat-icon-67.svg"
                ></Cite>
              );
            })}
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Recommendations;
