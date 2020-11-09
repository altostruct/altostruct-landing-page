import React from "react"
import { Typography, Row, Col, Divider } from "antd"
import SEO from "../components/seo"
import AWSLogo from "../components/aws-icon"
import Logo from "../components/logo"
import NodeLogo from "../components/node-icon"
import Footer from "../components/footer"
import "../styles/index.scss"
import ReactLogo from "../components/react-icon"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="fullscreen">
        <div className="container">
          <div className="content">
            <Row justify="center">
              <Col>
                <Logo></Logo>
              </Col>
            </Row>
            <Row justify="center">
              <Col>
                <Typography.Title type="secondary" level={4}>
                  page not found{" "}
                  <Link to="/">click here to go to main page</Link>
                </Typography.Title>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default IndexPage
