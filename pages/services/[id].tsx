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
const QUOTES = []

export default function Home(props: any) {
  const { product, referenceCases } = props
  const { t } = useTranslation();
  const bgLight = twconfig.theme.light;


  return (
    <>
      <CookieBanner></CookieBanner>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="https://js-eu1.hs-scripts.com/26849291.js"
      />
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      />
      <Topbar></Topbar>
      <div className="pb-48">
        <Content>
          <div className="relative">
            <PageStart
              title={
                <>
                  {product.fields.name}
                  {/* <div className="w-63"><Image width={100} height={100} alt="" src="/images/icons/aws.svg"></Image></div> */}
                  {/* Machine learning på<br></br>
                  <WordCircled borderCircle>
                    Amazon Web Services
                  </WordCircled> */}
                </>
              }
              description={product.fields.description}
              mainContent={<Image alt="" className="w-full h-full object-contain" src="/chat-pixels.png" width={1024} height={1024} />}
              cta={<div className="flex gap-2">
                <Button link="/contact">{t("Boka konsultation")}</Button>
                <Button type="secondary" link="/asd">{t("Boka konsultation")}</Button>
              </div>}
            />

          </div>
        </Content>

        <Content className="mt-40">
          <Card title={product.fields.slogan}>
            <span className="text-2xl">
              <RichText body={product.fields.sloganDescription}></RichText>
            </span>
          </Card>
        </Content >

        <Content className="pt-40">
          <div className="hidden md:block">
            {/* <TransitionSquares></TransitionSquares> */}
          </div>

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
          <Form></Form>
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