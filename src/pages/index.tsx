import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Logo from "../components/Logo"
import "../styles/index.scss"
import Img from "gatsby-image"
import TechStack from "../components/TechStack"
import VisibilitySensor from "react-visibility-sensor"
// @ts-ignore: No package for type
import Reveal from "react-reveal/Reveal"
import { Arrow } from "../components/Arrow"

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
      Stockholm: file(relativePath: { eq: "assets/stockholm.png" }) {
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
            className="col-span-2 absolute transform scale-90 -translate-y-10 md:-translate-y-0 opacity-10 md:opacity-100 md:relative font-extrabold md:col-span-1"
            style={{ fontSize: "50vh" }}
          >
            {props.number}
          </div>
          <div className="flex col-span-2 md:col-span-1">
            <div className="m-auto">
              <h1 className="text-6xl font-semibold mb-6">{props.title}</h1>
              <p className="text-xl">{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* <SEO title="Home" /> */}
      <div className="fullpage-container">
        <div className="fullpage w-full h-full">
          <div className="absolute w-full p-4 md:p-0 md:w-1/3 left-1/2 transform -translate-x-1/2 bottom-1/3">
            <div className="w-full">
              <Logo></Logo>
            </div>
            <br></br>
            <p className="text-center">
              Cloud and web consulting for startups and innovative companies
            </p>
          </div>
        </div>
        <div className="fullpage mb-10">
          <div className="grid grid-cols-2 content m-auto">
            <div className="col-span-1 flex z-20">
              <div
                className="m-auto"
                style={{ transform: "translate(7.5%, 0%)" }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-2">
                  Startup Consulting
                </h1>
                <p className="text-md md:text-xl">
                  What do you mean by "startup consulting"? Ordinary consulting
                  agencies work great for huge corporations having long-term
                  projects. However, many startups are not able to make such a
                  commitment. Therefore we thought we should offer an
                  alternative.
                </p>
              </div>
            </div>

            <div className="opacity-50 md:opacity-100 col-span-1 transform -translate-y-3">
              <Img
                style={{
                  width: "100%",
                  maxHeight: "50vh",
                  transform: "translate(-7.5%, 0%)",
                }}
                fluid={query.CloudImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
        <div className="fullpage">
          <div className="content m-auto">
            <div className="w-full">
              <a href="https://www.linkedin.com/in/emilio-gustavsson-737983147/">
                <div className="hover:rotate-180 transition-all w-40 md:absolute md:bottom-5 left-1/2 md:right-0 md:left-auto relative transform -translate-x-1/2 rounded-full overflow-hidden mb-10 ">
                  <img
                    className="rounded-full"
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQHLC2xDvb_ILA/profile-displayphoto-shrink_200_200/0/1560703931489?e=1624492800&v=beta&t=88x_kiiHB_XBQJGBBvUs80VVIuoBD17C3s9-KY5P_WY"
                  ></img>
                </div>
              </a>
              <p className="text-md md:text-xl font-mono">
                <Reveal>
                  "Many consulting agencies are built for big companies. Their
                  way of working suits large organizations with big projects.
                  However, in many startups, there is often a need to develop
                  prototypes quickly and agile. To service this need, we started
                  Altostruct. All of us at Altostruct are from the startup world
                  and love the energetic and agile process that is required to
                  get your product to the market in time. To ensure this, during
                  the startup period of your company, payments can be reduced up
                  to 50 %."
                </Reveal>
              </p>
              <br></br>
              <small className="uppercase float-right">
                Emilio Gustavsson, co-founder, COO(Cheifs Onion Officer)
              </small>
            </div>
          </div>
        </div>
        <NumberPage
          number="1."
          title="Flexible pricing"
          description={
            <>
              We offer a flexible solution tailored to your needs. During
              periods before revenue, payment can be{" "}
              <u>
                <b>reduced by up to 50%</b>
              </u>
              to ensure that we reach the market in time. At Altostruct we
              believe in you idéa and are proud to say that we small part
              partners with the majority of our projects.
            </>
          }
        ></NumberPage>
        <NumberPage
          number="2."
          title="Dedicated developers"
          description={
            <>
              Unlike many other consulting agencies,{" "}
              <u>
                <b>we are also a startup.</b>
              </u>
              . which means that we can relate to the long nights, the important
              meetings and the passion for the product. At Altostruct, we live,
              breathe, and love the startup way of working. We believe that to
              reach the market quickly and scalable, your company needs to use
              all the tools at your disposal. Consequently, we are strong
              advocators of using the latest technology within your field. Using
              Amazon Web Services, React, NodeJS, GraphQL, and other technology,
              Altostruct is able to offer quick sustainable solutions at a low
              cost.
            </>
          }
        ></NumberPage>
        <NumberPage
          number="3."
          title="Latest technology"
          description={
            <>
              We believe that to reach a market quickly and scalable you need to
              use all the tools at your disposal. Therefore we are strong
              advocators of using the latest technology within your field. Using
              Amazon Web Services, React, NodeJS, GraphQL, and other technology,
              we at Altostruct have built sustainable solutions quickly and at a
              low cost.
            </>
          }
        ></NumberPage>
        <div className="fullpage" style={{ height: "130vh" }}>
          <VisibilitySensor scrollDelay={1} partialVisibility>
            {({ isVisible }) => {
              if (isVisible) {
                return (
                  <div className="mt-2 md:pt-10">
                    <div className="w-screen text-center flex -mb-64">
                      <div className="w-full p-10  m-auto">
                        <h1 className="text-7xl font-extrabold">
                          Our tech stack?
                        </h1>
                        <p className="md:w-96 m-auto">
                          Here are some of technologies we work with on a daily
                          basis. We ofcourse work with a lot more but I did not
                          have the time to find icons for all out.
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
        <div className="fullpage h-screen">
          <div className="content m-auto">
            <div className="m-auto">
              <div className="warning-label-container absolute left-0 mt-48 z-0 md:mt-42">
                <div className="warning-label">
                  <p className="text-3xl">
                    {new Array(35).fill("DO NOT TRUST US").join(" • ")}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full text-6xl md:text-8xl font-bold md:text-1xl text-center mt-10">
              <i>
                <p>
                  listen <br></br>to our <br></br>customers
                </p>
              </i>
              <div className="absolute bottom-10 text-6xl left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                  <div className="animate-pulse">
                    <Arrow></Arrow>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <p className="text-right">* they are not made up we promise</p>
          </div>
        </div>

        <div className="fullpage">
          <div className="content p-1  m-auto pb-96">
            <div className="pb-96">
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32 ">
                <div className="float-left w-10/12">
                  <h1 className="text-5xl md:text-7xl mb-10 font-bold">
                    Tendium
                  </h1>
                  <p className="text-gray-700 text-sm md:text-2xl">
                    Intelligent procurement watching system using AI to find
                    perfect matches for you. Altostruct helped build the
                    customer portal using GraphQL and Amazon web services.
                  </p>
                </div>
                <div className="float-left flex m-auto w-0 md:2/12">
                  <img
                    className="w-full"
                    src="https://tendium.ai/se/wp-content/uploads/sites/3/2020/05/Tendium_logo.svg"
                  ></img>
                </div>
              </div>
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32 ">
                <div className="float-left w-10/12">
                  <h1 className="text-5xl md:text-7xl mb-10 font-bold">
                    Foodfacts
                  </h1>
                  <p className="text-gray-700 text-sm md:text-2xl">
                    Intelligent procurement watching system using AI to find
                    perfect matches for you. Altostruct helped build the
                    customer portal using GraphQL and Amazon web services.
                  </p>
                </div>
                <div className="float-left flex m-auto w-0 md:2/12">
                  <img
                    className="w-full"
                    src="https://images.squarespace-cdn.com/content/v1/5e1f7c9f5befaa48195e7825/1615794292296-8LL1XGQ1QXZH1SN0KS5S/ke17ZwdGBToddI8pDm48kP0L8Sp7uR8r-tv67D-_eZV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0pF-iG7-huG6Vk1ZMWheK73oFQ5L1c6PuyqM3piR2oKj6FE9aj_z8a04KUMQJPlJlg/FoodFacts-screens-white.png?format=1500w"
                  ></img>
                </div>
              </div>
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32  ">
                <div className="float-left w-10/12">
                  <h1 className="text-5xl md:text-7xl mb-10 font-bold">
                    Stella Polaris
                  </h1>
                  <p className="text-gray-700 text-sm md:text-2xl">
                    Intelligent procurement watching system using AI to find
                    perfect matches for you. Altostruct helped build the
                    customer portal using GraphQL and Amazon web services.
                  </p>
                </div>
                <div className="float-left flex m-auto w-0 md:2/12">
                  <img
                    className="w-full"
                    src="https://i2.wp.com/stellapolaris.ai/wp-content/uploads/2018/12/Logo-v6-e1543856647483.png?fit=70%2C71&ssl=1"
                  ></img>
                </div>
              </div>
              <div className="overflow-auto flex  shadow-2xl p-10 hover:shadow-md">
                <div className="float-left w-10/12">
                  <h1 className="text-5xl md:text-7xl mb-10 font-bold">
                    Nrlyze
                  </h1>
                  <p className="text-gray-700 text-sm md:text-2xl">
                    Intelligent procurement watching system using AI to find
                    perfect matches for you. Altostruct helped build the
                    customer portal using GraphQL and Amazon web services.
                  </p>
                </div>
                <div className="float-left flex m-auto w-0 md:2/12">
                  <img
                    className="w-full"
                    src="https://www.nrlyze.se/wp-content/uploads/2021/01/logo_nrlyze_std.png"
                  ></img>
                </div>
              </div>
            </div>
            <div className="h-9 w-full"></div>
            <div className="h-96 w-full"></div>
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
            <div className="m-auto mt-16 content">
              <div className="flex text-white">
                <div className="m-auto">
                  <h1 className="text-3xl md:text-6xl font-extrabold">
                    Located in <br></br>central Stockholm
                  </h1>
                  <p>
                    Building you application right next to you. Make sure you
                    have the located where the towns{" "}
                  </p>
                </div>
              </div>
              <div className="absolute transform -translate-x-1/2 left-1/2 w-1/3 bg-red-200 bottom-10">
                <Img
                  className="m-auto"
                  style={{ width: "100%", maxHeight: "50vh" }}
                  fluid={query.Stockholm.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
          <div className="mt-20"></div>
          <div className="fullpage">
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
        </div>
      </div>
    </>
  )
}

export default IndexPage
