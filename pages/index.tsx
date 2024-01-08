import { PropsWithChildren, ReactNode } from "react";
import Quotes from "@components/Quotes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Topbar from "@components/Topbar/Topbar";
import { ContentfulImage } from "@components/Contentful";
import { getReferenceCases, getReferenceCasesFromProducts, getContentfulPosts, ContentfulAuthor } from "utils/contentful";
import classNames from "classnames";
import WordCircle from "@components/WordCircle";
import { SiAwslambda } from "react-icons/si";
import { FaAws } from "react-icons/fa";

import formatDate from "utils/formatDate";
import quotes from ".data/contentful/customerQuote/all.json"
import Footer from "@components/Footer";
import Form from "@components/Email";
import Button from "@components/Button";
import { FcAbout } from "react-icons/fc";
import { FaChartLine, FaChessKnight, FaCloud, FaCloudscale, FaCode, FaFileCode, FaFrog, FaLanguage, FaRegComment, FaTachographDigital, FaUser } from "react-icons/fa6";
import ExampleAI from "@components/Logos/ExampleAI";
import { MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";
import Image from "next-image-export-optimizer";
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

const SectionWithLabel = (props: { title: string, className?: string, children: ReactNode, titleAlignement?: "left" | "right" }) => {
  const { title, children, titleAlignement = "right", className } = props

  return <Content>
    <h2 className={classNames("text-2xl bg-black text-white w-fit py-2 md:py-0 px-4 translate-y-1", {
      "ml-auto": titleAlignement === "left"
    })}>{title}</h2>
    <div className={classNames("border-4 p-6 border-dashed flex gap-8 flex-col border-black", className)}>
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
  return <Row className="gap-2 flex-wrap">
    {getContentfulPosts().sort((a, b) => new Date(b.fields.createDate).getTime() - new Date(a.fields.createDate).getTime()).slice(0, 3).map((v: any, index) => {
      return <a href={"/blog/" + v.fields.slug} key={index} className="w-full md:w-[calc(33%-0.5em)] border-black border-dashed border-4 hover:border-solid transition-all p-4 cursor-pointer group flex overflow-hidden flex-col md:flex-col md:gap-2">
        {v.fields.authors && <div className="flex text-xs items-center gap-3">
          <div className="flex-row gap-2 md:flex hidden  ">
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
        <div className="flex gap-2 flex-row-reverse  md:flex-col flex-1">
          <div className="w-24 h-24 md:w-full md:flex-1 md:h-full flex">
            {v.fields.image && <ContentfulImage className="m-auto max-w-full max-h-full w-full" alt={"Cover Image for " + v.fields.title} image={v.fields.image}></ContentfulImage>}
          </div>
          <div className="md:h-24 flex-1 flex">
            <p className="text-md bold md:text-xl flex-0 my-auto md:mb-auto overflow-hidden line-clamp-3 text-ellipsis">
              {v.fields.title}
            </p>
          </div>
        </div>
      </a>
    })}
  </Row>
}

const CaseList = () => {
  return <Row className="gap-2 flex-wrap flex-col">
    {getReferenceCases().slice(0, 3).map((v: any, index) => {

      return <Row key={index} className="md:w-[calc(33.3%-0.5rem)] border-dashed border-4 hover:border-solid transition-all border-black cursor-pointer divide-black">
        <a href={"/cases/" + v.fields.slug} className="group flex-1 overflow-hidden p-4 flex">
          <div className="mx-auto">
            {/* <div className="h-32 items-center flex">
              <h3 className="text-xl">{v.fields.title}<span className="text-red-400">.</span></h3>
            </div> */}
            <div className="flex gap-2 items-center flex-col">
              {v.fields.customer.fields.logo &&
                <div className="w-32 h-32 items-center flex">
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
        </a>
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
      <div className="flex flex-col gap-24 my-48 relative">
        {/* <div className="absolute w-1 -translate-x-1/2 top-0 h-full border-2 border-green-600 border-dashed  left-[12vw] "></div>
        <div className="w-4 -translate-x-1/2 h-4 bg-black  rounded-full fixed left-[12vw]"></div> */}
        <Topbar></Topbar>
        <SEO title="alto/s" description="Cloud, AI och automatisering" />
        <Content>
          <Row className="gap-">
            <div className="self-center flex-1 h-fit">
              <h1 className="text-5xl bold md:text-8xl">
                responsible
                digitalisation
                <span className="text-green-500">.</span><br></br>
              </h1>

            </div>

            <div className="cloud-animation flex md:relative md:blur-none md:opacity-100 absolute -z-10 blur-sm opacity-30 top-0 flex-0">
              <Image priority className="m-auto w-full max-h-full" alt="main" src="v2/cloud.png" width={640} height={640} />
            </div>
          </Row>
          <p className="mt-3 text-md md:text-2xl">Altostruct är ett konsultbolag inom automation och AI, specialiserad på skalbar molnarkitektur för att effektivisera och förbättra företagsprocesser.</p>
          <Row className="gap-4">
            <div className="flex mt-6">
              <Button link="#contact_us" label="Kontakta oss" onClick={() => { }}>
              </Button>
            </div>
            <div>
            </div>
          </Row>
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

        <Content>
          <Row className="flex gap-16">
            <div className="flex-1">
              <h1 className="text-2xl mb-4">
                <div className="relative flex flex-col gap-4">

                  <span className="md:text-6xl cursor-pointer bold">Älskar ni att brottas med ostrukturerad data?</span>
                  <p>Troligtvis inte. Vi hjälper er samla in, lagra och strukturera er data så att ni kan gå från kaos till klarhet.</p>
                  <div className="w-fit text-lg">
                    <Button onClick={() => { }} label="Läs om Fragsheets dataresa"></Button>
                  </div>
                </div>
              </h1>
            </div>
          </Row>
        </Content >

        {/* <Content className="flex-col group transition-all flex">
          <div className="bg-black hover:bg-gray-800 group-hover:translate-x-0 transition-all -translate-x-4 text-white p-8 text-4xl font-extrabold text-center">
            <b>
              Vi brinner för AI, webben och cloud.
            </b>
          </div>
          <div className="bg-green-500 hover:bg-gray-800  group-hover:translate-x-0 transition-all translate-x-8 text-white p-8 text-4xl font-extrabold text-center">
            <b>
              Vi gör era problem och utmaningar till våra utmaningar.
            </b>
          </div>
          <div className="bg-black hover:bg-gray-800  group-hover:translate-x-0 transition-all -translate-x-7 text-white p-8 text-4xl font-extrabold text-center">
            <b>
              Vi bygger digitala lösningar på teknik som fungerar.
            </b>
          </div>
          <div className="bg-green-500 hover:bg-gray-800  group-hover:translate-x-0 transition-all translate-x-2 text-white p-8 text-4xl font-extrabold text-center">
            <b>
              Vi gör klart. Kör in i kaklet.
            </b>
          </div>
        </Content> */}




        <SectionWithLabel title="Sedan 2020 har vi arbetat med senaste teknologin">
          <Row className="divide-dashed gap-8 flex-col">
            <p className="flex-1 text-xl md:text-3xl pr-4 ">
              Vi är ett litet team av erfarna utvecklare. Med en passion för teknologi och en djup förståelse för automatisering och effektivisering av digital infrastruktur erbjuder vi skräddarsydda lösningar för att stödja företags digitala resa.             </p>
            <div className="flex pl-4 gap-4">
              <div className="m-auto h-24 w-24 md:w-32 md:h-32 relative group">
                <SiAwslambda className="h-24 w-24 md:w-32 md:h-32 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                <SiAwslambda className="h-24 w-24 md:w-32 md:h-32 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <SiAwslambda className="h-24 w-24 md:w-32 md:h-32 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>


            </div>
          </Row>
        </SectionWithLabel>

        <Content>
          <Link href="/cases/scaling_data_ingestion_7x_faster_and_powering_ai_media_solutions_with_aws:_arty's_transformation_journey">
            <Row className="">
              <div className="m-auto">
                <h1 className="text-4xl mb-4">
                  Se hur man implementerar   <br></br>
                  <div className="relative ">

                    <span className="md:text-9xl bold cursor-pointer  text-gray-900 hover:underline">artificiell intelligens</span>
                  </div>
                </h1>
              </div>
              <div className="w-64 md:w-full m-auto">
                {/* <img src="/v2/real-ai.png"></img> */}
                <ExampleAI></ExampleAI>
              </div>
            </Row>
          </Link>
        </Content>


        <SectionWithLabel title="AI och automation med AWS">
          <Row className="divide-dashed gap-8 flex-col">
            <p className="flex-1 text-xl md:text-3xl pr-4 ">
              Som en stolt medlem i Amazon Partner Network, använder vårt företag den senaste molnteknologin för att snabbt och skalbart leverera maximalt värde till dig som kund.
            </p>
            <div className="flex pl-4 gap-4">
              <div className="m-auto w-16 h-16 md:w-32 md:h-32  relative group">
                <FaCloud className="w-16 h-16 md:w-32 md:h-32 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                <FaCloud className="w-16 h-16 md:w-32 md:h-32 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <FaCloud className="w-16 h-16 md:w-32 md:h-32 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>
              <div className="m-auto w-16 h-16 md:w-32 md:h-32 relative group">
                <MdOutlineAccessTime className="w-16 h-16 md:w-32 md:h-32 my-auto text-red-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                <MdOutlineAccessTime className="w-16 h-16 md:w-32 md:h-32 my-auto text-red-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <MdOutlineAccessTime className="w-16 h-16 md:w-32 md:h-32 my-auto text-red-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>
              <div className="m-auto w-16 h-16 md:w-32 md:h-32 relative group">
                <FaFileCode className="w-16 h-16 md:w-32 md:h-32 my-auto text-yellow-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                <FaFileCode className="w-16 h-16 md:w-32 md:h-32 my-auto text-yellow-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <FaFileCode className="w-16 h-16 md:w-32 md:h-32 my-auto text-yellow-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>
            </div>
          </Row>

        </SectionWithLabel>
        <SectionWithTitle title={
          <>
            Nyheter från oss
          </>
        }>
          <ArticleList></ArticleList>
        </SectionWithTitle>


        <SectionWithLabel className="py-8 md:py-12 flex gap-4 md:gap-8" title='Vad menar vi med "responsible digitalisation"?'>
          <Row className="divide-dashed px-2 flex-row-reverse gap-2 md:gap-8">
            <div className="m-auto w-14 h-14 md:w-28 md:h-28 relative group">
              <FaChessKnight className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
              <FaChessKnight className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2 absolute" />
              <FaChessKnight className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 -translate-y-4 absolute" />
            </div>
            <p className="flex-1 m-auto text-xl md:text-4xl  bold">
              Implementationer som löser riktiga problem. Vi hoppar inte blint på de senaste trenderna.
            </p>
          </Row>
          <Row className="divide-dashed px-2 flex-row-reverse gap-2 md:gap-8">
            <div className="m-auto w-14 h-14 md:w-28 md:h-28  relative group">
              <MdOutlineAccessTime className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
              <MdOutlineAccessTime className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2 absolute" />
              <MdOutlineAccessTime className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 -translate-y-4 absolute" />
            </div>
            <p className="flex-1 m-auto text-xl md:text-4xl bold">
              Beprövade agila och hållbara metoder som främjar automation och innovation.
            </p>
          </Row>
          <Row className="divide-dashed px-2 flex-row-reverse gap-2 md:gap-8">
            <div className="m-auto w-14 h-14 md:w-28 md:h-28 relative group">
              <FaAws className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
              <FaAws className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2 absolute" />
              <FaAws className="w-14 h-14 md:w-28 md:h-28 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 -translate-y-4 absolute" />
            </div>
            <p className="flex-1 m-auto text-xl md:text-4xl bold">
              Lösningar byggda på ledande molnplattformar för skalbarhet, säkerhet och produktivitet.
            </p>
          </Row>
        </SectionWithLabel>


        <SectionWithTitle title="Våra cases">
          <CaseList></CaseList>
        </SectionWithTitle>

        {/* <Content>
          <div className="p-8">

            <h2 className="mb-6 underline">vad erbjuder vi?</h2>
            <Row className="gap-8 text-xl -translate-y-4 border-black ">
              <div className="flex-1">
                <p>
                  <b>
                    Optimering
                  </b> vi hjälper dig att effektivisera din befintliga infrastruktur och minimera kostnaderna. Vi ser till att ni följer senaste standarden och att allting ser korrekt ut. Dessutom kan vi sätta upp verktygen för att ni själv i framtiden</p>
              </div>
              <div className="flex-1">
                <p><b>Migration</b> Vi hjälper dig att effektivisera din befintliga infrastruktur och minimera kostnaderna. Vi ser till att ni följer senaste standarden och att allting ser korrekt ut. Dessutom kan vi sätta upp verktygen för att ni själv i framtiden</p>
              </div>
            </Row>
            <Row className="mt-5">
              <div className="flex gap-6 items-center">
                <div className="flex w-16 h-16 rounded-full overflow-hidden">
                  <img className="m-auto h-full object-cover" src="v2/erik.webp"></img>
                </div>
                <div>
                  <p className="text-lg">Erik Rehn - CEO</p>
                  <p >erik.rehn@altostruct.se</p>
                </div>

              </div>
            </Row>

          </div>
        </Content> */}

        <Content>
          <Row className="">
            <div className="flex-1">
              <Form className="flex-1"></Form>
            </div>
          </Row>
        </Content>


      </div >

      {/* <Content>
        <div className="border-gray-100 border p-4">
          <Column className="gap-32 px-24">
            <div className="flex-1  flex justify-center" >
              <img width={"60%"} className="m-auto" src="v2/aws_logo.png"></img>
            </div>
            <div className="flex-1  flex justify-center" >
              <img width={"100%"} className="m-auto" src="v2/anthoripic.png"></img>
            </div>
            <div className="flex-1 flex justify-center" >
              <img width={"100%"} className="m-auto" src="v2/Ingram_micro_logo.png"></img>
            </div>
            <div className="flex-1 flex justify-center" >
              <img width={"60%"} className="m-auto" src="v2/open_ai.png"></img>
            </div>
          </Column>
        </div>
      </Content> */}
      {/* <Footer></Footer> */}
    </>

  );
}

export default Home;