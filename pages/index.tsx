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
    <h2 className={classNames("text-2xl bg-black text-white w-fit px-4 translate-y-1", {
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

  return <div className={classNames("flex flex-col items-stretch w-full md:flex-row", className)}>
    {children}
  </div >
}


const ArticleList = () => {
  return <Row className="gap-2 flex-wrap">
    {getContentfulPosts().sort((a, b) => new Date(b.fields.createDate).getTime() - new Date(a.fields.createDate).getTime()).slice(0, 8).map((v: any, index) => {
      return <a href={"/blog/" + v.fields.slug} key={index} className="w-[calc(25%-0.5em)]  border-black border-dashed border-4 hover:border-solid transition-all p-4 cursor-pointer group flex overflow-hidden flex-col">
        <div className="flex-1 p-2">
          {v.fields.image && <ContentfulImage alt={"Cover Image for " + v.fields.title} image={v.fields.image}></ContentfulImage>}
        </div>
        <p className="text-sm overflow-hidden line-clamp-2 text-ellipsis">
          {v.fields.title}
        </p>
        {v.fields.authors && <div className="flex text-xs items-center gap-3 mb-3">
          <div className="flex flex-row gap-2">
            {v.fields.authors.map((author: ContentfulAuthor, index: number) => {
              if (!author.fields.profile) return;
              return <div key={index} className="h-6 w-6 rounded-full -translate-x-4 first:translate-x-0 overflow-hidden">
                <ContentfulImage alt="" image={author.fields.profile}></ContentfulImage>
              </div>
            })}
          </div>
          <p className="font-extralight text-xs md:text-sm">
            {getAuthorsNames(v.fields.authors)} · {formatDate(v.fields.createDate ?? new Date())}
          </p>
        </div>
        }

      </a>
    })}
  </Row>
}

const CaseList = () => {
  return <Row className="gap-2 flex-wrap ">
    {getReferenceCases().slice(0, 6).map((v: any, index) => {
      return <Row key={index} className="w-[calc(33.3%-0.5rem)] border-dashed border-4 hover:border-solid transition-all border-black cursor-pointer divide-black">
        <div className="group flex-1 overflow-hidden p-4">
          <div className="p-4">
            <div className="h-32 items-center flex">
              <h3 className="text-xl">{v.fields.title}<span className="text-red-400">.</span></h3>
            </div>
            <div className="flex gap-2 border-t items-center mt-4 pt-4">
              {v.fields.customer.fields.logo &&
                <div className="w-8 items-center flex">
                  <ContentfulImage alt="" className="w-full" width={100} height={100} image={v.fields.customer.fields.logo}></ContentfulImage>
                </div>}

              <p>
                {v.fields.customer.fields.name}
              </p>
            </div>
          </div>
        </div>
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
        <Content>
          <Row className="gap-">
            <div className="self-center flex-1 h-fit">
              <h1 className="text-6xl bold md:text-8xl">
                responsible
                digitalization
                <span className="text-green-500">.</span><br></br>
              </h1>

            </div>

            <div className="cloud-animation md:relative md:blur-none md:opacity-100 absolute -z-10 blur-sm opacity-50 top-0 flex-0">
              <img src="v2/test.png" ></img>
            </div>
          </Row>
          <p className="mt-3 text-xl">Altostruct  är en konsultbyrå som specialiserar sig på automation och AI för att stödja företag. Med fokus på MLOps, skalbar molnarkitektur och CI/CD möjliggör vi ansvarsfull användning av AI-teknologi för att optimera och förbättra verksamheter.</p>
          <Row className="gap-4">
            <div className="flex mt-6">
              <Button label="Kontakta oss" onClick={() => { }}>
              </Button>
            </div>
            <div className="flex mt-6">
              <Button label="Om oss" onClick={() => { }}>
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


        <SectionWithLabel title="Om oss">
          <Row className="divide-dashed">
            <p className="flex-1 text-3xl pr-4 ">
              Vi är ett team av erfarna utvecklare
              <span className="text-green-300">.</span> Med en passion för teknologi och en djup förståelse för
              automatisering och effektivisering av digital infrastruktur erbjuder vi skräddarsydda lösningar för att stödja
              företags digitala resa.
            </p>
            <div className="flex pl-4 gap-4">
              <div className="m-auto w-32 h-32 relative group">
                <SiAwslambda className="w-32 h-32 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                <SiAwslambda className="w-32 h-32 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <SiAwslambda className="w-32 h-32 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>


            </div>
          </Row>
        </SectionWithLabel>

        <Content>
          <Row className="">
            <div className="m-auto">
              <h1 className="text-4xl mb-4">
                Se hur man använder <br></br>
                <div className="relative ">

                  <span className="text-9xl bold cursor-pointer  text-gray-900 hover:underline">artificiell intelligens</span>
                </div>

              </h1>
            </div>
            <div className="w-[100rem]">
              {/* <img src="/v2/real-ai.png"></img> */}
              <ExampleAI></ExampleAI>
            </div>
          </Row>
        </Content>


        <SectionWithLabel title="AI och automation med AWS">
          <Row className="divide-dashed">
            <p className="flex-1 text-3xl pr-4 ">
              Vi är ett team av erfarna utvecklare<span className="text-green-600">.</span> Med en passion för teknologi och en djup förståelse för
              automatisering och effektivisering av digital infrastruktur erbjuder vi skräddarsydda lösningar för att stödja
              företags digitala resa<span className="text-red-600">.</span>
            </p>
            <div className="flex pl-4 gap-4">
              <div className="m-auto w-32 h-32 relative group">
                <FaCloud className="w-32 h-32 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                <FaCloud className="w-32 h-32 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <FaCloud className="w-32 h-32 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>
              <div className="m-auto w-32 h-32 relative group">
                <MdOutlineAccessTime className="w-32 h-32 my-auto text-red-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                <MdOutlineAccessTime className="w-32 h-32 my-auto text-red-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <MdOutlineAccessTime className="w-32 h-32 my-auto text-red-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
              </div>
              <div className="m-auto w-32 h-32 relative group">
                <FaFileCode className="w-32 h-32 my-auto text-yellow-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
                <FaFileCode className="w-32 h-32 my-auto text-yellow-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-2 -translate-y-2 absolute" />
                <FaFileCode className="w-32 h-32 my-auto text-yellow-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-4 -translate-y-4 absolute" />
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


        <SectionWithLabel className="py-8" title="Vad menar vi med ansvarsfull digitalisering?">
          <Row className="divide-dashed">
            <div className="m-auto w-28 h-28 relative group">
              <FaChessKnight className="w-28 h-28 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
              <FaChessKnight className="w-28 h-28 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2 absolute" />
              <FaChessKnight className="w-28 h-28 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 -translate-y-4 absolute" />
            </div>
            <p className="flex-1 m-auto text-4xl pl-8 bold">
              Kunniga, nyfikna och passionerade människor i partnerskap
            </p>
          </Row>
          <Row className="divide-dashed">
            <div className="m-auto w-28 h-28 relative group">
              <MdOutlineAccessTime className="w-28 h-28 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
              <MdOutlineAccessTime className="w-28 h-28 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2 absolute" />
              <MdOutlineAccessTime className="w-28 h-28 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 -translate-y-4 absolute" />
            </div>
            <p className="flex-1 m-auto text-4xl pl-8 bold">
              Beprövade agila och hållbara metoder för innovation och automation
            </p>
          </Row>
          <Row >
            <div className="m-auto w-28 h-28 relative group">
              <FaAws className="w-28 h-28 my-auto text-blue-900 transition-all group-hover:translate-x-0 group-hover:translate-y-0 absolute" />
              <FaAws className="w-28 h-28 my-auto text-blue-700 transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-2 -translate-y-2 absolute" />
              <FaAws className="w-28 h-28 my-auto text-blue-500  transition-all group-hover:translate-x-0 group-hover:translate-y-0 translate-x-4 -translate-y-4 absolute" />
            </div>
            <p className="flex-1 m-auto text-4xl pl-8 bold">
              Lösningar byggda på ledande molnplattformar för skalbarhet, säkerhet och produktivitet.       </p>
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

      <Content>
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
      </Content>
      <Footer></Footer>
    </>

  );
}

export default Home;