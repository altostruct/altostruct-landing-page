import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Logo from "../components/Logo"
import "../styles/index.scss"
import Img from "gatsby-image"
import TechStack from "../components/TechStack"
import VisibilitySensor from "react-visibility-sensor"
// @ts-ignore: No package for type
import Reveal from "react-reveal/Reveal"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query ContactImage {
      CloudImage: file(relativePath: { eq: "assets/cloud.jpg" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Stockholm: file(relativePath: { eq: "assets/stockholm.png" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GraphQL: file(relativePath: { eq: "assets/graphql.png" }) {
        childImageSharp {
          fluid(quality: 50) {
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
      description:
        "I think most of us see NodeJS as a family member at this point(This site was built using it)",
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
      description:
        "We <3 Python. Using Flask we created a AI server exposing a deep neural net as an API.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDablGa_xaGvUTE9ihIjQ0Yo-jCMFKdqnoQ&usqp=CAU",
      title: "React",
      description:
        "Used both React for web and React Native for mobile development! Simple yet so powerful. What is not to love?",
    },
    {
      image: query.GraphQL.childImageSharp.fluid.src,
      title: "GraphQL",
      description:
        "Started working with it in 2018! Both with Graphene and Apollo!",
    },
  ]

  interface NumberPageProps {
    title: string
    description: React.ReactNode
    number: string
  }

  const NumberPage = (props: NumberPageProps) => {
    return (
      <div className="fullpage">
        <div className="grid grid-cols-2 content">
          <div
            className="col-span-1 font-extrabold"
            style={{ fontSize: "50vh" }}
          >
            {props.number}
          </div>
          <div className="flex col-span-1">
            <div className="m-auto">
              <h1 className="text-8xl font-semibold mb-6">{props.title}</h1>
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
        <div className="fullpage">
          <div className="absolute w-1/3 left-1/2 transform -translate-x-1/2 bottom-1/3">
            <div className="w-full">
              <Logo></Logo>
            </div>
            <br></br>
            <p className="text-center">
              Cloud and web consulting for startups and innovative companies
            </p>
          </div>
        </div>
        <div className="fullpage">
          <div className="grid grid-cols-2 content m-auto">
            <div className="col-span-1 flex z-20">
              <div
                className="m-auto"
                style={{ transform: "translate(15%, 0%)" }}
              >
                <h1 className="text-8xl font-bold mb-6">Startup Consulting</h1>
                <p className="text-xl ">
                  What do you mean by "startup consulting"? Ordinary consulting
                  agencies work great for huge corporations having a two-year
                  project. However many startups are not able to make such a
                  commitment. Therefore we thought we should offer an
                  alternative.
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <Img
                style={{ width: "100%", maxHeight: "50vh" }}
                fluid={query.CloudImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
        <div className="fullpage">
          <div className="content flex">
            <div className="w-full relative m-auto">
              <p className="text-2xl font-mono">
                <Reveal>
                  "Many consulting agencies are built for big companies. Their
                  way of working suits large organizations with big projects.
                  However, in many startups, there is a need to develop quickly
                  and iterate the prototype. Therefore we started Altostruct. We
                  all are from the startup world and loves the quick and
                  iterative process and would like to share it with as many as
                  possible"
                </Reveal>
              </p>
              <br></br>
              <small className="uppercase float-right">
                Emilio Gustavsson, co-founder, COO(Cheifs Onion Officier)
              </small>

              <div className="absolute mt-20 rounded-full overflow-hidden right-0">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHLC2xDvb_ILA/profile-displayphoto-shrink_200_200/0/1560703931489?e=1624492800&v=beta&t=88x_kiiHB_XBQJGBBvUs80VVIuoBD17C3s9-KY5P_WY"></img>
              </div>
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
              Unlike many other consulting agencies{" "}
              <u>
                <b>we are also a startup.</b>
              </u>{" "}
              The long nights, the important meetings, and the passion for the
              product. At Altostruct we live, breathe, and love the startup way
              of working.
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
        <div className="fullpage">
          <div className="m-auto">
            <p className="text-lg m-0 ">
              do not just trust us... listen to our customers
            </p>
            <h1 style={{ fontSize: "12vw", lineHeight: "10vw" }}>
              <i>our customers</i>
            </h1>
            <p className="text-lg text-right mt-9"></p>
          </div>
        </div>
        <div className="fullpage text-4xl font-mono text-center">
          <p className="absolute animate-ping left-0 top-1/4">
            "Within the first week we knew that we had struck goal with
            Altostruct"
          </p>
          <p className="absolute animate-ping left-2/3 top-3/4">
            "They got the whole stack covered!"
          </p>
          <p className="absolute animate-ping left-1/4 top-3/4">
            "They got the<br></br> whole stack covered!"
          </p>
          <p className="absolute animate-ping left-1/2 top-1/2">
            "They got the<br></br> whole stack covered!"
          </p>
          <p className="absolute animate-ping left-0 top-1/2">
            "Altostruct is just as<br></br> passionate <br></br> about this
            project as we are"
          </p>
          <p className="absolute animate-ping left-1/4 top-1/3">
            "They really love programming and <br></br>that shines threw in
            every that they do"
          </p>
          <p className="absolute text-2xl right-10 font-mono bottom-10">
            <mark>*some of the quotes are from our mothers</mark>
          </p>
        </div>
        <div className="scroll-snap">
          <div className="content pb-96">
            <div className="pb-96">
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32 ">
                <div className="float-left w-10/12">
                  <h1 className="text-7xl mb-10 font-bold">Tendium</h1>
                  <p className="text-gray-700 text-2xl">
                    Intelligent procurement watching system using AI to find
                    perfect matches for you. Altostruct helped build the
                    customer portal using GraphQL and Amazon web services.
                  </p>
                </div>
                <div className="float-left flex m-auto w-2/12">
                  <img
                    className="w-full"
                    src="https://tendium.ai/se/wp-content/uploads/sites/3/2020/05/Tendium_logo.svg"
                  ></img>
                </div>
              </div>
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32 ">
                <div className="float-left w-10/12">
                  <h1 className="text-7xl mb-10 font-bold">Foodfacts</h1>
                  <p className="text-gray-700 text-2xl">
                    Intelligent procurement watching system using AI to find
                    perfect matches for you. Altostruct helped build the
                    customer portal using GraphQL and Amazon web services.
                  </p>
                </div>
                <div className="float-left flex m-auto w-2/12">
                  <img
                    className="w-full"
                    src="https://images.squarespace-cdn.com/content/v1/5e1f7c9f5befaa48195e7825/1615794292296-8LL1XGQ1QXZH1SN0KS5S/ke17ZwdGBToddI8pDm48kP0L8Sp7uR8r-tv67D-_eZV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0pF-iG7-huG6Vk1ZMWheK73oFQ5L1c6PuyqM3piR2oKj6FE9aj_z8a04KUMQJPlJlg/FoodFacts-screens-white.png?format=1500w"
                  ></img>
                </div>
              </div>
              <div className="overflow-auto flex shadow-2xl p-10 hover:shadow-md mb-32  ">
                <div className="float-left w-10/12">
                  <h1 className="text-7xl mb-10 font-bold">Stella Polaris</h1>
                  <p className="text-gray-700 text-2xl">
                    Intelligent procurement watching system using AI to find
                    perfect matches for you. Altostruct helped build the
                    customer portal using GraphQL and Amazon web services.
                  </p>
                </div>
                <div className="float-left flex m-auto w-2/12">
                  <img
                    className="w-full"
                    src="https://i2.wp.com/stellapolaris.ai/wp-content/uploads/2018/12/Logo-v6-e1543856647483.png?fit=70%2C71&ssl=1"
                  ></img>
                </div>
              </div>
              <div className="overflow-auto flex  shadow-2xl p-10 hover:shadow-md">
                <div className="float-left w-10/12">
                  <h1 className="text-7xl mb-10 font-bold">Nrlyze</h1>
                  <p className="text-gray-700 text-2xl">
                    Intelligent procurement watching system using AI to find
                    perfect matches for you. Altostruct helped build the
                    customer portal using GraphQL and Amazon web services.
                  </p>
                </div>
                <div className="float-left flex m-auto w-2/12">
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
        </div>
        <div className="fullpage">
          <VisibilitySensor scrollDelay={1} partialVisibility>
            {({ isVisible }) => {
              if (isVisible) {
                return (
                  <div className="pb-10 mt-3 pt-10">
                    <div className="w-screen flex -mb-40">
                      <div className="w-2/5 m-auto">
                        <h1 className="text-8xl font-extrabold pb-3">
                          Our tech stack?
                        </h1>
                        <p>
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
        <div className="dark">
          <div className="fullpage">
            <div className="content">
              <div className="flex text-white">
                <div className="m-auto">
                  <h1 className="text-6xl font-extrabold">
                    Located in <br></br>central Stockholm
                  </h1>
                  <p>
                    Building you application right next to you. Make sure you
                    have the located where the towns{" "}
                  </p>
                </div>
              </div>
              <div className="absolute transform -translate-x-1/2 left-1/2 w-1/3 bg-red-200 bottom-32">
                <Img
                  className="m-auto"
                  style={{ width: "100%", maxHeight: "50vh" }}
                  fluid={query.Stockholm.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
          <div className="fullpage">
            <div>
              <div className="text-white  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className="text-8xl mb-10 font-extrabold">CONTACT US</h1>
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
