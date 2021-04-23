import { Col, Divider, Row, Typography } from "antd"
import Layout, { Content } from "antd/lib/layout/layout"
import React from "react"
import "antd/dist/antd.css"
import { Title } from "../components/Title"
import AtCoder from "../components/AtCoder"



// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Home() {
	return (
		<Layout>
			<Content>
				<Title text="Riku Adachi's Portfolio"></Title>
				<Row justify="center" style={{ paddingTop: "20px" }}>
					<Col span={20}>
						<div style={{
							textAlign: "center",
							backgroundColor: "lightgray",
							padding: "20px",
							height: "70vh",
							width: "100%",
							borderRadius: "10px"
						}}>
							<Row justify="center">
								<Typography.Title level={3}>Recent Activity</Typography.Title>
							</Row>
							<Row justify="space-around">
								<Col span={10}>
									<Divider>AtCoder</Divider>
									<AtCoder />
								</Col>
								<Col span={10}>
									<Divider>Twitter</Divider>
									<a className="twitter-timeline" data-width="400" data-height="400" href="https://twitter.com/Pretend16474300?ref_src=twsrc%5Etfw">Tweets by Pretend16474300</a>
									<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
				<Row justify="center" style={{ marginTop: "20px", marginBottom: "40px" }}>
					<Col span={20}>
						<Row justify="space-between">
							<Col span={11} style={{ textAlign: "center" }}>
								<div style={{
									textAlign: "center",
									backgroundColor: "lightgray",
									padding: "20px",
									height: "20vh",
									width: "100%",
									borderRadius: "10px"
								}}>
									<Typography.Title level={3}>更新履歴</Typography.Title>
								</div>
							</Col>
							<Col span={11} style={{ textAlign: "center"}}>
								<div style={{
									textAlign: "center",
									backgroundColor: "lightgray",
									padding: "20px",
									height: "20vh",
									width: "100%",
									borderRadius: "10px"
								}}>
									<Typography.Title level={3}>Contact</Typography.Title>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Content>
		</Layout>
	)
}
