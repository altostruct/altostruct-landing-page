import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import TeamImage from "components/TeamImages/Image";
import TransitionSquares from "@components/TransistionSquares";
import tailwindConfig from "tailwind.config";
import PageStart from "@components/PageStart";
import BigList from "@components/BigList";
import StaticSidebar from "@components/StaticSidebar/StaticSidebar";

function About() {
    const { t } = useTranslation();
    const lightBg = tailwindConfig.theme.light;

    return (
        <>
            <StaticSidebar></StaticSidebar>
            <SEO
                title={t("Altostruct | Cloud Consulting")}
                description={t(
                    "Altostruct är ett AWS konsultbolag i Stockholm."
                )}
            ></SEO>
            <Topbar></Topbar>

            <div className="bg-[#161616] md:pb-20 pb-10">
                <Content>
                <PageStart
            title={
              <span className="pt-20 md:pt-48 mt-9 text-3xl md:text-6xl text-left md:w-3/4">
                {t("Jobba med banbrytande teknologi")}{" "}
                <WordCircled borderCircle={true}>{t("tillsammans")}</WordCircled>{" "}
                {t("tillsammans med de främsta inom ")}{" "}
                <WordCircled>{t("AWS och molnet")}</WordCircled>
              </span>
            }
          ></PageStart>
                </Content>

                <div className={lightBg}>
                    <TransitionSquares></TransitionSquares>
                    <Content>
                        <div className="md:grid md:grid-cols-6 md:gap-4 text-white">
                            <div className="col-start-1 col-end-5">
                                <div className="md:pt-72 pt-52 md:text-4xl text-3xl text-white font-sans">
                                    <p>{t("Om Altostruct")}</p>
                                </div>
                                <div className="relative">
                                    <p
                                        className="relative z-10 md:text-4xl text-2xl"
                                        style={{ fontFamily: "KHTeka-Light" }}
                                    >
                                        {t(
                                            "Altostruct är ett konsultbolag specialiserade inom AWS. Vårt team av AWS konsulter är certifierade via AWS och erbjuder ett stort utbud av tjänster som exempelvis molnmigrationer, AI, serverless och APIer. Altostruct grundades 2020 och har sedan start haft en stark tillväxt och har hjälpt ett stort antal företag företag nå sin fulla potential med hjälp av molnet."
                                        )}
                                    </p>
                                    <div className="absolute top-20 left-3/4 w-20 h-20 md:w-40 md:h-40 rotate-45 opacity-60 bg-[#6024ff]"></div>
                                    <div className="absolute top-2 left-10 rotate-12 w-20 h-20 md:w-40 md:h-40 opacity-60 bg-[#6024ff]"></div>
                                </div>
                            </div>

                            <div className="col-start-3 col-end-7 justify-items-end">
                                <div className="pt-20 md:text-4xl text-3xl text-white font-sans">
                                    <p>{t("Vår vision")}</p>
                                </div>
                                <div className="relative pb-20">
                                    <p
                                        className="relative md:text-4xl text-2xl z-10"
                                        style={{ fontFamily: "KHTeka-Light" }}
                                    >
                                        {t(
                                            "Vår vision är att göra det möjligt för alla företag att bygga och hosta branschledande applikationer och platformer i molnet, och på så sätt demokratisera tillgången till den mest kraftfulla teknologin och resurserna."
                                        )}
                                    </p>
                                    <div className="absolute top-32 left-3/4 w-20 h-20 md:w-40 md:h-40 rotate-45 opacity-60 bg-[#6024ff]"></div>
                                    <div className="absolute top-2 left-20 w-20 h-20 md:w-40 opacity-60 md:h-40 bg-[#6024ff]"></div>
                                </div>
                            </div>
                        </div>
                    </Content>

                    <div className="flex place-content-start md:pt-40">
                        <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]"></div>
                    </div>
                </div>

                <Content>
                    <div className="md:pt-52 md:pb-52 pt-10 pb-10">
                        <BigList
                            items={[
                                {
                                    title: "Wolfpacks",
                                    description: t(
                                        "Vi säkerställer kvalitet och leverans i tid genom att arbeta agilt i små team vars huvudsakliga fokus är er och er produkt."
                                    ),
                                    image: "/images/icons/Icon-58.svg",
                                },
                                {
                                    title: t("Direkt kontakt"),
                                    description: t(
                                        "Vi tror på enkel och effektiv kommunikation. Det är A och O i utveckling. Vi minskar därför mellanhänder och erbjuder direkt kontakt mellan kund och utvecklare."
                                    ),
                                    image: "/images/icons/Icon-52.svg",
                                },
                                {
                                    title: t("Nära och långsiktiga samarbeten"),
                                    description: t(
                                        "Vi arbetar nära kund och är lojala partners. Genom nära samarbeten får vi en djup förståelse för era utmaningar vilket ger oss möjligheten att skapa bättre och mer anpassade lösningar. Efter lösningen är byggd erbjuder vi också kontinuerligt underhåll."
                                    ),
                                    image: "/images/icons/Icon-53.svg",
                                },
                            ]}
                        ></BigList>
                    </div>
                </Content>

                <div className="bg-[#292929]">
                    <div className="flex">
                        <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]"></div>
                    </div>

                    <div className="md:hidden flex-wrap pt-20">
                        <div className="flex w-screen place-content-between">
                            <img
                                className="w-5/12"
                                src="/images/MISC/Altostruct_office-19.jpg"
                                alt=""
                            />
                            <img
                                className="w-5/12"
                                src="/images/MISC/Altostruct_office-34.jpg"
                                alt=""
                            />
                        </div>
                        <div className="flex w-screen mt-4">
                            <img
                                className="w-5/12 ml-auto mr-auto"
                                src="/images/MISC/Altostruct_office-18.jpg"
                                alt=""
                            />
                        </div>
                        <div className="flex w-screen place-content-between mt-4">
                            <img
                                className="w-5/12"
                                src="/images/MISC/Altostruct_office-38.jpg"
                                alt=""
                            />
                            <img
                                className="w-5/12"
                                src="/images/MISC/Altostruct_office-37.jpg"
                                alt=""
                            />
                        </div>
                        <div className="flex w-screen mt-4">
                            <img
                                className="w-5/12 mr-auto ml-auto"
                                src="/images/MISC/Altostruct_office-15.jpg"
                                alt=""
                            />
                        </div>
                        <div className="flex w-screen place-content-between mt-4">
                            <img
                                className="w-5/12"
                                src="/images/MISC/Altostruct_office-39.jpg"
                                alt=""
                            />
                            <img
                                className="w-5/12"
                                src="/images/MISC/Altostruct_office-16.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div
                        className="pt-10 md:pt-10 flex place-content-center text-white md:mr-10 md:pb-10 pb-32"
                        style={{ fontFamily: "KHTeka-Light" }}
                    >
                        <p className="md:text-4xl text-3xl mx-4 text-center">
                            {t("Hälsa Altostruct teamet!")}
                        </p>
                    </div>

                    <div className="hidden md:grid grid-cols-3 pb-40 gap-10 max-w-7xl m-auto px-4">
                        <div className="flex flex-col place-content-center">
                            <TeamImage
                                title="Erik & Gustav"
                                imagePath="/images/MISC/Altostruct_office-19.jpg"
                            ></TeamImage>
                        </div>
                        <div className="flex flex-col place-content-center">
                            <TeamImage
                                title={t("Kaffe paus")}
                                imagePath="/images/MISC/Altostruct_office-34.jpg"
                            ></TeamImage>
                        </div>
                        <div className="flex flex-col place-content-center">
                            <TeamImage
                                title="Erik & William"
                                imagePath="/images/MISC/Altostruct_office-18.jpg"
                            ></TeamImage>
                        </div>
                        <div className="flex flex-col place-content-center">
                            <TeamImage
                                title={t("Team-möte")}
                                imagePath="/images/MISC/Altostruct_office-39.jpg"
                            ></TeamImage>
                        </div>
                        <div className="flex flex-col place-content-center">
                            <TeamImage
                                title="Joakim & Per"
                                imagePath="/images/MISC/Altostruct_office-38.jpg"
                            ></TeamImage>
                        </div>
                        <div className="flex flex-col place-content-center">
                            <TeamImage
                                title={t("Kontorets Maskot")}
                                imagePath="/images/MISC/Altostruct_office-37.jpg"
                            ></TeamImage>
                        </div>
                    </div>
                </div>

                <div className="flex place-content-end">
                    <div className="md:w-28 md:h-28 h-14 w-14 bg-[#292929]"></div>
                </div>

                <Content>
                    <div
                        className="text-white pt-40 md:w-4/5 mb-10"
                        style={{ fontFamily: "KHTeka-Light" }}
                    >
                        <p
                            className="md:text-6xl text-3xl"
                            style={{ lineHeight: "1.4" }}
                        >
                            {t("Vill du veta mer om Altostruct?")}{" "}
                            <WordCircled borderCircle={true} color="blue">
                                {t("hör av dig")}
                            </WordCircled>{" "}
                            {t("till oss så berättar vi mer!")}
                        </p>
                    </div>
                    <Form></Form>
                </Content>
            </div>
            <Footer />
        </>
    );
}

export default About;
