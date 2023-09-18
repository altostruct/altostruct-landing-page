/* eslint-disable @next/next/no-img-element */
import SEO from "@components/SEO";
import Cite from "components/Cite";
import Content from "components/Content";
import Footer from "components/Footer/Footer";
import Topbar from "components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import React, { useState } from "react";
import twconfig from "tailwind.config";
import PageStart from "@components/PageStart";
import Form from "@components/Form";
import Button from "@components/Button/Button";
import Image from "next-image-export-optimizer";
import Script from "next/script";
import CookieBanner from "@components/CookieBanner/CookieBanner";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getContentfulProducts, getProductFromSlug, getReferenceCasesFromProducts } from "utils/contentful";
import { GetStaticPaths } from "next";
import { RichText } from "pages/blog/[id]";
import Card from "@components/Card";
import ReferenceCases from "@components/ReferenceCases";
import Formshort from "@components/Form-short";

export default function Home(props: any) {
  const { product, referenceCases } = props
  const { t } = useTranslation();
  const bgLight = twconfig.theme.light;


  return (
    <>
      <CookieBanner></CookieBanner>
     
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      />
      <Topbar></Topbar>
      <div>
        <Content>
          <div className="relative">
            <PageStart
              title={
                <>
                  {product.fields.name}
                </>
              }
              description={product.fields.description}
              mainContent={<Image alt="" className="w-full h-full object-contain" src="/chat-pixels.png" width={1024} height={1024} />}
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
                  link="/contact">{t("Kontakta oss")}</Button>
              </div>}
            />

          </div>
        </Content>

        <Content className="mt-40 md:mt-0">
          <Card title={product.fields.slogan}>
            <span className="text-2xl">
              <RichText body={product.fields.sloganDescription}></RichText>
            </span>
          </Card>
        </Content >

        <Content className="pt-40">
          <div className="w-full flex-col gap-6 md:flex-row flex ">
            <div className="md:w-3/5 flex-grow">
              <h2 className="mb-3 text-2xl">
                <Image className="w-6 inline-block mr-3" width={100} height={100} alt="" src="/images/icons/light-cloud.svg" />
                {product.fields.whyUseThis}
              </h2>
              <div className="text-xl md:text-2xl text-gray-200">
                <RichText body={product.fields.whyUseThisDescription}></RichText>
              </div>
              <Button type="primary" className="mt-6">Läs mer om oss</Button>
            </div>
          </div>
        </Content >

        <Content className="mt-40">
          <ReferenceCases data={referenceCases} />
        </Content >

        <Content className="mt-40">
          <div
            className="text-white mb-10"
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


export async function getStaticProps(context: any) {
  return {
    // Passed to the page component as props
    props: { product: getProductFromSlug(context.params.id, context.locale), referenceCases: getReferenceCasesFromProducts(context.params.id) },
  };
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const posts = getContentfulProducts().filter(
    (post) =>
      post.fields.isPublished ||
      process.env.NEXT_PUBLIC_CONTENTFUL_DEV === "TRUE"
  );

  return {
    paths: posts.map((post) => {
      return { params: { id: post.fields.slug } };
    }),

    fallback: false, // can also be true or 'blocking'
  };
};