import { Col, Layout, Row, Table, Typography } from "antd"
import { Content } from "antd/lib/layout/layout"
import { ReactChild } from "react"
import { Title } from "../components/Title"

function Skills({children}: {children: ReactChild}) {
    return (
        <div style={{
            textAlign: "center",
            backgroundColor: "lightgray",
            padding: "20px",
            height: "70vh",
            width: "100%",
            borderRadius: "10px"
        }}>{children}</div>
    )
}

export default function SkillSet() {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Level',
            dataIndex: 'level'
        }
    ]
    const frontData = [
        {
            name: 'HTML/CSS',
            level: '★★★'
        },
        {
            name: 'React',
            level: '★★★'
        },
        {
            name: 'Next.js',
            level: '★★★'
        },
        {
            name: 'TypeScript',
            level: '★★★'
        },
        {
            name: 'JavaScript',
            level: '★★★'
        },
        {
            name: 'Google Apps Script',
            level: '★★★'
        }
    ]
    const backData = [
        {
            name: 'Python',
            level: '★★★'
        },
        {
            name: 'Django',
            level: '★★★'
        },
        {
            name: 'Ruby on Rails',
            level: '★★★'
        },
        {
            name: 'C++',
            level: '★★★'
        }
    ]
    const othersData = []
    return (
        <Layout>
            <Content>
                <Title text="Skill Set"></Title>
                <Row justify="space-around">
                    <Col span={6}>
                        <Skills>
                            <div>
                                <Typography.Title>Front End</Typography.Title>
                                <Table columns={columns}　dataSource={frontData} pagination={false}>

                                </Table>
                            </div>
                        </Skills>
                    </Col>
                    <Col span={6}>
                        <Skills>
                            <div>
                                <Typography.Title>Back End</Typography.Title>
                                <Table columns={columns} dataSource={backData} pagination={false}>

                                </Table>
                            </div>
                        </Skills>
                    </Col>
                    <Col span={6}>
                        <Skills>
                            <div>
                                <Typography.Title>Others</Typography.Title>
                                <Table columns={columns} dataSource={othersData} pagination={false}>

                                </Table>
                            </div>
                        </Skills>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}