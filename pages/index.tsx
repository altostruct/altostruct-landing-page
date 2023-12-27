import { PropsWithChildren, ReactNode } from "react";
import Quotes from "@components/Quotes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Topbar from "@components/Topbar/Topbar";
import { ContentfulImage } from "@components/Contentful";
import { getReferenceCases, getReferenceCasesFromProducts, getContentfulPosts, ContentfulAuthor } from "utils/contentful";
import classNames from "classnames";
import WordCircle from "@components/WordCircle";
import formatDate from "utils/formatDate";
const quotes = require(".data/contentful/customerQuote/all.json")



const getAuthorsNames = (authors: ContentfulAuthor[]) => {
  return authors.map((author, index, arr) => {
    if (index === 0) {
      return `${author.fields.firstName} ${author.fields.lastName}`
    }
    if (index === arr.length - 1) {
      return ` & ${author.fields.firstName} ${author.fields.lastName}`
    }
    return `, ${author.fields.firstName} ${author.fields.lastName}`
  })
}
const Button = (props: { label: string, icon?: ReactNode }) => {
  const { label, icon } = props
  return <a className="p-2 border">{label}</a>
}

const Content = (props: PropsWithChildren<{ className?: string, fullWidth?: boolean }>) => {
  const { children, className, fullWidth = false } = props

  return <section className={classNames(className, { "m-auto max-w-[2048px] w-8/12": !fullWidth })}>
    {children}
  </section>
}

const Row = (props: PropsWithChildren<{ className?: string }>) => {
  const { children, className } = props

  return <div className={classNames("flex items-stretch flex-row w-full ", className)}>
    {children}
  </div >
}

export default function Home() {



  return (
    <>
      <div className="flex flex-col gap-24 my-48">
        <Topbar></Topbar>
        <Content>
          <Row>
            <div className="flex-1">
              <h1 className="text-7xl">
                responsible digilization <br></br>
                with ai and cloud<span className="text-green-500">.</span>
              </h1>
              <p className="mt-3">AI och molnpartner som hjälper dig och ditt bolag.</p>
            </div>
            <div>

            </div>

          </Row>
        </Content>
        <Content>
          <div className="border-gray-100 border p-4">
            <Row className="gap-32 px-24">
              <div className="flex-1  flex justify-center" >
                <img width={"60%"} className="m-auto" src="/v2/aws_logo.png"></img>
              </div>
              <div className="flex-1  flex justify-center" >
                <img width={"100%"} className="m-auto" src="/v2/anthoripic.png"></img>
              </div>
              <div className="flex-1 flex justify-center" >
                <img width={"100%"} className="m-auto" src="/v2/Ingram_micro_logo.png"></img>
              </div>
              <div className="flex-1 flex justify-center" >
                <img width={"60%"} className="m-auto" src="/v2/open_ai.png"></img>
              </div>
            </Row>
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
        <Content>
          <Row className="gap-8">
            <div className="flex-1">
              <h2 className="mb-2"><WordCircle>Effektivisering</WordCircle></h2>
              <p>
                Vi på altostruct tror att automation och effektivisering genom AI kommer att förändra alla brancher.
                Vi vill därför hjälpa er att att
              </p>
            </div>

          </Row>
        </Content>


        <Content>
          <span className="flex gap-2 items-baseline pb-10">
            <h2 className="text-center">
              Nyheter från oss
            </h2>
          </span>
          <Row className="gap-2 group">
            {getContentfulPosts().sort((a, b) => new Date(b.fields.createDate).getTime() - new Date(a.fields.createDate).getTime()).slice(0, 4).map((v: any, index) => {
              return <div key={index} className="border-black border-dashed border-4 hover:border-solid transition-all gap-4 p-4 cursor-pointer group flex-1 overflow-hidden flex flex-col">
                {/* <img className="blur-md aspect-square group-hover:blur-0 -z-10 top-0 transition-all group-hover:scale-100" src="/images/backgrounds/nextImageExportOptimizer/cloud-opt-828.WEBP"></img> */}
                <div className="flex-1">
                  {v.fields.image && <ContentfulImage alt="" image={v.fields.image}></ContentfulImage>}
                </div>
                <p className="text-sm overflow-hidden line-clamp-2 text-ellipsis ">
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
              </div>
            })}
          </Row>
          <div className="mt-4">
            <Button label="Läs mer"></Button>
          </div>
        </Content>

        <Content fullWidth className="w-screen max-w-[100vw] border-black border-y-4 border-dashed flex flex-col">
          <Row className="gap-6 divide-x-4 divide-dashed divide-black">
            {getReferenceCases().slice(0, 4).map((v: any, index) => {
              return <div key={index} className="group flex-1 overflow-hidden p-4">
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
            })}
          </Row>

        </Content>
        <Content>
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
                  <img className="m-auto h-full object-cover" src="/v2/erik.webp"></img>
                </div>
                <div>
                  <p className="text-lg">Erik Rehn - CEO</p>
                  <p >erik.rehn@altostruct.se</p>
                </div>

              </div>
            </Row>

          </div>
        </Content>

        <div className="bg-black py-12 text-white">
          <Content>
            <h2 className="mb-8">vad är molnet.</h2>
            <Row className="gap-2">
              <div className="flex-1">
                <h3>Optimering</h3>
                <p> Vi hjälper dig att effektivisera din befintliga infrastruktur och minimera kostnaderna.</p>
              </div>
              <div className="flex-1">
                <h3>Migration</h3>
                <p>Vi hjälper dig att effektivisera din befintliga infrastruktur och minimera kostnaderna.</p>
              </div>
              <div className="flex-1">
                <h3>Skräddarsyr</h3>
                <p>Vi hjälper dig att effektivisera din befintliga infrastruktur och minimera kostnaderna.</p>
              </div>
            </Row>
          </Content>
        </div>
        <Content>
        </Content>
      </div >
    </>
  );
}
