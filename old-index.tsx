/* eslint-disable @next/next/no-img-element */
import SEO from "@components/SEO";
import Content from "components/Content";
import Footer from "components/Footer/Footer";
import Topbar from "components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import WordCircled from "components/Word-Circled/Word";
import React, { useState } from "react";
import PageStart from "@components/PageStart";
import Formshort from "@components/Form-short";
import Button from "@components/Button/Button";
import Image from "next-image-export-optimizer";
import Script from "next/script";
import CookieBanner from "@components/CookieBanner/CookieBanner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Quotes from "@components/Quotes";
import BigList from "@components/BigList";

import { getContentfulProducts, getReferenceCases, getReferenceCasesFromProducts } from "utils/contentful";
import ReferenceCases from "@components/ReferenceCases";


export default function Home() {
    const { t } = useTranslation();
    const quotes = require(".data/contentful/customerQuote/all.json")

    return (
        <>
            <CookieBanner></CookieBanner>
            <SEO
                title={t("Altostruct | AWS Services & Support")}
                description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
            />
            <Topbar></Topbar>
            <div>
                <Content>
                    <PageStart
                        title={
                            <>
                                {/* <div className="w-63"><Image width={100} height={100} alt="" src="/images/icons/aws.svg"></Image></div> */}
                                {t("Bygg skalbart med våra certifierade")}{" "}
                                <WordCircled borderCircle={true}>
                                    {t("Amazon Web Services")}
                                </WordCircled>
                                {" "}{t("utvecklare")}
                            </>
                        }
                        cta={<div className="flex gap-2">
                            <Button className="group" icon={
                                <div className="group-hover:translate-x-1 transition-all">
                                    <svg height={"1.2em"} id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                                        <path
                                            fill="#c3eec3"
                                            d="m138.08,71.7v16.59h-16.59v16.59h-16.59v-16.59H21.92v-16.59h82.97v-16.59h16.59v16.59h16.59Zm-33.19-33.19v16.59h-16.59v-16.59h16.59Zm-16.59,66.37h16.59v16.59h-16.59v-16.59Z" />
                                    </svg>
                                </div>
                            }
                                link="/contact">Kontakta oss</Button>
                        </div>}
                    />
                </Content>

                <div>
                    <Content className="my-40 md:mt-0">
                        <Quotes counter={4} data={quotes.map((item: any) => ({
                            quote: item.fields.quote,
                            author: item.fields.author,
                            role: item.fields.authorsRole,
                            company: {
                                name: item.fields.customer.fields.name,
                                url: item.fields.customer.fields.link,
                            }
                        }))}></Quotes>
                    </Content>
                </div>

                <Content>
                    <div className="mb-20">
                        <div className="flex gap-2 mb-4 md:mb-6">
                            <h1 className="text-2xl md:text-4xl uppercase text-gray-300 pr-2">
                                {t("Vad är Altostruct?")}
                            </h1>
                        </div>
                        <div className="font-light md:pb-8 pb-5 text-2xl">
                            Altostruct är erfarna molnkonsulter som hjälper företag att navigera genom molnteknologin. Vi stöttar med  <span className="text-[#c3eec3]">Migration</span>,  <span className="text-[#c3eec3]">Optimering</span> och  <span className="text-[#c3eec3]">Skräddarsyr</span> dina molnprojekt. Vi erbjuder rådgivning för att navigera genom molnets komplexiteter på Amazon Web Services.
                        </div>

                        <Button className="group" icon={
                            <div className="group-hover:translate-x-1 transition-all ">
                                <svg height={"1.2em"} id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                                    <path
                                        fill="#c3eec3"
                                        d="m138.08,71.7v16.59h-16.59v16.59h-16.59v-16.59H21.92v-16.59h82.97v-16.59h16.59v16.59h16.59Zm-33.19-33.19v16.59h-16.59v-16.59h16.59Zm-16.59,66.37h16.59v16.59h-16.59v-16.59Z" />
                                </svg>
                            </div>
                        }
                            link="/contact">{t("Kontakta oss")}
                        </Button>
                    </div>
                </Content>

                <Content>
                    <div className="md:pt-18 pt-16 md:pb-0 pb-20">
                        <BigList
                            items={[
                                {
                                    title: t("Optimering"),
                                    description: t(
                                        "Vi hjälper dig att effektivisera din befintliga infrastruktur och minimera kostnaderna."
                                    ),
                                    image: "/images/productivity-green.png",
                                },
                                {
                                    title: t("Migration"),
                                    description: t(
                                        "Vi stöttar dig i att smidigt migrera din nuvarande infrastruktur till AWS för en mer effektiv molnlösning."
                                    ),
                                    image: "/images/migrate.png",
                                },
                                {
                                    title: t("Skräddarsyr"),
                                    description: t(
                                        "Våra molnlösningar är skräddarsydda för att passa din unika infrastruktur och vi hjälper dig optimera dess prestanda."
                                    ),
                                    image: "/images/skraddarsy.png",
                                },
                            ]}
                        ></BigList>
                    </div>
                </Content>

                <Content className="md:my-32">
                    <ReferenceCases data={getReferenceCases()} start={0} end={3}></ReferenceCases>
                </Content >


                <Content className="">
                    <div
                        className="text-white md:pt-20 pt-32 md:w-4/5 mb-10"
                        style={{ fontFamily: "KHTeka-Light" }}
                    >
                        <p className="md:text-6xl text-2xl" style={{ lineHeight: "1.4" }}>
                            Vill du veta mer om Altostruct?
                            <br />
                            Hör av dig så berättar vi mer!
                        </p>
                    </div>
                    <Formshort></Formshort>
                </Content>
            </div >
            <Footer />

        </>
    );
}
