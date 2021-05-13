import { Col, Divider, Layout, Row, Timeline, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import Paragraph from "antd/lib/typography/Paragraph";
import { motion } from "framer-motion";
import { MyCell } from "../components/MyCell";
import { Title } from "../components/Title";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ ease: "backOut", duration: 1 }}
      exit={{ x: "100vw" }}
    >
      <Layout>
        <Content>
          <Title text="About Me"></Title>
          <Row justify="center">
            <Col xs={22} lg={16}>
              <MyCell minHeight="70vh">
                <>
                  <Divider>略歴</Divider>
                  <Timeline mode="left">
                    <Timeline.Item label="2001-03-24">生まれる</Timeline.Item>
                    <Timeline.Item label="2013-04">
                      渋谷教育学園幕張中学校 入学
                    </Timeline.Item>
                    <Timeline.Item label="2019-03">
                      渋谷教育学園幕張高等学校 卒業
                    </Timeline.Item>
                    <Timeline.Item label="2019-04">
                      東京大学文科二類 入学
                    </Timeline.Item>
                    <Timeline.Item label="2021-04">
                      東京大学経済学部 進学
                    </Timeline.Item>
                    <Timeline.Item label="2021-04">
                      株式会社Philductにてインターン開始
                    </Timeline.Item>
                  </Timeline>
                  <Divider>自己紹介</Divider>
                  <Typography>
                    <Paragraph
                      style={{ textAlign: "left", padding: "0 20px 0" }}
                    >
                      2001年生まれ。東京都出身。中学受験で渋谷教育学園幕張中学校に入学後、受験勉強の末東大に合格。
                    </Paragraph>
                    <Paragraph
                      style={{ textAlign: "left", padding: "0 20px 0" }}
                    >
                      大学では水泳部競泳陣に所属し、毎日練習に励んでいます。専門は個人メドレーです。選手としての活動の他、主務として部内の諸業務やOB会の方々との連絡窓口も行っています。
                    </Paragraph>
                    <Paragraph
                      style={{ textAlign: "left", padding: "0 20px 0" }}
                    >
                      プログラミングに出会ったのは大学1年生の時で、授業でPythonに触れたのがきっかけでした。
                      その後Web系を学び、2020年の自粛期間ではWeb制作に明け暮れました。また、Webの他にも、競技プログラミングや機械学習にも興味があります。
                    </Paragraph>
                    <Paragraph
                      style={{ textAlign: "left", padding: "0 20px 0" }}
                    >
                      大学は経済学部ですが、プログラミングが好きでそれを通じて社会に貢献したいという思いが強いので、エンジニアでの就職を考えています。まだまだ未熟なので、貪欲に学んで技術を身につけていきたいです！
                    </Paragraph>
                  </Typography>
                </>
              </MyCell>
            </Col>
          </Row>
        </Content>
      </Layout>
    </motion.div>
  );
}
