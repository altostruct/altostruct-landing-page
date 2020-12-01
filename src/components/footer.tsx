import React from "react"
import { Typography, Row, Col, Divider } from "antd"
import AltostructAngleLogo from "../components/altostruct-angle-icon"

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <Row gutter={[50, 50]} align="middle" justify="center">
          <Col xs={24} sm={24} md={24} lg={12} style={{ display: "flex" }}>
            <AltostructAngleLogo
              style={{ width: "100%", margin: "auto" }}
            ></AltostructAngleLogo>
          </Col>

          <Col xs={24} md={0}>
            <Divider></Divider>
          </Col>

          {/* <Col xs={24} sm={24} md={24} lg={12}>
            <Typography.Title>
              <b style={{ fontWeight: 100 }}>Get in touch </b>
              <br></br>info@altostruct.se
            </Typography.Title>
            <Typography.Title>
              <b style={{ fontWeight: 100 }}>Address </b>
              <br></br>
              Oskarsvägen 61, 181 56 Stockholm
            </Typography.Title>
          </Col> */}
        </Row>
        {/* <Row gutter={[80, 0]} align="middle">
          <Col span={12}>
            <div style={{ display: "flex" }}>
              <AltostructAngleLogo
                style={{ width: "25%", margin: "auto" }}
              ></AltostructAngleLogo>
            </div>
          </Col>
          <Col span={12}>
            <Typography.Title>
              <span style={{ fontWeight: 100 }}>Get in touch </span>
              <br></br>info@altostruct.se
            </Typography.Title>
          </Col>
        </Row>
      </div> */}
      </div>
    </div>
  )
}

export default Footer
