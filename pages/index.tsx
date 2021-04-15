import { Col, Divider, Row, Typography } from 'antd'
import Layout, { Content } from 'antd/lib/layout/layout'
import React from 'react'
import 'antd/dist/antd.css';
import { Title } from '../components/Title';
import { AtCoder } from '../components/AtCoder';


export default function Home() {
  return (
    <Layout>
      <Content>
        <Title text="Riku Adachi's Portfolio"></Title>
        <Row justify="center" style={{paddingTop: "20px"}}>
          <Col span={16}>
            <Row justify="space-around">
              <Col span={10}>
                <div style={{
                  textAlign: "center",
                  backgroundColor: "lightgray",
                  padding: "20px",
                  height: "70vh",
                  width: "100%",
                  borderRadius: "10px"
                }}>
                  <Typography>Recent Activity</Typography>
                  <Divider>AtCoder</Divider>
                  <AtCoder/>
                  <Divider>Twitter</Divider>
                </div>
              </Col>
              <Col span={10}>
                <Row>
                  <Col span={24} style={{ textAlign: "center" }}>
                    <div style={{
                      textAlign: "center",
                      backgroundColor: "lightgray",
                      padding: "20px",
                      height: "40vh",
                      width: "100%",
                      borderRadius: "10px"
                    }}>
                      <Typography>更新履歴</Typography>
                    </div>
                    
                  </Col>
                </Row>
                <Row>
                  
                  <Col span={24} style={{ textAlign: "center"}}>
                    <div style={{
                      textAlign: "center",
                      backgroundColor: "lightgray",
                      padding: "20px",
                      marginTop: "5vh",
                      height: "25vh",
                      width: "100%",
                      borderRadius: "10px"
                    }}>
                      <Typography>Contact</Typography>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
