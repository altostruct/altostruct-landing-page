import React from "react"
import { Typography, Row, Col } from "antd"
import AltostructAngleLogo from "../components/altostruct-angle-icon"

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <Row gutter={[80, 60]} align="middle">
          <Col xs={12} sm={12} md={24} lg={12} style={{ display: "flex" }}>
            <AltostructAngleLogo
              style={{ width: "50%", margin: "auto" }}
            ></AltostructAngleLogo>
          </Col>

          <Col xs={12} sm={12} md={24} lg={12}>
            <Typography.Title level={4}>
              <span style={{ fontWeight: 100 }}>Get in touch </span>
              <br></br>info@altostruct.se
            </Typography.Title>
            <Typography.Title level={4}>
              <span style={{ fontWeight: 100 }}>Address </span>
              <br></br>
              Oskarsvägen 61, 181 56 Stockholm
            </Typography.Title>
          </Col>
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
