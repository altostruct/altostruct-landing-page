import React from "react"
import { Typography, Row, Col, Divider } from "antd"
import SEO from "../components/seo"
import Logo from "../components/logo"
import "../styles/index.scss"

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
                  web and cloud consult
                </Typography.Title>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div>
        <div className="container section">
          <div className="content">
            <Row align="top">
              <Col span={24}>
                <Divider></Divider>
              </Col>
            </Row>
            <Row align="bottom">
              <Col sm={24}>
                <Typography.Title
                  type="secondary"
                  style={{ textAlign: "center", height: "0px" }}
                  level={4}
                >
                  located in
                </Typography.Title>
                <Typography.Title underline style={{ textAlign: "center" }}>
                  Stockholm, Sweden
                </Typography.Title>
              </Col>
            </Row>
          </div>
        </div>
        <div className="container section">
          <div className="content">
            <Row>
              <Col sm={24}>
                <Typography.Title
                  type="secondary"
                  style={{ textAlign: "center", height: "0px" }}
                  level={4}
                >
                  we work with
                </Typography.Title>
                <Typography.Title underline style={{ textAlign: "center" }}>
                  AWS, React and NodeJS
                </Typography.Title>
              </Col>
            </Row>
          </div>
        </div>
        <div className="container section">
          <div className="content">
            <Row>
              <Col sm={24}>
                <Typography.Title
                  type="secondary"
                  style={{ textAlign: "center", height: "0px" }}
                  level={4}
                >
                  Get contact
                </Typography.Title>
                <Typography.Title underline style={{ textAlign: "center" }}>
                  erik.rehn<wbr></wbr>@<wbr></wbr>altostruct.se
                </Typography.Title>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
