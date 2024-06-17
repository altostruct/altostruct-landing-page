import { PropsWithChildren, ReactNode, useState } from "react";
import Quotes from "@components/Quotes";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Topbar from "@components/Topbar/Topbar";
import { ContentfulImage } from "@components/Contentful";
import { getReferenceCases, getReferenceCasesFromProducts, getContentfulPosts, ContentfulAuthor } from "utils/contentful";
import classNames from "classnames";
import WordCircle from "@components/WordCircle";
import { SiAwslambda } from "react-icons/si";
import { FaAws, FaComment, FaPhone } from "react-icons/fa";
import { SiDiscourse } from "react-icons/si";

import formatDate from "utils/formatDate";
import quotes from ".data/contentful/customerQuote/all.json"
import Footer from "@components/Footer";
import Form from "@components/Email";
import Button from "@components/Button";
import { FcAbout } from "react-icons/fc";
import { FaChartLine, FaChessKnight, FaCloud, FaCloudscale, FaCode, FaFileCode, FaFrog, FaLanguage, FaRegComment, FaTachographDigital, FaUser } from "react-icons/fa6";
import ExampleAI from "@components/Logos/ExampleAI";
import { MdArrowDropDown, MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";
import Image from "@components/Image";
import SEO from "@components/SEO";




const getAuthorsNames = (authors: ContentfulAuthor[]) => {
  return authors.map((author, index, arr) => {
    if (index === 0) {
      return `${author.fields.firstName} ${author.fields.lastName}`
    }
    if (index === arr.length - 1) {
      return ` & ${author.fields.firstName} ${author.fields.lastName}`
    }
    return `, ${author.fields.firstName} ${author.fields.lastName}`
  }).join("")
}

const SectionWithTitle = (props: { title: ReactNode, children: ReactNode }) => {
  const { title, children } = props
  return <Content>
    <div className="flex-1">
      <h2 className="mb-5 text-4xl">{title}</h2>
      {children}
    </div>
  </Content>
}

const Label = (props: { children: ReactNode }) => {
  const { children } = props
  return <div className="bg-black hover:bg-gray-800 group-hover:translate-x-0 transition-all text-white p-4 text-4xl font-extrabold ">
    {children}
  </div>
}

export const SectionWithLabel = (props: { title: string, className?: string, children: ReactNode, titleAlignement?: "left" | "right" }) => {
  const { title, children, titleAlignement = "right", className } = props

  return <Content>
    <h2 className={classNames("text-2xl bg-black text-white w-fit py-2 md:py-0 px-4 translate-y-1", {
      "ml-auto": titleAlignement === "left"
    })}>{title}</h2>
    <div className={classNames(className, "border-4 p-6 flex gap-8 flex-col border-black")}>
      {children}
    </div>
  </Content>
}

export const Content = (props: PropsWithChildren<{ className?: string, fullWidth?: boolean }>) => {
  const { children, className, fullWidth = false } = props

  return <div className="w-screen">
    {/* <div className="w-2 h-2 bg-red-400 rounded-xl left-[12vw] absolute top-1/2"></div> */}
    <section className={classNames(className, { "m-auto max-w-[1048px] w-11/12 md:w-8/12": !fullWidth })}>
      {children}
    </section>
  </div>
}

const Expand = (props: { children?: ReactNode, label?: ReactNode }) => {
  const { children, label } = props;
  const [expanded, setExpaded] = useState(false)

  return <div className="border flex flex-col p-3">
    <div onClick={() => { setExpaded(!expanded) }} className={classNames("flex w-full cursor-pointer items-center", { "": expanded })}>
      <div className="flex-1">
        {label}
      </div>
      <div className="flex-0">
        <MdArrowDropDown className={classNames("w-8 h-8 transition-all", { "rotate-180": expanded })} />
      </div>
    </div>
    <div className={classNames("mt-4", { "hidden": !expanded })} >
      {children}
    </div>
  </div>
}

// const BadgeComponent = (props: { children: ReactNode, className?: string, tag: string }) => {
//   const { children, className, tag } = props
//   return <div className={classNames("bg-red-200 w-full relative overflow-visible", className)}>
//     <div className="text-white bg-black absolute top-0 left-0 -translate-y-full">{tag}</div>
//     {children}
//   </div>
// }

export const Row = (props: PropsWithChildren<{ className?: string }>) => {
  const { children, className } = props

  return <div className={classNames("flex items-stretch w-full md:flex-row", className)}>
    {children}
  </div >
}


const ArticleList = () => {
  return <Row className="gap-2 flex-wrap overflow-hidden">
    {getContentfulPosts().sort((a, b) => new Date(b.fields.createDate).getTime() - new Date(a.fields.createDate).getTime()).slice(0, 3).map((v: any, index) => {
      return <Link href={"/blog/" + v.fields.slug} key={index} className="w-full md:w-[calc(33%-0.5em)] border-black border-dashed border-4 hover:border-solid transition-all p-4 cursor-pointer group flex overflow-hidden flex-col md:flex-col md:gap-2">
        {v.fields.authors && <div className="flex text-xs items-center gap-3">
          <div className="flex-row gap-2 md:flex hidden">
            {v.fields.authors.map((author: ContentfulAuthor, index: number) => {
              if (!author.fields.profile) return;
              return <div key={index} className="h-4 w-4 md:h-6 md:w-6 rounded-full -translate-x-4 first:translate-x-0 overflow-hidden">
                <ContentfulImage width={64} height={64} alt="" image={author.fields.profile}></ContentfulImage>
              </div>
            })}
          </div>
          <p className="font-extralight text-xs md:text-xs">
            {getAuthorsNames(v.fields.authors)} {formatDate(v.fields.createDate ?? new Date())}
          </p>
        </div>
        }
        <div className="flex gap-2 flex-row-reverse  md:flex-col h-32 md:h-64">
          <div className="w-24 md:w-full overflow-hidden md:h-96 ">
            {v.fields.image && <ContentfulImage className="m-auto max-w-full max-h-full h-full" alt={"Cover Image for " + v.fields.title} image={v.fields.image}></ContentfulImage>}
          </div>
          <div className="flex-1 flex flex-col">
            <p className="text-xl bold md:text-xl flex-0  overflow-hidden line-clamp-2 text-ellipsis">
              {v.fields.title}
            </p>
            <p className="text-md text-gray-800 md:text-xl flex-0  overflow-hidden line-clamp-2 text-ellipsis">
              {v.fields.description}
            </p>
          </div>
        </div>
      </Link>
    })}
  </Row>
}

const CaseList = () => {
  return <Row className="gap-2 flex-wrap flex-col">
    {getReferenceCases().slice(1, 4).map((v: any, index) => {

      return <Row key={index} className="md:w-[calc(33.3%-0.33rem)] border-dashed border-4 hover:border-solid transition-all border-black cursor-pointer divide-black">
        <Link href={"/cases/" + v.fields.slug} className="group flex-1 overflow-hidden p-4 flex">
          <div className="mx-auto">
            {/* <div className="h-32 items-center flex">
              <h3 className="text-xl">{v.fields.title}<span className="text-red-400">.</span></h3>
            </div> */}
            <div className="flex gap-2 items-center flex-col">
              {v.fields.customer.fields.logo &&
                <div className="w-24 h-24 items-center flex">
                  <ContentfulImage alt="" className="w-full max-h-full max-w-full" width={100} height={100} image={v.fields.customer.fields.logo}></ContentfulImage>
                </div>}

              <div className="items-center flex">
                <p className="text-2xl bold line-clamp-2">{v.fields.shortDescriptionTitle}<span className="text-red-400">.</span></p>
              </div>

              <div className=" mr-auto flex flex-wrap gap-2">
                {v.fields.tags.slice(0, 4).map((v: string) => <p key={v} className="text-xs p-0.5 border rounded-md">{v}</p>)}
              </div>
            </div>
          </div>
        </Link>
      </Row>
    })}
  </Row>
}

const Column = (props: PropsWithChildren<{ className?: string }>) => {
  const { children, className } = props

  return <div className={classNames("flex flex-col items-stretch w-full md:flex-row", className)}>
    {children}
  </div >
}

export function Home() {
  return (
    <>
      <div className="flex flex-col gap-28 my-48 relative">
        {/* <div className="absolute w-1 -translate-x-1/2 top-0 h-full border-2 border-green-600 border-dashed  left-[12vw] "></div>
        <div className="w-4 -translate-x-1/2 h-4 bg-black  rounded-full fixed left-[12vw]"></div> */}
        <Topbar></Topbar>
        <SEO title="alto/s | AWS Specialister" description="Vi är ett konsultbolag specialiserat på molntjänster, AI och automatisering, med fokus på AWS.." />
        <Content className="">
          <div className="w-full flex-col-reverse md:flex-row flex h-fit border-black border-dashed py-4">
            <div className="break-keep w-full md:w-3/5 my-auto">
              <h1 className="text-5xl md:text-7xl">
                {/* <span className="bg-gradient-to-l from-red-500 bold to-blue-700 inline-block text-transparent bg-clip-text"> */}
                supercharge your business with amazon web services
                <span className="text-green-500">.</span>
              </h1>
              <Row className="gap-4">
                <div className="flex mt-6 gap-2">
                  <Button icon={<FaCloud></FaCloud>} link="#contact_us" label="kontakta oss" onClick={() => { }} />
                  <Button variant="secondary" icon={<FaCloud></FaCloud>} link="#contact_us" label="om oss" onClick={() => { }} />
                </div>
                <div>
                </div>
              </Row>
            </div>

            <div className="my-auto w-1/3 opacity-20 md:opacity-100 translate-y-10 md:translate-y-0 md:w-2/5 m-auto">
              <Image placeholder="blur" fetchPriority="high" className="m-auto w-full" alt="" width={336} height={314} src="/images/cloud-logo.png"></Image>
            </div>
          </div>
        </Content>

        <Content>
          <Quotes counter={4} data={quotes.map((item: any) => ({
            quote: item.fields.quote,
            author: item.fields.author,
            role: item.fields.authorsRole,
            image: item.fields.image,

            company: {
              name: item.fields.customer.fields.name,
              url: item.fields.customer.fields.link,
            }
          }))} />
        </Content>

        <Content className="flex flex-row gap-12">
          <div className="gap-20 flex-1 flex flex-col">
            <Row className="divide-dashed px-2 flex-col md:flex-row gap-2 md:gap-12 items-center">
              <div className="m-auto w-24 h-24 md:w-36 md:h-36 relative group">
                <FaCode className="w-24 h-24 md:w-36 md:h-36 my-auto text-green-900 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 absolute" />
                <FaCode className="w-24 h-24 md:w-36 md:h-36 my-auto text-green-700 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 translate-x-1 -translate-y-1 md:translate-x-2 md:-translate-y-2 absolute" />
                <FaCode className="w-24 h-24 md:w-36 md:h-36 my-auto text-green-500  transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 absolute" />
              </div>

              <div className="flex-1 m-auto flex flex-col gap-2">
                <h2 className="text-3xl bold md:text-5xl">Utveckling</h2>
                <p className="text-2xl">
                  Vi hjälper er att bygga moderna applikationer med den senaste molntekniken.
                </p>
                <Button link="/consulting-services" className="w-fit" label="Läs mer" variant="secondary"></Button>
              </div>
            </Row>
            <Row className="divide-dashed px-2 flex-col md:flex-row gap-2 md:gap-12 items-center">
              <div className="m-auto w-24 h-24 md:w-36 md:h-36 relative group">
                <SiDiscourse className="w-24 h-24 md:w-36 md:h-36 my-auto text-red-900 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 absolute" />
                <SiDiscourse className="w-24 h-24 md:w-36 md:h-36 my-auto text-red-700 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 translate-x-1 -translate-y-1 md:translate-x-2 md:-translate-y-2 absolute" />
                <SiDiscourse className="w-24 h-24 md:w-36 md:h-36 my-auto text-red-500  transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 absolute" />
              </div>

              <div className="flex-1 m-auto flex flex-col gap-2">
                <h2 className="text-3xl bold md:text-5xl">Kurser</h2>
                <p className="text-2xl">
                  Lär dig hur man bygger skalbara och säkra system på AWS.
                </p>
                <Button link="/courses" className="w-fit" label="Läs mer" variant="secondary"></Button>
              </div>
            </Row>
            {/* <Row className="divide-dashed px-2 flex-col md:flex-row gap-2 md:gap-12 items-center">
              <div className="m-auto w-24 h-24  md:w-36 md:h-36 relative group">
                <FaChessKnight className="w-24 h-24 md:w-36 md:h-36 my-auto text-blue-900 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 absolute" />
                <FaChessKnight className="w-24 h-24 md:w-36 md:h-36 my-auto text-blue-700 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 translate-x-1 -translate-y-1 md:translate-x-2 md:-translate-y-2 absolute" />
                <FaChessKnight className="w-24 h-24 md:w-36 md:h-36 my-auto text-blue-500  transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 absolute" />
              </div>
              <div className="flex-1 m-auto flex flex-col gap-2">
                <h2 className="text-3xl bold md:text-5xl">Molnstrategi</h2>
                <p className="text-2xl">
                  Vi hjälper er att skapa en strategi för hur ni kan arbeta med molntjänster och AI.
                </p>
                <Button link="/cloud-strategy" className="w-fit" label="Läs mer" variant="secondary"></Button>
              </div>
            </Row> */}
          </div>
          <div className="hidden md:block border-4 border-black w-10 relative items-stretch">
            <p style={{ writingMode: "vertical-lr" }} className="top-1/2 uppercase -translate-y-1/2 -translate-x-1/2 left-1/2 absolute text-xl text-black border-3 whitespace-nowrap">
              vad gör vi.
            </p>
          </div>
        </Content>

        {/* <Content className="">
          <div className="flex flex-col text-2xl md:text-4xl gap-2">
            <span className="flex gap-4 md:gap-36 w-full">
              Varför använda sig <br></br>
              <div className="flex-1 rounded-xl flex border-2 border-black text-center">
                <p className="m-auto">
                  AI och ML
                </p>

              </div>

            </span>
            <span className="flex w-full gap-6 md:gap-56">
              av molnet i <br></br>
              <div className="flex-1 flex rounded-xl border-2 border-black text-center">
                <p className="m-auto">
                  stora mägnder data
                </p>
              </div>
            </span>
            <span className="flex w-full gap-2 md:gap-56">
              2024? <br></br>
              <div className="flex-1 flex rounded-xl border-2 border-black text-center">
                <p className="m-auto">
                  säkerhet, skalbarhet och enkelhet
                </p>
              </div>
            </span>
          </div>
        </Content> */}

        <SectionWithLabel title="Show cases">
          {(() => {
            const highLightedRef = getReferenceCases()[0] as any
            return <>
              <div className="flex flex-col-reverse md:flex-row gap-12">
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                  <div>
                    <p className="font-second">alto x {highLightedRef.fields.customer.fields.name}</p>
                  </div>
                  <p className="text-3xl md:text-5xl">
                    {highLightedRef.fields.title}
                  </p>

                  <p className="text-md md:text-xl line-clamp-5">{highLightedRef.fields.shortDescription}</p>
                  <Button link={"/cases/" + highLightedRef.fields.slug} className="w-fit" label={"Läs mer om " + highLightedRef.fields.customer.fields.name + " på molnet"}></Button>
                </div>
                <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-col">
                  <ContentfulImage className="w-full" alt="" image={highLightedRef.fields.image} />
                  <div className="hidden md:flex mr-auto flex-wrap gap-2 pt-2">
                    {highLightedRef.fields.tags.slice(0, 4).map((v: string) => <p key={v} className="text-lg p-0.5 border rounded-md">{v}</p>)}
                  </div>
                  <Link href={highLightedRef.fields.customer.fields.link} className="mt-auto ml-auto border-dashed p-2 md:border-l-4 md:border-t-4 border-black">
                    <ContentfulImage className="inline w-24" alt="" image={highLightedRef.fields.customer.fields.logo} />
                  </Link>
                </div>
              </div>
            </>
          })()}
        </SectionWithLabel >

        <Content>
          <div className="flex flex-col">
            <p className={classNames("text-2xl bg-black text-white w-fit py-2 md:py-0 px-4 translate-y-1 ml-auto")}>cases</p>
            <CaseList></CaseList>
          </div>
        </Content>

        <Content>
          <div className="flex">
            <h3 className="inline-block m-auto text-2xl md:text-6xl font-second">
              Från ide
              <div className="inline-block px-2 md:px-4 w-16 md:w-32">
                <svg width="100%" height="100%" viewBox="0 0 123 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 24.3623H112.488" stroke="black" stroke-width="10" strokeLinecap="round" />
                  <path d="M92.9685 42.0546C93.2879 43.0129 94.5507 40.7946 95.2856 40.1017C99.3499 36.2691 103.484 32.4851 108.096 29.3107C110.889 27.3883 114.037 25.4478 117.397 24.7759" stroke="black" stroke-width="10" stroke-linecap="round" />
                  <path d="M100.735 5C101.26 8.41226 104.421 11.8688 106.367 14.4625C109.157 18.1823 111.98 21.2985 115.67 24.0662" stroke="black" stroke-width="10" stroke-linecap="round" />
                </svg>
              </div>
              Implementation
            </h3>
          </div>
          <Row className="gap-4 pt-12">
            <div className="w-full p-3 border-4 border-black text-2xl">
              Vår bakgrund är djupt rotad i startup-världen, där tid och leveranskapacitet är avgörande. Därför arbetar vi agilt med projekt och utnyttjar den senaste tekniken inom molntjänster för att snabbt leverera värde till er.
              {/* <Button className="w-fit m-auto mt-12" label="Läs mer om vårat arbetssätt"></Button> */}
            </div>
          </Row>
        </Content>
        <Content className="gap-2 flex flex-col">
          <Expand label={
            <div>
              <p className="text-4xl bold mb-2">varför använda <span className="underline">serverless?</span></p>
              <p className="text-xl">Skala enkelt och minska driftkostnaderna med serverless</p>
            </div>
          }>

            <div className="flex flex-col p-3">
              <ul className="list-disc list-inside text-xl">
                <li>Kostnadseffektivitet: Du betalar bara för den faktiska användningen av resurser.</li>
                <li>Skalbarhet: Serverless-tjänster skalar automatiskt upp och ner baserat på efterfrågan.</li>
                <li>Enkel hantering: Utvecklare behöver inte hantera serverinfrastruktur.</li>
                <li>Snabbare utvecklingscykler: Serverless-arkitekturer möjliggör snabbare utveckling och driftsättning av funktioner.</li>
                <li>Integrerad säkerhet: Molnleverantörer tar hand om många säkerhetsaspekter, såsom uppdateringar och patchar. </li>
              </ul>
              <Button variant="secondary" label="Läs om hur vi använder serverless" className="w-fit mt-10" />
            </div>
          </Expand>
          <Expand label={
            <div>
              <p className="text-4xl bold mb-2">varför använda <span className="underline">machine learning?</span></p>
              <p className="text-xl">Öka effektiviteten och noggrannheten med maskininlärning</p>
            </div>
          }>

            <div className="flex flex-col p-3">
              <ul className="list-disc list-inside text-xl">
                <li>
                  Förbättrad beslutsfattande: Analyserar stora datamängder för mer exakta beslut.
                </li>
                <li>
                  Automatisering: Automatiserar repetitiva uppgifter och sparar tid.
                </li>
                <li>
                  Personalisering: Anpassar tjänster och innehåll till individuella användare.
                </li>
                <li>
                  Prediktiv analys: Förutsäger trender och beteenden för proaktiv planering.
                </li>
                <li>
                  Effektivitet och precision: Minskar fel och optimerar processer.
                </li>
              </ul>
              <Button variant="secondary" label="Läs om hur vi använder machine learning" className="w-fit mt-10" />
            </div>
          </Expand>
          <Expand label={
            <div>
              <p className="text-4xl bold mb-2">varför använda <span className="underline">dev ops?</span></p>
              <p className="text-xl">Snabba upp leverans och förbättra samarbetet med DevOps</p>
            </div>
          }>
            <div className="flex flex-col p-3">
              <ul className="list-disc list-inside text-xl">
                <li>
                  Snabbare leverans: Snabbare utveckling och driftsättning av mjukvara.                </li>
                <li>
                  Ökad samarbete: Bättre samarbete mellan utvecklings- och driftteam.
                </li>
                <li>
                  Högre kvalitet: Kontinuerlig integration och leverans förbättrar kodkvaliteten.
                </li>
                <li>
                  Skalbarhet: Effektiv hantering av skalning och kapacitet.
                </li>
                <li>
                  Stabilitet: Snabbare identifiering och lösning av problem.
                </li>
              </ul>
              <Button variant="secondary" label="Läs om hur vi använder dev ops" className="w-fit mt-10" />
            </div>
          </Expand>
        </Content>

        <SectionWithTitle title={
          <>
            Nyheter från oss
          </>
        }>
          <ArticleList></ArticleList>
          <div className="w-fit mt-2">
            <Button onClick={() => { }} link="/blog" label="Läs mer"></Button>
          </div>
        </SectionWithTitle>

        <SectionWithLabel title="AI och automation med AWS">
          <Row className="divide-dashed gap-8 flex-col">
            <p className="flex-1 text-xl md:text-3xl pr-4 ">
              Som en stolt medlem i Amazon Partner Network, använder vårt företag den senaste molnteknologin för att snabbt och skalbart leverera maximalt värde till dig som kund.
            </p>
            <div className="flex pl-4 gap-4">
              <div className="m-auto w-16 h-16 md:w-32 md:h-32  relative group">
                <FaCloud className="w-16 h-16 md:w-32 md:h-32 my-auto text-blue-900 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 absolute" />
                <FaCloud className="w-16 h-16 md:w-32 md:h-32 my-auto text-blue-700 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <FaCloud className="w-16 h-16 md:w-32 md:h-32 my-auto text-blue-500  transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>
              <div className="m-auto w-16 h-16 md:w-32 md:h-32 relative group">
                <MdOutlineAccessTime className="w-16 h-16 md:w-32 md:h-32 my-auto text-red-900 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 absolute" />
                <MdOutlineAccessTime className="w-16 h-16 md:w-32 md:h-32 my-auto text-red-700 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <MdOutlineAccessTime className="w-16 h-16 md:w-32 md:h-32 my-auto text-red-500  transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>
              <div className="m-auto w-16 h-16 md:w-32 md:h-32 relative group">
                <FaFileCode className="w-16 h-16 md:w-32 md:h-32 my-auto text-yellow-900 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 absolute" />
                <FaFileCode className="w-16 h-16 md:w-32 md:h-32 my-auto text-yellow-700 transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <FaFileCode className="w-16 h-16 md:w-32 md:h-32 my-auto text-yellow-500  transition-all md:group-hover:translate-x-0 md:group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>
            </div>
          </Row>
        </SectionWithLabel>
        <Content>
          <Form></Form>
        </Content>
      </div >
      <Footer></Footer>
    </>

  );
}

export default Home;