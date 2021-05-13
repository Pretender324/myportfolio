import { Col, Divider, Row, Typography } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import { Title } from "../components/Title";
import AtCoder from "../components/AtCoder";
import { Timeline } from "react-twitter-widgets";
import { MyCell } from "../components/MyCell";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <Content>
          <Title text="Riku Adachi's Portfolio"></Title>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{
              y: 0,
            }}
            transition={{
              ease: "anticipate",
              duration: 2,
            }}
          >
            <Row justify="center" style={{ paddingTop: "20px" }}>
              <Col span={20}>
                <MyCell minHeight="70vh">
                  <>
                    <Row justify="center">
                      <Typography.Title level={3}>
                        Recent Activity
                      </Typography.Title>
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
                  </>
                </MyCell>
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
                    <MyCell minHeight="20vh">
                      <>
                        <Typography.Title level={3}>
                          Change Log
                        </Typography.Title>
                        <Divider>v2.0</Divider>
                        <Typography.Text>
                          Next.jsにリプレイス (2021/04/24)
                        </Typography.Text>
                      </>
                    </MyCell>
                  </Col>
                  <Col xs={24} md={11} style={{ textAlign: "center" }}>
                    <MyCell minHeight="20vh">
                      <Typography.Title level={3}>Contact</Typography.Title>
                    </MyCell>
                  </Col>
                </Row>
              </Col>
            </Row>
          </motion.div>
        </Content>
      </Layout>
    </motion.div>
  );
}
