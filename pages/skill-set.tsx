import { Col, Layout, Row, Table, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { ReactChild } from "react";
import { Title } from "../components/Title";
import React from "react";
import { MyCell } from "../components/MyCell";

function Skills({ children }: { children: ReactChild }) {
  return (
    <Col
      xs={22}
      xl={7}
      style={{
        marginBottom: "40px",
      }}
    >
      <MyCell minHeight="60vh">{children}</MyCell>
    </Col>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function SkillSet() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Level",
      dataIndex: "level",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
  ];
  const frontData = [
    {
      name: "HTML/CSS",
      level: "★★★",
    },
    {
      name: "React",
      level: "★★",
      description: "インターンで使用",
    },
    {
      name: "Next.js",
      level: "★★",
      description: "インターンで使用",
    },
    {
      name: "TypeScript",
      level: "★★",
      description: "インターンで使用",
    },
    {
      name: "JavaScript",
      level: "★★",
    },
    {
      name: "Google Apps Script",
      level: "★★",
    },
  ];
  const backData = [
    {
      name: "Python",
      level: "★★★",
      description: "競プロ・機械学習で使用",
    },
    {
      name: "Django",
      level: "★★",
    },
    {
      name: "Ruby on Rails",
      level: "★★",
    },
    {
      name: "C++",
      level: "★",
    },
  ];
  const othersData = [
    {
      name: "Git",
      level: "★★",
    },
    {
      name: "Docker",
      level: "★",
    },
    {
      name: "基本情報技術者",
      level: "-",
    },
  ];
  return (
    <Layout>
      <Content>
        <Title text="Skill Set"></Title>
        <Typography.Paragraph style={{ textAlign: "center" }}>
          ★: 触ったことがある程度
          <br></br>
          ★★: リファレンスを見ながら利用可
          <br></br>
          ★★★: リファレンスなしでも利用可
        </Typography.Paragraph>
        <Row justify="space-around">
          <Skills>
            <div>
              <Typography.Title>Front End</Typography.Title>
              <Table
                columns={columns}
                dataSource={frontData}
                pagination={false}
                scroll={{ y: 240 }}
              ></Table>
            </div>
          </Skills>

          <Skills>
            <div>
              <Typography.Title>Back End</Typography.Title>
              <Table
                columns={columns}
                dataSource={backData}
                pagination={false}
                scroll={{ y: 240 }}
              ></Table>
            </div>
          </Skills>

          <Skills>
            <div>
              <Typography.Title>Others</Typography.Title>
              <Table
                columns={columns}
                dataSource={othersData}
                pagination={false}
                scroll={{ y: 240 }}
              ></Table>
            </div>
          </Skills>
        </Row>
      </Content>
    </Layout>
  );
}
