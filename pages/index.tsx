import { PropsWithChildren, ReactNode } from "react";
import Quotes from "@components/Quotes";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Topbar from "@components/Topbar/Topbar";
import { ContentfulImage } from "@components/Contentful";
import { getReferenceCases, getReferenceCasesFromProducts, getContentfulPosts, ContentfulAuthor } from "utils/contentful";
import classNames from "classnames";
import WordCircle from "@components/WordCircle";
import formatDate from "utils/formatDate";
import quotes from ".data/contentful/customerQuote/all.json"
import Footer from "@components/Footer";
import Form from "@components/Email";
import Button from "@components/Button";



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

const SectionWithTitle = (props: { title: string, children: ReactNode }) => {
  const { title, children } = props
  return <Content>
    <Row className="gap-8">
      <div className="flex-1">
        <h2 className="mb-5 text-5xl"><WordCircle>{title}</WordCircle></h2>
        {children}
      </div>
    </Row>
  </Content>
}

const Content = (props: PropsWithChildren<{ className?: string, fullWidth?: boolean }>) => {
  const { children, className, fullWidth = false } = props

  return <section className={classNames(className, { "m-auto max-w-[2048px] w-8/12": !fullWidth })}>
    {children}
  </section>
}


// const BadgeComponent = (props: { children: ReactNode, className?: string, tag: string }) => {
//   const { children, className, tag } = props
//   return <div className={classNames("bg-red-200 w-full relative overflow-visible", className)}>
//     <div className="text-white bg-black absolute top-0 left-0 -translate-y-full">{tag}</div>
//     {children}
//   </div>
// }

const Row = (props: PropsWithChildren<{ className?: string }>) => {
  const { children, className } = props

  return <div className={classNames("flex flex-col items-stretch w-full md:flex-row", className)}>
    {children}
  </div >
}


const ArticleList = () => {
  return <Row className="gap-2">
    {getContentfulPosts().sort((a, b) => new Date(b.fields.createDate).getTime() - new Date(a.fields.createDate).getTime()).slice(0, 4).map((v: any, index) => {
      return <a href={"/blog/" + v.fields.slug} key={index} className="border-black border-dashed border-4 hover:border-solid transition-all gap-4 p-4 cursor-pointer group flex-1 flex overflow-hidden flex-col">
        <div className="flex-1 p-2 bg-red-200">
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
  return <Row className="gap-2">
    {getReferenceCases().slice(0, 4).map((v: any, index) => {
      return <Row key={index} className="gap-6 divide-x-4 divide-dashed border-dashed border-4 hover:border-solid transition-all border-black cursor-pointer divide-black">
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
      <div className="flex flex-col gap-24 my-48">
        <Topbar></Topbar>
        <Content>
          <Row >
            <div className="self-center flex-1 h-fit">
              <h1 className="text-2xl md:text-7xl ">
                responsible digilization <br></br>
                with ai and cloud<span className="text-green-500">.</span>
              </h1>
              <p className="mt-3">AI och molnpartner som hjälper dig och ditt bolag.</p>
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
            </div>
            <div>
            </div>
            <div className="cloud-animation flex-1">
              <img src="v2/test.png" ></img>
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

        <SectionWithTitle title="Om oss">
          <p>We are a small team :)</p>
        </SectionWithTitle>

        <SectionWithTitle title="Effektivisering">
          <p>
            Vi på altostruct tror att automation och effektivisering genom AI kommer att förändra alla brancher.
            Vi vill därför hjälpa er att att
          </p>
        </SectionWithTitle>

        <SectionWithTitle title="Nyheter från oss">
          <ArticleList></ArticleList>
        </SectionWithTitle>

        <SectionWithTitle title="Våra cases">
          <CaseList></CaseList>
        </SectionWithTitle>

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
                  <img className="m-auto h-full object-cover" src="v2/erik.webp"></img>
                </div>
                <div>
                  <p className="text-lg">Erik Rehn - CEO</p>
                  <p >erik.rehn@altostruct.se</p>
                </div>

              </div>
            </Row>

          </div>
        </Content>

        <Content>
          <Row className="">
            <div className="flex-1">
              <Form className="flex-1"></Form>
            </div>
          </Row>
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