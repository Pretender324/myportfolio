import { Col, Divider, Row, Typography } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import "antd/dist/antd.css";
import { Title } from "../components/Title";
import AtCoder from "../components/AtCoder";
import { Timeline } from "react-twitter-widgets";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Home() {
  return (
    <Layout>
      <Content>
        <Title text="Riku Adachi's Portfolio"></Title>
        <Row justify="center" style={{ paddingTop: "20px" }}>
          <Col span={20}>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "lightgray",
                padding: "20px",
                minHeight: "70vh",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Row justify="center">
                <Typography.Title level={3}>Recent Activity</Typography.Title>
              </Row>
              <Row justify="space-around">
                <Col xs={24} md={10}>
                  <Divider>AtCoder</Divider>
                  <AtCoder />
                </Col>
                <Col xs={24} md={10}>
                  <Divider>Twitter</Divider>
                  <Timeline
                    dataSource={{
                      sourceType: "profile",
                      screenName: "Pretend16474300",
                    }}
                    options={{
                      width: "300",
                      height: "400",
                      theme: "dark",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <Col span={20}>
            <Row justify="space-between">
              <Col
                xs={24}
                md={11}
                style={{ textAlign: "center", marginBottom: "40px" }}
              >
                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "lightgray",
                    padding: "20px",
                    height: "20vh",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography.Title level={3}>Change Log</Typography.Title>
                  <Divider>v2.0</Divider>
                  <Typography.Text>
                    Next.jsにリプレイス (2021/04/24)
                  </Typography.Text>
                </div>
              </Col>
              <Col xs={24} md={11} style={{ textAlign: "center" }}>
                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "lightgray",
                    padding: "20px",
                    height: "20vh",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <Typography.Title level={3}>Contact</Typography.Title>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
