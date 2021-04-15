import { Col, Row, Typography } from 'antd'
import Layout, { Content, Header } from 'antd/lib/layout/layout'
import React from 'react'


export default function Home() {
  return (
    <Layout style={{
      padding: "24px",
      alignContent: "center",
    }}>
      <Header>
        Portfolio
      </Header>
      <Content>
        <Row justify="center">
          <Col span={12} offset={6} style={{ textAlign: "center" }}>
            <Typography.Title>Riku Adachi's Portfolio</Typography.Title>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
