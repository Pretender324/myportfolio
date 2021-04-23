import { Card, Col, Empty, Layout, Row, Tag, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { Title } from "../components/Title";
import { Language } from "../entities/works";

function LanguageTags({languages}: {languages: Language[]}) {
    return (
        <div style={{marginTop: "10px"}}>
            {languages.map((l) => (
                <Tag color={l.color}>{l.name}</Tag>
            ))} 
        </div>
    )
}

export default function Works() {
    const { Meta } = Card

    return (
        <Layout>
            <Content>
                <Title text="Works"></Title>
                <Typography.Paragraph style={{textAlign: "center"}}>
                    私がこれまで作ってきた作品を紹介します。
                </Typography.Paragraph>
                <Row justify="space-between">
                    <Col span={2} />
                    <Col span={6}>
                        <Card hoverable cover={<img alt="example" src="howtoteach.png" style={{height: "200px"}}/>} style={{height: "360px"}}>
                            <Meta title="How to Teach" description="初めて作ったWebアプリです。塾講師のバイトの悩みを共有する、という内容です。" />
                            <LanguageTags languages={[
                                {
                                    name: "HTML/CSS",
                                    color: "orange",
                                }, {
                                    name: "JavaScript",
                                    color: "purple",
                                }, {
                                    name: "Ruby on Rails",
                                    color: "red",
                                }]}
                            ></LanguageTags>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card hoverable cover={<Empty style={{height: "160px", marginTop: "40px"}}/>} style={{height: "360px"}}>
                            <Meta title="Riku Adachi's Portfolio" description="このポートフォリオです。自己紹介のために作りました。" />
                            <LanguageTags languages={[
                                {
                                    name: "HTML/CSS",
                                    color: "orange",
                                }, {
                                    name: "TypeScript",
                                    color: "blue",
                                }, {
                                    name: "Next.js",
                                    color: "purple",
                                }]}
                            ></LanguageTags>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card hoverable cover={<Empty style={{height: "160px", marginTop: "40px"}}/>} style={{height: "360px"}}>
                            <Meta title="Swistory(製作中)" description="水泳の練習メニューを記録するアプリです。" />
                            <LanguageTags languages={[]}
                            ></LanguageTags>
                        </Card>
                    </Col>
                    <Col span={2} />
                </Row>
            </Content>
        </Layout>
    )
}