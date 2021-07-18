import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Logo from "../components/Logo"
import "../styles/index.scss"
import Img from "gatsby-image"
import TechStack from "../components/TechStack"
import VisibilitySensor from "react-visibility-sensor"
// @ts-ignore: No package for type
import Reveal from "react-reveal/Reveal"
// @ts-ignore: No package for type
import Slide from "react-reveal/Slide"
import { Arrow } from "../components/Arrow"
import { KeyIcon } from "../components/KeyIcon"
import { Footer } from "../components/Footer"
import SEO from "../components/SEO"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query ContactImage {
      CloudImage: file(relativePath: { eq: "assets/cloud.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      BackgroundDust: file(
        relativePath: { eq: "assets/background-dust.jpeg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Emilio: file(relativePath: { eq: "assets/emilio.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Erik: file(relativePath: { eq: "assets/erik.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Stockholm: file(relativePath: { eq: "assets/stockholm.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Coffee: file(relativePath: { eq: "assets/coffee.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Team: file(relativePath: { eq: "assets/team.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      GraphQL: file(relativePath: { eq: "assets/graphql.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const cards = [
    {
      image:
        "https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_400x400.jpg",
      title: "NodeJS",
      description: "We love NodeJS(This site was built using it)",
    },
    {
      image:
        "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      title: "AWS",
      description:
        "Worked extensivly with Fargate, SQS, SNS, S3 and so much more",
    },
    {
      image: "https://www.python.org/static/opengraph-icon-200x200.png",
      title: "Python",
      description: "We <3 Python",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU",
      title: "React",
      description: "Simple yet so powerful. What is not to love?",
    },
    {
      image: query.GraphQL.childImageSharp.fluid.src,
      title: "GraphQL",
      description: "Loving GraphQL since 2018!",
    },
  ]

  interface NumberPageProps {
    title: string
    description: React.ReactNode
    number: string
  }

  const NumberPage = (props: NumberPageProps) => {
    return (
      <div className="fullpage h-3/4">
        <div className="grid grid-cols-2 content m-auto">
          <div
            className="col-span-2 md:text-right md:pr-12 absolute transform scale-90 -translate-y-10 md:-translate-y-0 opacity-10 md:opacity-100 md:relative font-extrabold md:col-span-1"
            style={{ fontSize: "50vh" }}
          >
            <Reveal>{props.number}</Reveal>
          </div>
          <div className="flex col-span-2 md:col-span-1">
            <div className="m-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-4 gradient-text">
                {props.title}
              </h1>
              <p className="">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  interface ImageWithTitleProps {
    title: string
    description: React.ReactNode
    imageSrc: any
    reverse?: boolean
  }

  const ImageWithTitle = (props: ImageWithTitleProps) => {
    let arr = [
      <div className="col-span-2 md:col-span-1 flex z-20">
        <div className="m-auto">
          <Slide right={props.reverse} left={!props.reverse}>
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              {props.title}
            </h1>
            <p className="text-md md:text-xl">{props.description}</p>
          </Slide>
        </div>
      </div>,
      <div className="opacity-100 order-1 md:order-none w-full md:opacity-100 col-span-2 md:col-span-1 transform -translate-y-3">
        <Slide right={!props.reverse} left={props.reverse}>
          <Img
            className="h-64 m-auto md:h-full"
            style={{
              maxHeight: "50vh",
            }}
            fluid={props.imageSrc}
          />
        </Slide>
      </div>,
    ]

    if (props.reverse) arr = arr.reverse()

    return (
      <div className="fullpage mb-10">
        <div className="grid gap-10 gap-y-10 grid-cols-2 content m-auto">
          {arr}
        </div>
      </div>
    )
  }
  return (
    <>
      <SEO
        title="Startup consulting for cloud and web"
        description="Stockholm based cloud and web consulting for startups"
        lang="en"
      />
      <span className="w-screen flex md:w-auto bg-white rounded-b-lg  border fixed z-20 left-1/2 transform -translate-x-1/2 p-1 ">
        <div className="w-24 m-auto ">
          <Logo></Logo>
        </div>
      </span>
      <div className="fixed z-10 fullpage-container">
        <div className="fullpage p-4 w-full h-4/5">
          <div className="m-auto ">
            <div>
              <Reveal>
                <div className="flex absolute w-full h-full top-0 left-0">
                  <Img
                    className="opacity-50 md:opacity-100 m-auto mt-0 w-96 h-96"
                    fluid={query.BackgroundDust.childImageSharp.fluid}
                  ></Img>
                </div>
              </Reveal>
              <div className="w-full h-full relative ">
                <h1 className="text-5xl text-center md:text-7xl font-extrabold ">
                  Consulting for startups <br></br> and innovative companies
                </h1>
                <p className="mt-10 text-xl text-center font-mono">
                  Stockholm based cloud and web consulting agency cloud
                </p>
              </div>
            </div>
          </div>
        </div>

        <ImageWithTitle
          description={
            <>
              What do you mean by "startup consulting"? Ordinary consulting
              agencies work great for huge corporations having long-term
              projects. However, many startups are not able to make such a
              commitment. Therefore, we thought we would offer an alternative.
            </>
          }
          title="Startup Consulting"
          imageSrc={query.CloudImage.childImageSharp.fluid}
        ></ImageWithTitle>

        <ImageWithTitle
          description={
            <>
              Altostruct is a cloud consulting agency focusing on startups.
              Since 2020 we have worked with many different companies, helping
              them build everything from mobile apps to AI deployment models.
            </>
          }
          reverse
          title="What are we?"
          imageSrc={query.Team.childImageSharp.fluid}
        ></ImageWithTitle>

        <ImageWithTitle
          description={
            <>
              Our focus is on web applications based on cloud and scalable
              infrastructure, the perfect match for quickly growing companies!
              Our team consists of new talent from KTH mixed with senior
              developers, giving your company a mix of new modern thoughts
              combined with expertise that comes with experience.
            </>
          }
          title="Altowhat?"
          imageSrc={query.Coffee.childImageSharp.fluid}
        ></ImageWithTitle>

        <div className="fullpage">
          <div className="content m-auto">
            <div className="w-full h-auto md:h-96">
              <a
                rel="noopener"
                href="https://www.linkedin.com/in/emilio-gustavsson-737983147/"
              >
                <div className="hover:rotate-180 transition-all w-40 md:absolute md:bottom-5 left-1/2 md:right-0 md:left-auto relative transform -translate-x-1/2  mb-10 ">
                  <Img
                    className="m-auto overflow-hidden rounded-full  "
                    style={{ width: "100%", maxHeight: "50vh" }}
                    fluid={query.Emilio.childImageSharp.fluid}
                  />
                </div>
              </a>
              <p className="text-md md:text-xl font-mono">
                <Reveal>
                  "Many consulting agencies are built for big companies. Their
                  way of working suits large organizations with big projects.
                  However, in many startups, there is often a need to develop
                  prototypes quickly and agile. To service this need, we started
                  Altostruct."
                  {/*All of us at Altostruct are from the startup world
                  and love the energetic and agile process that is required to
                  get your product to the market in time. */}
                </Reveal>
              </p>
              <br></br>
              <small className="uppercase float-right">
                Emilio Gustavsson, COO, co-founder
              </small>
            </div>
          </div>
        </div>

        <div className="h-1/2 fullpage mt-12 mb-12">
          <div className="content flex m-auto">
            <div className="w-8/12 float-left">
              <h1 className="text-3xl mb-2 md:text-7xl font-bold">
                Our three <i>key attributes...</i>
              </h1>
              <p className="">
                Of course, we offer a lot more than just these three attributes,
                but for some reason, bigger companies always list things in
                three, so we decided to do the same.
              </p>
            </div>
            <div className="w-4/12 animate-ping hover: flex transform rotate-45 float-left">
              <div className="m-auto w-full">
                <KeyIcon />
              </div>
            </div>
          </div>
        </div>
        <NumberPage
          number="1."
          title="Flexible pricing"
          description={
            <>
              We offer flexible solutions for payment tailored to your needs. At
              Altostruct we believe in your idéa and are proud to say that we
              are part-owners in the majority of our clients.
            </>
          }
        ></NumberPage>
        <NumberPage
          number="2."
          title="Dedicated developers"
          description={
            <>
              Unlike many other consulting agencies, we are also a startup,
              which means that we can relate to the long nights, the important
              meetings and the passion for the product. At Altostruct, we live,
              breathe, and love the startup way of working.
            </>
          }
        ></NumberPage>
        <NumberPage
          number="3."
          title="Latest technology"
          description={
            <>
              We believe that to reach the market quickly and scalable, your
              company needs to use all the tools at your disposal. Consequently,
              we are strong advocators of using the latest technology within
              your field.
            </>
          }
        ></NumberPage>
        <div className="fullpage">
          <div className="content m-auto">
            <div className="w-full">
              <a
                rel="noopener"
                href="https://www.linkedin.com/in/erik-rehn-b12556194/"
              >
                <div className="hover:rotate-180 transition-all w-40 md:absolute md:bottom-5 left-1/2 md:right-0 md:left-auto relative transform -translate-x-1/2 rounded-full overflow-hidden mb-10 ">
                  <Img
                    className="m-auto overflow-hidden rounded-full  "
                    style={{ width: "100%", maxHeight: "50vh" }}
                    fluid={query.Erik.childImageSharp.fluid}
                  />
                </div>
              </a>
              <p className="text-md md:text-xl font-mono">
                <Reveal>
                  "All of us at Altostruct are from the startup world and love
                  the energetic and agile process that is required to get your
                  product to market in time."
                </Reveal>
              </p>
              <br></br>
              <small className="uppercase float-right">
                Erik Rehn, CEO, co-founder
              </small>
            </div>
          </div>
        </div>
        <div className="h-56 w-full"></div>
        <div className="fullpage" style={{ height: "130vh" }}>
          <VisibilitySensor delayedCall scrollDelay={1000} partialVisibility>
            {({ isVisible }) => {
              if (isVisible) {
                return (
                  <div id="techstack" className="mt-10 md:pt-10">
                    <div className="w-screen text-center flex -mb-64">
                      <div className="w-full p-10  m-auto">
                        <h1 className="text-7xl pb-2 font-extrabold">
                          Our tech stack?
                        </h1>
                        <p className="md:w-96 m-auto">
                          Here are some of the technologies we work with on a
                          daily basis. We work with a lot more but I did not
                          have time to find icons for all
                        </p>
                      </div>
                    </div>

                    <TechStack cards={cards} />
                  </div>
                )
              } else {
                return <div className="w-full h-3/10 bg-red" />
              }
            }}
          </VisibilitySensor>
        </div>
        <div className="fullpage">
          <div className="content m-auto">
            <div className="m-auto ">
              <div className="pb-10 md:pb-20">
                <div className="w-10 h-10 absolute left-0 top-0 warning-center">
                  <div className="warning-label-container">
                    <div className="warning-label">
                      <p className="text-4xl">
                        {new Array(35)
                          .fill("DO NOT TAKE OUR WORD FOR IT")
                          .join(" • ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full pb-10 text-6xl md:text-8xl font-bold md:text-1xl text-center mt-10">
              <i>
                <p>
                  listen <br></br>to our <br></br>customers
                </p>
              </i>
            </div>
            {/* <p className="text-right pb-20">
              * they are not made up we promise
            </p> */}
            <div className="absolute bottom-10 text-6xl left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce">
                <div className="animate-pulse">
                  <Arrow></Arrow>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        </div>

        <div className="fullpage">
          <div className="content p-1 m-auto">
            <div className="pb-96">
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32 ">
                <div className="float-left w-12/12">
                  <h1 className="text-5xl md:text-7xl mb-10 font-bold">
                    Tendium
                  </h1>
                  <p className="text-gray-900 text-sm md:text-lg mb-10">
                    Intelligent procurement watching system that uses AI to find
                    perfect matches for you. Altostruct was there from day one.
                    We helped build and design the customer portal using React,
                    GraphQL and Amazon Web Services.
                  </p>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://www.tendeye.com/"
                    className="w-full md:w-auto text-center bg-blue-500 hover:scale-110 transform transition float-right text-white p-3 rounded"
                  >
                    Link to project
                  </a>
                </div>
              </div>
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32 ">
                <div className="float-left w-12/12">
                  <h1 className="text-5xl md:text-7xl mb-10 font-bold">
                    Foodfacts
                  </h1>
                  <p className="text-gray-900 text-sm md:text-lg mb-10">
                    Startup that provides better product data using AI.
                    Altostruct helped build their IOS/Android application as
                    well as their REST API. We used Amazon Web Services along
                    with NodeJS for this project.
                  </p>
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://apps.apple.com/se/app/foodfacts/id1551098296"
                    className="w-full md:w-auto text-center bg-blue-500 hover:scale-110 transform transition float-right text-white p-3 rounded"
                  >
                    Link to project
                  </a>
                </div>
              </div>
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32  ">
                <div className="float-left w-12/12">
                  <h1 className="text-5xl md:text-7xl mb-10 font-bold">
                    Stella Polaris
                  </h1>
                  <p className="text-gray-900 text-sm md:text-lg mb-10">
                    MedTech startup whose primary goal is to help customers
                    achieve a healthier lifestyle using big-data and AI. We
                    helped deploy their AI models in a scalable way.
                  </p>
                  <a
                    rel="noopener"
                    href="https://stellapolaris.ai/"
                    className="w-full md:w-auto text-center bg-blue-500 hover:scale-110 transform transition float-right text-white p-3 rounded"
                  >
                    Link to project
                  </a>
                </div>
              </div>
              <div className="overflow-auto flex  shadow-2xl p-10 hover:shadow-md">
                <div className="float-left w-12/12">
                  <h1 className="text-5xl md:text-7xl mb-10 font-bold">
                    Nrlyze
                  </h1>
                  <p className="text-gray-900 text-sm md:text-lg mb-10">
                    Startup that strives to heat up houses as efficiently as
                    possible. Altostruct helped Nrlyze build a customer portal
                    as well as an API to expose their data to collaborators.
                  </p>
                  <a
                    rel="noopener"
                    href="http://nrlyze-site.website-eu-central-1.linodeobjects.com/login"
                    className="w-full md:w-auto text-center bg-blue-500 hover:scale-110 transform transition float-right text-white p-3 rounded"
                  >
                    Link to project
                  </a>
                </div>
                <div className="float-left flex m-auto w-0 md:2/12">
                  <img
                    className="w-full"
                    src="https://www.nrlyze.se/wp-content/uploads/2021/01/logo_nrlyze_std.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="fullpage">
          <div className="content grid gap-10 h-screen grid-cols-2 grid-rows-2">
            <div className="col-span-1 p-20  flex shadow-2xl text-center transition-all hover:scale-110 transform">
              <div className="m-auto">
                <h1 className="text-7xl mb-10 font-bold">Tendium</h1>
                <p className="text-gray-700 text-xl">
                  Tendium är ett svenskt forskningsbolag som arbetar för att
                  förbättra den offentliga marknaden med hjälp av AI.
                </p>
              </div>
            </div>
            <div className="col-span-1 p-4 shadow-2xl text-center transition-all hover:scale-110 transform">
              <h1 className="text-7xl mb-10">Foodfacts</h1>
              <p className="text-gray-700 text-xl">
                Tendium är ett svenskt forskningsbolag som arbetar för att
                förbättra den offentliga marknaden med hjälp av AI.
              </p>
            </div>
            <div className="col-span-1 p-4 shadow-2xl text-center transition-all hover:scale-110 transform">
              <h1 className="text-7xl text-center">Stella Polaris</h1>
            </div>
            <div className="col-span-1 p-4 shadow-2xl text-center transition-all hover:scale-110 transform">
              <h1 className="text-7xl text-center">Nrlyze</h1>
            </div>
          </div>
        </div> */}
        </div>
        <div className="dark">
          <div className="fullpage">
            <div className="m-auto mt-16 content h-96 md:h-screen ">
              <div className="flex text-white">
                <div className="m-auto">
                  <h1 className="text-3xl md:text-6xl mb-6 font-extrabold">
                    Located in <br></br>central Stockholm
                  </h1>
                  <p className="text-lg">
                    We are located in central Stockholm. It is always easy to
                    get in touch with us. Do not hesitate to email or give us a
                    call! Or better yet, how about a small fika? 🍪
                  </p>
                </div>
              </div>
              <div className="absolute transform -translate-x-1/2 -translate-y-full left-1/2 w-1/3 bg-red-200 bottom-0">
                <Img
                  className="m-auto"
                  style={{ width: "100%", maxHeight: "50vh" }}
                  fluid={query.Stockholm.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>

          {/* <div className="fullpage">
            <div>
              <div className="text-white  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-4xl md:text-8xl mb-10 font-extrabold">
                  CONTACT US
                </h1>
                <a
                  href="mailto:info@altostruct.se"
                  target="_blank"
                  className="p-4 border border-white rounded"
                >
                  CLICK HERE
                </a>
              </div>
            </div>
          </div>
          <Footer /> */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default IndexPage
