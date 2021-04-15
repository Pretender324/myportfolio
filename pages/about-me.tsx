import { Col, Divider, Layout, Row, Timeline } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Title } from "../components/Title";

export default function AboutMe() {
    return (
        <Layout>
            <Content>
                <Title text="About Me"></Title>
                <Row justify="center">
                    <Col span={12}>
                        <div style={{
                            textAlign: "center",
                            backgroundColor: "lightgray",
                            padding: "20px",
                            height: "70vh",
                            width: "100%",
                            borderRadius: "10px"
                        }}>
                            <Divider>略歴</Divider>
                            <Timeline mode="left">
                                <Timeline.Item label="2001-03-24">生まれる</Timeline.Item>
                                <Timeline.Item label="2013-04">渋谷教育学園幕張中学校 入学</Timeline.Item>
                                <Timeline.Item label="2019-03">渋谷教育学園幕張高等学校 卒業</Timeline.Item>
                                <Timeline.Item label="2019-04">東京大学文科二類 入学</Timeline.Item>
                                <Timeline.Item label="2021-04">東京大学経済学部 進学</Timeline.Item>
                                <Timeline.Item label="2021-04">株式会社Philductにてインターン開始</Timeline.Item>
                            </Timeline>
                            <Divider>自己紹介</Divider>
                        </div>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}