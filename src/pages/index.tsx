import React from "react"
import { Typography, Row, Col, Divider, Card } from "antd"
import SEO from "../components/seo"
import Logo from "../components/logo"
import Footer from "../components/footer"
import "../styles/index.scss"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import TextLoop from "react-text-loop"
import Rotate from "react-reveal/Rotate"
import { ScrollDown } from "../components/scoll-down"
import AltostructAngleLogo, {
  AltostructAngleCololessLogo,
} from "../components/altostruct-angle-icon"
import { Topbar } from "../components/topbar"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query ContactImage {
      ContactImage: file(relativePath: { eq: "images/contact.jpg" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CloudImage: file(relativePath: { eq: "images/cloud.jpg" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SwedishFlag: file(relativePath: { eq: "images/swedish-flag.png" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      GraphQL: file(relativePath: { eq: "images/graphql.png" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      CodeImage: file(relativePath: { eq: "images/code-image.png" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Topbar></Topbar>
      <ScrollDown></ScrollDown>
      <div className="fullscreen">
        <div
          style={{
            marginTop: "50vh",
          }}
        >
          <Row justify="center" align="middle">
            <Col span={24} style={{ textAlign: "center" }}>
              <Logo></Logo>
            </Col>
            <Col span={24} style={{ textAlign: "center" }}>
              <Typography.Title type="secondary" level={4}>
                web and cloud consulting
              </Typography.Title>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container" style={{ minHeight: "20vh" }}>
        <div
          className="content"
          style={{ marginBottom: "15vh", minHeight: "20vh" }}
        >
          <Row align="middle" gutter={[50, 50]} justify="space-between">
            <Col xs={{ order: 2, span: 24 }} md={{ order: 2, span: 12 }}>
              <Typography.Title type="secondary" className="big-text" level={4}>
                <span>Vi bygger</span>
                <TextLoop
                  interval={1000}
                  children={["React", "AWS", "Sites", "IOS", "GraphQL"]}
                />
              </Typography.Title>
              <Typography.Text className="paragraph">
                Vi är några webbutvecklare med inriktning AWS och har kontor i
                Stockholm. Altostruct består av:<br></br>
                <br></br>
                <ul>
                  <li className="paragraph">React utvecklare</li>
                  <li className="paragraph">Cloud konsulter</li>
                  <li className="paragraph">UX/UI designers</li>
                </ul>
              </Typography.Text>
            </Col>
            <Col xs={{ order: 1, span: 24 }} md={{ order: 2, span: 12 }}>
              <Fade>
                <Rotate top right>
                  <AltostructAngleCololessLogo
                    style={{
                      marginRight: "10%",
                      width: "80%",
                      maxWidth: "100vh",
                      float: "right",
                    }}
                  ></AltostructAngleCololessLogo>
                </Rotate>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container section">
        <div className="content ">
          <Row align="top" justify="center">
            <Col span={13}>
              <Typography.Title style={{ textAlign: "center" }}>
                Vilka är vi?
              </Typography.Title>
            </Col>
            <Col md={15} sm={24}>
              <Typography.Paragraph
                style={{
                  fontSize: "4vh",
                  textAlign: "center",
                }}
              >
                Vi på altostruct hjälper dig att bygga din applikation med hjälp
                av det senaste inom cloud och webbteknologi. Vi ser till att du
                får en framtidssäker och kostnadseffektiv produkt.
                <br></br>
                <br></br>
                Tveka inte att kontakta oss på <br></br>
                <a href="mailto: info@altostruct.se">info@altostruct.se</a>
              </Typography.Paragraph>
              <Divider></Divider>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container section">
        <div className="content">
          <Row gutter={[30, 30]} justify="center" align="middle">
            <Col xs={{ order: 2, span: 24 }} md={{ order: 2, span: 12 }}>
              <Fade left>
                <Typography.Title style={{ fontSize: "5vh" }}>
                  We have developers!
                </Typography.Title>
                <Typography.Paragraph className="paragraph">
                  Behöver du utvecklare? Våra medarbetare är snabba och flexibla
                  och kan hjälpa dig med alla typer av projekt.
                </Typography.Paragraph>
              </Fade>
            </Col>
            <Col xs={{ order: 1, span: 24 }} md={{ order: 2, span: 12 }}>
              <Fade right>
                <Img
                  style={{ width: "100%", maxHeight: "50vh" }}
                  fluid={query.CodeImage.childImageSharp.fluid}
                />
              </Fade>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container section">
        <div className="content">
          <Row gutter={[30, 30]} justify="center" align="middle">
            <Col xs={{ order: 1, span: 24 }} md={{ order: 2, span: 12 }}>
              <Fade left>
                <Img
                  style={{ width: "100%", maxHeight: "50vh" }}
                  fluid={query.CloudImage.childImageSharp.fluid}
                />
              </Fade>
            </Col>
            <Col xs={{ order: 2, span: 24 }} md={{ order: 2, span: 12 }}>
              <Fade right>
                <Typography.Title style={{ fontSize: "5vh" }}>
                  We love the cloud
                </Typography.Title>
                <Typography.Paragraph className="paragraph">
                  Vi älskar molnet! Vi kan hjälpa dig att snabbt få upp en
                  fungerande prototyp. Behöver du en helhetslösning? Vi hjälper
                  till från idéstadiet ända fram till slutprodukten.
                </Typography.Paragraph>
              </Fade>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container section">
        <div className="content">
          <Row gutter={[30, 40]} justify="center" align="middle">
            <Col xs={{ order: 2, span: 24 }} md={{ order: 2, span: 12 }}>
              <Fade left>
                <Typography.Paragraph style={{ fontSize: "2vh" }}>
                  Kontakta oss på email
                </Typography.Paragraph>
                <Typography.Title style={{ fontSize: "5vh" }}>
                  info<wbr></wbr>@<wbr></wbr>altostruct.se
                </Typography.Title>
              </Fade>
            </Col>
            <Col xs={{ order: 1, span: 24 }} md={{ order: 2, span: 12 }}>
              <Fade right>
                <Img
                  style={{ width: "100%" }}
                  fluid={query.ContactImage.childImageSharp.fluid}
                />
              </Fade>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container section">
        <div className="content">
          <Row
            gutter={[40, 60]}
            justify="center"
            style={{ marginBottom: "20vh" }}
            align="middle"
          >
            <Col sm={16} style={{ display: "flex" }}>
              <Fade left>
                <div style={{ margin: "auto" }}>
                  <Typography.Title className="big-text">
                    Our customers
                  </Typography.Title>
                </div>
              </Fade>
            </Col>
            <Col sm={16}>
              <Card
                hoverable
                className="hover-card"
                onClick={() => {
                  window.open("https://www.foodfacts.se/", "_window")
                }}
                bordered={false}
              >
                <Typography.Title style={{ fontSize: "5vh" }}>
                  Foodfacts
                </Typography.Title>
                <Typography.Paragraph style={{ fontSize: "3vh" }}>
                  Highly innovative food tech startup, bringing information
                  about food in a better and quicker format.
                </Typography.Paragraph>
              </Card>
            </Col>
            <Col sm={16}>
              <Card
                hoverable
                className="hover-card"
                onClick={() => {
                  window.open("http://tendium.com/", "_window")
                }}
                bordered={false}
              >
                <Typography.Title style={{ fontSize: "5vh" }}>
                  Tendium
                </Typography.Title>
                <Typography.Paragraph style={{ fontSize: "3vh" }}>
                  Intelligent procurement watching system using AI to find
                  perfect matches for you.
                </Typography.Paragraph>
              </Card>
            </Col>

            <Col sm={16}>
              <Card
                hoverable
                className="hover-card"
                onClick={() => {
                  window.open("https://stellapolaris.ai/", "_window")
                }}
                bordered={false}
              >
                <Typography.Title style={{ fontSize: "5vh" }}>
                  Stella Polaris
                </Typography.Title>
                <Typography.Paragraph style={{ fontSize: "3vh" }}>
                  Cloud-based AI system to predict diabetes
                </Typography.Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* <div className="container section">
        <div className="content">
          <Row gutter={[0, 150]}>
            <Col sm={24}>
              <Fade left cascade>
                <Typography.Paragraph
                  style={{
                    textAlign: "center",
                    fontSize: "2vh",
                  }}
                >
                  Get in contact
                </Typography.Paragraph>
                <Typography.Title
                  style={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  info<wbr></wbr>@<wbr></wbr>altostruct.se
                </Typography.Title>
                <Col>
                  <Row
                    gutter={{
                      xs: 10,
                      sm: 20,
                      md: 40,
                      lg: 100,
                      xl: 100,
                      xxl: 120,
                    }}
                    justify="center"
                    align="middle"
                  >
                    <Col span={6} style={{}}>
                      <AWSLogo></AWSLogo>
                    </Col>
                    <Col span={6} style={{}}>
                      <NodeLogo></NodeLogo>
                    </Col>
                    <Col span={6}>
                      <ReactLogo></ReactLogo>
                    </Col>
                  </Row>
                </Col>
              </Fade>
            </Col>
          </Row>
        </div>
      </div> */}
      <div className="container section">
        <div className="content">
          <Row gutter={[20, 80]} justify="center" align="middle">
            <Col sm={12}>
              <Fade left cascade>
                <Typography.Paragraph
                  style={{
                    textAlign: "center",
                    height: "2.5vh",
                    fontSize: "2.5vh",
                  }}
                >
                  located in
                </Typography.Paragraph>
                <Typography.Title underline style={{ textAlign: "center" }}>
                  Stockholm, Sweden
                </Typography.Title>
                <Img
                  style={{
                    width: "20vh",
                    minHeight: "20vh",
                    margin: "auto",
                    borderRadius: "100%",
                  }}
                  fluid={query.SwedishFlag.childImageSharp.fluid}
                />
              </Fade>
            </Col>

            <Col sm={12}>
              <Fade left cascade>
                <Typography.Paragraph
                  style={{
                    textAlign: "center",
                    height: "2.5vh",
                    fontSize: "2vh",
                  }}
                >
                  mainly works with
                </Typography.Paragraph>
                <Typography.Title underline style={{ textAlign: "center" }}>
                  AWS, React, GraphQL <br></br> and NodeJS
                </Typography.Title>
                <Img
                  style={{
                    width: "20vh",
                    minHeight: "20vh",
                    margin: "auto",
                    borderRadius: "100%",
                  }}
                  fluid={query.GraphQL.childImageSharp.fluid}
                />
              </Fade>
            </Col>
          </Row>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default IndexPage
