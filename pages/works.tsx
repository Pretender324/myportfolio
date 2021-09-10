import { Card, Col, Empty, Layout, Row, Tag, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { motion } from "framer-motion";
import { ReactChild } from "react";
import { Title } from "../components/Title";
import { Language } from "../entities/works";

function LanguageTags({ languages }: { languages: Language[] }) {
  return (
    <div style={{ marginTop: "10px" }}>
      {languages.map((l) => (
        <Tag color={l.color}>{l.name}</Tag>
      ))}
    </div>
  );
}

function WorkContent({ children }: { children: ReactChild }) {
  return (
    <Col xs={24} md={16} lg={14} xl={6} style={{ marginBottom: "40px" }}>
      {children}
    </Col>
  );
}

export default function Works() {
  const { Meta } = Card;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "backOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <Content>
          <Title text="Works"></Title>
          <Typography.Paragraph style={{ textAlign: "center" }}>
            私がこれまで作ってきた作品を紹介します。
          </Typography.Paragraph>
          <Row justify="space-around">
            <WorkContent>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="howtoteach.png"
                    style={{ height: "200px" }}
                  />
                }
                style={{ height: "360px" }}
              >
                <Meta
                  title="How to Teach"
                  description="初めて作ったWebアプリです。塾講師のバイトの悩みを共有する、という内容です。"
                />
                <LanguageTags
                  languages={[
                    {
                      name: "HTML/CSS",
                      color: "orange",
                    },
                    {
                      name: "JavaScript",
                      color: "purple",
                    },
                    {
                      name: "Ruby on Rails",
                      color: "red",
                    },
                  ]}
                ></LanguageTags>
              </Card>
            </WorkContent>
            <WorkContent>
              <Card
                hoverable
                cover={
                  <img
                    alt="example"
                    src="myportfolio.png"
                    style={{ height: "200px" }}
                  />
                }
                style={{ height: "360px" }}
              >
                <Meta
                  title="Riku Adachi's Portfolio"
                  description="このポートフォリオです。自己紹介のために作りました。"
                />
                <LanguageTags
                  languages={[
                    {
                      name: "HTML/CSS",
                      color: "orange",
                    },
                    {
                      name: "TypeScript",
                      color: "blue",
                    },
                    {
                      name: "Next.js",
                      color: "purple",
                    },
                  ]}
                ></LanguageTags>
              </Card>
            </WorkContent>
            <WorkContent>
              <Card
                hoverable
                cover={
                  <Empty
                    style={{
                      margin: "0",
                    }}
                    imageStyle={{ height: "170px", lineHeight: "170px" }}
                  />
                }
                style={{ height: "360px" }}
              >
                <Meta
                  title="Nishoku-shita(非公開)"
                  description="部活の出席管理アプリです。"
                />
                <LanguageTags
                  languages={[
                    {
                      name: "TypeScript",
                      color: "blue",
                    },
                    {
                      name: "Next.js",
                      color: "purple",
                    },
                    {
                      name: "Node.js",
                      color: "yellow",
                    },
                    {
                      name: "GraphQL",
                      color: "pink",
                    },
                    {
                      name: "MySQL",
                      color: "blue",
                    },
                    {
                      name: "AWS",
                      color: "orange",
                    },
                  ]}
                ></LanguageTags>
              </Card>
            </WorkContent>
          </Row>
        </Content>
      </Layout>
    </motion.div>
  );
}
